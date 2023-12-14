//used to create a higher order component that will be wrapped around each of our main components such as about, experience, etc. and it will
//apply a default style/animation to each component so we have uniformity throughout
import { motion } from "framer-motion";

import { styles } from "../styles";
//one of the motion functions used with framer-motion that we have created in our general motion file in the utils folder
import { staggerContainer } from "../utils/motion";

//passing in the original component and then the name of that component when we wrap this wrapper function around our component in the specific
//component file
const StarWrapper = (Component, idName) =>
  //this is a higher order component because we have another function right inside the starWrapper function. It is a function returning a function
  //
  function HOC() {
    return (
      <motion.section
        //   the variant of staggerContainer() animates our section
        variants={staggerContainer()}
        //when we scroll down, the content of that particular component fades in through a cool animation
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* the below creates a blank hash span and provides it an id name that is passed from our component such as about, cotact, etc.
        and it connects the navlinks where we put href as #about or #contact etc. so when those are clicked it scrolls down to tehe asssociated 
        empty span that was created. We access this file when we do for example export default SectionWrapper(Contact, "contact");*/}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* this is our original component that we are passing in as a prop */}
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
