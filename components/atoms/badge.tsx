import React from 'react'
import { motion, Variants } from 'framer-motion';

function Badge({
  children,
  variant,
  style,
  ...props
}: {
  children: React.ReactNode;
  variant: Variants;
  style: string
  [props: string]: any;
}) {
  const classes = [
    "border border-blue-200 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700",
    style
  ];
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      animate="visible"
      className={classes.join(' ')}
      role="alert"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Badge