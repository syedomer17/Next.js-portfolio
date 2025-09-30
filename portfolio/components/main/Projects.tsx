"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      id="projects"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12 lg:mb-16"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
          My Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore my portfolio of innovative projects showcasing cutting-edge technologies and creative solutions
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/ExpenseTracker.png"
              title="Expense Tracker"
              description="A comprehensive web application for tracking personal expenses with intuitive data visualization, budget management, and insightful analytics to help users make informed financial decisions."
              technologies={["React", "Node.js", "MongoDB", "Chart.js"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/CardImage.png"
              title="Interactive Website Cards"
              description="Dynamic and engaging card components featuring smooth animations, hover effects, and responsive layouts that enhance user interaction and provide an exceptional user experience."
              technologies={["React", "CSS3", "Framer Motion", "TypeScript"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/SpaceWebsite.png"
              title="Modern Next.js Portfolio"
              description="A sleek and responsive portfolio website showcasing modern web design principles, optimized for performance and SEO with cutting-edge technologies and beautiful animations."
              technologies={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/GistSearch.png"
              title="GitHub Gist Search App"
              description="A powerful application enabling users to search, view, and manage GitHub Gists with OAuth authentication, dynamic filtering, and a clean, intuitive user experience."
              technologies={["Next.js", "GitHub API", "OAuth", "Tailwind CSS"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/AIFitnessApp.png"
              title="AI-Powered Fitness Platform"
              description="An intelligent fitness application that generates personalized workout plans using AI algorithms, featuring secure authentication and a modern, responsive design interface."
              technologies={["Next.js", "AI/ML", "Auth0", "PostgreSQL"]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <ProjectCard
              src="/NginxGenerator.png"
              title="NGINX Config Generator"
              description="A developer-friendly tool for creating custom NGINX server configurations with an intuitive interface, real-time preview, and instant code generation capabilities."
              technologies={["Next.js", "Node.js", "Docker", "NGINX"]}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            href="https://github.com/syedomer17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View More Projects
          </motion.a>
        </motion.div>
    </div>
  );
};

export default Projects;
