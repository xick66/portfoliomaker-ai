"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-2 px-6 text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg";
const INACTIVE_ROUTE = "py-2 px-6 text-gray-300 hover:text-white transition duration-300 ease-in-out";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <span className="mr-4 text-gray-300">{session?.user?.name}</span>
        <button onClick={() => signOut()} className="bg-red-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Sign out</button>
      </>
    );
  }
  return (
    <button onClick={() => signIn()} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">Sign in</button>
  );
}

export default function NavMenu() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black bg-opacity-90 shadow-lg backdrop-filter backdrop-blur-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${scrolled ? 'from-indigo-400 to-purple-400' : 'from-white to-gray-300'}`}>
          PortfolioMaker.ai
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </Link>
          <Link href="/protected" className={pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            My Portfolios
          </Link>
          <Link href="/serverAction" className={pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Insights
          </Link>
          <Link href="/apiFromClient" className={pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            API Docs
          </Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}