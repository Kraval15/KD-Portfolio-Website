import React, { useEffect, useState } from "react";
//used to navaigate to other parts of our page
import { Link } from "react-router-dom";

import { styles } from "../styles";
//data from the index file in the constants folder which contains some kay value pairs for nav links to use in our nav bar
import { navLinks } from "../constants";
//image files of my logo, menu bar and close so we can put these images in the navbar
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  //for toggle of menu bar that is shown on mobile devices or smaller screens
  const [toggle, setToggle] = useState(false);
  //all the properties described are from tailwind-css so can search them up on their documentation to get a better idea if unsure what each
  //className property does w-full means take up full width, flex-items-center is a flex property to help center, top-0 means it helps
  //is stay on the top z-20 makes it appear on top of other elements, max-w-7xl means a lot of width in the navbar
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          //the "/" points to the top of the page
          to="/"
          className="flex items-center gap-2"
          //setActive will keep track of where we are on the page currently
          onClick={() => {
            setActive("");
            //with the help of below we will scroll to the top of the page
            window.scrollTo(0, 0);
          }}
        >
          {/* puts the logo image on the navcar area */}
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kuldeep Raval &nbsp;
            <span className="sm:block hidden">| Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* goes through each navLink in the navLinks array from the index.js file in constants folder and sets the href and displays it */}
          {navLinks.map((Link) => (
            <li
              // the below checks if the state in our active variable is the current link.title and if it is then that links is highlighted in white
              //and the rest of the not active links in the navbar are set to secondary-text color. We use the onClick function to change state of
              //the active variable to the link that has been clicked so then we can use that to change the colour of the link to white
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] 
            font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        {/* the below is code for screen on mobiles or when screen is half screen on desktop to collapse the navlinks into a drop down menu bar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            //if toggle is true then show the close icon as that means menu is toggled and the navlinks are showing and to show menu icon is toggle
            //is false
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            //on click on menu icon, we change state of toggle to false if its true and true if its false to either show menu bar icon or close icon
            onClick={() => setToggle(!toggle)}
          />
          {/* below is going to show the contents in the menubar if it is toggled and hide it if it is not toggled so toggled is false */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-x1`}
          >
            {/* below renders the navlinks in the menu bar if the menu bar is toggled */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* goes through each navLink in the navLinks array from the index.js file in constants folder and sets the href and displays it */}
              {navLinks.map((Link) => (
                <li
                  // the below checks if the state in our active variable is the current link.title and if it is then that links is highlighted in white
                  //and the rest of the not active links in the navbar are set to secondary-text color. We use the onClick function to change state of
                  //the active variable to the link that has been clicked so then we can use that to change the colour of the link to white
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(Link.title);
                    //below will close the menu bar toggle when a link is clicked
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
