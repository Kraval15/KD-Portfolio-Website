//website content
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  OPG,
  ESFox,
  TravelDiary,
  jobit,
  tripguide,
  threejs,
  YelpCamp,
  website,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title:
      "Bachelor's of Engineering (magna cum laude) from Toronto Metropolitan University",
    icon: web,
  },
  {
    title: "4 years of Engineering work experience in highly technical roles",
    icon: mobile,
  },
  {
    title:
      "Responsible for projects, teams and clients on the $12.8 Darlington Nuclear Refurbishment Project",
    icon: backend,
  },
  {
    title: "Developing further projects in JavaScript to improve my skills",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Javascript and Python Bootcamp",
    company_name: "Udemy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Project Manager",
    company_name: "ES Fox",
    icon: ESFox,
    iconBg: "#E6DEDD",
    date: "December 2021 - March 2023",
    points: [
      "Led Steam Generator (SG) Moisture Separator Replacement project involving replacement of major SG components for the Darlington Refurbishment Project (SGs are one of the most critical components of the plant)",
      "Worked with a team of over 50 individuals from multiple organizations/companies including engineering design, construction, clients, upper management, and scheduling",
      "Reviewed technical engineering drawings and performed field walkdowns to ensure drawings reflect field configuration and are practical for construction saving costly rework",
      "Led presentations show stakeholders scope, field work completed and regulatory milestones to get final compliance, construction, management, and design sign offs for project completion",
    ],
  },
  {
    title: "Modification Team Leader",
    company_name: "Ontario Power Generation",
    icon: OPG,
    iconBg: "#383E56",
    date: "May 2019 - November 2021",
    points: [
      "Successfully finished the Nuclear Containment and Primary Heat Transport Vacuum Dry Project while saving 10 critical path days with an approximate savings of $20 million",
      "Completed multiple regulatory meetings (AFS and CCD) on critical path deadlines to allow for required approvals for Containment Pressure Test equipment commissioning",
      "Developed Temporary Change Records and instructions to allow for restoration of nuclear power plant to original configuration after project completion",
      "Developed strategy to permit for safe drainage of Steam Generators (SG’s) during project to maintain the health of the SG’s which are very costly and critical for nuclear power plant operation",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Travel Journey App",
    description:
      "I took a wild journey this year to learn to code while travelling the world. I combined my coding knowledge with my travel adventures to create a social media app. Users can view photos of my journey, sign in, leave comments, look at what others have said and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
    ],
    image: TravelDiary,
    source_code_link: "https://github.com/Kraval15/Project-Travel-Diary",
    url: "https://joyful-cocada-24da20.netlify.app/",
  },
  {
    name: "Camp Yelp",
    description:
      "Full CRUD web application that is like Yelp but for travel and campgrounds. Users can go through an interactive map, make an account to submit their own campgrounds, pictures, locations, reviews and more. ",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloudstorage",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
    ],
    image: YelpCamp,
    source_code_link: "https://github.com/Kraval15/Camp-Yelp-KD/tree/main",
    url: "https://kd-camper-site.onrender.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "A comprehensive react website detailing my education, experience and projects while incorporating solid 3D models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "orange-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
