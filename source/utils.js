import { v4 } from 'uuid'


export const dev = {

  firstName: "Festus",

  lastName: "Gbolade",

  devName: "Elpis",

  experienceYears: new Date().getFullYear() - new Date('2021-01-01').getFullYear(),

  description: <>

    I am a Full Stack Web Developer which means I use both front end (React/Next) and backend (Express & Mongodb)

    to build amazing websites. I'm <strong>Elpis</strong> by the way.

  </>

}

export const elpis = {

  title: "I'm also Elpis",

  description: <>

    I build beautiful, optimized and responsive websites that attracts people to them.

    <strong>Let's build your dream together</strong>

  </>

}

export const roles = [

  {
    name: "React JS Developer", altName: "Front End Developer", hook: "rjd", description: "I use react to build responsive and interactive UI designs.",

    projectDescription: "This includes all major projects designed with react or nextjs. Using these frameworks, I am able to design the responsive, optimized and interactive websites displayed in this section."

  },

  {
    name: "Node JS Developer", altName: "Back End Developer", hook: "aed", description: "I use Express to create rest API and databases for the frontend.",

    projectDescription: "This includes all major projects designed with Express js, Mongodb and HBS. These are primarily used to provide API endpoints for the frontend, but ocassionally they serve web pages."

  },

  {
    name: "Web Developer", altName: "Web Developer", hook: "wbd", description: "I use plain HTML, CSS and Javascript to build web applications.",

    projectDescription: "This includes all major projects or minor projects containers designed with HTML, CSS and vanilla Javascript. It also features some web games as well as some small projects containers."

  },

]

export const allRoles = {

  name: "Full Stack Developer", altName: "Elpis 😀😀😀", hook: "---", description: "I use many useful technologies to create amazing websites",

  projectDescription: "This includes all the major projects I have participated in. Through the help React, Nextjs, Express, Node, Mongodb and other useful technologies have I been able to create these wonders."

}

export const skills = [

  {

    _sid: 1,

    title: "HTML",

    description: <div>

      HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.

    </div>,

  },

  {

    _sid: 2,

    title: "CSS",

    description: <div>

      Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

    </div>,

  },

  {

    _sid: 3,

    title: "Javascript",

    description: <div>

      JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.

    </div>,

  },

  {

    _sid: 4,

    title: "React",

    description: <div>

      A JavaScript library for building user interfaces, React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

    </div>,

  },

  {

    _sid: 5,

    title: "Nextjs",

    description: <div>

      Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.

    </div>,

  },

  {

    _sid: 6,

    title: "Express",

    description: <div>

      Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

    </div>,

  },

  {

    _sid: 7,

    title: "Node",

    description: <div>

      Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is designed to build scalable network applications.

    </div>,

  },

  {

    _sid: 8,

    title: "Mongodb",

    description: <div>

      MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

    </div>,

  },

  {

    _sid: 9,

    title: "Nodemailer",

    description: <div>

      Nodemailer is a module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.

    </div>,

  },

  {

    _sid: 10,

    title: "English",

    description: <div>

      English is a West Germanic language first spoken in early Medival England which eventually became the leading language of interna.... What am I even writing.

      Sorry about all that fuss, bottom line is that I speak English. Why did I even bother writing this?

      Anyways, thanks for taking your time to read this, pls proceed

    </div>,

  },

  {

    _sid: 11,

    title: "Tip Tap",

    description: <div>

      Tiptap gives you full control about every single aspect of your text editor experience. It’s customizable, comes with a ton of extensions, is open source and has an extensive documentation. Join our welcoming community and start building cool things!

    </div>,

  },

  {

    _sid: 12,

    title: "Socket.IO",

    description: <div>

      Socket.IO is a event-driven JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for Node.js. Both components have a nearly identical API.

    </div>,

  },

]

export const works = [

  {

    _wid: v4(),

    title: "Aide-mémoire",

    description: <>

      A note keeping application where individuals sign up hence enabling them to create

      notes, sections and much more content.

    </>,

    liveURL: "https:\\aide-memoire.vercel.app/verify",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https:\\little-gathering.vercel.app",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https:\\elpis-weather.netlify.app",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https:\\elpis-aide-memoire.herokuapp.com",

    sourceCode: "https://github.com/Elpis-alpha/...",

    type: ["aed", "---"],

    imageurl: "/images/projects/aide-memoire-back.png"

  },

  {

    _wid: v4(),

    title: "Little Gathering (Backend)",

    description: <>

      The backend side of Aide-mémoire which features the REST API,

      an express server, database and much more.

    </>,

    liveURL: "https:\\elpis-little-gathering.herokuapp.com/api/posts",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https:\\elpis-little-gathering.herokuapp.com/api/posts",

    sourceCode: "https://github.com/Elpis-alpha/...",

    type: ["aed", "---"],

    imageurl: "/images/projects/node-pic.png"

  },

  {

    _wid: v4(),

    title: "Ludo",

    description: <>

      A simple ludo game in which two to four players can engage and these players can be

      virtual or real with customized avatars and colors.

    </>,

    liveURL: "https://elpis-ludo.netifly.app",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https://elpis-alpha.github.io/tic-tac-toe",

    sourceCode: "https://github.com/Elpis-alpha/...",

    type: ["wbd", "---"],

    imageurl: "/images/projects/tic-tac-toe.png"

  },

  {

    _wid: v4(),

    title: "My A.I",

    description: <>

      It's not actually an A.I, it's just a simple application that registers a user,

      collects data from the user and process it into useful information.

    </>,

    liveURL: "https://elpis-alpha.github.io/my-a.i",

    sourceCode: "https://github.com/Elpis-alpha/...",

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

    liveURL: "https://elpis-alpha.github.io/elpis-works",

    sourceCode: "https://github.com/Elpis-alpha/...",

    type: ["wbd", "---"],

    imageurl: "/images/projects/elpis-works.png"

  },

]

export const social = {

  email: "Elpis409@gmail.com",

  phoneLine: "+2349163704134",

  telegram: "https://t.me/Elpis407",

  paypal: "",

  twitter: "",

  stackOverflow: "https://stackoverflow.com/users/13952926/elpis",

  fiverr: "https://www.fiverr.com/elpis_alpha?public_mode=true",

  upwork: "https://www.upwork.com/freelancers/~016ec73d926e24362d?viewMode=1",

  linkedin: "https://www.linkedin.com/in/elpis-alpha",

  instagram: "https://www.instagram.com/elpis_alpha/",

  github: "https://github.com/Elpis-alpha",

}

