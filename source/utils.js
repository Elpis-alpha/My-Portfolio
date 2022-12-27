import { v4 } from 'uuid'

import Link from "next/link"


export const dev = {

  intro: "Hi, I'm",

  firstName: "Festus",

  lastName: "Gbolade",

  devName: "Elpis",

  experienceYears: new Date().getFullYear() - new Date('2021-01-01').getFullYear(),

  dateOfBirth: new Date('2001-09-18'),

  age: new Date().getFullYear() - new Date('2001-09-18').getFullYear(),

  description: <>

    I am a Full Stack <strong>(MERN Stack)</strong> Web Developer who build high quality websites.

    I&apos;m also called <strong>Elpis</strong>.

  </>,

}

export const otherLinks = {

  title: <strong className="hext">Other Links</strong>,

  description: <p>

    <Link href="/works"><a title='Works & Projects - Various works and projects completed by me'>

      Works & Projects - Various works and projects completed by me

    </a></Link>

    <Link href="/services#skills-segmment"><a title='My Tech Stack - Languages and Frameworks that I use'>

      My Tech Stack - Languages and Frameworks that I work with

    </a></Link>

    <Link href="/about"><a title='About Me - A little biography on my life so far as a web developer'>

      About Me - A little biography on my life so far as a web developer

    </a></Link>

  </p>,


}

export const elpis = {

  title: <h1 className="hext">{"I'm also Elpis"}</h1>,

  description: <p>

    A young man with a passion for web development who is proficient at his work.

  </p>

}

export const roles = [

  {
    name: "React JS Projects", altName: "Front End Developer", hook: "rjd", description: "I use react to build responsive and interactive UI designs.",

    projectDescription: "This includes all major projects designed with react or nextjs. Using these frameworks, I am able to design the responsive, optimized and interactive websites displayed in this section."

  },

  {
    name: "Node JS Projects", altName: "Back End Developer", hook: "aed", description: "I use Express to create REST API and databases for the frontend.",

    projectDescription: "This includes all major projects designed with Express js, Mongodb and HBS. These are primarily used to provide API endpoints for the frontend, but ocassionally they serve web pages."

  },

  {
    name: "Vanilla Web Projects", altName: "Web Developer", hook: "wbd", description: "I use plain HTML, CSS and Javascript to build web applications.",

    projectDescription: "This includes all major projects or minor projects containers designed with HTML, CSS and vanilla Javascript. It also features some web games as well as some small projects containers."

  },

]

export const allRoles = {

  name: "All Projects", altName: "Elpis 😀😀😀", hook: "---", description: "I use many useful technologies to create amazing websites",

  projectDescription: "This includes all the major projects I have participated in. Through the help React, Nextjs, Express, Node, Mongodb and other useful technologies have I been able to create these wonders."

}

export const skills = [

  {

    _kid: v4(),

    title: "HTML",

    shortDesc: "Markup",

    description: "HyperText Markup Language is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.",

    logo: "html.png"

  },

  {

    _kid: v4(),

    title: "CSS",

    shortDesc: "Styling",

    description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",

    logo: "css.png"

  },

  {

    _kid: v4(),

    title: "Javascript",

    shortDesc: "Interactive",

    description: "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.",

    logo: "javascript.png"

  },

  {

    _kid: v4(),

    title: "Typescript",

    shortDesc: "Type Checking",

    description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript.",

    logo: "typescript.png"

  },

  {

    _kid: v4(),

    title: "GraphQL",

    shortDesc: "Client Query",

    description: "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data. GraphQL was developed internally by Facebook in 2012 before being publicly released in 2015.",

    logo: "graphql.png"

  },

  {

    _kid: v4(),

    title: "React",

    shortDesc: "Dynamic",

    description: "JavaScript library for building user interfaces, React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",

    logo: "react.png"

  },

  {

    _kid: v4(),

    title: "Nextjs",

    shortDesc: "Pre-rendering",

    description: "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.",

    logo: "next.png"

  },

  {

    _kid: v4(),

    title: "Express",

    shortDesc: "Backend",

    description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.",

    logo: "express.png"

  },

  {

    _kid: v4(),

    title: "Node",

    shortDesc: "Javascript",

    description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is designed to build scalable network applications.",

    logo: "node.png"

  },

  {

    _kid: v4(),

    title: "Mongodb",

    shortDesc: "Database",

    description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.",

    logo: "mongodb.png"

  },

  {

    _kid: v4(),

    title: "Nodemailer",

    shortDesc: "Sending Mails",

    description: "Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.",

    logo: "nodemailer.png"

  },

  {

    _kid: v4(),

    title: "Socket.IO",

    shortDesc: "Websockets",

    description: "Socket.IO is a event-driven JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.",

    logo: "socket-io.png"

  },

  {

    _kid: v4(),

    title: "E-Commerce",

    shortDesc: "Market and Stores",

    description: "Ecommerce developers are responsible for creating the online shopping experiences that consumers have come to expect. They build ecommerce websites and applications from scratch, often working with a variety of different technologies and platforms.",

    logo: "e-commerce.png"

  },

  {

    _kid: v4(),

    title: "Others",

    shortDesc: "Small Stuff",

    description: "Honestly to list all my skills is a hassle so I listed only the most relevant however there are much more skills I have. For instance I actually know Django, Python, Redis, Channels as that was what I first learnt before I moved to what I am. There's also Git and much more so let me just stop here 😁.",

    logo: "others.png"

  },

]

