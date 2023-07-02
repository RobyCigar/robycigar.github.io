"use client"
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import Title from '@/components/atoms/title';
import Paragraph from "@/components/atoms/paragraph";
import Badge from '@/components/atoms/badge';

function Introduction() {
    const badgeVariant = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0,
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 14,
        },
      },
    };
    const textVariants =  {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.25,
          duration: 1,
          type: "spring",
          stiffness: 120,
          damping: 16,
        },
      },
    };
  return (
    <section className="bg-white h-screen flex items-center dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Badge variant={badgeVariant}>
          <span className="text-xs bg-primary-600 rounded-full dark:text-white text-gray-800 px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">See Projects</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Badge>
        <Title>Rabih Utomo</Title>
        <div className="sm:px-16 lg:px-48">
          <Paragraph variants={textVariants}>
            Hey there! I'm Rabih, a software developer with 2 years of
            experience in the field. I love creating web applications using cool
            technologies like React, Vue, and Laravel. I studied computer
            science and got my associate degree from university.
          </Paragraph>
        </div>
      </div>
    </section>
  );
}

export default Introduction