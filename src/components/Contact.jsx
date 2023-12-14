import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
//tool to add email functionality on our form
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
//earth canvas from the Earth.jsx file where we render the earth 3D model
import { EarthCanvas } from "./canvas";
//the below imports the sectionWrapper function we made to standardize some of the styles, transition and formatting we want to apply to
//all our components
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  //creates initial state of form
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  //creates initial state of loading to false.
  const [loading, setLoading] = useState(false);

  //if there is change in one of the form inputs, handle change is called. name is the name of the input such as name, email, message and
  //value is the content of the input. State of form is updated through setForm everytime there is a change in the input of form
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => {
      return {
        ...form,
        [name]: value,
      };
    });
  };

  //called when user pressed the submit button
  const handleSubmit = (e) => {
    //prevents the form from refreshing when it is submitted as for react we don't require the webpage to refresh, but in regular, we
    //submit the webpage which sends for example a post request which we can levarage to get the data. With state, we don't need it to submit,
    e.preventDefault();
    //sets loading to true which changes the button text to sending... notifying user that their message is sending. And then in below code
    //once message is confirmed sent then setLoading is changed to false and button text changes back to send
    setLoading(true);

    emailjs
      .send(
        //Below env variables are IDs from emailjs stored as env variables
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kuldeep",
          from_email: form.email,
          to_email: "kuldeep.raval15@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      // once email is sent to me, .then() is executed which setLoading to false to change the button text back to send, sends an alert to user
      //and changes state of form parameters to empty string
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert(
            "Ahh, something went wrong. Please try again or you can reach me at kuldeep.raval15@gmail.com"
          );
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* the variables are direction, type, delay, duration of animation for the card. The animation is for the whole form and text in the form*/}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              //name associated with the input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
