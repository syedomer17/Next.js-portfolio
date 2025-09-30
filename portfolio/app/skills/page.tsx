"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
} from "@/constants";
import SkillCard from "../../components/SkillCard";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building beautiful and responsive user interfaces",
    skills: Frontend_skill,
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-600/10",
    icon: "🎨",
  },
  {
    title: "Backend Development", 
    description: "Robust server-side applications and APIs",
    skills: Backend_skill,
    gradient: "from-green-500 to-teal-600",
    bgGradient: "from-green-500/10 to-teal-600/10",
    icon: "⚙️",
  },
  {
    title: "Full-Stack Tools",
    description: "End-to-end development solutions",
    skills: Full_stack,
    gradient: "from-orange-500 to-red-600", 
    bgGradient: "from-orange-500/10 to-red-600/10",
    icon: "🚀",
  },
  {
    title: "Other Technologies",
    description: "Additional programming languages and tools",
    skills: Other_skill,
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10", 
    icon: "💡",
  },
];

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      {/* Floating Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 backdrop-blur-sm mb-8"
          >
            <span className="text-purple-400 mr-3">✨</span>
            <span className="text-purple-300 font-medium text-sm sm:text-base">
              Technical Expertise
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-6 leading-tight"
          >
            Skills & Technologies
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with cutting-edge technologies
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From frontend magic to backend power, I leverage modern tools and frameworks to build scalable, performant, and beautiful applications that make a difference.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-8 mb-4 mx-auto"
          />
        </div>

        {/* Skills Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.2 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="group"
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  viewport={{ once: true }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} mb-6 text-2xl shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} mb-4`}>
                  {category.title}
                </h3>
                
                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills Container */}
              <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${category.bgGradient} backdrop-blur-sm border border-white/10 shadow-2xl`}>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full" />
                <div className={`absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-t ${category.gradient} rounded-full opacity-60`} />
                
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.skill_name}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1
                      }}
                      viewport={{ once: true }}
                    >
                      <SkillCard skill={skill} />
                    </motion.div>
                  ))}
                </div>

                {/* Skills Count Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.2 + 0.8 
                  }}
                  viewport={{ once: true }}
                  className={`absolute -top-3 -right-3 bg-gradient-to-r ${category.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                >
                  {category.skills.length} Skills
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Frontend Skills", count: Frontend_skill.length, icon: "🎨" },
              { label: "Backend Skills", count: Backend_skill.length, icon: "⚙️" },
              { label: "Full-Stack Tools", count: Full_stack.length, icon: "🚀" },
              { label: "Total Skills", count: Frontend_skill.length + Backend_skill.length + Full_stack.length + Other_skill.length, icon: "💼" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {stat.count}+
                </div>
                <div className="text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life with cutting-edge technologies?
          </p>
          <motion.a
            href="/connect"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">🚀</span>
            Let's Work Together
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;