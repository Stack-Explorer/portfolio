// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's

import silveroak from "./assets/education_logo/silveroak.webp"
import angelamam from "./assets/education_logo/angelamam.jpg"

// Project Section Logo's
import calorieTracker from "./assets/work_logo/calorie-tracker.png"
import chatApp from "./assets/work_logo/chatapp.png"

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
    ],
  },
];



export const education = [
  {
    id: 1,
    img: angelamam,
    school: "The Complete Full-Stack Web Development Bootcamp - Dr. Angela Yu",
    date: "July 2024 - January 2025",
    desc: "Completed major modules of Angela Yu’s Web Development Bootcamp covering HTML, CSS, JavaScript, DOM, Bootstrap, React.js, Express.js, REST APIs, authentication, SQL, PostgreSQL, Git, GitHub, and backend development.",
    degree: "Full Stack Bootcamp"
  },
  {
    id: 2,
    img: silveroak,
    school: "Silver Oak College of Computer Applications",
    date: "June 2024 - Present",
    desc: "Currently Pursuing Bachelor's degree (BCA) in Computer Application",
    degree: "Bachelor's of Computer Application"
  },
];

export const projects = [
  {
    id: 1,
    title: "Chat App",
    description:
      "Built a Full Stack Chat App by following a YouTube guide.Acquired insights into real-time features, authentication, and MERN integration using tools like Socket.io, Zustand, and TailwindCSS.⚙️ Though not deeply mastered yet, this helped me understand frontend-backend communication and modern full-stack architecture.",
    image: chatApp,
    tags: ["React JS", "Express", "Zustand", "Tailwind CSS", "Daisy UI", "MongoDB", "Render"],
    github: "https://github.com/Stack-Explorer/Full-Stack-Chat-App",
    webapp: "https://chat-app-ub42.onrender.com",
  },
  {
    id: 2,
    title: "Calorie Tracker",
    description:
      "A smart and responsive Calorie Tracker app built using the MERN stack. It helps users log meals, track daily calorie intake and burn, and monitor fitness progress with a user-friendly interface and secure login system.",
    image: calorieTracker,
    tags: ["React JS", "Redux Toolkit", "Express", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/Stack-Explorer/Calorie-Tracker"
  },

];  