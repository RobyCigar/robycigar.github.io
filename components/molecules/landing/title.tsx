"use client";
import React from 'react'
import { motion, Variants } from 'framer-motion'

function Title({
    title,
    variants
}: { title: String, variants?: Variants }) {
  const textVariants = variants ?? {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 1,
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    },
  };
  const colorGradient = {
    toPink:
      "bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient",
    toYellow:
      "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 animate-gradient",
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className={`mb-1 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${colorGradient["toPink"]} `}
    >
      {title}
    </motion.h1>
  );
}

export default Title