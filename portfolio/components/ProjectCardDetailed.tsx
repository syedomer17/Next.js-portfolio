"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiClock, FiCheck, FiZap } from "react-icons/fi";
import { ProjectData } from "@/constants";

interface Props {
  project: ProjectData;
  index: number;
}

const ProjectCardDetailed = ({ project, index }: Props) => {
  const statusIcons = {
    completed: <FiCheck className="w-3 h-3" />,
    'in-progress': <FiClock className="w-3 h-3" />,
    concept: <FiZap className="w-3 h-3" />
  };

  const statusColors = {
    completed: "text-green-400 bg-green-400/10 border-green-400/30",
    'in-progress': "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    concept: "text-purple-400 bg-purple-400/10 border-purple-400/30"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10"
      whileHover={{ y: -8 }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-xs font-semibold rounded-full shadow-lg">
            Featured
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${statusColors[project.status]}`}>
          {statusIcons[project.status]}
          <span className="capitalize">{project.status.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Year Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md">
            {project.year}
          </div>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6">
        {/* Category */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 border border-purple-500/30 rounded-full">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
          {project.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.1) + (techIndex * 0.05) }}
                className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-gray-700/50 to-gray-600/50 text-gray-300 border border-gray-600/30 rounded-md backdrop-blur-sm hover:from-purple-600/20 hover:to-cyan-600/20 hover:text-purple-300 hover:border-purple-500/30 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium bg-gray-700/30 text-gray-400 border border-gray-600/30 rounded-md">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-700/50">
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-8 left-6 w-1 h-8 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-purple-600/20 via-transparent to-cyan-600/20 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCardDetailed;