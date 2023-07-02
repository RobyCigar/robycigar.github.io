"use client";
import React from 'react'
import { motion, Variants } from "framer-motion";

function Paragraph({ variants, children } : { variants?: Variants, children: React.ReactNode}) {
  return (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
        >
            { children }
        </motion.div>
  )
}

export default Paragraph