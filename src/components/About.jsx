import React from "react";
//used to tilt the information cards in about section
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
//the below imports the sectionWrapper function we made to standardize some of the styles, transition and formatting we want to apply to
//all our components
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  //creates a tilt card with animation to display the details from title and icon
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      //fade in takes direction, type, delay and duration for the arguments. the index*0.5 below helps give the animation of each
      //card coming in one by one.
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        //tilt options provided to the card
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        //the properties for the card
        className="bg-tertiary rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        {/* the icons on the card */}
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        {/* the title for the card */}
        <h3 className="text-white text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* textVariant is a framer motion function stored in the textVariant file in the motion file in the utils folder */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/* function below is also from motion file in utils folder and accepts 4 parameters , direction, type, delay, duration */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I dream big and have a goal oriented attitude. Over the past few years,
        I had a goal to learn software development and travel the world. I
        planned and worked hard at my last roles to be able to take time off
        this year to travel the world (see my travel adventures web application
        in projects section) and learn coding through bootcamps along the way. I
        am confident my attitude and my skills will make my career transition a
        success!
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an aspiring software developer with experience in JavaScript and
        Python, and knowledge in frameworks like React, Node.js, and Next.js.
        I'm a quick learner and through my previous work experience as an
        Engineering Project Manager, I am able to collaborate closely with teams
        and clients to deliver major projects and solve real-world problems. I
        look forward to continue to improve as a developer and apply all my
        interpersonal skills from my previous roles to help deliver value to my
        next company.
      </motion.div>

      <div className="mt-14 flex flex-wrap gap-10">
        {/* maps through the services array and creates a ServiceCard instance that we defined in above section of about.jsx file. Uses spread
        operator to create an array with title and icon variables which were part of the service array that we imported from index.js. Icon and title
        is passed as a prop to the ServiceCard function above*/}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
