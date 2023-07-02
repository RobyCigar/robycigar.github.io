import React from 'react'

function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased min-h-screen">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            { children }
        </div>
    </section>
  )
}

export default Container