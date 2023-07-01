/* eslint-disable @next/next/no-img-element */
import React from "react";

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://placekitten.com/400/300",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placekitten.com/400/300",
    link: "#",
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <main className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div className="bg-white rounded-lg p-4" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-4 rounded-lg"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-500 font-bold">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