export const services = [

  {

    _sid: v4(),

    title: "Building Next.js Applications",

    description: <>

      I build optimized websites using the nextjs framework. The main advantage of using nextjs over react to me

      is Search Engine Optimization (SEO) and faster load times (preloading). So if your websites require SEO, this is the way to go.

    </>,

  },

  {

    _sid: v4(),

    title: "Building React Applications",

    description: <>

      I build interactive websites using the reactjs framework. Using react, I&apos;m able to design beautiful webpages with

      rich user interface. React websites are significantly faster than websites built with vanilla javascript.

    </>,

  },

  {

    _sid: v4(),

    title: "Building REST API with Express",

    description: <>

      I build high perfomance REST API using the Express framework. The Express Framework is installed on Nodejs and is used

      to provide API endpoints. Ocassionally, I use the framework to also serve webpages for mail verification, complaint submission and more.

    </>,

  },

  {

    _sid: v4(),

    title: "Integration of Mongodb Database",

    description: <>

      I implement database functionality into websites that require a means to store data. Through Mongodb, Atlas and Express

      I&apos;m able to integrate functional databases into an Express application.

    </>,

  },

  {

    _sid: v4(),

    title: "Building Dynamic Websites",

    description: <>

      I failed to provide an accurate description in the heading to prevent it from being too long. This service features the building

      of dynamic websites or web applications through just HTML, CSS and Vanilla Javascript.

    </>,

  },

  {

    _sid: v4(),

    title: "Building Static Websites",

    description: <>

      I build responsive static websites with just HTML and CSS. Static websites are a series of webpages whose content are static

      (non-changing), it does not require javascript as it just renders the same content at all times unless changed by the developer.

    </>,

  },

  {

    _sid: v4(),

    title: "Building Landing Pages",

    description: <>

      I build beautiful and responsive landing pages with HTML and CSS. If you&apos;re thinking: <em>&quot;Why Landing Page?&quot;</em> or

      <em> &quot;Aren&apos;t they just static websites?&quot;</em>. Well, Landing pages are used to guide clients to a particular action while the later just simply renders information.

    </>,

  },

  {

    _sid: v4(),

    title: "Building Portfolios",

    description: <>

      I build beautiful, SEO friendly, optimized and attractive portfolios using Nextjs or React. Porfolios are quite important as they showcase

      your works, skills and services to potential clients. If you&apos;re looking for one like this or even better, you&apos;re at the right place.

    </>,

  },

]

