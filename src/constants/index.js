export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for functionality improvements.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      { id: 1, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 2, name: ".Net", path: "/assets/logos/dotnet.svg" },
      { id: 3, name: "Ef Core", path: "/assets/logos/efcore.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Auth0", path: "/assets/logos/auth0.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: ".NET Core", path: "/assets/logos/dotnetcore.svg" },
      { id: 3, name: "SQLite", path: "/assets/logos/sqlite.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "C#", path: "/assets/logos/csharp.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "Microsoft", path: "/assets/logos/microsoft.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Vite.js", path: "/assets/logos/vitejs.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Blazor", path: "/assets/logos/blazor.svg" },
      { id: 2, name: "Azure", path: "/assets/logos/azure.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/md-nuralam",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/NuralamMRH",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/8801682837560?text=Hi%20MD%20Nuralam%2C%20I%20visited%20your%20portfolio...",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "RANCODED",
    href: "https://www.rancoded.com/",
    icon: "/assets/planets.png",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer & AI Engineer (Founder)",
    job: "RANCODED — Self-Employed",
    date: "July 2022 – Present",
    location: "Dhaka, Bangladesh (Remote & On-site)",
    link: "https://www.rancoded.com",
    contents: [
      "Designed, built, and shipped static websites, feature-rich web applications, and cross-platform mobile apps for international clients using React.js, Next.js, Node.js, Express, and React Native.",
      "Built real-time features including live chat, push notifications, and live dashboards using Socket.IO; modeled relational and NoSQL data with PostgreSQL, MySQL, MongoDB, and Prisma ORM.",
      "Integrated Firebase and Supabase for authentication, cloud storage, and serverless backend infrastructure, significantly reducing deployment timelines for new client projects.",
      "Applied Python for automation, data processing pipelines, and AI/computer-vision prototypes leveraging TensorFlow, PyTorch, and OpenCV.",
      "Managed end-to-end project delivery — requirements gathering, system architecture, deployment (Vercel/AWS), and ongoing client support — across Upwork and Fiverr freelance platforms.",
      "Developed and launched rancod.ai, an AI marketplace platform with a provider earn model funded by subscription and token-based revenue.",
      "Maintained an active open-source presence on GitHub (290+ repositories), showcasing continuous learning and contributions across the JavaScript/Python ecosystem.",
    ],
  },
  {
    title: "Software & Web Development Contractor",
    job: "Peak Vision Pte. Ltd.",
    date: "July 2022 – Sept 2025",
    location: "Singapore (Remote)",
    contents: [
      "Delivered full-cycle software and web development services under a formal Independent Contractor Agreement with a Singapore-based technology company.",
      "Developed and maintained scalable web platforms and API integrations tailored to client business workflows and enterprise requirements.",
      "Collaborated remotely with cross-functional teams across time zones, ensuring on-time delivery and adherence to international software quality standards.",
      "Contributed to architecture decisions, code reviews, and technical documentation throughout the engagement lifecycle.",
    ],
  },
  {
    title: "Mobile Apps & Web Developer",
    job: "BASEAFOOD VIETNAM / APA FOOD",
    date: "Nov 2023 – June 2026",
    location: "Ho Chi Minh City, Vietnam (Remote)",
    link: "https://www.apafood.com",
    contents: [
      "Provided mobile and web application development services for a leading Vietnamese seafood processing company operating in the ASEAN market.",
      "Built and maintained internal business management tools and customer-facing platforms to streamline supply chain and logistics operations.",
      "Developed cross-platform mobile apps using React Native for field operations teams, enabling real-time data capture and reporting.",
      "Collaborated closely with Vietnamese stakeholders and production teams to translate operational requirements into robust software solutions.",
    ],
  },
  {
    title: "Mobile Apps & Web Developer",
    job: "MEXI2GO, LLC",
    date: "2023 – 2026",
    location: "Carefree, AZ, United States (Remote)",
    contents: [
      "Delivered mobile application and web development services for a U.S.-based food & beverage LLC.",
      "Designed and developed customer-facing mobile ordering apps and management dashboards using React Native and Node.js backend services.",
      "Integrated third-party payment gateways, geolocation services, and real-time order tracking features.",
      "Maintained direct communication with U.S. stakeholders to ensure business goals were translated into robust technical solutions.",
    ],
  },
  {
    title: "Project Coordinator",
    job: "Business Automation Ltd.",
    date: "2024 – Feb 2026",
    location: "Dhaka, Bangladesh",
    contents: [
      "Coordinated IT projects and cross-functional teams within a leading Bangladeshi business automation firm.",
      "Managed project schedules, resource allocation, and stakeholder communications across multiple concurrent software delivery initiatives.",
      "Liaised between technical development teams and business units to ensure alignment on project scope, timelines, and deliverables.",
      "Contributed to process improvement initiatives targeting operational efficiency and digital transformation goals.",
    ],
  },
  {
    title: "Mobile Application Developer",
    job: "Soletrade",
    date: "2022 – 2024",
    location: "Remote",
    contents: [
      "Developed and maintained mobile applications for the Soletrade platform using React Native, enabling users to trade, buy, and sell products through a streamlined mobile experience.",
      "Built core features including product listings, user authentication flows, push notifications, and in-app messaging.",
      "Integrated backend APIs and ensured cross-platform performance and stability across iOS and Android devices.",
    ],
  },
  {
    title: "Systems Administrator",
    job: "Saif Powertec Limited",
    date: "Jan 2019 – Feb 2021",
    location: "Chattogram, Bangladesh",
    link: "https://www.saifpowertecltd.com",
    contents: [
      "Administered IT infrastructure for Chittagong Container Terminal (CCT) and New Mooring Container Terminal (NCT) operations office — a high-throughput, mission-critical port environment.",
      "Managed Windows Server environments, Active Directory, network switches, firewalls, and LAN/WAN connectivity across the terminal operations facility.",
      "Performed regular system monitoring, patch management, backup procedures, and incident response to ensure 24/7 operational uptime.",
      "Provided end-user technical support for 50+ staff, resolving hardware, software, and network issues in a time-sensitive operational environment.",
      "Implemented security hardening measures and access control policies in compliance with enterprise IT governance standards.",
      "Coordinated with vendors and internet service providers to maintain reliable connectivity for terminal management systems.",
    ],
  },
];

export const reviews = [
  {
    name: "Michael Chen",
    username: "@peakvision_sg",
    body: "Nuralam delivered our web platform with exceptional attention to detail and scalability. His technical communication across time zones was flawless.",
    img: "https://robohash.org/michaelchen",
  },
  {
    name: "Tran Nguyen",
    username: "@baseafood_vn",
    body: "Outstanding work developing our mobile apps in React Native. Our logistics and field teams adopted the platform smoothly and productivity skyrocketed.",
    img: "https://robohash.org/trannguyen",
  },
  {
    name: "Carlos Mendez",
    username: "@mexi2go_usa",
    body: "Built our customer mobile ordering app and live dashboard from scratch. Reliable, responsive, and always delivers high-performance code on schedule.",
    img: "https://robohash.org/carlosmendez",
  },
  {
    name: "Tanvir Ahmed",
    username: "@business_automation",
    body: "Brilliant problem-solving skills across full-stack and IT workflows. Nuralam is a dedicated engineer who consistently delivers above expectations.",
    img: "https://robohash.org/tanvirahmed",
  },
  {
    name: "David Sterling",
    username: "@global_client",
    body: "Integrated complex AI pipelines and modern Next.js interfaces seamlessly. Delivered ahead of schedule with immaculate code quality.",
    img: "https://robohash.org/davidsterling",
  },
  {
    name: "Elena Rostova",
    username: "@soletrade_app",
    body: "Exceptional React Native developer. Clean UI animations, robust API integrations, and quick turnaround on all requested features.",
    img: "https://robohash.org/elenarostova",
  },
];

export const currentFocus = [
  {
    icon: "🔭",
    title: "Building OceanAiUU",
    desc: "AI-powered fisheries management & IUU compliance platform for Timor-Leste (VinaTimor JV LDA) with satellite vessel tracking and live reporting.",
    link: "https://www.rancoded.com/",
  },
  {
    icon: "🚀",
    title: "Scaling rancod.ai",
    desc: "AI marketplace platform with a provider-earn model funded by subscription and token-based revenue architecture.",
    link: "https://www.rancoded.com/",
  },
  {
    icon: "🌱",
    title: "Advancing AI & System Design",
    desc: "Deepening work in LLM tooling (Claude, OpenAI, LangChain), computer vision pipelines, and modern React/Next.js architectures.",
  },
];

export const collaborations = [
  "Well-architected, scalable APIs and backend systems",
  "AI/ML-integrated products (LLM tooling, computer vision, automation)",
  "Cross-platform mobile apps (React Native)",
  "Polished, user-friendly UI/UX with real-world production needs",
];
