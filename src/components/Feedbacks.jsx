import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
//the below imports the sectionWrapper function we made to standardize some of the styles, transition and formatting we want to apply to
//all our components
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
//has the info about the feedbacks that we import from the constants folder
import { testimonials } from "../constants";

//creates the feedback card with the information passed in the props
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  //the index*0.5 below helps give the animation of each card coming in one by one.
  <motion.div
    // the variables are direction, type, delay, duration of animation for the card
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // styles the cards that have the testimonal info displayed
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* styles the quotation mark */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      {/* div that contains the person name, company and image of person */}
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>
        {/* image of ijndividual displayed in a round thumbnail */}
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        {/* textVariant is a framer motion function stored in the textVariant file in the motion file in the utils folder */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      {/* -mt allows the FeedbackCard component to render on top of the div above that contains the Testimonails and what others say text */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* maps through the testimonial array and spreads out the contents of each testimonial and passes it as a prop to Feedback card */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
