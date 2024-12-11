import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";

const Portfolio = () => {
  return (
    <div className="px-5 py-10">
      <AnimatedWord
        text="RealProjects"
        className="text-center text-slate-400 py-5 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
      />
    </div>
  );
};

export default Portfolio;
