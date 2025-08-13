"use client";
/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/atoms/paragraph";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";
import TimelineItem from "@/components/molecules/landing/timeline/item";
import React, { useEffect, useState } from "react";
import { useTranslation } from "../i18n";
import Badge from "@/components/atoms/badge";
import { motion } from "framer-motion";

const toyProjects = [
  {
    title: "Pixel Warrior Saga",
    description:
      "An immersive RPG game with pixel art style, featuring epic quests and challenging battles.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/video-game_1f3ae.png",
    link: "https://pixel-warrior-saga.rabihutomo.com",
    meta: "Side Project",
    target: "_blank",
  },
  {
    title: "Treadmill Logger",
    description:
      "A simple app to track and visualize treadmill workout sessions and progress over time.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/running-shoe_1f45f.png",
    link: "https://treadmill.rabihutomo.com",
    meta: "Side Project",
    target: "_blank",
  },
];

const portfolios = [
  {
    title: "Marketing Apps for Candle Company",
    description:
      "I have developed an ERP website for a candle company with the aim of generating revenue through online marketing.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/candle_1f56f-fe0f.png",
    link: "",
    meta: "Private Project",
    tag: "MVP",
  },
  {
    title: "Personal Project",
    description:
      "During my free time, sometimes i learn new thing in order to keep track my learning progress.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/open-book_1f4d6.png",
    link: "",
    meta: "Public Access",
  },
  {
    title: "Tons of Projects",
    description: "Actually I had tons of projects but too lazy to put in here",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/dollar-banknote_1f4b5.png",
    link: "",
    meta: "Company Project",
  },
  {
    title: "Jiwaku App",
    description:
      "Mental health apps, mobile platform, available on google play",
    image: "https://jiwaku.rabihutomo.com/thumbnail.jpeg",
    link: "",
    meta: "Public Access",
  },
];

const timelines = [
  {
    title: "Self-Employed",
    subtitle: ``,
    description: `
      I made the tough decision to leave my previous job—not because of any issues with the work, my boss, or teammates (they were all great!)—but due to personal life circumstances. 
      Since then, I've been focusing on self-growth, exploring new ideas, and continuing to build and learn through side projects. 
      I'm also growing my presence as a content creator on Instagram and TikTok, where I’ve built an audience of 10K+ followers by sharing my journey and passions.
    `,
    date: "July 2024 - Present",
    tech: [],
  },
  {
    title: "Prioritas Web Teknologi as **Fullstack Engineer**",
    subtitle: ``,
    description: `
      After a year of hard work, I've got a promotion to a Fullstack role! 
      Here's what I'll be diving into:
      <br/>
      - Taking business ideas and turning them into code that works like magic.
      <br/>
      - Crafting code that's easy to maintain and a breeze to read.
      Tech: docker, laravel, graphql, php, mysql, web socket
    `,
    date: "13 July 2023 - June 2024",
    tech: ["Docker", "Laravel", "GraphQL", "PHP", "MySQL", "WebSocket"],
  },
  {
    title: "Prioritas Web Teknologi as **Frontend Engineer**",
    subtitle: `Prioritas Web Teknologi is a software development company dedicated to creating innovative and cutting-edge software applications. The company has been at the forefront of developing solutions that cater to the evolving needs of businesses and individuals alike.`,
    description: `
    <br/>
      - Full-time job, onsite with 40hrs/week workload(9-5)
    <br/>
      - Responsible for creating application interface and business flow into code
    <br/>
      - Responsible for developing microfrontend for large size apps
    <br/>
      - Work seamlessly with backend engineer, UI/UX team, and other stakeholder
    <br/>
      - Maintain & scale apps 
    <br/>
      - Make friends 😁
    <br/>
      Tech: vue 2 & 3, vuex, pinia, jira, docker, typescript
    `,
    date: "13 July 2022 - 13 July 2023",
    tech: ["Vue 2 & 3", "Vuex", "Pinia", "Jira", "Docker", "TypeScript"],
  },
  {
    title: "Lingotalk as **Frontend Engineer**",
    subtitle: ``,
    description: `
    <br/>
      - Provide solution and execute implementation for website development requirements
      (web and database) based on the agreed timeline.
    <br/>
      - Assess potential improvements and potential bugs in the web development.
    <br/>
      - Work closely together with front-end (/back-end) & project manager.
    <br/>
      - Work in fast-paced team.
    <br/>
      - Tech environment: Svelte, ReactJs, NextJs, Gitlab, Figma, MS Teams, Trello.
    <br/>
      - Make a friends(sadly we can never meet because it was a remote work) 🥹
      `,
    date: "2021 - 2022",
    tech: [
      "Svelte",
      "ReactJS",
      "NextJS",
      "Gitlab",
      "Figma",
      "MS Teams",
      "Trello",
    ],
  },
];

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardHover = {
  rest: {
    scale: 1,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  hover: {
    scale: 1.02,
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { duration: 0.3 },
  },
};

const TechBadge = ({ tech }: any) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 mr-2 mb-2">
    {tech}
  </span>
);

