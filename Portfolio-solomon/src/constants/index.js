import {
  backend,
  css,
  django,
  docker,
  git,
  html,
  javascript,
  meta,
  mind,
  mobile,
  nodejs,
  plant,
  py,
  reactjs,
  redux,
  tailwind,
  teach,
  tele,
  threejs,
  typescript,
  web
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
    title: "Fullstack developer",
    icon: web,
  },
  {
    title: "QA/QE",
    icon: mobile,
  },
  {
    title: "python developer",
    icon: backend,
  },

  {
    title: "software Engineer",
    icon: backend,
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
    name: "Django",
    icon: django,
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
    name: "docker",
    icon: docker,
  },

  {
    name: "python",
    icon: py,
  },


];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Teach2Give",
    icon: teach,
    iconBg: "#383E56",
    date: "January 2024 - December 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }
  // {
  //   title: "Software Engineer",
  //   company_name: "meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Just dreaming",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but solo proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like solo does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After solo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Plantcare companion app",
    description:
      "An app designed for plant enthusiasts that helps users care for their indoor and outdoor plants. Users can track plant health, set reminders for watering, fertilizing, and repotting, and get tips on plant care.Community Forum: A space for users to ask questions, share tips, etc.AR to visualize how a plant will look in their space before purchasing ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
    ],
    image: plant,
    source_code_link: "https://github.com/solo925/Plant-Care-Companion-App",
    demo_link: "https://github.com/solo925/Plant-Care-Companion-App",
  },
  {
    name: "Telehealth",
    description:
      "Telehealth an application that will allow for remote access to medication it provides features such as consultations,appointments between doctors and patient through video chats,booking consulrations,safe records keeping, and chatroom between a doctor and a patient and many more features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
    ],
    image: tele,
    source_code_link: "https://github.com/solo925/Telehealth",
    demo_link: "https://github.com/solo925/Telehealth",
  },
  {
    name: "Mindfuel",
    description:
      "MindFuel is a habit and health tracking assistant that learns from your activities and provides personalized recommendations for healthier habits. It combines data tracking (like sleep, diet, exercise, and mental health) with actionable insights to help users improve their well-being over time. ",
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
      {
        name: "node js",
        color: "blue-text-gradient",
      },
    ],
    image: mind,
    source_code_link: "https://github.com/solo925/MindFuel",
    demo_link: "https://github.com/solo925/MindFuel",
  },
];

export { experiences, projects, services, technologies, testimonials };

