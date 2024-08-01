"use client";

import { useState } from 'react';

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://via.placeholder.com/400" className="max-w-sm rounded-lg shadow-2xl" alt="Hero Image" />
        <div>
          <h1 className="text-5xl font-bold">This is some Hero Text!</h1>
          <p className="py-6">
            This is an amazing hero section with some catchy tagline or description. Start exploring our features and services today!
          </p>
          <div className="flex gap-4">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">See Plans</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
