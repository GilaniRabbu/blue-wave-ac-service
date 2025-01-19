"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <Image
              src="/profile.png"
              alt="Profile"
              width={80}
              height={80}
              className="object-cover block rounded-full"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase">
            Toufiq Gilani Rabbu.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-indigo-500 dark:text-indigo-400">
            <TypeAnimation
              sequence={[
                "Web Dev.",
                2000,
                "Mern Dev.",
                2000,
                "Python Dev.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h2>
          <p className="text-base md:text-lg lg:text-xl w-full sm:w-[400px]">
            Explored the principles of typeface design and its impact on visual
            communication.
          </p>
          <div className="flex flex-col md:flex-row gap-5">
            <button className="hero-btn">Download CV</button>
            <button className="hero-btn">Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
