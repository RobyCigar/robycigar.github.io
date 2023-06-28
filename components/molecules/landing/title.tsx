"use client";
import React from 'react'
import { motion } from 'framer-motion'

function Title({
    title
}: { title: String }) {
  return (
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
        >
        { title }
        </motion.h1>
  )
}

export default Title