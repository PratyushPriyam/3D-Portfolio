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
      name: "JavaScript",
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
    {
      name: "ThreeJS",
      icon: threejs,
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
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      deployment_link: "",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };