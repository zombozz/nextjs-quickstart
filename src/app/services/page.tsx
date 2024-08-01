"use client";

import Navbar from "@/components/Navbar";
import ServiceOverview from "@/components/Services/ServicesOverview";
import ServiceList from "@/components/Services/ServicesList";
import CaseStudies from "@/components/Services/CaseStudies";
import ServicesCTA from "@/components/Services/ServicesCTA";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <main className="">
      <Navbar />
      <div className="pt-16">
        <ServiceOverview />
        <ServiceList />
        <CaseStudies />
        <ServicesCTA />
        <Footer />
      </div>
    </main>
  );
};

export default ServicesPage;
