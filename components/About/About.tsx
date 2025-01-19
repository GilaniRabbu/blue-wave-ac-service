import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";

const AboutSection = () => {
  return (
    <div className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <AnimatedWord
          text="AboutMe"
          className="text-center py-5 text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
        />
      </div>
    </div>
  );
};

export default AboutSection;
