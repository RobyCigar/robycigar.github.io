"use client";
/* eslint-disable @next/next/no-img-element */
import Paragraph from "@/components/atoms/paragraph";
import Container from "@/components/molecules/landing/container";
import Header from "@/components/molecules/landing/header";
import useTooltip from "@/utils/useTooltip";
import React from "react";
import { useTranslation } from "../i18n";
import Image from "next/image";
import Badge from "@/components/atoms/badge";

const Hobby = () => {
  const { Tooltip } = useTooltip()
  const { t } = useTranslation();
  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center">
        <Header className="text-left mb-2">Things I Like</Header>
        <main className="grid grid-cols-6 gap-4">
          <div
            className="col-span-6 relative"
            title="Shiey is a youtuber who inspired me to travel a lot"
          >
            <Badge style="absolute -top-2 -right-2 w-fit">
              <p>
                <a
                  className="dark:text-blue-200 text-blue-800 hover:underline"
                  target="_blank"
                  href="https://www.youtube.com/@shiey"
                >
                  Shiey
                </a>{" "}
                is a youtuber who inspired me to travel a lot
              </p>
            </Badge>
            <iframe
              className="rounded"
              src="https://open.spotify.com/embed/artist/5R4TF0oJIio0fueUmyhY1Q?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div title="A man doing deadlift" className="col-span-2 relative">
            <Badge style="absolute -top-2 whitespace-nowrap end-1/3 w-fit">
              <p>I do weightlifting to keep my body sane</p>
            </Badge>
            <img
              src="/assets/sport.jpg"
              className="rounded-lg w-full"
              alt="A man doing deadlift"
            />
          </div>
          <div className="col-span-4 relative" title="Her voice is so pretty">
            <Badge style="absolute top-1/3 whitespace-nowrap -end-1/4 w-fit">
              <p>Her voice is so pretty</p>
            </Badge>
            <iframe
              className="h-full"
              src="https://open.spotify.com/embed/track/5hVAQTNarrb3lmWqg9Ens4?utm_source=generator"
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default Hobby;
