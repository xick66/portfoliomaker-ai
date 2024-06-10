'use client';

import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';
import GridSection from '../components/GridSection';
import CardSection from '../components/CardSection';
import FAQSection from '../components/FAQSection';
import Testimonials from '../components/Testimonials';

export default function Index() {
  return (
    <>
      <Hero />
      <hr />
      <Content />
      <hr />
      <GridSection />
      <hr />
      <CardSection />
      <hr />
      <FAQSection />
      <hr />
      <Testimonials />
    </>
  );
}