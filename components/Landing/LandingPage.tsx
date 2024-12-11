import React from "react";
import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";
import AboutSection from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";

const LandingPage = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <Portfolio />
      <Skills />
      <TapeSection />
    </div>
  );
};

export default LandingPage;
