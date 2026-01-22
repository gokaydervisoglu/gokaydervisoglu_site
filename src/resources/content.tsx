import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Gökay",
  lastName: "Dervişoğlu",
  name: "Gökay Dervişoğlu",
  role: "Computer Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "gokaydervisoglu@gmail.com",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Trabzon, Turkey", // Display name for location
  languages: ["Turkish", "English"], // optional: Leave the array empty if you don't want to display languages
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
      I'm a <Text as="span" size="xl" weight="strong">Computer Engineering student</Text> focused on mobile and web development, with experience building scalable, user-oriented applications and a background in computer vision and deep learning.
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
        Computer Engineering student currently focused on mobile and web development. Experienced in building user-oriented, scalable applications, with a technical background in computer vision and deep learning that supports a strong, end-to-end engineering approach.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kafein Technology Solutions",
        timeframe: "June 2025 - August 2025",
        role: "Software Development Intern",
        location: "Istanbul, Turkey",
        achievements: [
          <>
            Learning and gaining hands-on experience with Dataskope and its Data Touch module for data governance and policy management.
          </>,
          <>
            Gained hands-on experience in enterprise security solutions and data protection strategies.
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
        description: <>Bachelor's Degree, Computer Engineering</>,
        timeframe: "2021 - 2026",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Main Skills",
        description: (
          <>Core programming languages and frameworks I use for development.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "HTML",
            icon: "html5",
          },
          {
            name: "CSS",
            icon: "css3",
          },
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: "C",
            icon: "cpp",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>Development tools and platforms I work with regularly.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Linux",
            icon: "linux",
          },
          {
            name: "Maven",
            icon: "maven",
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
