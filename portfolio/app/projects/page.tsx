"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { ProjectsData, ProjectCategories } from "@/constants";
import ProjectCardDetailed from "../../components/ProjectCardDetailed";
import Link from "next/link";

const ProjectsPage = () => {

  // Show all projects with featured first
  const displayProjects = useMemo(() => {
    return [...ProjectsData].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#030014] via-[#0a051a] to-[#030014]">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Projects
              </span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore my portfolio of innovative projects, from full-stack applications to AI-powered solutions. 
              Each project represents a journey of learning, creativity, and technical excellence.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {ProjectsData.length}
              </div>
              <div className="text-gray-400 text-sm">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {ProjectsData.filter(p => p.featured).length}
              </div>
              <div className="text-gray-400 text-sm">Featured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {new Set(ProjectsData.flatMap(p => p.technologies)).size}
              </div>
              <div className="text-gray-400 text-sm">Technologies</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatePresence mode="wait">
          {displayProjects.length > 0 ? (
            <motion.div
              key="all-projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            >
              {displayProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCardDetailed project={project} index={index} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20"
            >
              <div className="text-6xl text-gray-600 mb-4">�</div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects available</h3>
              <p className="text-gray-400 mb-6">
                Projects will appear here once they are added.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectsPage;