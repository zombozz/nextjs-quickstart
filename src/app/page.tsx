"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
// import Hero2 from "@/components/Home/Hero2";
// import Hero3 from "@/components/Home/Hero3";
import Features from "@/components/Home/Features";
import HowItWorks from "@/components/Home/HowItWorks";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/Home/CTA";
import AboutUs from "@/components/Home/AboutUs";
import FAQ from "@/components/Home/FAQ";
import DemoVideo from "@/components/Home/DemoVideo";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto">
        <Navbar />
        <Hero />
        {/* <Hero2 />
        <Hero3 /> */}
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <AboutUs />
        <DemoVideo />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
