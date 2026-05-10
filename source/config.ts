export const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000";

export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const YEARS_OF_EXPERIENCE_START_DATE = "2022-02-01";
export const BIRTH_DATE = "2001-09-18";

export const SOCIAL = {
  email: "festus.gbolade@gmail.com",
  phoneLine: "+2349163704134",
  telegram: "https://t.me/mr_elpis",
  whatsapp: "https://wa.me/%2B2349163704134?text=Hello%20Elpis",
  twitter: "https://twitter.com/elpis_alpha",
  stackOverflow: "https://stackoverflow.com/users/13952926/elpis",
  linkedin: "https://www.linkedin.com/in/elpis-alpha",
  instagram: "https://www.instagram.com/elpis_alpha/",
  github: "https://github.com/Elpis-alpha",
  binance: "/images/BinancePayQR.png",
};

export const RESUMES = [
  {
    label: "Full Stack Resume",
    link: "https://drive.google.com/file/d/1epo1MRhzLvO5u7gDaOSRH0Ppm8FSUPsV/view?usp=sharing",
  },
  {
    label: "Frontend Resume",
    link: "https://drive.google.com/file/d/16vQEazygxCaO3bnAoXv9h9_GUErs4gDw/view?usp=sharing",
  },
  {
    label: "Backend Resume",
    link: "https://drive.google.com/file/d/127RxKJi5uK3BXk3Q_ccdLGD1OdD7KWXy/view?usp=sharing",
  },
];

export interface SkillCategory {
  title: string;
  items: {
    title: string;
    certLink?: string;
    langLevel?: string;
    level?: number;
    icon?: string;
  }[];
}
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { title: "React", level: 95, icon: "react" },
      { title: "Next.js", level: 90, icon: "nextjs" },
      { title: "TypeScript", level: 88, icon: "typescript" },
      { title: "Redux", level: 85, icon: "redux" },
      { title: "Tailwind CSS", level: 92, icon: "tailwind" },
      { title: "Context API", level: 80, icon: "code" },
      { title: "Motion", level: 70, icon: "animation" },
      { title: "Material UI", level: 78, icon: "mui" },
      { title: "Jest", level: 65, icon: "jest" },
    ],
  },
  {
    title: "Backend",
    items: [
      { title: "Node.js", level: 90, icon: "nodejs" },
      { title: "TypeScript", level: 88, icon: "typescript" },
      { title: "Express", level: 85, icon: "express" },
      { title: "GraphQL", level: 75, icon: "graphql" },
      { title: "Socket.IO", level: 75, icon: "socketio" },
      { title: "MongoDB", level: 90, icon: "mongodb" },
      { title: "PostgreSQL", level: 82, icon: "postgresql" },
      { title: "Redis", level: 70, icon: "redis" },
      { title: "Swagger", level: 65, icon: "swagger" },
      { title: "Cloudinary", level: 70, icon: "cloudinary" },
      { title: "OAuth (Passport)", level: 80, icon: "oauth" },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { title: "Git", level: 90, icon: "git" },
      { title: "GitHub", level: 88, icon: "github" },
      { title: "Docker", level: 80, icon: "docker" },
      { title: "Vercel", level: 85, icon: "vercel" },
      { title: "Nginx", level: 70, icon: "nginx" },
      { title: "CI/CD", level: 75, icon: "code" },
    ],
  },
];

export const SPECIALIZED_SKILLS = [
  { title: "REST API Design" },
  { title: "JWT Authentication" },
  { title: "OAuth Integration" },
  { title: "Rate Limiting" },
  { title: "Real-time Systems" },
  { title: "Microservices Architecture" },
  { title: "System Design" },
  { title: "API Integration" },
  { title: "State Management" },
  { title: "Responsive Design" },
  { title: "Component Architecture" },
  { title: "Test-Driven Development" },
  { title: "Agile/Scrum Collaboration" },
];

export const CERTIFICATIONS = [
  {
    title: "React - The Complete Guide (2024, incl. Next.js, Redux)",
    certLink:
      "https://www.udemy.com/certificate/UC-d7e879e1-dd78-425d-9df8-92ee3de1abc5/",
  },
  {
    title: "SQL and PostgreSQL: The Complete Developer's Guide",
    certLink:
      "https://www.udemy.com/certificate/UC-de698c48-0830-4819-b429-1e1d7d4c6ed1/",
  },
  {
    title: "Data Structures + Algorithms",
    certLink:
      "https://www.udemy.com/certificate/UC-77828108-5b41-4aac-89fc-149d20242019/",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    certLink:
      "https://www.freecodecamp.org/certification/elpis-alpha/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "Responsive Web Design",
    certLink:
      "https://www.freecodecamp.org/certification/elpis-alpha/responsive-web-design",
  },
];

export const LANGUAGES = [{ title: "English", langLevel: "Fluent/Bilingual" }];

export const ABOUT_DATA = {
  bio: (expV2: string) =>
    `I'm a Software Engineer with a deep passion for building scalable, efficient web applications. ${expV2} years working with the MERN stack, I've contributed to diverse projects, from early-stage startups to large-scale enterprise platforms. It all started with a simple curiosity about how the web works, and grew into a career dedicated to crafting high-quality digital experiences.`,
  images: {
    imageThree:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224482/private/corporate_emkakn.jpg",
    imageOne:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224482/private/native_p5rtat.jpg",
    imageTwo:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224483/private/stylish_vudwvg.jpg",
    fullStackCrop:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773232366/private/full-stack-crop_gzzej0.png",
  },
  interests: [
    { name: "Open Source", icon: "Github" },
    { name: "System Design", icon: "Cloud" },
    { name: "Fitness", icon: "Fitness" },
    { name: "Music", icon: "Music" },
    { name: "Reading", icon: "Book" },
    { name: "Traveling", icon: "Globe" },
  ],
  funFacts: [
    "I'm a pianist (still learning though)",
    "I love cats but don't have one (yet!).",
    "My favourite color is white",
    "I'm so into latest tech",
    "I love anime",
    "I'm an INTJ-T",
    "I'm my role model (yeah! yeah!!)",
    "I'm a graduate of OAU!",
    "I love sweets (hope I don't get diabetes)",
    "I love designing (both web and structural)",
    "I don't have a girlfriend (yet!)",
    "I wish I can fly (who doesn't)",
    "I'm almost two meters tall (1.96m)",
    "I love video games",
    "I workout everyday",
    "I love Japanese music",
    "I love pizza (who doesn't, except the healthy ones)",
    "I'm a bit wierd (who isn't)",
    "I really love cats (really really)",
    "I've been to the Moon (now that's a lie)",
  ],
};
