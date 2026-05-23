import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { LaravelIcon } from "@/components/ui/svgs/laravel";
import { AwsIcon } from "@/components/ui/svgs/aws";
import { GithubIcon } from "@/components/ui/svgs/github";
import { OracleIcon } from "@/components/ui/svgs/oracle";
import { PostmanIcon } from "@/components/ui/svgs/postman";
import { MongoDBIcon } from "@/components/ui/svgs/mongodb";
import { MySQLIcon } from "@/components/ui/svgs/mysql";
import { JestIcon } from "@/components/ui/svgs/jest";
import { PlaywrightIcon } from "@/components/ui/svgs/playwright";

export const DATA = {
  name: "Vishal Kondi",
  initials: "VK",
  url: "https://github.com/Vishalkondi",
  location: "Mumbai, India",
  locationLink: "https://maps.google.com/?q=Mumbai",

  description:
    "Full Stack Developer specializing in MERN Stack, React.js, DevOps, and scalable cloud-based applications.",

  summary: `
I am a Full Stack Developer with 2.5 years of experience building scalable and high-performance web applications across healthcare, e-commerce, warehouse management and analytics platforms.

I specialize in MERN Stack development using MongoDB, Express.js, React.js and Node.js along with Next.js and TypeScript to build complete end-to-end solutions.

I have hands-on experience with AWS Cloud, Docker, Kubernetes, CI/CD pipelines, GraphQL, REST APIs, authentication systems and scalable frontend architectures.

I enjoy building modern, responsive and performance-optimized applications with clean UI/UX and maintainable code architecture.
`,

  avatarUrl: "/me.png",

  skills: [
    { name: "JavaScript", icon: Typescript },
    { name: "TypeScript", icon: Typescript },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Redux Toolkit", icon: ReactLight },
    { name: "Zustand", icon: ReactLight },

    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "REST APIs", icon: PostmanIcon },

    { name: "MongoDB", icon: MongoDBIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Oracle", icon: OracleIcon },

    { name: "AWS", icon: AwsIcon },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Jenkins", icon: Docker },
    { name: "Terraform", icon: Docker },

    { name: "GitHub", icon: GithubIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "Jest", icon: JestIcon },
    { name: "Playwright", icon: PlaywrightIcon },

    { name: "Grafana", icon: Docker },
    { name: "Prometheus", icon: Docker },

    { name: "Agile", icon: GithubIcon },
    { name: "Scrum", icon: GithubIcon },
  ],

  navbar: [
    {
      href: "/",
      icon: HomeIcon,
      label: "Home",
    },
  ],

  contact: {
    email: "vishalkondi21@gmail.com",
    tel: "8625076298",

    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Vishalkondi",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vishal-kondi/",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:vishalkondi21@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Newgen Technomate Pvt. Ltd",
      href: "#",
      badges: [],
      location: "Pune",
      title: "Software Developer",
      logoUrl: "/company-logo.png",
      start: "Sep 2024",
      end: "Present",

      description:
        "Built scalable web applications using React.js, Node.js and cloud technologies. Worked on dashboards, authentication systems, APIs and performance optimization while collaborating with Agile teams.",
    },

    {
      company: "Rockline Solutions Pvt. Ltd",
      href: "#",
      badges: [],
      location: "Solapur",
      title: "Full Stack Web Developer",
      logoUrl: "/vertex-logo.png",
      start: "Jan 2023",
      end: "Sep 2024",

      description:
        "Developed and maintained full-stack web applications, integrated APIs, optimized frontend performance and collaborated with teams to deliver scalable software solutions.",
    },
  ],

  education: [
    {
      school: "Vidya Vikas Pratishthan, Solapur",
      href: "#",
      degree: "Bachelor of Technology (B.Tech)",
      logoUrl: "/bigce.png",
      start: "2020",
      end: "2023",
    },

    {
      school: "SES Polytechnic, Solapur",
      href: "#",
      degree: "Diploma",
      logoUrl: "/sesp.png",
      start: "2016",
      end: "2019",
    },
  ],

  projects: [
    {
      title: "Supermart - Grocery Delivery MERN Platform",

      href: "https://github.com/Vishalkondi/supermart",

      dates: "May 2026 - Present",

      active: true,

      description:
        "Developed a full-stack grocery delivery platform using the MERN stack with responsive UI and real-time product management. Implemented category-based product listings, shopping cart functionality, dark mode support, authentication and dynamic product rendering.",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "JWT Authentication",
        "REST API",
        "GitHub",
      ],

      links: [
        {
          type: "Website",
          href: "https://github.com/Vishalkondi/supermart",
          icon: <Icons.globe className="size-3" />,
        },

        {
          type: "Source",
          href: "https://github.com/Vishalkondi/supermart",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/supermart.png",
      video: "",
    },

    
         

    {
  title: "Zoho Payroll – Microservices Payroll Management System",

  href: "https://github.com/Vishalkondi/zoho-payroll-clone",

  dates: "2026",

  active: true,

  description:
    "Developed a scalable payroll management platform inspired by Zoho Payroll using a microservices architecture. Built secure role-based access control for Admins, Managers and Employees, integrated PayPal payment APIs for salary processing, implemented Redis caching for performance optimization and automated payroll receipt emails using Gmail SMTP services. Containerized all services with Docker and managed multi-service orchestration using Docker Compose for streamlined deployment and scalability.",

  technologies: [
    "React.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Docker Compose",
    "Microservices",
    "PayPal API",
    "JWT Authentication",
    "Role-Based Access Control",
    "REST API",
    "Node.js",
    "Gmail SMTP",
    "GitHub",
  ],

  links: [
    {
      type: "Website",
      href: "https://github.com/Vishalkondi/zoho-payroll-clone",
      icon: <Icons.globe className="size-3" />,
    },

    {
      type: "Source",
      href: "https://github.com/Vishalkondi/zoho-payroll-clone",
      icon: <Icons.github className="size-3" />,
    },
  ],

  image: "/payroll.png",

  video: "",
},
    

   
     


    {
  title: "Hind Aquatech – Water Filter E-Commerce Platform",

  href: "https://github.com/Vishalkondi/Hind_Aquatech.git",

  dates: "2026",

  active: true,

  description:
    "Developed a full-stack e-commerce platform for water filter products using Next.js and TypeScript. Built responsive product pages, shopping cart functionality, authentication, and dynamic product management features. Implemented scalable frontend architecture with reusable UI components and optimized performance for seamless user experience across devices.",

  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Express.js",
    "REST API",
    "JWT Authentication",
    "GitHub",
  ],

  links: [
    {
      type: "Website",
      href: "https://github.com/Vishalkondi/Hind_Aquatech.git",
      icon: <Icons.globe className="size-3" />,
    },

    {
      type: "Source",
      href: "https://github.com/Vishalkondi/Hind_Aquatech.git",
      icon: <Icons.github className="size-3" />,
    },
  ],

  image: "/hind-aquatech.png",

  video: "",
},
  ],
} as const;