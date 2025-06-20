import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
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
      </div>
    </div>
  );
};

export default Projects;