const ProjectCard = ({ project, index }: any) => {
  const isCandle = project.title.toLowerCase().includes("candle");
  return (
    <>
      <motion.div
        initial="rest"
        whileHover="hover"
        variants={cardHover}
        custom={index}
        className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 relative dark:border-gray-700"
      >
      <motion.div key={project.title} variants={fadeInUp} custom={index}>
        {isCandle && (
          <motion.img
            animate={{ rotate: [-45, -40, -45], y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            src="/assets/crown.png"
            alt="Image of crown"
            className="h-20 -top-10 -left-10 absolute"
          />
        )}
        <a
          href={project.link}
          target={project.target || "_self"}
          className="group relative flex items-center justify-center w-32 p-4"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className="h-16 w-auto object-contain"
              src={project.image}
              alt={project.title}
            />
          </motion.div>
        </a>
        <div className="p-5 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a
                href={project.link}
                target={project.target || "_self"}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {project.title}
              </a>
            </h3>
            {project.tag && (
              <Badge style="cursor-default bg-gradient-to-r from-purple-600 to-blue-500 animate-pulse text-white">
                <p>{project.tag}</p>
              </Badge>
            )}
          </div>
          <span
            className={`
            inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
            ${
              project.meta.toLowerCase().includes("restricted") ||
              project.meta.toLowerCase().includes("private")
                ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            }
          `}
          >
            {project.meta}
          </span>
          <p className="font-light text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        </div>
      </motion.div>
      </motion.div>
    </>
  );
};

const Portfolio = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-screen-md text-center mb-16"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Header className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t.list_of_portfolio}
          </Header>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Paragraph>{t.portfolio_desc}</Paragraph>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid lg:max-w-5xl lg:mx-auto gap-8 mb-16 md:grid-cols-2"
      >
        {portfolios.map((portfolio, index) => (
            <ProjectCard key={portfolio.title} project={portfolio} index={index} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mx-auto max-w-screen-md text-center mb-16"
      >
        <Header className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
          {t.list_of_work}
        </Header>
        <Paragraph>{t.work_desc}</Paragraph>
      </motion.div>

      <motion.ol
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative mx-auto max-w-screen-md border-l-2 border-gray-200 dark:border-gray-700 pl-6"
      >
        {timelines.map((timeline, index) => (
          <motion.div
            key={timeline.title}
            variants={fadeInUp}
            custom={index}
            className="mb-10"
          >
            <div className="absolute w-3 h-3 rounded-full bg-blue-600 -left-1.5 border border-white dark:border-gray-900 dark:bg-blue-500" />
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <TimelineItem
                title={timeline.title}
                subtitle={timeline.subtitle}
                description={timeline.description}
                date={timeline.date}
              />
              <div className="mt-4">
                {timeline.tech &&
                  timeline.tech.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.ol>
    </Container>
  );
};

export default Portfolio;
