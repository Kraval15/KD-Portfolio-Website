//this file has all the animated technology balls to showcase the technologies we know
import React from "react";

//file where we develop the actual 3JS balls. All the 3JS models are in the canvas file
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
//has a list of technlogies and their associated icons so we can map over it and display them
import { technologies } from "../constants";

const Tech = () => {
  return (
    // flex-wrap is if the screen is too small they fall onto the next line
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
