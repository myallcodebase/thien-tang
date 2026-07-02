// types
import { Project } from "models/datoCMS";
// components
import ProjectComponent from "components/Project/Project";
import Grid from "components/Layout/Grid";

export interface ProjectGridProps {
  /**
   * A collection of portfolio projects
   */
  projects: Project[];
}

type ProjectOverride = Partial<Project> & { imageUrl?: string };

const PROJECT_OVERRIDES: Record<string, ProjectOverride> = {
  DevMeetup: {
    title: "React Native Boilerplate",
    subTitle: "Modern React Native Starter Template",
    description:
      "A production-ready React Native starter with Expo SDK 54, TypeScript, Redux Toolkit, file-based routing via Expo Router, CI/CD with GitHub Actions, and pre-configured ESLint, Prettier, and Jest for rapid project kickoff.",
    repoLink: "https://github.com/myallcodebase/react-native-boilerplate.git",
    liveLink: "",
    imageUrl:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1280&q=80",
    projectLogo: {
      url: "https://cdn.simpleicons.org/expo/4630EB",
    },
    technologiesUsed: [
      {
        id: "rn1",
        name: "TypeScript",
        logo: { url: "https://cdn.simpleicons.org/typescript/3178C6" },
      },
      {
        id: "rn2",
        name: "React Native",
        logo: { url: "https://www.datocms-assets.com/60761/1642341260-react.svg" },
      },
      {
        id: "rn3",
        name: "Expo",
        logo: { url: "https://cdn.simpleicons.org/expo/4630EB" },
      },
      {
        id: "rn4",
        name: "Redux",
        logo: { url: "https://www.datocms-assets.com/60761/1642341260-redux.svg" },
      },
    ],
  },
  Flashcards: {
    title: "React Todo App",
    subTitle: "Task Management App",
    description:
      "A front-end task management app built with React and TypeScript using Vite. Users can add, complete, and delete to-do items. Includes end-to-end tests with Cypress and code quality tooling via ESLint and Prettier.",
    repoLink: "https://github.com/myallcodebase/react-todoApp",
    liveLink: "https://react-todo-phix.netlify.app/",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1280&q=80",
    projectLogo: {
      url: "https://cdn.simpleicons.org/react/61DAFB",
    },
    technologiesUsed: [
      {
        id: "td1",
        name: "TypeScript",
        logo: { url: "https://cdn.simpleicons.org/typescript/3178C6" },
      },
      {
        id: "td2",
        name: "React",
        logo: { url: "https://www.datocms-assets.com/60761/1642341260-react.svg" },
      },
      {
        id: "td3",
        name: "Vite",
        logo: { url: "https://cdn.simpleicons.org/vite/646CFF" },
      },
      {
        id: "td4",
        name: "CSS",
        logo: { url: "https://www.datocms-assets.com/60761/1642341246-css3.svg" },
      },
    ],
  },
  "Would you rather...?": {
    title: "Data Communication & Network",
    subTitle: "Java Networking Applications",
    description:
      "A collection of Java networking applications covering file transfer, network performance analysis, reliable client-server communication, and a time server — built as hands-on exercises in data communication protocols.",
    repoLink: "https://github.com/myallcodebase/Data-communication-network.git",
    liveLink: "",
    imageUrl:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1280&q=80",
    projectLogo: {
      url: "https://cdn.simpleicons.org/openjdk/437291",
    },
    technologiesUsed: [
      {
        id: "dc1",
        name: "Java",
        logo: { url: "https://cdn.simpleicons.org/openjdk/437291" },
      },
    ],
  },
  "Battleship!": {
    title: "Fintech API",
    subTitle: "Personalized Financial Planning API",
    description:
      "A fintech solution for personalized financial planning built for the hack2skill Humanize Fintech hackathon. Features JWT authentication, MongoDB persistence, Swagger API docs, and a Python AI/GPT financial component.",
    repoLink: "https://github.com/myallcodebase/fintech-api.git",
    liveLink: "",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1280&q=80",
    projectLogo: {
      url: "https://cdn.simpleicons.org/nodedotjs/339933",
    },
    technologiesUsed: [
      {
        id: "fa1",
        name: "JavaScript (ES6+)",
        logo: { url: "https://www.datocms-assets.com/60761/1642341255-javascript.svg" },
      },
      {
        id: "fa2",
        name: "Node.js",
        logo: { url: "https://www.datocms-assets.com/60761/1642341257-node-dot-js.svg" },
      },
      {
        id: "fa3",
        name: "Express.js",
        logo: { url: "https://cdn.simpleicons.org/express/6E6E6E" },
      },
      {
        id: "fa4",
        name: "MongoDB",
        logo: { url: "https://cdn.simpleicons.org/mongodb/47A248" },
      },
      {
        id: "fa5",
        name: "Python",
        logo: { url: "https://cdn.simpleicons.org/python/3776AB" },
      },
    ],
  },
  SimplySticky: {
    title: "Healthcare React Native App",
    subTitle: "React Native Doctor App",
    description:
      "A React Native mobile app for healthcare with 40+ screens covering doctor browsing & search, appointment scheduling, and patient profile management. Built as a freelance project with React Navigation and a clean UI.",
    repoLink: "https://github.com/myallcodebase/healthcare-react-native.git",
    liveLink: "",
    imageUrl:
      "https://images.unsplash.com/photo-1776104501583-3c83f2adfc3d?auto=format&fit=crop&w=1280&q=80",
    projectLogo: {
      url: "https://cdn.simpleicons.org/react/61DAFB",
    },
    technologiesUsed: [
      {
        id: "h1",
        name: "JavaScript (ES6+)",
        logo: { url: "https://www.datocms-assets.com/60761/1642341255-javascript.svg" },
      },
      {
        id: "h2",
        name: "React Native",
        logo: { url: "https://www.datocms-assets.com/60761/1642341260-react.svg" },
      },
      {
        id: "h3",
        name: "Expo",
        logo: { url: "https://cdn.simpleicons.org/expo/4630EB" },
      },
    ],
  },
  "Vintage Poker": {
    title: "MERN eCommerce Platform",
    subTitle: "Full-Featured Online Shopping Platform",
    description:
      "A full-featured ecommerce platform built with the MERN stack. Includes product search, filtering & pagination, shopping cart, user profiles with order history, an admin dashboard, product reviews, and secure checkout via Razorpay.",
    repoLink: "https://github.com/myallcodebase/MERN-ecommerce",
    liveLink: "https://mern-shop-abxs.onrender.com/",
    projectLogo: {
      url: "https://cdn.simpleicons.org/mongodb/47A248",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&crop=top&w=1280&h=960&q=80",
    technologiesUsed: [
      {
        id: "t1",
        name: "React",
        logo: { url: "https://www.datocms-assets.com/60761/1642341260-react.svg" },
      },
      {
        id: "t2",
        name: "Node.js",
        logo: { url: "https://www.datocms-assets.com/60761/1642341257-node-dot-js.svg" },
      },
      {
        id: "t3",
        name: "Express.js",
        logo: { url: "https://cdn.simpleicons.org/express/6E6E6E" },
      },
      {
        id: "t4",
        name: "MongoDB",
        logo: { url: "https://cdn.simpleicons.org/mongodb/47A248" },
      },
      {
        id: "t5",
        name: "Razorpay",
        logo: { url: "https://cdn.simpleicons.org/razorpay/3395FF" },
      },
    ],
  },
};

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <Grid tag="ul">
      {projects.map((project) => {
        const override = PROJECT_OVERRIDES[project.title];
        const { imageUrl, ...projectOverride } = override ?? {};
        return (
          <li key={project.id}>
            <ProjectComponent
              project={override ? { ...project, ...projectOverride } : project}
              imageUrl={imageUrl}
            />
          </li>
        );
      })}
    </Grid>
  );
};

export default ProjectGrid;
