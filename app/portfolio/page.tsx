"use client";
/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/atoms/paragraph";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";
import TimelineItem from "@/components/molecules/landing/timeline/item";
import React from "react";
import { useTranslation } from "../i18n";
import Badge from "@/components/atoms/badge";

const portfolios = [
  {
    title: "Marketing Apps for Candle Company",
    description:
      "I have developed an ERP website for a candle company with the aim of generating revenue through online marketing.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/candle_1f56f-fe0f.png",
    link: "",
    meta: "Private Project",
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
    description:
      "Actually I had tons of projects but too lazy to put in here",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/dollar-banknote_1f4b5.png",
    link: "",
    meta: "Company Project",
  },
];

const timelines = [
  {
    title: "Prioritas Web Teknologi as **Fullstack Engineer**",
    subtitle: ``,
    description: `
      After a year of hard work, I've got a promotion to a Fullstack role! 
      Here's what I'll be diving into:
      - Taking business ideas and turning them into code that works like magic.
      - Crafting code that's easy to maintain and a breeze to read.
      Tech: docker, laravel, graphql, php, mysql, web socket
    `,
    date: "13 July 2023 - Now",
  },
  {
    title: "Prioritas Web Teknologi as **Frontend Engineer**",
    subtitle: `Prioritas Web Teknologi is a software development company dedicated to creating innovative and cutting-edge software applications. The company has been at the forefront of developing solutions that cater to the evolving needs of businesses and individuals alike.`,
    description: `
      - Full-time job, onsite with 40hrs/week workload(9-5)
      - Responsible for creating application interface and business flow into code
      - Responsible for developing microfrontend for large size apps
      - Work seamlessly with backend engineer, UI/UX team, and other stakeholder
      - Maintain & scale apps 
      - Make friends 😁
      Tech: vue 2 & 3, vuex, pinia, jira, docker, typescript
    `,
    date: "13 July 2022 - 13 July 2023",
  },
  {
    title: "Lingotalk as **Frontend Engineer**",
    subtitle: ``,
    description: `
      - Provide solution and execute implementation for website development requirements
      (web and database) based on the agreed timeline.
      - Assess potential improvements and potential bugs in the web development.
      - Work closely together with front-end (/back-end) & project manager.
      - Work in fast-paced team.
      - Tech environment: Svelte, ReactJs, NextJs, Gitlab, Figma, MS Teams, Trello.
      - Make a friends(sadly we can never meet because it was a remote work) 🥹
      `,
  },
];

const Portfolio = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <Header>{t.list_of_portfolio}</Header>
        <Paragraph>{t.portfolio_desc}</Paragraph>
      </div>
      <div className="grid lg:max-w-6xl lg:mx-auto gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {portfolios.map((portfolio) => {
          const isCandle = portfolio.title.toLowerCase().includes("candle");
          return (
            <div
              key={portfolio.title}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 relative dark:border-gray-700"
            >
              {isCandle && (
                <img
                  src="/assets/crown.png"
                  alt="Image of crown"
                  className="h-20 -top-10 -rotate-45 -left-10 absolute"
                />
              )}
              <a href="#">
                <img
                  className="h-16 w-32 flex-shrink-0 object-contain px-4 rounded-lg sm:rounded-none sm:rounded-l-lg "
                  src={portfolio.image}
                  alt={portfolio.title}
                />
              </a>
              <div className="py-5 w-3/4 pr-2">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-2">
                  <a href="#">{portfolio.title}</a>
                  {
                    isCandle && (
                      <Badge style="cursor-default">
                        <p>MVP</p>
                      </Badge>
                    )
                  }
                </h3>
                <span
                  className={[
                    "text-gray-500 dark:text-gray-400 font-normal",
                    portfolio.meta.toLowerCase().includes("restricted") ||
                    portfolio.meta.toLowerCase().includes("private")
                      ? "text-red-600"
                      : "text-blue-600",
                  ].join(" ")}
                >
                  {portfolio.meta}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {portfolio.description}
                </p>
              </div>
            </div>
          );})}
      </div>{" "}
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <Header>{t.list_of_work}</Header>
        <Paragraph>{t.work_desc}</Paragraph>
      </div>
      <ol className="relative mx-auto max-w-screen-md border-l border-gray-200 dark:border-gray-700">
        {timelines.map((timeline) => (
          <TimelineItem
            key={timeline.title}
            title={timeline.title}
            subtitle={timeline.subtitle}
            description={timeline.description}
            date={timeline.date}
          />
        ))}
      </ol>
    </Container>
  );
};

export default Portfolio;
