export const HOST_URL =
  process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000";

export const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
export const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** First professional role. "Years of experience" is computed from this. */
export const YEARS_OF_EXPERIENCE_START_DATE = "2022-01-01";

export const PROFILE = {
  name: "Festus Gbolade",
  firstName: "Festus",
  alias: "Elpis",
  role: "Full-Stack Engineer",
  location: "Lagos, Nigeria",
  locationShort: "Lagos, NG",
  timeZone: "Africa/Lagos",
  utcOffset: "UTC+1",
  currentRole: "Full Stack Engineer",
  currentCompany: "Manthic Technologies",
  /** One sentence used for <meta description>, OG and JSON-LD. */
  description:
    "Full-stack engineer with 4+ years shipping real-time web products in TypeScript, React, Next.js and Node.js: multiplayer games, collaborative tools, commerce and on-chain platforms. Fully remote, end to end.",
};

export const SOCIAL = {
  email: "festus.gbolade@gmail.com",
  telegram: "https://t.me/mr_elpis",
  telegramHandle: "@mr_elpis",
  whatsapp: "https://wa.me/%2B2349163704134?text=Hello%20Festus",
  twitter: "https://twitter.com/elpis_alpha",
  twitterHandle: "@elpis_alpha",
  linkedin: "https://www.linkedin.com/in/elpis-alpha",
  github: "https://github.com/Elpis-alpha",
  repo: "https://github.com/Elpis-alpha/My-Portfolio",
};

/** The first entry is the default one linked from the nav. */
export const RESUMES = [
  {
    label: "Full-stack",
    link: "https://drive.google.com/file/d/1gJtAPPLSCbasKo47uoijM2pEGbJRzWus/view",
  },
  {
    label: "Frontend",
    link: "https://drive.google.com/file/d/1X91cRIt_jqyvlLocv_eWvEt8_845x98j/view",
  },
  {
    label: "Backend",
    link: "https://drive.google.com/file/d/13HFlKYnfi3qUVTCOuS6TM8bA0ga4J92U/view",
  },
];

/* ------------------------------------------------------------------ */
/*  Home                                                                */
/* ------------------------------------------------------------------ */

/** `value: "years"` is replaced with the live years-of-experience figure. */
export const STATS = [
  {
    value: "years",
    label: "shipping production software, fully remote",
  },
  {
    value: "5+",
    label: "production applications shipped end to end",
  },
  {
    value: "~70%",
    label: "more concurrent players per room after a sync rewrite",
  },
  {
    value: "16 ms",
    label: "batching window in a real-time game pipeline",
  },
];

export const PRINCIPLES = [
  {
    title: "Measure, then optimise",
    body: "Dot PvP's real-time payloads were measured in kilobytes, and the game lagged as rooms filled. Delta updates and a 16 ms batching pipeline cut them to bytes and made room for about 70% more players.",
    proof: "Dot PvP",
    slug: "dot-pvp",
  },
  {
    title: "Contracts over conventions",
    body: "In Aide-mémoire the API's zod schemas generate the OpenAPI spec, and the front end generates its types from that spec. A breaking change shows up as a compile error instead of a production surprise.",
    proof: "Aide-mémoire",
    slug: "aide-memoire",
  },
  {
    title: "Write it down",
    body: "Hæstore ships with architecture docs and a decision record for every contested fork. Remote teams run on writing, so I treat documentation as part of the feature.",
    proof: "Hæstore",
    slug: "haestore",
  },
  {
    title: "Own it end to end",
    body: "Schema, API, UI, admin tooling, Docker and CI/CD. On Ricefi I worked across all of it as the senior full-stack developer on a three-engineer team.",
    proof: "Ricefi",
    slug: "ricefi",
  },
];

