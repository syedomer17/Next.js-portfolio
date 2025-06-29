import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        My Projects
      </h1>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          px-4
          w-full
          max-w-7xl
        "
      >
        <ProjectCard
          src="/NextWebsite.png"
          title="Interactive Website"
          description="A visually stunning website inspired by space exploration, utilizing immersive design elements and creative visuals to engage visitors."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Dynamic and engaging card components that enhance user interaction, featuring smooth animations and responsive layouts."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Modern Next.js Portfolio"
          description="A sleek and responsive portfolio website built with Next.js, showcasing modern web design principles and optimized for performance and SEO."
        />
        <ProjectCard
          src="/GistSearch.png"
          title="GitHub Gist Search App"
          description="A powerful Next.js application that lets users search, view, and manage GitHub Gists with OAuth authentication, dynamic filtering, and a clean user experience."
        />
        <ProjectCard
          src="/AIFitnessApp.png"
          title="AI-Powered Fitness Platform"
          description="An intelligent fitness app built with Next.js that generates personalized workout plans using AI, featuring secure authentication and a modern, responsive design."
        />
        <ProjectCard
          src="/NginxGenerator.png"
          title="NGINX Config Generator"
          description="A handy tool to create custom NGINX server configuration snippets with an intuitive Next.js interface and instant code preview for developers."
        />
      </div>
    </div>
  );
};

export default Projects;
