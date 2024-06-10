import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="footer relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white">
            <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0 bg-[url('/footer-bg.svg')] bg-cover bg-center mix-blend-overlay"></div>
            </div>
            <div className="container mx-auto py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            PortfolioMaker.ai
                        </h3>
                        <p className="text-gray-300">Empowering the next generation of creators, one portfolio at a time.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-indigo-300">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link></li>
                            <li><Link href="/pricing" className="text-gray-300 hover:text-white transition duration-300">Pricing</Link></li>
                            <li><Link href="/blog" className="text-gray-300 hover:text-white transition duration-300">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-indigo-300">Support</h4>
                        <ul className="space-y-2">
                            <li><Link href="/faq" className="text-gray-300 hover:text-white transition duration-300">FAQs</Link></li>
                            <li><Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link></li>
                            <li><Link href="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-indigo-300">Community</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.989 4.388 10.955 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.668 4.533-4.668 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 22.955 24 17.989 24 12z"/>
                                </svg>
                                Facebook
                            </a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                                Twitter
                            </a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                GitHub
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <p className="text-sm text-gray-400">© 2024 PortfolioMaker.ai. All rights reserved.</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-300">Terms of Service</Link>
                        <span className="text-gray-500">|</span>
                        <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-300">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;