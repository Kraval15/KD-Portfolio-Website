import React from "react";
import { motion } from "framer-motion";
//importing different fonts from the styles file to use below
import { styles } from "../styles";
//file where we develop the computer 3JS model. All our 3JS models files are in the canvas folder
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    //h-screen means it will take up the entire screen and the below is for the purple hero-pattern background which is defined in the div in
    //the app.jsx file where this Hero component is called
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the below creates the purple circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* the below creates the line below the circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Kuldeep</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* adding the break when it is a bigger screen afterand no block if its a small screen */}
            A former engineering project manager in the Nuclear Energy industry,
            &nbsp;
            <br className="sm:block hidden" />
            looking to join the Software Development/Tech world
          </p>
        </div>
      </div>

      {/* below is the file where the computer model is rendered*/}
      <ComputersCanvas />
      {/* below uses framer motion to create a nice rounded animation that when clicked on will scroll down to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* motion.div is from framer motion which animates the y prpoerty to move 24 pixels down */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
