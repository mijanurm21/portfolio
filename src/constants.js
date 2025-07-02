// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import reduxLogo from "./assets/tech_logo/redux.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";

import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";

import vercelLogo from "./assets/tech_logo/vercel.png";

import csharpLogo from "./assets/tech_logo/csharp.png";

// Education Section Logo's
import cu_logo from "./assets/education_logo/cu_logo.webp";
import dps_logo from "./assets/education_logo/dps_logo.webp";
import spms_logo from "./assets/education_logo/spms_logo.webp";

import Crud_logo from "./assets/work_logo/Crud_logo.png";
import Dice_logo from "./assets/work_logo/Dice_logo.png";
import EMS_logo from "./assets/work_logo/EMS_logo.png";
import Flavaro_logo from "./assets/work_logo/Flavaro_logo.png";
import Rofukus_logo from "./assets/work_logo/Rofukus_logo.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },

      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },

      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },

      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const education = [
  {
    id: 0,
    img: cu_logo,
    school: "Chandigarh University",
    date: "july 2021 - june 2025",
    grade: "75.6%",
    desc: "I completed my Bachelor's degree in Computer Science (B.E) from Chandigarh University, Mohali. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development.",
    degree: "B.E (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: dps_logo,
    school: "Dehli Public School Rohtak, Haryana",
    date: "Apr 2020 - March 2021",
    grade: "72%",
    desc: "I completed my class 12 education from Dehli Public School, Rohtak, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: spms_logo,
    school: "Shri Baba Mastnath Public School Rohtak, Haryana",
    date: "Apr 2018 - March 2019",
    grade: "82%",
    desc: "I completed my class 10 education from Shri Baba Mastnath Public School, Rohtak, under the CBSE board.",
    degree: "CBSE(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Rofukus Clone",
    description:
      "Rofukus Clone is a responsive, single-page web application that allows users to search for any GitHub username and fetch detailed profile information. It provides a developer-friendly view of stats like public repositories, followers, bio, and more.",
    image: Rofukus_logo,
    tags: ["HTML", "CSS", "JavaScript", "React JS"],
    github:
      "https://github.com/mijanurm21/React_Projects/tree/main/Refokus-clone-p7",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Employee Management System",
    description:
      "A responsive web application designed to help organizations efficiently manage employee information, track work status, and maintain a structured employee database. The system supports employee onboarding, role assignment, and performance tracking features.",
    image: EMS_logo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/mijanurm21/React_Projects/tree/main/EmployeeManagementSystem",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Flavaro App",
    description:
      "Flavaro is a modern food ordering web application that allows users to browse, select, and place orders from a variety of dishes. It’s designed with a clean UI and a seamless user experience, optimized for both desktop and mobile users.",
    image: Flavaro_logo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/mijanurm21/React_Projects/tree/main/Flavoro-p-8",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Crud Based Employee Details",
    description:
      "CRUD-Based Employee Details is a lightweight and efficient web application built with React that allows users (e.g., HR teams or managers) to Create, Read, Update, and Delete employee records in a structured and user-friendly interface. It mimics the core functionality of a real-world HR system for managing employee data.",
    image: Crud_logo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/mijanurm21/React_Projects/tree/main/CRUD-form-p6",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Dice Game",
    description:
      "Dice Game is an interactive and fun web-based game built using JavaScript that simulates the roll of a dice. It’s designed to provide a simple two-player experience where the player with the higher dice value wins each round. It's a great example of DOM manipulation and game logic in action.",
    image: Dice_logo,
    tags: ["JavaScript", "HTML", "CSS"],
    github:
      "https://github.com/mijanurm21/React_Projects/tree/main/Dice-Game-p-3",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
];
