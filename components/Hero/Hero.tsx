import React from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src="/hero-img-1.png" alt="Profile" width={100} height={100} />
          <div className="px-4 py-1.5 inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex gap-2 items-center px-6 h-12 rounded-xl border border-white/15">
            <span className="font-semibold">Explore My Work</span>
            <FaArrowDown className="text-base" />
          </button>
          <button className="inline-flex gap-2 items-center px-6 h-12 rounded-xl border border-white bg-white text-gray-900">
            <span>😊</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