export const works = [
  {

    _wid: v4(),

    title: "Adaptable Stores",

    description: <>

      An e-commerce store where you can buy goods by adding it

      to your cart and then proceeding to checkout using paypal or stripe.

    </>,

    liveURL: "https://adaptable-stores.vercel.app/?view=query",

    sourceCode: "https://github.com/Elpis-alpha/Adaptable-Stores-Frontend",

    type: ["rjd", "---"],

    imageurl: "/images/projects/adaptable-stores.png"

  },

  {

    _wid: v4(),

    title: "Aide-mémoire",

    description: <>

      A note keeping application where individuals sign up hence enabling them to create

      notes, sections and much more content.

    </>,

    liveURL: "https://aide-memoire.vercel.app/verify",

    sourceCode: "https://github.com/Elpis-alpha/Aide-Memoire-Frontend",

    type: ["rjd", "---"],

    imageurl: "/images/projects/aide-memoire.png"

  },

  {

    _wid: v4(),

    title: "Little Gathering",

    description: <>

      A forum website where individuals can view the thoughts (posts) of others or post theirs, comment on them, express

      their satisfaction by liking or disliking and do much more

    </>,

    liveURL: "https://little-gathering.vercel.app",

    sourceCode: "https://github.com/Elpis-alpha/little-gathering-frontend",

    type: ["rjd", "---"],

    imageurl: "/images/projects/little-gathering.png"

  },

  {

    _wid: v4(),

    title: "Elpis Weather",

    description: <>

      A classic weather application that allows to obtain the weather forecast in a searched location or in their

      appproximate location. Sigining up also enables saving locations

    </>,

    liveURL: "https://elpis-weather.netlify.app",

    sourceCode: "https://github.com/Elpis-alpha/weather-frontend",

    type: ["rjd", "---"],

    imageurl: "/images/projects/elpis-weather.png"

  },

  {

    _wid: v4(),

    title: "Aide-mémoire (Backend)",

    description: <>

      The backend side of Aide-mémoire which features the REST API, email verification,

      an express server, database, complaints and a nice UI.

    </>,

    liveURL: "https://elpis-aide-memoire.herokuapp.com",

    sourceCode: "https://github.com/Elpis-alpha/Aide-Memoire-Backend",

    type: ["aed", "---"],

    imageurl: "/images/projects/aide-memoire-back.png"

  },

  {

    _wid: v4(),

    title: "Adaptable Stores (Backend)",

    description: <>

      The backend side of Adaptable Stores which features the REST API, email verification,

      an express server, database, complaints and a nice UI.

    </>,

    liveURL: "https://elpis-adaptable-stores.herokuapp.com/",

    sourceCode: "https://github.com/Elpis-alpha/Adaptable-Stores-Backend",

    type: ["aed", "---"],

    imageurl: "/images/projects/adaptable-stores-back.png"

  },

  {

    _wid: v4(),

    title: "Little Gathering (Backend)",

    description: <>

      The backend side of Little Gathering which features the REST API,

      an express server, database and much more.

    </>,

    liveURL: "https://elpis-little-gathering.herokuapp.com/api/posts",

    sourceCode: "https://github.com/Elpis-alpha/little-gathering-backend",

    type: ["aed", "---"],

    imageurl: "/images/projects/node-pic.png"

  },

  {

    _wid: v4(),

    title: "Elpis Weather (Backend)",

    description: <>

      The backend side of Elpis Weather which features the REST API,

      an express server, database, a geolocation API, a weather api and much more.

    </>,

    liveURL: "https://github.com/Elpis-alpha/weather-backend",

    sourceCode: "https://github.com/Elpis-alpha/weather-backend",

    type: ["aed", "---"],

    imageurl: "/images/projects/node-pic.png"

  },

  {

    _wid: v4(),

    title: "Landing Pages",

    description: <>

      A compilation of some of the landing pages created by me, I got most of their

      designs from google but the actual code is all mine. Check them out here

    </>,

    liveURL: "https://elpis-landing-pages.netlify.app/",

    sourceCode: "https://github.com/Elpis-alpha/Landing-Pages",

    type: ["wbd", "---"],

    imageurl: "/images/projects/ludo.png"

  },

  {

    _wid: v4(),

    title: "Ludo",

    description: <>

      A simple ludo game in which two to four players can engage and these players can be

      virtual or real with customized avatars and colors.

    </>,

    liveURL: "https://elpis-ludo.netlify.app",

    sourceCode: "https://github.com/Elpis-alpha/Ludo",

    type: ["wbd", "---"],

    imageurl: "/images/projects/ludo.png"

  },

  {

    _wid: v4(),

    title: "Tic Tac Toe",

    description: <>

      A simple game of naught and crosses (Tic Tac Toe) that can be played by two players or

      against the system. It also features multiple options including difficulty and much more.

    </>,

    liveURL: "https://elpis-alpha.github.io/Tic-Tac-Toe",

    sourceCode: "https://github.com/Elpis-alpha/Tic-Tac-Toe",

    type: ["wbd", "---"],

    imageurl: "/images/projects/tic-tac-toe.png"

  },

  {

    _wid: v4(),

    title: "My A.I",

    description: <>

      It&apos;s not actually an A.I, it&apos;s just a simple application that registers a user,

      collects data from the user and process it into useful information.

    </>,

    liveURL: "https://elpis-alpha.github.io/My-A.I",

    sourceCode: "https://github.com/Elpis-alpha/My-A.I",

    type: ["wbd", "---"],

    imageurl: "/images/projects/my-a-i.png"

  },

  {

    _wid: v4(),

    title: "Elpis Works",

    description: <>

      A list of some projects made by me, too little to add here but too great to ignore.

      So there you have it, kind of a mini portfolio.

    </>,

    liveURL: "https://elpis-alpha.github.io/Elpis-Works",

    sourceCode: "https://github.com/Elpis-alpha/Elpis-Works",

    type: ["wbd", "---"],

    imageurl: "/images/projects/elpis-works.png"

  },

]

