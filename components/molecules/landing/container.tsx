"use client"
import React from 'react'
import { motion } from 'framer-motion'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className="bg-white dark:bg-gray-900 antialiased min-h-screen"
    >
      <div className="max-w-screen-xl px-4 mx-auto lg:px-6 py-16 sm:py-24">
        {children}
      </div>
    </motion.section>
  );
}

export default Container