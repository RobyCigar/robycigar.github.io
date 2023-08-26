"use client"
import React, { useState } from 'react'
import Title from '@/components/atoms/title';
import Paragraph from "@/components/atoms/paragraph";
import Badge from '@/components/atoms/badge';
import { useTranslation } from '@/app/i18n';
import { TranslationType } from '@/app/i18n';
import { useRouter } from "next/navigation";

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
const textVariants = {
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

function Introduction() {
  const [reload, setReload] = useState("")
  const router = useRouter()
  const { t }: {t: TranslationType}  = useTranslation({ reload, setReload });
  const onClickBadge = () => {
    router.push("/portfolio")
  }
  return (
    <section className="bg-white absolute w-screen h-screen flex items-center dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <Badge
          style="cursor-pointer mb-7"
          onClick={onClickBadge}
          variant={badgeVariant}
        >
          <span className="text-sm font-medium bg-primary-600 rounded-full dark:text-white text-gray-800 px-4 py-1.5 mr-3">
            {t.see_projects}
          </span>{" "}
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
        <Title>{t.author}</Title>
        <div className="sm:px-16 lg:px-48">
          <Paragraph variants={textVariants}>{t.description}</Paragraph>
        </div>
      </div>
    </section>
  );
}

export default Introduction