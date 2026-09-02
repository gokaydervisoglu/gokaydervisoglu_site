import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Gökay",
  lastName: "Dervişoğlu",
  name: "Gökay Dervişoğlu",
  role: "Computer Engineer",
  avatar: "/images/avatar.jpg",
  email: "gokaydervisoglu@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Trabzon, Turkey", // Display name for location
  languages: ["Turkish (Native)", "English (B1)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates about my projects and research</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gokaydervisoglu",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gokaydervisoglu/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hello! I'm Gökay Dervişoğlu</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm a{" "}
      <Text as="span" size="xl" weight="strong">
        Computer Engineer
      </Text>{" "}
      with hands-on experience in software development and system design. I have worked on web
      services, backend systems, software testing processes, and system integration, and developed
      various engineering projects in artificial intelligence and computer vision.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Trabzon, Turkey`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Computer Engineer with hands-on experience in software development and system design.
        Worked on web services, backend systems, software testing processes, and system
        integration. Developed various engineering projects in artificial intelligence and computer
        vision.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Turkcell",
        timeframe: "February – May 2026 · July – August 2026",
        role: "Software Test Intern · Data & TV Solutions",
        location: "Istanbul, Turkey",
        achievements: [
          <>Developed and improved UI test automation scenarios using Selenium and Playwright.</>,
          <>Performed REST API testing, defect verification, and regression testing.</>,
          <>Contributed to the test automation infrastructure using Git, Jira, and CI/CD processes.</>,
        ],
        images: [],
      },
      {
        company: "Kafein Information Technologies Inc.",
        timeframe: "June – August 2025",
        role: "Cyber Security Intern",
        location: "Istanbul, Turkey",
        achievements: [
          <>Configured agents, log monitoring, and alert mechanisms on Dataskope and VDAM.</>,
          <>
            Performed data flow and integration testing on SQL Server, Oracle Database, and
            Elasticsearch.
          </>,
          <>
            Conducted Docker-based installation and integration work for Data Touch and Data Craft.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Recep Tayyip Erdoğan University",
        description: <>Bachelor's Degree, Computer Engineering · GPA: 3.05/4.00</>,
        timeframe: "2021 – 2026 · Rize, Turkey",
      },
    ],
  },
  achievements: {
    display: true, // set to false to hide this section
    title: "Achievements",
    items: [
      {
        title: "TEKNOFEST 5G Positioning",
        description: "4th Place in Turkey",
        year: "2025",
        link: "/work/5g-localization-teknofest",
      },
      {
        title: "TÜBİTAK 2209-A",
        description: "Research Grant",
        year: "2025",
        link: "/work/virtual-clothing-fitting-tubitak",
      },
      {
        title: "SAYZEK Datathon",
        description: "Top 10 Finalist",
        year: "2024",
      },
      {
        title: "IDEF Presentation",
        description: "UAV Fault Detection",
        year: "2025",
        link: "/work/idef-2025-uav-health-monitoring",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Programming",
        description: <>Programming languages I use for software development.</>,
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "C++",
            icon: "cpp",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: "SQL",
            icon: "sql",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Systems",
        description: <>Tools and systems I work with regularly.</>,
        tags: [
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "CI/CD",
            icon: "recurrent",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Linux",
            icon: "linux",
          },
        ],
        images: [],
      },
      {
        title: "Test & Automation",
        description: <>Test automation frameworks and API testing tools I use.</>,
        tags: [
          {
            name: "Selenium",
            icon: "selenium",
          },
          {
            name: "Playwright",
            icon: "testing",
          },
          {
            name: "REST API",
            icon: "serverStack",
          },
        ],
        images: [],
      },
      {
        title: "Artificial Intelligence",
        description: <>AI frameworks I work with, including basic CNN/LSTM applications.</>,
        tags: [
          {
            name: "PyTorch",
            icon: "pytorch",
          },
          {
            name: "TensorFlow",
            icon: "tensorflow",
          },
          {
            name: "CNN",
            icon: "chip",
          },
          {
            name: "LSTM",
            icon: "recurrent",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `AI, embedded systems and software projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
