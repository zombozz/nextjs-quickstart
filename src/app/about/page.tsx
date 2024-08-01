"use client";

import Navbar from "@/components/Navbar";
import AboutUsOverview from "@/components/About/AboutUsOverview";
import MissionValues from "@/components/About/MissionValues";
import Team from "@/components/About/Team";
import CompanyHistory from "@/components/About/CompanyHistory";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  return (
    <main>
        <Navbar />
        <div className="pt-16">
            <AboutUsOverview />
            <MissionValues />
            <Team />
            <CompanyHistory />
            <Footer />
        </div>
    </main>
  );
};

export default AboutUsPage;
