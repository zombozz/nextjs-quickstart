"use client";

import { useState } from 'react';

const Hero = () => {
  return (
    <section
      className="hero min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://via.placeholder.com/1200x600')" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to Our Service</h1>
          <p className="mb-5">
            Discover the amazing features and benefits we offer. Join us today and take the first step towards a better experience.
          </p>
          <button className="btn btn-primary">Get Started Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
