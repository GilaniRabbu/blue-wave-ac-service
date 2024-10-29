import React from "react";
import HeroSection from "@/components/Hero/Hero";
import TapeSection from "@/components/Tape/Tape";
// import Header from "@/components/Header/Header";
// import FooterSection from "./../Footer/Footer";

const LandingPage = () => {
  return (
    <div className="relative">
      {/*<Header />*/}
      {/*<FooterSection />*/}
      <HeroSection />
      <TapeSection />
    </div>
  );
};

export default LandingPage;
