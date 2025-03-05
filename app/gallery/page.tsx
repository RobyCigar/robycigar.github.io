"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "../i18n";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";

const Hobby = () => {
  const { t } = useTranslation();

  const galleryItems = [
    {
      type: "spotify-artist",
      title: "Shiey Inspiration",
      description: "Shiey is a man who inspired me to travel a lot",
      link: "https://www.youtube.com/@shiey",
      embedSrc:
        "https://open.spotify.com/embed/artist/5R4TF0oJIio0fueUmyhY1Q?utm_source=generator&theme=0",
    },
    {
      type: "image",
      title: "Weightlifting",
      description: "I do weightlifting to keep my body sane",
      src: "/assets/sport.jpg",
      alt: "A man doing deadlift",
    },
    {
      type: "spotify-track",
      title: "Beautiful Voice",
      description: "Her voice is so pretty",
      embedSrc:
        "https://open.spotify.com/embed/track/5hVAQTNarrb3lmWqg9Ens4?utm_source=generator",
    },
    {
      type: "image",
      title: "Mountain Exploration",
      description: "I like exploring new places",
      src: "/assets/toomas-tartes.jpg",
      alt: "Hiking in the mountain",
    },
  ];

  const renderGalleryItem = (item: any, index: number) => {
    const commonClasses =
      "md:text-base text-sm relative group overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300 ease-in-out";

    switch (item.type) {
      case "spotify-artist":
        return (
          <div key={index} className={`${commonClasses} col-span-6`}>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="relative z-20 p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-300  font-light hover:underline"
                >
                  {item.description}
                </a>
              </p>
              <iframe
                className="rounded-lg w-full"
                src={item.embedSrc}
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        );

      case "spotify-track":
        return (
          <div key={index} className={`${commonClasses} col-span-4`}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/50 to-teal-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="relative z-20 p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="mb-4  font-light text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <iframe
                className="rounded-lg w-full h-[152px]"
                src={item.embedSrc}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        );

      case "image":
        return (
          <div
            key={index}
            className={`${commonClasses} ${
              item.title === "Weightlifting" ? "col-span-2" : "col-span-6"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 to-orange-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
            <div className="relative z-20 p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="mb-4 text-sm md:text-base font-light text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
              <div className="relative w-full aspect-video">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Container>
      <div className="max-w-4xl mx-auto">
        <Header className="text-left mb-6">Hobby, Things I Like</Header>
        <main className="grid grid-cols-6 gap-6">
          {galleryItems.map(renderGalleryItem)}
        </main>
      </div>
    </Container>
  );
};

export default Hobby;
