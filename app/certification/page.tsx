"use client";
/* eslint-disable @next/next/no-img-element */
import Container from "@/components/molecules/landing/container";
import React from "react";

function Certification() {
  return (
    <Container>
      <div className="m-auto flex justify-center">
        <img
          src="/assets/meme.jpeg"
          className="rounded-lg max-w-md"
          alt="Meme This is where i put my certification if i had one"
        />
      </div>
    </Container>
  );
}

export default Certification;
