// frontend/components/LandingPage.jsx
'use client';
import React from 'react';
import Layout from './Layout';
import Hero from './Hero';
import Content from './Content';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <Layout>
      <Hero />
      <section className="value-proposition">
        <div className="container">
          <h2>Transform Your Resume into a Stunning Portfolio</h2>
          <p>
            With <strong>portfoliomaker.ai</strong>, you can effortlessly turn your resume into a beautiful portfolio website. Our AI-powered tool ensures that your portfolio stands out, showcasing your skills and achievements in the best possible light.
          </p>
        </div>
      </section>
      <section className="ai-powered">
        <div className="container">
          <h2>AI-Powered Excellence</h2>
          <p>
            Our advanced AI technology analyzes your resume and automatically generates a professional portfolio website. Save time and impress potential employers with a polished, personalized portfolio.
          </p>
        </div>
      </section>
      <Content />
      <Footer />
    </Layout>
  );
};

export default LandingPage;