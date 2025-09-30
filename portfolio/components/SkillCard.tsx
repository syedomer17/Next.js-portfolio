"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SkillCardProps {
  skill: {
    skill_name: string;
    Image: string;
    width: number;
    height: number;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Skill Card */}
      <div className="relative p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Skill Image */}
        <div className="relative z-10 flex items-center justify-center mb-4">
          <motion.div
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0]
            }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src={skill.Image}
              width={Math.min(skill.width, 80)}
              height={Math.min(skill.height, 80)}
              alt={skill.skill_name}
              className="object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            />
            
            {/* Skill Level Indicator */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          </motion.div>
        </div>
        
        {/* Skill Name */}
        <div className="relative z-10 text-center">
          <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-1">
            {skill.skill_name}
          </h4>
        </div>
        
        {/* Proficiency Bar */}
        <div className="relative z-10 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 w-1 h-6 bg-gradient-to-t from-purple-500/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      
      {/* Floating Animation */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default SkillCard;