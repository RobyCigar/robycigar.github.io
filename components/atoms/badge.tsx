import React from 'react'
import { motion, Variants } from 'framer-motion';

const getSize = {
  md: "text-xs font-medium",
  lg: "text-sm font-medium",
};

const getBorder = {
  default:
    "border border-blue-400",
  dark: "border border-gray-500",
  red: "border border-red-400",
  green:
    "border border-green-400",
  yellow:
    "border border-yellow-300",
  indigo:
    "border border-indigo-400",
  purple:
    "border border-purple-400",
  pink: "border border-pink-400",
};

const getColor = {
    default:
      "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400",
    green:
      "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400",
    yellow:
      "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300",
    indigo:
      "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400",
    purple:
      "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400",
};

function Badge({
  children,
  variant,
  style,
  color='default',
  border=false,
  rounded=true,
  size='md',
  ...props
}: {
  children: React.ReactNode;
  variant: Variants;
  style: string,
  color?: "default" | "red" | "dark" | "yellow" | "indigo" | "purple" | "pink" | "green",
  border?: boolean,
  rounded?: boolean,
  size?: "md" | "lg",
  [props: string]: any;
}) {
  const classes = [
    "border border-blue-200 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-medium mr-2 px-2.5 py-0.5",
    style,
    getColor[color],
    border ? getBorder[color] : undefined,
    getSize[size],
    rounded ? "rounded" : undefined,
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