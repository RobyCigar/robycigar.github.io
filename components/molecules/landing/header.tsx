import React from 'react'

function Header({ children, className }: { 
  children: React.ReactNode, 
  className?: string 
}) {
  return (
    <h2 className={"text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white " + className}>
      {children}
    </h2>
  );
}

export default Header