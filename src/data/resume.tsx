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
    "Full Stack Developer specializing in MERN Stack, React.js, DevOps, QA Automation and scalable cloud-native applications.",

  summary: `
I am a Full Stack Developer with 2.5 years of experience building scalable and high-performance web applications across healthcare, analytics, e-commerce, DevOps and enterprise platforms.

I specialize in MERN Stack development using MongoDB, Express.js, React.js and Node.js along with Next.js and TypeScript to build complete end-to-end applications.

I have hands-on experience with AWS Cloud, Docker, Kubernetes, CI/CD pipelines, DevSecOps workflows, REST APIs, authentication systems, Selenium Automation Testing and scalable frontend architectures.

I enjoy building modern, responsive and production-ready applications with clean UI/UX, optimized performance and maintainable code architecture.
`,

  avatarUrl: "/me.png",

  skills: [
    { name: "JavaScript", icon: Typescript },
    { name: "TypeScript", icon: Typescript },
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },

    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Nodejs },
    { name: "NestJS", icon: Nodejs },

    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "Go", icon: Golang },

    { name: "MongoDB", icon: MongoDBIcon },
    { name: "MySQL", icon: MySQLIcon },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Oracle", icon: OracleIcon },

    { name: "AWS", icon: AwsIcon },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },

    { name: "Jenkins", icon: Docker },
    { name: "SonarQube", icon: Docker },
    { name: "Trivy", icon: Docker },
    { name: "Nexus", icon: Docker },

    { name: "REST APIs", icon: PostmanIcon },
    { name: "Postman", icon: PostmanIcon },
    { name: "GitHub", icon: GithubIcon },

    { name: "Jest", icon: JestIcon },
    { name: "Playwright", icon: PlaywrightIcon },
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
        "Built scalable full-stack web applications using React.js, Node.js, AWS and cloud-native technologies. Worked on dashboards, APIs, authentication systems, frontend optimization and deployment workflows.",
    },

    {
      company: "Rockline Solutions Pvt. Ltd",

      href: "#",

      badges: [],

      location: "Solapur",

      title: "Full Stack Developer",

      logoUrl: "/vertex-logo.png",

      start: "Jan 2023",

      end: "Sep 2024",

      description:
        "Developed and maintained scalable full-stack applications, integrated REST APIs, optimized frontend performance and collaborated with teams to deliver enterprise software solutions.",
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
      title: "AWS DevSecOps CI/CD Pipeline Automation",

      href: "https://github.com/Vishalkondi",

      dates: "2026",

      active: true,

      description:
        "Built and deployed an end-to-end production-grade CI/CD and DevSecOps pipeline on AWS using Jenkins, SonarQube, Nexus Repository, Docker, Trivy and New Relic. Automated code quality analysis, vulnerability scanning, artifact management, deployment workflows and infrastructure monitoring.",

      technologies: [
        "AWS EC2",
        "Jenkins",
        "Docker",
        "Docker Compose",
        "SonarQube",
        "Nexus Repository",
        "Trivy",
        "New Relic",
        "CI/CD",
        "DevSecOps",
        "Linux",
        "Shell Scripting",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Vishalkondi",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/devsecops.png",

      video: "",
    },

    {
      title: "End-to-End CI/CD Deployment Using Jenkins & Tomcat",

      href: "https://github.com/Vishalkondi",

      dates: "2026",

      active: true,

      description:
        "Successfully implemented a complete CI/CD pipeline for deploying an E-commerce web application using Jenkins, Maven and Apache Tomcat. Automated source code integration, build verification, WAR packaging and deployment workflows with continuous delivery practices.",

      technologies: [
        "Jenkins",
        "CI/CD",
        "Apache Tomcat",
        "Maven",
        "GitHub",
        "Java",
        "Docker",
        "Linux",
        "Shell Scripting",
        "AWS",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Vishalkondi",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/jenkins-cicd.png",

      video: "",
    },

    {
      title: "Tollywood Movie Ticket Booking Platform",

      href: "https://github.com/Vishalkondi",

      dates: "2026",

      active: true,

      description:
        "Developed and deployed a full-stack movie ticket booking platform using Dockerized architecture with Tomcat, Nginx and MySQL. Implemented booking workflows, dynamic pricing calculations and responsive UI components with Maven build automation and multi-container deployment.",

      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Java",
        "Tomcat",
        "Nginx",
        "MySQL",
        "Maven",
        "Docker",
        "Docker Compose",
      ],

      links: [
        {
          type: "Source",
          href: "https://github.com/Vishalkondi",
          icon: <Icons.github className="size-3" />,
        },
      ],

      image: "/movie-booking.png",

      video: "",
    },

    {
      title: "Zoho Payroll – Microservices Payroll Management System",

      href: "https://github.com/Vishalkondi/zoho-payroll-clone",

      dates: "2026",

      active: true,

      description:
        "Developed a scalable payroll management platform inspired by Zoho Payroll using microservices architecture with Redis caching, PayPal integration and Dockerized deployment workflows.",

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
        "Developed a modern full-stack e-commerce platform using Next.js and TypeScript with responsive UI components, authentication systems and optimized frontend architecture.",

      technologies: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
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

    {
      title: "Supermart – Grocery Delivery MERN Platform",

      href: "https://github.com/Vishalkondi/supermart",

      dates: "2026",

      active: true,

      description:
        "Built a scalable grocery delivery platform using the MERN stack with responsive UI, real-time product management, shopping cart functionality, JWT authentication and Redux Toolkit state management.",

      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
        "Redux Toolkit",
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
  ],
} as const;