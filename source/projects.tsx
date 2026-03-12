import crypto from "crypto";

const randomString = () => crypto.randomBytes(16).toString("hex");
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Backend";
  image: string;
  link?: string;
  github?: string;
  backendGithub?: string;
}
// ! Coming back to this 
export const PROJECTS: Project[] = [
  // The Sapphire Plaza
  {
    id: randomString(),
    title: "The Sapphire Plaza",
    description:
      "Sapphire Plaza, built with Next.js and Tailwind CSS, showcases the hotel and offers a seamless reservation experience.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773237868/private/projects/sapphire_llpad1.png",
    link: "https://sapphire-plaza.elpis.cc/",
    github: "https://github.com/Elpis-alpha/The-Sapphire-Plaza",
  },

  // Fresh Bites Grill
  {
    id: randomString(),
    title: "Fresh Bites Grill",
    description:
      "Fresh Bites Grill, a Next.js and Tailwind CSS project, integrates with Sanity CMS to manage the menu and reservations.",
    tags: ["Sanity CMS", "Next.js"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773239624/private/projects/fresh-bites_sldp64.png",
    link: "https://fresh-bites.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Small-Resturant",
  },

  // Adaptable Stores
  {
    id: randomString(),
    title: "Adaptable Stores",
    description:
      "Adaptable Stores, a MERN stack e-commerce platform, features dynamic product management and secure checkout with Stripe.",
    tags: ["React.js", "MongoDB", "Express", "Stripe"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773242766/private/projects/adaptable-stores_sngdq8.png",
    link: "https://adaptable-stores.elpis.cc/?view=query",
    github: "https://github.com/Elpis-alpha/Adaptable-Stores-Frontend",
    backendGithub: "https://github.com/Elpis-alpha/Adaptable-Stores-Backend",
  },

  // Aide-mémoire
  {
    id: randomString(),
    title: "Aide-mémoire",
    description:
      "Aide-mémoire, a MERN stack note-taking app, allows users to create and organize notes with a sleek interface.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773243420/private/projects/aide-mem_kgns75.png",
    link: "https://aide-memoire.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Aide-Memoire-Frontend",
    backendGithub: "https://github.com/Elpis-alpha/Aide-Memoire-Backend",
  },

  // Little Gathering
  {
    id: randomString(),
    title: "Little Gathering",
    description:
      "Little Gathering, a MERN stack forum, enables users to share posts and interact with a vibrant community.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773244033/private/projects/littleg_uu5mfs.png",
    link: "https://little-gathering.elpis.cc/",
    github: "https://github.com/Elpis-alpha/little-gathering-frontend",
    backendGithub: "https://github.com/Elpis-alpha/little-gathering-backend",
  },

  // Master Your Mortgage
  {
    id: randomString(),
    title: "Master Your Mortgage",
    description:
      "Master Your Mortgage, a React.js and Tailwind CSS project, provides mortgage services with a user-friendly interface.",
    tags: ["React.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773245113/private/projects/mortgage_fwrwl1.png",
    link: "https://mortgage.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Simple-Mortgage",
  },

  // Elpis Weather
  {
    id: randomString(),
    title: "Elpis Weather",
    description:
      "Elpis Weather, a MERN stack app that uses geolocation and weather APIs, provides accurate forecasts",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773246049/private/projects/weather_lxlcxe.png",
    link: "https://weather.elpis.cc/",
    github: "https://github.com/Elpis-alpha/weather-frontend",
    backendGithub: "https://github.com/Elpis-alpha/weather-backend",
  },

  // Ludo
  {
    id: randomString(),
    title: "Ludo",
    description:
      "Ludo, a simple game built with Vanilla JavaScript, allows 2-4 players to play with customizable avatars and colors.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773246610/private/projects/ludo_dnzddm.png",
    link: "https://ludo.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Ludo",
  },

  // Tic Tac Toe
  {
    id: randomString(),
    title: "Tic Tac Toe",
    description:
      "Tic Tac Toe, a simple game of Xs and Os built with Vanilla JavaScript, has both PvP and PvE modes with multiple difficulty levels.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773246949/private/projects/tictactoe_w35xpp.png",
    link: "https://tic-tac-toe.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Tic-Tac-Toe",
  },

  // Elpis Works
  {
    id: randomString(),
    title: "Elpis Works",
    description:
      "Some projects made by me, too little to add here but too great to ignore. So there you have it, kind of a mini portfolio.",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773247450/private/projects/elpis-wworks_s2qujg.png",
    link: "https://little-works.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Elpis-Works",
  },
];
