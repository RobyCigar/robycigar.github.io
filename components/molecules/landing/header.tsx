import React from 'react'

function Header({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
      {children}
    </h2>
  );
}

export default Header