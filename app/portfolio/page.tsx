"use client"
/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/atoms/paragraph";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";
import React from "react";
import { useTranslation } from "../i18n";

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
    title: "Auditing System",
    description:
      "I was working on an auditing system for a large number of users. The system is responsible for making decisions regarding a user's salary.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/balance-scale_2696-fe0f.png",
    link: "",
    meta: "Restricted Permission",
  },
  {
    title: "ERP System for Multinational Company",
    description:
      "During work, we developed an ERP apps. This system also have large number of transaction & users in it",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/dollar-banknote_1f4b5.png",
    link: "",
    meta: "Restricted Permission",
  },
  {
    title: "Personal Project",
    description: "During my free time, sometimes i learn new thing in order to keep track my learning progress.",
    image:
      "https://em-content.zobj.net/thumbs/240/google/350/open-book_1f4d6.png",
    link: "",
    meta: "Public Access",
  },
];

const Portfolio = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
        <Header>{t.list_of_portfolio}</Header>
        <Paragraph>{t.portfolio_desc}</Paragraph>
      </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        {portfolios.map((portfolio) => (
          <div
            key={portfolio.title}
            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="w-full px-4 rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={portfolio.image}
                alt={portfolio.title}
              />
            </a>
            <div className="py-5 pr-2">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">{portfolio.title}</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                {portfolio.meta}
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {portfolio.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
