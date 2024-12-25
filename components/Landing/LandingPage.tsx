import React from "react";
import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";
import AboutSection from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import ThemeMode from "@/components/Theme/ThemeMode";

const LandingPage = () => {
  return (
    <div className="">
      <HeroSection />
      <TapeSection />
      <ThemeMode />
      <AboutSection />
      <Portfolio />
      <Skills />
    </div>
  );
};

export default LandingPage;
