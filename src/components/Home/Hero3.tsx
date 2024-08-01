"use client";

import { useState } from 'react';

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="hero-content flex-col lg:flex-row lg:items-center">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/500x500"
            className="max-w-xs lg:max-w-md rounded-lg shadow-2xl"
            alt="Illustration"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Innovative Solutions for Your Business
          </h1>
          <p className="py-6 text-white text-lg">
            Empower your business with cutting-edge technology and exceptional service. We offer tailored solutions to meet your unique needs.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary">Start Now</button>
            <button className="btn btn-outline btn-white">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
