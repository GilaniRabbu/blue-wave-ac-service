"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="sora-300 relative overflow-hidden pt-[160px] pb-[80px] text-white bg-[#0F0715] dark:text-[#0F0715] dark:bg-white">
      <div className="container">
        <div className="flex items-center gap-14">
          <div className="md:w-2/5 hidden md:block">
            <div className="relative">
              <Image
                src="/profile.png"
                alt="Tayler's Portrait"
                width={440}
                height={440}
                className="object-cover w-[440px] h-[440px] block rounded-full border-2 border-[#2a1454]"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold">
              Md Toufiq Gilani Rabbu.
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8750f7] to-white">
              <TypeAnimation
                sequence={[
                  "Mern Developer",
                  2000,
                  "Web Developer",
                  2000,
                  "Web Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
            <div className="relative md:hidden mb-4">
              <Image
                src="/profile.png"
                alt="Tayler's Portrait"
                width={256}
                height={256}
                className="object-cover mx-auto w-[256px] h-[256px] block rounded-full border-2 border-[#2a1454]"
              />
            </div>
            <p className="text-base md:text-lg lg:text-xl text-white w-full max-w-[550px]">
              Explored the principles of typeface design and its impact on
              visual communication.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 border border-white rounded-full tracking-wider text-sm md:text-base font-medium">
                Download CV
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#8750f7] to-[#2a1454] rounded-full tracking-wider text-sm md:text-base font-medium">
                Let&apos;s Talk!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
