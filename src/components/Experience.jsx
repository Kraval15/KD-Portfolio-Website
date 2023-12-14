import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    //below uses the Vertical timeline element that we imported from react-vertical-timeline-compnent and gives it some styling through
    //contentStyle
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      //styles the arrow of the element
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      //adds the date, and icon styling to the vertical timeline element based on the experience prop that we passed
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      {/* creates a div to add the title and company name of the experience to the card */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      {/* creates a ul for each of the experience bullet points  */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      {/* textVariant is a framer motion function stored in the textVariant file in the motion file in the utils folder */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience.</h2>
      </motion.div>
      {/* below creates the vertical timeline component where we dsplay all the experience */}
      <div className="mt-20 flex flex-col">
        {/* to render the vertical timeline component which is imported from the react-vertical-timeline-component library as a standard template */}
        <VerticalTimeline>
          {/* imported experiences array from the constants file and then going through each experience element and passing it as a prop to helo
          render each experience card for each experience in the array*/}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