/* ------------------------------------------------------------------ */
/*  Experience & education                                              */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  start: string;
  end: string;
  location: string;
  current?: boolean;
  summary: string;
  points?: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Manthic Technologies",
    role: "Full Stack Engineer",
    type: "Full-time",
    start: "Oct 2026",
    end: "Present",
    location: "Remote",
    current: true,
    summary: "Full-stack product engineering on a remote team.",
  },
  {
    company: "2X Solution",
    role: "Full Stack Developer",
    type: "Full-time",
    start: "Jul 2022",
    end: "Sep 2026",
    location: "Remote",
    summary:
      "Shipped 5+ major production-grade applications end to end across Web3, real-time gaming, fintech and e-commerce.",
    points: [
      "Senior full-stack developer on Ricefi within a three-engineer team, working alongside sales, UI/UX, product and QA.",
      "Rebuilt Dot PvP's state sync with delta updates, binary diffs and a 16 ms batching pipeline: payloads went from kilobytes to bytes, with about 70% more concurrent players per room.",
      "Integrated a custom Envio indexer to sync on-chain events, presale transactions, rewards and land metadata with the backend.",
      "Shipped Docker-based backend deployments through CI/CD, plus admin tooling for invite codes, presales, Merkle roots and rate limiting.",
    ],
  },
  {
    company: "Upwork",
    role: "Full Stack Developer",
    type: "Freelance",
    start: "Jan 2022",
    end: "Jul 2022",
    location: "EMEA · Remote",
    summary: "Freelance full-stack builds for clients across EMEA.",
  },
];

export const EDUCATION = {
  school: "Obafemi Awolowo University",
  degree: "B.Sc. Mechanical Engineering",
  detail: "Second Class Upper (Hons)",
  years: "2017 – 2024",
};

export const LANGUAGES = [{ title: "English", level: "Fluent" }];

/* ------------------------------------------------------------------ */
/*  Toolkit                                                             */
/* ------------------------------------------------------------------ */

export const TOOLKIT = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Zustand",
      "Motion",
      "TipTap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST & OpenAPI",
      "GraphQL",
      "zod",
      "OAuth & sessions",
    ],
  },
  {
    title: "Real-time",
    items: ["Socket.IO", "Colyseus", "Yjs (CRDT)", "Delta sync"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Meilisearch"],
  },
  {
    title: "Web3",
    items: ["ethers", "SIWE", "Solana web3.js", "Envio indexer"],
  },
  {
    title: "Infra & testing",
    items: [
      "Docker",
      "Nginx",
      "CI/CD",
      "Cloudflare Workers",
      "Vercel",
      "Vitest",
      "Jest",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  About                                                               */
/* ------------------------------------------------------------------ */

export const ABOUT_DATA = {
  story: [
    "I trained as a mechanical engineer at Obafemi Awolowo University. That is where I learned to care about tolerances, about load paths, and about what a system does when something in it fails.",
    "A simple curiosity about how the web works turned into paid work in 2022, while I was still finishing the degree. Since then I have shipped multiplayer games, collaborative tools, commerce platforms and on-chain products, usually owning the work from database schema to deployment.",
    "The discipline carried over. I still think in terms of failure modes and measured results, and I still believe the drawing matters as much as the part: clear contracts, written decisions, and code the next engineer can read.",
  ],
  images: {
    corporate:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224482/private/corporate_emkakn.jpg",
    native:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224482/private/native_p5rtat.jpg",
    stylish:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773224483/private/stylish_vudwvg.jpg",
  },
  offClock: [
    "Pianist, still learning",
    "1.96 m tall",
    "Trains every day",
    "Cat person, no cat yet",
    "Anime and Japanese music",
    "INTJ",
    "Enjoys design, web and structural",
    "Reads and travels when he can",
  ],
};

/* ------------------------------------------------------------------ */
/*  Site chrome                                                         */
/* ------------------------------------------------------------------ */

/** Shown in the footer title block. Bump when the site changes meaningfully. */
export const SITE_REVISION = "2026.11";

export const AVAILABILITY = {
  /** Kept deliberately low-key: employed, and open to a good conversation. */
  note: `I'm currently building at ${PROFILE.currentCompany}, and I'm always glad to hear about hard problems, ambitious products and strong remote teams.`,
  overlap: [
    { region: "Europe", window: "Full working day" },
    { region: "US East Coast", window: "Morning to early afternoon" },
  ],
};
