"use client"
import { useEffect } from "react";

const InstagramEmbed = ({ postUrl }: any) => {
  useEffect(() => {
    // Dynamically load Instagram embed script
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Ensure Instagram embed is processed after script loads
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={postUrl}
      data-instgrm-version="14"
    ></blockquote>
  );
};

export default InstagramEmbed;
