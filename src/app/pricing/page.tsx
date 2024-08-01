"use client";

import PricingPlans from "@/components/Pricing/PricingPlans";
import Testimonials from "@/components/Pricing/Testimonials2";
import CtaSection from "@/components/Pricing/PricingCTA";
import Navbar from "@/components/Navbar";

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-base-100">
      <Navbar />
      <section className="py-12 bg-base-200">
        <div className="container mx-auto pt-16">
          <PricingPlans />
          <Testimonials />
          <CtaSection />
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
