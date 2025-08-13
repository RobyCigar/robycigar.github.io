"use client";

import React, { useState, useCallback, useMemo, lazy, Suspense } from "react";
import Image from "next/image";
import { useTranslation } from "../i18n";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";

// Lazy load the modal component
const ImageModal = lazy(() => import("./ImageModal"));

// Image placeholder component for better UX during loading
const ImagePlaceholder = ({ className }: { className: string }) => (
  <div
    className={`${className} bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center`}
  >
    <svg
      className="w-8 h-8 text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

// Optimized gallery item types
interface GalleryItem {
  type: "spotify-artist" | "spotify-track" | "image";
  title: string;
  description: string;
  link?: string;
  embedSrc?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
}

interface ImageGalleryItem {
  src: string;
  alt: string;
  title: string;
  description: string;
  priority?: boolean;
}

const Hobby = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);



  const galleryItems: GalleryItem[] = useMemo(
    () =>  [
    {
      type: "spotify-artist",
      title: "Shiey Inspiration",
      description: "Shiey is a man who inspired me to explore places",
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
  ], []);

  const imageGallery: ImageGalleryItem[] = useMemo(
    () => [
      {
        src: "/assets/gallery/compressed/1.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/2.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/3.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/4.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/5.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/6.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
      {
        src: "/assets/gallery/compressed/7.jpeg",
        alt: "Fun Trail Run Session",
        title: "Trail Run Session",
        description: "Running through the trails with friends",
      },
    ],
    []
  );

  // Optimized image load handler
  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages((prev) => (prev.includes(src) ? prev : [...prev, src]));
  }, []);

  // Optimized modal handlers
  const openModal = useCallback((src: string) => {
    setSelectedImage(src);
    // Preload the full-size image when modal opens
    const img = new window.Image();
    img.src = src;
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Memoized gallery item renderer
  const renderGalleryItem = useCallback(
    (item: GalleryItem, index: number) => {
      const commonClasses =
        "md:text-base text-sm relative group overflow-hidden rounded-xl shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-[transform,box-shadow] duration-500 ease-out";

      const gradientOverlay =
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10";

      switch (item.type) {
        case "spotify-artist":
          return (
            <div
              key={`gallery-${index}`}
              className={`${commonClasses} col-span-6`}
            >
              <div
                className={`${gradientOverlay} bg-gradient-to-r from-blue-500/60 to-purple-500/60`}
              ></div>
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mb-4">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-300 font-light hover:underline"
                  >
                    {item.description}
                  </a>
                </p>
                <iframe
                  className="rounded-lg w-full transform group-hover:scale-[1.01] transition-transform duration-300"
                  src={item.embedSrc}
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={item.title}
                ></iframe>
              </div>
            </div>
          );

        case "spotify-track":
          return (
            <div
              key={`gallery-${index}`}
              className={`${commonClasses} col-span-4`}
            >
              <div
                className={`${gradientOverlay} bg-gradient-to-r from-green-500/60 to-teal-500/60`}
              ></div>
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mb-4 font-light text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {item.description}
                </p>
                <iframe
                  className="rounded-lg w-full h-[152px] transform group-hover:scale-[1.01] transition-transform duration-300"
                  src={item.embedSrc}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={item.title}
                ></iframe>
              </div>
            </div>
          );

        case "image":
          const isLoaded = loadedImages.includes(item.src!);
          return (
            <div
              key={`gallery-${index}`}
              className={`${commonClasses} ${
                item.title === "Weightlifting" ? "col-span-2" : "col-span-6"
              }`}
            >
              <div
                className={`${gradientOverlay} bg-gradient-to-r from-red-500/60 to-orange-500/60`}
              ></div>
              <div className="relative z-20 p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mb-4 text-sm md:text-base font-light text-gray-600 dark:text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {item.description}
                </p>
                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                  {!isLoaded && (
                    <ImagePlaceholder className="absolute inset-0" />
                  )}
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    className={`object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={item.priority}
                    quality={75}
                    onLoad={() => handleImageLoad(item.src!)}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRWp9Dq/U6jKfs8w=="
                  />
                </div>
              </div>
            </div>
          );

        default:
          return null;
      }
    },
    [loadedImages, handleImageLoad]
  );

  return (
    <>
      <Container>
        <div className="max-w-6xl mx-auto space-y-16">
          <section>
            <Header className="text-left mb-8">Hobby, Things I Like</Header>
            <main className="grid grid-cols-6 gap-8">
              {galleryItems.map(renderGalleryItem)}
            </main>
          </section>

          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Photo Gallery
              </h2>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {imageGallery.length} photos
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imageGallery.map((image, index) => {
                const isLoaded = loadedImages.includes(image.src);
                return (
                  <div
                    key={`photo-${index}`}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl cursor-pointer transition-shadow duration-300"
                    onClick={() => openModal(image.src)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {!isLoaded && (
                        <ImagePlaceholder className="absolute inset-0" />
                      )}
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className={`object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out ${
                          isLoaded ? "opacity-100" : "opacity-0"
                        }`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={image.priority}
                        quality={75}
                        onLoad={() => handleImageLoad(image.src)}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRWp9Dq/U6jKfs8w=="
                      />
                      {/* The rest of your overlays and text elements are fine as they are */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <h3 className="text-lg font-bold mb-1">
                          {image.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {image.description}
                        </p>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </Container>

      {/* Lazy-loaded modal */}
      {selectedImage && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          }
        >
          <ImageModal src={selectedImage} onClose={closeModal} />
        </Suspense>
      )}
    </>
  );
};

export default Hobby;
