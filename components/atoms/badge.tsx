import React from 'react'
import { motion, Variants } from 'framer-motion';

function Badge({ children, variant }: { children: React.ReactNode, variant: Variants}) {
  return (
    <motion.a
      href="#"
      variants={variant}
      initial="hidden"
      animate="visible"
      className="border border-blue-200 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
      { children }
    </motion.a>
  );
}

export default Badge