export const social = {

  email: "Elpis409@gmail.com",

  phoneLine: "+2349163704134",

  telegram: "https://t.me/Elpis407",

  whatsapp: "https://wa.me/%2B2349163704134?text=Your%20services%20as%20a%20web%20developer%20are%20required.%20Reply%20if%20interested",

  paypal: "",

  twitter: "",

  stackOverflow: "https://stackoverflow.com/users/13952926/elpis",

  fiverr: "https://www.fiverr.com/elpis_alpha?public_mode=true",

  upwork: "https://www.upwork.com/freelancers/~016ec73d926e24362d?viewMode=1",

  linkedin: "https://www.linkedin.com/in/elpis-alpha",

  instagram: "https://www.instagram.com/elpis_alpha/",

  github: "https://github.com/Elpis-alpha",

  reddit: "https://www.reddit.com/user/Elpis409",

}

export const facts = [

  <div className="a-fact" key={v4()}>I love cats but don&apos;t have one</div>,

  <div className="a-fact" key={v4()}>My favourite color is white</div>,

  <div className="a-fact" key={v4()}>I&apos;m so into latest tech</div>,

  <div className="a-fact" key={v4()}>I love anime</div>,

  <div className="a-fact" key={v4()}>I&apos;m an INTJ-T</div>,

  <div className="a-fact" key={v4()}>I&apos;m my role model (yeah! yeah!!)</div>,

  <div className="a-fact" key={v4()}>I&apos;m {dev.age} years old ({"it's automatic"})</div>,

  <div className="a-fact" key={v4()}>I&apos;m still in school (kinda sucks)</div>,

  <div className="a-fact" key={v4()}>I love sweets (hope I don&apos;t get diabetes)</div>,

  <div className="a-fact" key={v4()}>I love designing (both web and structural)</div>,

  <div className="a-fact" key={v4()}>I don&apos;t have a girlfriend (yet!)</div>,

  <div className="a-fact" key={v4()}>I wish I can fly (who doesn&apos;t)</div>,

  <div className="a-fact" key={v4()}>I&apos;m almost two meters tall (1.96m)</div>,

  <div className="a-fact" key={v4()}>I love video games</div>,

  <div className="a-fact" key={v4()}>I workout everyday</div>,

  <div className="a-fact" key={v4()}>I love country music</div>,

  <div className="a-fact" key={v4()}>I love pizza (who doesn&apos;t, except the healthy ones)</div>,

  <div className="a-fact" key={v4()}>Star wars is awesome (like seriously)</div>,

  <div className="a-fact" key={v4()}>I&apos;m a bit wierd (like who isn&apos;t)</div>,

  <div className="a-fact" key={v4()}>I really love cats (really really)</div>,

  <div className="a-fact" key={v4()}>I&apos;ve been to the Moon (now that&apos;s a lie)</div>

]
