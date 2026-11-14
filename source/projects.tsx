/**
 * All project content.
 *
 * - Projects with a `caseStudy` get their own page at /projects/[slug] and
 *   are listed first, in this order, on the home page and on /projects.
 * - Everything else shows up as a card under "More work".
 *
 * Images are either local screenshots in /public/work (pass the base name,
 * the -800 / -1600 .webp variants are picked automatically) or Cloudinary
 * URLs (resized on the fly). See `Shot` in components/reusables.
 */

export interface ProjectImage {
  /** "/work/<name>" for local screenshots, or a full Cloudinary URL. */
  src: string;
  alt: string;
}

export interface CaseStudy {
  role: string;
  timeline: string;
  /** Up to three headline numbers or facts. */
  facts: { value: string; label: string }[];
  problem: string;
  built: string[];
  notes: { title: string; body: string }[];
}

export interface Project {
  slug: string;
  title: string;
  /** Short category line, e.g. "Real-time collaboration". */
  kind: string;
  year?: string;
  context: "Personal" | "2X Solution" | "Client";
  /** One sentence. Used on cards and as the case study standfirst. */
  summary: string;
  /** Three short points shown on the home page row. */
  highlights?: string[];
  stack: string[];
  cover: ProjectImage;
  gallery?: ProjectImage[];
  /** Shown in the browser frame's address bar. */
  host?: string;
  links: {
    live?: string;
    code?: string;
    backend?: string;
    docs?: string;
    x?: string;
  };
  caseStudy?: CaseStudy;
}

const local = (name: string, alt: string): ProjectImage => ({
  src: `/work/${name}`,
  alt,
});

const cloud = (path: string, alt: string): ProjectImage => ({
  src: `https://res.cloudinary.com/${path}`,
  alt,
});

