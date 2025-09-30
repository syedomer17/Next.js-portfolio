"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies?: string[];
}

const ProjectCard = ({ src, title, description, technologies = [] }: Props) => {
  return (
    <motion.div 
      className="group relative flex flex-col h-[480px] overflow-hidden rounded-xl shadow-lg border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <motion.button
            className="px-4 py-2 bg-white/20 backdrop-blur-md text-white font-medium rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col justify-between flex-1 p-6">
        {/* Title */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
            {description}
          </p>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 border border-purple-500/30 rounded-full backdrop-blur-sm hover:from-purple-600/30 hover:to-cyan-600/30 hover:border-purple-400/50 transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-300" />
      
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;
