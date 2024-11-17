import React from "react";
import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";
import AboutSection from "@/components/About/About";

const LandingPage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <TapeSection />
    </div>
  );
};

export default LandingPage;
