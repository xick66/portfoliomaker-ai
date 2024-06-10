'use client';

import React from 'react';
import FlipSide from "./ui/flip-word";
const wordsToFlip = ["Engineer", "Designer", "Innovator", "Creator"];

const Hero = ({ flipWords }) => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      Transform Your Resume into a Stunning Portfolio
    </h1>
    <FlipSide words={wordsToFlip} />
    <p className="lead" data-testid="hero-lead">
      Use AI to create a professional portfolio website in minutes.
    </p>
    <button className="btn btn-primary btn-lg" data-testid="hero-cta">
      Upload your resume
    </button>
  </div>
);

export default Hero;