export const PROJECTS: Project[] = [
  /* ------------------------------------------------------------ */
  /*  Case studies                                                  */
  /* ------------------------------------------------------------ */
  {
    slug: "skrivle",
    title: "Skrivle",
    kind: "Real-time collaboration",
    year: "2026",
    context: "Personal",
    summary:
      "A collaborative whiteboard you share with one link. Open the URL, skip the sign-up, and draw with whoever else is on it.",
    highlights: [
      "Each board is a single Yjs CRDT document, so concurrent edits merge without locks.",
      "Live cursors and presence ride the awareness protocol over Socket.IO.",
      "Per-socket rate limits delay abusive traffic without ever losing a legitimate edit.",
    ],
    stack: [
      "Next.js",
      "Yjs (CRDT)",
      "Socket.IO",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "Cloudflare Workers",
    ],
    host: "skrivle.elpis.cc",
    cover: local(
      "skrivle-board",
      "A Skrivle board with a sync diagram, sticky notes and a second participant's live cursor",
    ),
    gallery: [
      local(
        "skrivle-board",
        "A Skrivle board with a sync diagram, sticky notes and a second participant's live cursor",
      ),
      local("skrivle-home", "Skrivle landing page in the light theme"),
      local("skrivle-dark", "Skrivle landing page in the dark theme"),
      cloud(
        "lbsvdx2r/image/upload/v1788982915/skrivel-4_zxmlc6.png",
        "A freehand Skrivle board in the dark theme",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1788982915/skrivel-3_erxh3v.png",
        "Skrivle sign-in with an emailed one-time code",
      ),
    ],
    links: {
      live: "https://skrivle.elpis.cc",
      code: "https://github.com/Elpis-alpha/Skrivle",
      docs: "https://api.skrivle.elpis.cc/docs",
    },
    caseStudy: {
      role: "Design, front end, back end, deployment",
      timeline: "2026",
      facts: [
        { value: "0", label: "accounts needed to start drawing" },
        { value: "< 5 s", label: "target from shared link to first stroke" },
        { value: "CRDT", label: "conflict-free sync, no locks" },
      ],
      problem:
        "Most collaborative tools put a login wall between you and the canvas. I wanted a stranger to open a shared link and be drawing within five seconds, with edits from several people merging cleanly and nothing lost when two of them touch the same thing at once.",
      built: [
        "A canvas with sticky notes, text, rectangles, circles, lines and a freehand pen, plus live cursors that carry each person's name and colour.",
        "A sync server where each board is one Yjs document held in memory while anyone is connected. Clients keep a replica and exchange updates over Socket.IO.",
        "PostgreSQL for users, boards and collaborators, with Yjs snapshots stored as blobs instead of being forced into relational tables.",
        "Guest boards that expire after about 24 hours and can be extended, and optional sign-in by emailed one-time code, GitHub or Google to keep boards for good.",
        "A split deployment: the Next.js front end on Cloudflare Workers through OpenNext, and the API in Docker Compose behind Nginx.",
      ],
      notes: [
        {
          title: "The limit delays work, it does not lose it",
          body: "A link is all it takes to edit a board, so what one socket can send is bounded by token buckets sized at two to three times normal client traffic. When a canvas update goes over the limit it is dropped, and a second later the server sends its state vector so the client replies with everything the server is missing.",
        },
        {
          title: "Presence is the sender's word, permissions are not",
          body: "Cursors, names and selections travel on the Yjs awareness protocol and are never persisted. The server relays them without reading them, which keeps new presence features a front-end change. Anything that affects access is checked against the server's own records.",
        },
        {
          title: "Bounded boards",
          body: "A board's encoded size is capped at 4 MB, and a full board still accepts deletions. The server relays the change an update actually made to the document, not the bytes that arrived, so replays go nowhere.",
        },
      ],
    },
  },

  {
    slug: "haestore",
    title: "Hæstore",
    kind: "Commerce platform",
    year: "2026",
    context: "Personal",
    summary:
      "A storefront and admin console where the catalogue, the filters and the front page are defined by admins instead of being hardcoded.",
    highlights: [
      "Admins define categories and typed attributes; variants and storefront filters are generated from them.",
      "Checkout runs as an idempotent order state machine with Stripe and PayPal.",
      "Meilisearch as the read model, Redis sessions, MongoDB transactions.",
    ],
    stack: [
      "Next.js 15",
      "React 19",
      "Express 5",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Meilisearch",
      "Stripe",
      "PayPal",
      "Vitest",
      "Docker",
    ],
    host: "haestore.elpis.cc",
    cover: local(
      "haestore-shelf",
      "The Hæstore coffee shelf with filters generated from its attributes",
    ),
    gallery: [
      local(
        "haestore-shelf",
        "The Hæstore coffee shelf with filters generated from its attributes",
      ),
      local("haestore-home", "The Hæstore front page, composed in the console"),
      local(
        "haestore-product",
        "A Hæstore product page with variants and specification",
      ),
      local(
        "haestore-admin",
        "The Hæstore admin console showing orders to pack and people waiting",
      ),
    ],
    links: {
      live: "https://haestore.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Haestore",
    },
    caseStudy: {
      role: "Design, front end, back end, deployment",
      timeline: "2026 (rebuild of a 2022 project)",
      facts: [
        { value: "4", label: "datastores in the architecture" },
        { value: "2", label: "payment providers behind one state machine" },
        { value: "ADRs", label: "for every contested decision" },
      ],
      problem:
        "In 2022 I built a shop called Adaptable Stores. Nothing in it was adaptable: products had a hardcoded three-value category and no variants, options or stock. Hæstore is the complete rebuild that earns the name.",
      built: [
        "A category tree and typed attributes that admins define themselves: name, type, unit, options, and whether each one is filterable or acts as a variant axis.",
        "Variants generated from the axes a product actually uses, so a coffee sold only as whole bean never grows a phantom ground variant.",
        "Storefront filters generated from those definitions with correct counts. Nothing is hardcoded, and an end-to-end test asserts exactly that.",
        "A storefront composer: admins arrange the front page from ordered, versioned blocks.",
        "Passwordless sign-in with opaque Redis sessions, and a guest cart that re-prices and merges on sign-in.",
        "Checkout as an idempotent order state machine with Stripe and PayPal, plus verified-purchase reviews and support conversations.",
      ],
      notes: [
        {
          title: "Search is a read model",
          body: "MongoDB is the source of truth and runs as a replica set so orders and stock change inside transactions. Meilisearch serves the storefront's search and facets, and is kept in sync as a derived view.",
        },
        {
          title: "Payments that can be retried",
          body: "Orders move through an explicit state machine. Stripe events are verified by signature, PayPal captures pass five separate checks, and every step is idempotent so a retried webhook cannot charge or ship twice.",
        },
        {
          title: "Decisions on the record",
          body: "The repository carries architecture, data model, checkout and accessibility documents, plus numbered decision records for the forks that could have gone either way. A newcomer can read why, not only what.",
        },
      ],
    },
  },

  {
    slug: "dot-pvp",
    title: "Dot PvP",
    kind: "Real-time multiplayer game",
    year: "2025",
    context: "2X Solution",
    summary:
      "A real-time multiplayer arena with on-chain rewards. I rebuilt its state sync so rooms could hold far more players without lag.",
    highlights: [
      "Custom delta updates took real-time payloads from kilobytes to bytes.",
      "A 16 ms batching pipeline with binary diffs raised update throughput.",
      "About 70% more concurrent players per room after the rewrite.",
    ],
    stack: [
      "Colyseus",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Redis",
      "Workers",
      "Solana",
    ],
    cover: cloud(
      "elpis-cloud/image/upload/v1773661266/private/projects/dotpvp_h7vzs9.png",
      "A Dot PvP match in progress with several players in one room",
    ),
    links: {
      x: "https://x.com/dotpvpfun",
    },
    caseStudy: {
      role: "Full-stack developer",
      timeline: "Aug – Sep 2025",
      facts: [
        { value: "~70%", label: "more concurrent players per room" },
        { value: "16 ms", label: "batching window for state updates" },
        { value: "KB → B", label: "size of a real-time payload" },
      ],
      problem:
        "Real-time payloads were measured in kilobytes, and gameplay lagged as rooms filled up. The game needed more players per room without more bandwidth per player.",
      built: [
        "A custom delta update system across the Node.js and Colyseus back end and the Next.js client, which cut real-time payloads from kilobytes to bytes and removed gameplay lag.",
        "A 16 ms batching pipeline with binary diff logic that improved update throughput and allowed roughly 70% more concurrent players per room.",
        "A refactor of back-end state distribution, with client-side background stores for visibility filtering and fast UI updates.",
        "Synchronisation and scaling work using Redis, workers and service-oriented patterns.",
      ],
      notes: [
        {
          title: "Send what changed",
          body: "Most of a room's state is identical from one update to the next. Diffing against the previous state and sending only the difference is what moved payloads from kilobytes to bytes.",
        },
        {
          title: "Batch on a fixed window",
          body: "Updates are collected and flushed every 16 ms, about one frame at 60 fps. Binary diffs keep each flush small, which is where the extra throughput came from.",
        },
        {
          title: "Filter on the client, off the main path",
          body: "Background stores on the client decide what is visible and feed the UI, so rendering never waits on the network layer.",
        },
      ],
    },
  },

  {
    slug: "ricefi",
    title: "Ricefi",
    kind: "On-chain farming game",
    year: "2025 – 2026",
    context: "2X Solution",
    summary:
      "A farm-management game with presales, land claiming and on-chain rewards, built as the senior full-stack developer on a three-engineer team.",
    highlights: [
      "Sign-in with Ethereum, invite-code onboarding, presale and whitelist flows.",
      "Custom Envio indexer keeps on-chain events and the back end in sync.",
      "Admin tooling and Docker deployments shipped through CI/CD.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "ethers",
      "Three.js",
      "Envio",
      "Socket.IO",
      "Docker",
    ],
    cover: cloud(
      "lbsvdx2r/image/upload/v1785769671/ricefi-2_njk512.png",
      "The Ricefi farmer dashboard with land, referrals and rewards",
    ),
    gallery: [
      cloud(
        "lbsvdx2r/image/upload/v1785769671/ricefi-2_njk512.png",
        "The Ricefi farmer dashboard with land, referrals and rewards",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785769471/ricefi-6_snuxmr.png",
        "A Ricefi farm plot rendered in 3D",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785769472/ricefi-5_uhilsi.png",
        "The Ricefi seed collection",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785769470/ricefi-7_c5sfco.png",
        "The Ricefi operations dashboard",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785769672/ricefi-1_et3dku.png",
        "The Ricefi landing screen",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785769473/ricefi-8_dkheez.png",
        "The Ricefi how-to-play screen",
      ),
    ],
    links: {
      x: "https://x.com/ricefinancefun",
    },
    caseStudy: {
      role: "Senior full-stack developer",
      timeline: "2025 – 2026",
      facts: [
        { value: "3", label: "engineers on the development team" },
        { value: "5", label: "cross-functional partners: sales, UX, product, QA" },
        { value: "SIWE", label: "wallet sign-in, no passwords" },
      ],
      problem:
        "Ricefi needed a game economy that players could trust: land, presales and rewards that live on chain, with a fast, friendly game on top. That means two sources of truth, the chain and the database, that must never disagree.",
      built: [
        "Core platform features across Next.js and Node.js/Express in TypeScript with MongoDB: wallet authentication with SIWE, invite-code onboarding, presale and whitelist flows, land claiming and gameplay state.",
        "A back-end integration with a custom Envio indexer that syncs on-chain events, presale transactions, user rewards and land metadata.",
        "Schemas and API endpoints for users, presale entries, land data, game logic and leaderboards.",
        "Reusable UI components, dashboards and socket-powered real-time updates in Next.js.",
        "Full admin tooling: invite code manager, presale controls, Merkle root generation, transaction validation, rate limiting and secure session management.",
        "Docker-based back-end deployments through CI/CD pipelines.",
      ],
      notes: [
        {
          title: "The chain is the ledger, the database is the game",
          body: "On-chain events flow through the indexer into the back end, so the game can stay fast and queryable while ownership and payments remain verifiable on chain.",
        },
        {
          title: "Whitelists without a giant list",
          body: "Presale eligibility is proven with Merkle roots generated from the admin console, so the full whitelist never has to live on chain.",
        },
        {
          title: "Working in a small team",
          body: "Three engineers and a cross-functional group of five, run with Agile practices. I owned features from schema to deployed UI and kept the admin tools ahead of what operations needed.",
        },
      ],
    },
  },

  {
    slug: "aide-memoire",
    title: "Aide-mémoire",
    kind: "Notes app, contract-first API",
    year: "2026",
    context: "Personal",
    summary:
      "Rich-text notes organised into sections and tags, with per-note public sharing and type safety across two repositories.",
    highlights: [
      "The API's zod schemas generate the OpenAPI spec; the client generates its types from it.",
      "Public pages are Server Components that ship no client JavaScript.",
      "Same-origin API through rewrites, so cookies stay host-only and CORS never applies.",
    ],
    stack: [
      "Next.js 16",
      "React 19",
      "TipTap 3",
      "TanStack Query",
      "Zustand",
      "Express 5",
      "MongoDB",
      "zod",
      "OpenAPI",
      "Vitest",
    ],
    host: "aide-memoire.elpis.cc",
    cover: local(
      "aide-home",
      "The Aide-mémoire landing page with a live rich-text editor",
    ),
    links: {
      live: "https://aide-memoire.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Aide-Memoire-Frontend",
      backend: "https://github.com/Elpis-alpha/Aide-Memoire-Backend",
    },
    caseStudy: {
      role: "Design, front end, back end, deployment",
      timeline: "2026 (rebuild of a 2022 project)",
      facts: [
        { value: "1", label: "contract, owned by the API" },
        { value: "0", label: "client JavaScript on public pages" },
        { value: "18", label: "routes in the web app" },
      ],
      problem:
        "Two repositories, one for the API and one for the web app, usually drift. A field is renamed on one side and the other finds out in production. I wanted the type safety of a monorepo without merging the repos.",
      built: [
        "An Express 5 API in TypeScript where zod validates every boundary, and those same schemas generate openapi.json.",
        "A Next.js front end whose request and response types are generated from that file. CI regenerates them and fails if they differ.",
        "A TipTap editor with autosave, sections, tags and search, with client state in Zustand and server state in TanStack Query.",
        "Per-note public sharing, served as Server Components with no client JavaScript.",
        "Environment validation at boot: the API refuses to start if a variable is missing or malformed, instead of failing later on a request path.",
      ],
      notes: [
        {
          title: "A breaking change is a compile error",
          body: "Because the client's types come from the API's own contract, renaming a field breaks the web app's build immediately. Nothing waits for a user to find it.",
        },
        {
          title: "Same origin on purpose",
          body: "The browser only ever talks to /api on the web app's origin, and Next.js rewrites the request through. The auth cookie is host-only, SameSite=Lax is enough, and CORS never enters the picture.",
        },
        {
          title: "The gate is not the lock",
          body: "Route protection checks that a session cookie is present before any HTML is sent. The API verifies it on every request and is the real boundary: a forged cookie earns a redirect, never data.",
        },
      ],
    },
  },

  /* ------------------------------------------------------------ */
  /*  More work                                                     */
  /* ------------------------------------------------------------ */
  {
    slug: "teacat-books",
    title: "Teacat Books",
    kind: "Bookstore and reader",
    year: "2025",
    context: "Personal",
    summary:
      "Discover, borrow or buy books, then read them in a built-in reader with adjustable themes.",
    stack: ["Next.js", "Redux Toolkit", "Tailwind CSS", "MongoDB"],
    host: "teacat.elpis.cc",
    cover: local("teacat-books", "The Teacat Books catalogue with filters"),
    gallery: [
      local("teacat-books", "The Teacat Books catalogue with filters"),
      local("teacat-book", "A book page on Teacat Books"),
      local("teacat-home", "The Teacat Books landing page"),
      cloud(
        "lbsvdx2r/image/upload/v1785768694/teacat-7_kk4cel.png",
        "The Teacat Books reader",
      ),
      cloud(
        "lbsvdx2r/image/upload/v1785768697/teacat-5_dncz39.png",
        "Borrowed and purchased books on Teacat Books",
      ),
    ],
    links: {
      live: "https://teacat.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Teacat-Books-FE",
      backend: "https://github.com/Elpis-alpha/Teacat-Books-BE",
    },
  },
  {
    slug: "dedash",
    title: "DeDash",
    kind: "Multi-chain analytics",
    context: "2X Solution",
    summary:
      "A dashboard that follows on-chain traders and their activity across multiple chains.",
    stack: ["Next.js", "Express", "TypeScript"],
    cover: cloud(
      "elpis-cloud/image/upload/v1773669380/private/projects/dedash_jga6lo.png",
      "The DeDash activity feed",
    ),
    links: { x: "https://x.com/dedashdotfun" },
  },
  {
    slug: "sapphire-plaza",
    title: "The Sapphire Plaza",
    kind: "Hotel website",
    context: "Personal",
    summary:
      "A hotel site with rooms and reservations, with all content managed in Sanity.",
    stack: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    host: "sapphire-plaza.elpis.cc",
    cover: local("sapphire", "The Sapphire Plaza hotel home page"),
    links: {
      live: "https://sapphire-plaza.elpis.cc/",
      code: "https://github.com/Elpis-alpha/The-Sapphire-Plaza",
    },
  },
  {
    slug: "fresh-bites",
    title: "Fresh Bites Grill",
    kind: "Restaurant website",
    context: "Personal",
    summary:
      "A restaurant site whose menu and reservations are managed through Sanity.",
    stack: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    host: "fresh-bites.elpis.cc",
    cover: local("freshbites", "The Fresh Bites Grill home page"),
    links: {
      live: "https://fresh-bites.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Small-Resturant",
    },
  },
  {
    slug: "master-your-mortgage",
    title: "Master Your Mortgage",
    kind: "Marketing site and calculator",
    context: "Personal",
    summary:
      "A mortgage services site with a repayment calculator and a friendly, illustrated interface.",
    stack: ["React", "Tailwind CSS"],
    host: "mortgage.elpis.cc",
    cover: local("mortgage", "The Master Your Mortgage home page"),
    links: {
      live: "https://mortgage.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Simple-Mortgage",
    },
  },
  {
    slug: "ludo",
    title: "Ludo",
    kind: "Browser game",
    context: "Personal",
    summary:
      "Ludo for two to four players with computer opponents, in plain JavaScript with no dependencies and a tested rules engine.",
    stack: ["JavaScript", "HTML", "CSS", "Web Audio"],
    host: "ludo.elpis.cc",
    cover: local("ludo", "The Ludo game start screen with a 3D board"),
    links: {
      live: "https://ludo.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Ludo",
    },
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    kind: "Browser game",
    context: "Personal",
    summary:
      "Drawn stroke by stroke on canvas, with three difficulty levels, undo and redo, and full keyboard and screen reader support.",
    stack: ["JavaScript", "Canvas", "Web Audio"],
    host: "tic-tac-toe.elpis.cc",
    cover: local("ttt", "Tic Tac Toe drawn on graph paper"),
    links: {
      live: "https://tic-tac-toe.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Tic-Tac-Toe",
    },
  },
  {
    slug: "elpis-works",
    title: "Elpis Works",
    kind: "Collection of small apps",
    context: "Personal",
    summary:
      "Eight small web apps built from scratch without frameworks, on one searchable landing page.",
    stack: ["JavaScript", "HTML", "CSS"],
    host: "little-works.elpis.cc",
    cover: local("works", "The Elpis Works landing page"),
    links: {
      live: "https://little-works.elpis.cc/",
      code: "https://github.com/Elpis-alpha/Elpis-Works",
    },
  },
];

export const CASE_STUDIES = PROJECTS.filter((p) => p.caseStudy);
export const MORE_WORK = PROJECTS.filter((p) => !p.caseStudy);

export const getProject = (slug: string) =>
  PROJECTS.find((p) => p.slug === slug);

/*
 * Archive. Retired from the site, kept here for reference (the full entries
 * are in git history before the November 2026 redesign).
 *
 * Coin15, Beat the Clock, 2x Solutions (company site), Rekt2Rich, Core Mine,
 * c288, Poopfun, Adaptable Stores (rebuilt as Hæstore), Little Gathering
 * (live demo returns 500), Degen News, iAgent Staking (domain lapsed),
 * Ordiz Swap, Soldao, Aptos Land, Cloutz, Elpis Weather.
 */
