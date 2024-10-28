import React from "react";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";

const LandingPage = () => {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <TapeSection />
    </div>
  );
};

export default LandingPage;
