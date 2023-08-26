import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/layouts/navbar";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rabih Utomo',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Hi, you can call me Rabih, an IT student and I have interest towards frontend development(and backend stuff sometimes) currently live in Yogyakarta, Indonesia. My main weapon is React, Next, Node. For more information please run npx robycigar on your terminal"
        />
        <link rel="apple-touch-icon" href="/vite.svg" />

        <meta name="description" content="Portfolio Web Developer" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Fullstack, React Native, Graphql, Developer, Software Engineer, Frontend, Backend"
        />
        <meta name="author" content="Rabih Utomo" />
        <meta
          name="twitter:image:src"
          content="/assets/foto_profil_linkedin"
        />
        <meta name="twitter:site" content="@github" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rabih Utomo" />
        <meta
          name="twitter:description"
          content="Hi, you can call me Rabih, an IT student and I have interest towards frontend development(and backend stuff sometimes) currently live in Yogyakarta"
        />

        <meta
          property="og:image"
          content="/assets/foto_profil_linkedin"
        />
        <meta
          property="og:description"
          content="Hi, you can call me Rabih, an IT student and I have interest towards frontend development(and backend stuff sometimes) currently live in Yogyakarta, Indonesia. My main weapon is React, Next, Node. For more information please run `npx robycigar` on your terminal."
        />
        <meta property="og:title" content="Rabih Utomo" />
      </head>
      <body
        className={[inter.className, "bg-white dark:bg-gray-900"].join(" ")}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
