import React from "react";
//used to tilt the information cards in about section
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, internet } from "../assets";

//the below imports the sectionWrapper function we made to standardize some of the styles, transition and formatting we want to apply to
//all our components
import { SectionWrapper } from "../hoc";
//has the info about the projects that we import from the constants folder
import { projects } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

//creates the project card with the information passed in the props
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  url,
}) => {
  return (
    //the index*0.5 below helps give the animation of each card coming in one by one. The variables are direction, type,
    //delay, duration of animation for the card
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* creates a tilt card with the tilt animation animation */}
      <Tilt
        //tilt options provided to the card
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl h-[500px] sm:w-[360px] w-full"
      >
        {/* creates the div for the image of our project */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* creates the bubble with the github image and link to the github for our project */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              onClick={() => window.open(url, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={internet}
                alt="source code"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* displays the name and description of the project */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        {/* goes through each of the tag in the tags array using map and then display the tag in the asoociated colour */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* textVariant is a framer motion function stored in the textVariant file in the motion file in the utils folder */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        {/* function below is also from motion file in utils folder and accepts 4 parameters , direction, type, delay, duration */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I spent this year combining my passions of travelling and coding. One
          of my projects was to create an app that documents my travel journey.
          The projects below showcase my skills and experience through
          real-world examples of my work. They reflect my ability to solve
          complex problems, work with different technologies, and use all
          resources available to me to complete projects.
        </motion.p>
      </div>
      {/* goes through the projects array and then spreads the content (index, name, description, tags, image, 
      source_code_link) of each project and passes that as a prop to the ProjectCard component */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
