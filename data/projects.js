// Add a new project by adding an entry here — no component code needed.
export const projects = [
  {
    slug: "phonetimeline",
    name: "PhoneTimeline",
    tagline: "A timeline of smartphones.",
    description:
      "An interactive timeline exploring the evolution of smartphones, brands and devices through time.",
    category: "Products",
    image: "/images/projects/phonetimeline.png",
    url: "https://phonetimeline.vercel.app",
    github: "",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Motion"],
    featured: true,
    order: 1,
    type: "Product / Web App",
    overview:
      "PhoneTimeline lets people explore the evolution of major smartphone brands and models through an interactive, searchable timeline.",
    problem:
      "Information about smartphone history is scattered across dozens of sites, inconsistent, and hard to browse chronologically.",
    solution:
      "A single, fast, well-structured timeline with brand pages, device pages, search and filtering, backed by a proper database instead of static pages.",
    features: [
      "Interactive timelines",
      "Historical database",
      "Brand pages",
      "Device pages",
      "Search",
      "Filtering",
    ],
    challenges:
      "Modeling decades of inconsistent historical device data into a clean, queryable schema, while keeping the timeline fast to browse.",
    results:
      "A growing reference used by people researching phone history, with a steadily expanding device database.",
  },
  {
    slug: "trimmypdf",
    name: "TrimMyPDF",
    tagline: "Fast, simple PDF tools.",
    description:
      "A collection of fast and simple PDF tools built for everyday use — merge, compress and more.",
    category: "SaaS",
    image: "/images/projects/trimmypdf.png",
    url: "https://trimmypdf.vercel.app",
    github: "",
    technologies: ["Next.js", "Tailwind CSS", "PDF.js"],
    featured: true,
    order: 2,
    type: "Product / SaaS",
    overview:
      "TrimMyPDF is a lightweight suite of PDF utilities for everyday tasks — no account, no bloat.",
    problem:
      "Most online PDF tools are slow, ad-heavy, or bury the one feature you actually need behind a paywall.",
    solution:
      "A focused set of fast, single-purpose PDF tools that do one thing well and load instantly.",
    features: ["Merge PDF", "Compress PDF", "More tools planned"],
    challenges:
      "Doing PDF processing efficiently in the browser without sending files to a server, to keep it fast and private.",
    results: "A growing toolkit used for quick everyday PDF tasks.",
  },
  {
    slug: "earbudstimeline",
    name: "EarbudsTimeline",
    tagline: "The evolution of wireless earbuds.",
    description:
      "Explore the history and evolution of wireless earbuds and major audio brands.",
    category: "Products",
    image: "/images/projects/earbudstimeline.png",
    url: "https://earbudstimeline.vercel.app",
    github: "",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "Chart.js"],
    featured: true,
    order: 3,
    type: "Timeline / Database",
    overview:
      "EarbudsTimeline is a companion to PhoneTimeline, tracking the evolution of wireless earbuds across major audio brands.",
    problem:
      "There's no single reliable place to compare wireless earbuds across brands and generations.",
    solution:
      "A structured, browsable timeline and database of earbuds with comparison-friendly data.",
    features: ["Timeline view", "Brand pages", "Comparison charts", "Search"],
    challenges:
      "Keeping the database current as new models ship constantly across many brands.",
    results: "An expanding reference for wireless earbud history.",
  },
];

export const featuredProjects = projects
  .filter((p) => p.featured)
  .sort((a, b) => a.order - b.order);

export const projectCategories = [
  "All",
  "Products",
  "SaaS",
  "Client Projects",
  "Experiments",
  "Open Source",
];
