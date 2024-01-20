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
  androidstudio,
  express,
  java,
  jupyter,
  kotlin,
  mysql,
  vscode,
  git,
  figma,
  docker,
  meta,
  starbucks,
  lbs,
  lpu,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  npea,
  threedtee,
  lukup
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "certificates",
    title: "Certificate"
  }
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML Engineer",
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
    name: "Express",
    icon: express,
  },
  {
    name: "Java Script",
    icon: javascript,
  },
  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "VS Code",
    icon: vscode,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
];

const experiences = [
  {
    title: "Class 10 : Secondary school",
    company_name: "North Point English Academy",
    icon: npea,
    iconBg: "#383E56",
    date: "March 2003 - April 2017",
  },
  {
    title: "Class 12 : Higher Secondary",
    company_name: "LBS Convent School",
    icon: lbs,
    iconBg: "#E6DEDD",
    date: "June 2017 - March 2019",
  },
  {
    title: "B.Tech : College",
    company_name: "Lovely Professional University",
    icon: lpu,
    iconBg: "#383E56",
    date: "Aug 2020 - Current",
  },

];


const projects = [
  {
    name: "LukUp",
    description:
      "Welcome to our cutting-edge web search application, designed to empower users with seamless access to the vast expanse of the internet. Explore the web with ease and precision through our intuitive platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: lukup,
    deployment_link: "https://lukup.netlify.app",
    source_code_link: "https://github.com/PratyushPriyam/luk_up",
  },
  {
    name: "3D TEE",
    description:
      "Step into the future of online fashion with our innovative 3D T-shirt Try-On web application. Explore a world of style and convenience as you effortlessly experiment with various designs and colors, virtually trying on your favorite t-shirts with lifelike realism",
    tags: [
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "pink-text-gradient",
      },
    ],
    image: threedtee,
    deployment_link: "https://3dtee.netlify.app/",
    source_code_link: "https://github.com/PratyushPriyam/3D-TEE",
  },
  {
    name: "Natours API",
    description:
      "A comprehensive travel booking platform that allows users to book trips to various locations located at the helm of natural beauty",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    deployment_link: "#",
    source_code_link: "https://github.com/PratyushPriyam/Natorus",
  },
];

export { services, technologies, experiences, projects };