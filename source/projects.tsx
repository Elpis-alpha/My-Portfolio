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
  twitter?: string;
  github?: string;
  backendGithub?: string;
  featured?: {
    images: string[];
  };
}

// use https://shots.so/ to get pad poster images
export const PROJECTS: Project[] = [
  {
    id: "skrivle",
    title: "Skrivle",
    description:
      "A real-time collaborative whiteboard (built with Yjs (CRDT) sync server), open a link, no sign-up, and start drawing with anyone else on it.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express",
      "Socket.IO",
      "Yjs (CRDT)",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    category: "Full Stack",
    image: "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788984532/skrivel-poster_wxa4fe.png",
    link: "https://skrivle.elpis.cc",
    github: "https://github.com/Elpis-alpha/Skrivle/tree/main/front-end",
    backendGithub: "https://github.com/Elpis-alpha/Skrivle/tree/main/back-end",
    featured: {
      images: [
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-1_yhwc7u.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-6_nbooxh.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-4_zxmlc6.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-5_kbindh.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-3_erxh3v.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788982915/skrivel-2_f5q88p.png",
      ],
    },
  },

  // Coin15
  // {
  //   id: randomString(),
  //   title: "Coin15",
  //   description:
  //     "Coin15, built with Next.js, Express and Privy, is a Crypto Fantasy Contest Platform that users earn rewards for predicting cryptocurrency trends.",
  //   tags: ["Next.js", "Privy", "PWA"],
  //   category: "Full Stack",
  //   image:
  //     "https://res.cloudinary.com/elpis-cloud/image/upload/v1774089775/private/projects/coin15_rfikg4.png",
  //   // link: "https://coin15.duckdns.org/",
  // },

  // Teacat Books
  {
    id: randomString(),
    title: "Teacat Books",
    description:
      "Teacat Books, built with Next.js and Tailwind CSS, is a platform for discovering, borrowing and purchasing books.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/lbsvdx2r/image/upload/v1788984533/teacat-poster_y7hmvx.png",
    link: "https://teacat.elpis.cc/",
    github: "https://github.com/Elpis-alpha/Teacat-Books-FE",
    backendGithub: "https://github.com/Elpis-alpha/Teacat-Books-BE",
    featured: {
      images: [
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768702/teacat-1_yt5edg.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768703/teacat-4_bjftdg.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768702/teacat-2_a9guoi.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768697/teacat-5_dncz39.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768696/teacat-3_prpkuk.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768694/teacat-7_kk4cel.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768696/teacat-8_wetatj.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768694/teacat-6_cmmiet.png",
      ],
    },
  },

  // Ricefi
  {
    id: randomString(),
    title: "Ricefi",
    description:
      "Ricefi, built with Next.js, ethers and Three.js, is an online farm management game that generates passive income.",
    tags: ["Next.js", "ethers", "Three.js"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660586/private/projects/ricefi_dkhj5m.png",
    // link: "https://ricefi.dev.elpis.cc/",
    twitter: "https://x.com/ricefinancefun",
    featured: {
      images: [
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769672/ricefi-1_et3dku.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769671/ricefi-2_njk512.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769473/ricefi-4_eiuk4d.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769524/ricefi-3_uqzvfx.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769473/ricefi-8_dkheez.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769470/ricefi-9_osubdb.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769471/ricefi-6_snuxmr.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769470/ricefi-7_c5sfco.png",
        "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785769472/ricefi-5_uhilsi.png",
      ],
    },
  },

  // DeDash
  {
    id: randomString(),
    title: "DeDash",
    description:
      "DeDash, built with Next.js and express, is a decentralized dashboard that tracks degens and their activities across multiple chains.",
    tags: ["Next.js", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773669380/private/projects/dedash_jga6lo.png",
    // link: "https://dedash.fun/",
    twitter: "https://x.com/dedashdotfun",
    // featured: {
    //   images: [
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770652/dedash-1_cv7iy1.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770650/dedash-2_rsigoq.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770649/dedash-3_yl7atw.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770648/dedash-4_hrlnrj.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770647/dedash-5_j96vvz.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770646/dedash-6_erqz61.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770644/dedash-7_nyquwm.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770643/dedash-8_wsvldd.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770642/dedash-9_tl3p8c.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770641/dedash-10_bdkan9.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770639/dedash-11_p3ftgu.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785770640/dedash-12_d4seaj.png",
    //   ],
    // },
  },

  // Dot PvP
  {
    id: randomString(),
    title: "Dot PvP",
    description:
      "Dot PvP, a Colyseus MERN stack game, offers real-time multiplayer battles with multiple rooms offering solana rewards.",
    tags: ["Colyseus", "Express.js", "Next.js"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773661266/private/projects/dotpvp_h7vzs9.png",
    // link: "https://agar-test.dev.elpis.cc/",
    twitter: "https://x.com/dotpvpfun",
  },

  // Beat the clock
  {
    id: randomString(),
    title: "Beat the Clock",
    description:
      "Beat the Clock (now ended), built with Next.js, is a game where players/buyers try to claim the prize pool generated by a token.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660588/private/projects/beattheclock_fbvtpr.png",
    // link: "https://www.beattheclock.fun/",
  },

  // 2x Solutions Portfolio
  {
    id: randomString(),
    title: "2x Solutions",
    description:
      "2x Solutions, built with Next.js and Tailwind CSS, is a portfolio website for the company I worked with.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660589/private/projects/2xsols_ku9ihx.png",
    // link: "https://2x-solutions.netlify.app/",
    twitter: "https://x.com/2xsolution",
    // featured: {
    //   images: [
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768226/2x-sol-1_bfrlfj.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768225/2x-sol-2_cikdsm.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768226/2x-sol-4_ml9luo.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768226/2x-sol-3_kaacag.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768226/2x-sol-5_uaeb3s.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768228/2x-sol-6_jv7mds.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768232/2x-sol-7_edoxz6.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768230/2x-sol-9_ao02f9.png",
    //     "https://res.cloudinary.com/lbsvdx2r/image/upload/v1785768228/2x-sol-8_tcvtg9.png",
    //   ],
    // },
  },

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

  // Rekt2Rich
  {
    id: randomString(),
    title: "Rekt2Rich",
    description:
      "Rekt2Rich, a MERN stack crypto recycling platform, allows users to burn old tokens and close old token accounts.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660588/private/projects/rekt_qb689w.png",
    // link: "https://rekt2rich.vercel.app/",
  },

  // Core Mine
  {
    id: randomString(),
    title: "Core Mine",
    description:
      "Core Mine, a MERN stack mining platform, allows users to mine, stake and earn rewards on the Solana blockchain.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660585/private/projects/coin-mine_ak9rop.png",
    // link: "https://core-mine.vercel.app/",
  },

  // c288
  {
    id: randomString(),
    title: "c288",
    description:
      "c288, a MERN stack crypto prediction platform, allows users to predict crypto trends and earn rewards based on their accuracy.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660587/private/projects/c2888_x1nm8y.png",
    // link: "https://c288.vercel.app/",
  },

  // Poopfun
  {
    id: randomString(),
    title: "Poopfun",
    description:
      "Poopfun, a MERN stack Solana token launchpad, allows users to create and launch their own tokens on the Solana blockchain.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660585/private/projects/poopfun_dnujjd.png",
    // link: "https://www.poopfun.app/",
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

  // Degen News
  {
    id: randomString(),
    title: "Degen News",
    description:
      "Degen News, a MERN stack news platform, provides a reporting system, analytics and advertising features.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660588/private/projects/degennews_q2nkzo.png",
    // link: "https://degen-news.vercel.app/",
    twitter: "https://x.com/DegenerateNews",
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

  // iAgent Staking
  {
    id: randomString(),
    title: "iAgent Staking",
    description:
      "iAgent Staking, a Next.js UI for a decentralized staking platform, allows users to stake tokens and earn rewards.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773661265/private/projects/iagent_q80b1t.png",
    link: "https://iagentpro.com/",
    twitter: "https://x.com/iagentprotocol",
  },

  // Ordiz Swap
  {
    id: randomString(),
    title: "Ordiz Swap",
    description:
      "Ordiz Swap, a Next.js UI for a decentralized exchange, allows users to swap NFTs in the Ordiz ecosystem.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660585/private/projects/ordiz_sknfzk.png",
    // link: "https://ordiz.elpis.cc/",
  },

  // Soldao
  {
    id: randomString(),
    title: "Soldao",
    description:
      "Soldao, a Next.js UI for a new EVM protocol, offers mint, swap, bridge and staking features for users.",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660585/private/projects/soldao_cyv9ed.png",
    // link: "https://soldao.elpis.cc/",
  },

  // Aptos Land - landing page
  {
    id: randomString(),
    title: "Aptos Land",
    description:
      "Aptos Land, a Next.js landing page for Aptos Land, a metaverse project on $APTOS",
    tags: ["Next.js", "Tailwind CSS"],
    category: "Frontend",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660587/private/projects/aptosland_zhyg4x.png",
    // link: "https://aptos-land.elpis.cc/",
  },

  // Cloutz
  {
    id: randomString(),
    title: "Cloutz",
    description:
      "Cloutz, a MERN stack Solana token launchpad, allows users to create and launch their own tokens on the Solana blockchain.",
    tags: ["Next.js", "MongoDB", "Express"],
    category: "Full Stack",
    image:
      "https://res.cloudinary.com/elpis-cloud/image/upload/v1773660586/private/projects/cloutz_fzuyu7.png",
    // link: "https://cloutz.vercel.app/",
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

export const featuredProjects = PROJECTS.filter((project) => project.featured);
