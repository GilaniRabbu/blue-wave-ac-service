import React from "react";
import AnimatedWord from "@/components/Motion/AnimatedWord";
import { IconCloud } from "./IconCloud";

const Skills = () => {
  return (
    <div className="px-5 py-10">
      <AnimatedWord
        text="Tech&Skill"
        className="text-center text-slate-400 py-5 text-7xl sm:text-[4rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]"
      />
      <div className="relative size-full max-w-[1600px] mx-auto flex justify-center">
        <IconCloud
          containerProps={{
            className: "cursor-pointer bg-transparent mx-auto",
          }}
          canvasWidth={1600}
          iconSize={88}
          // bg-[#FAF7F2]
        />
      </div>
    </div>
  );
};

export default Skills;
