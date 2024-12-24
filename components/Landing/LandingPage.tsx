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
      <TapeSection />
      <AboutSection />
      <Portfolio />
      <Skills />
    </div>
  );
};

export default LandingPage;
