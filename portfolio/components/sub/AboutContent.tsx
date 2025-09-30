"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";

const AboutContent = () => {
  return (
    <section className="w-full h-auto flex flex-col items-center justify-center px-10 md:px-20 z-[20] relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 rounded-3xl" />
      
      <div className="max-w-[1200px] w-full relative">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={slideInFromTop}
              className="text-[50px] md:text-[60px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4"
            >
              Who I Am
            </motion.h2>
            <motion.div 
              variants={slideInFromTop}
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Personal Info */}
            <motion.div
              variants={slideInFromLeft(0.6)}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-tl-2xl" />
              
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Personal
                </span>{" "}
                Information
              </h3>
              
              <div className="text-gray-300 space-y-6 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="text-purple-400 font-semibold">Full-Stack Web Developer</span> with a strong foundation in 
                  modern web technologies. My journey in software development began with 
                  curiosity about how web applications work, and it has evolved into a 
                  career focused on creating <span className="text-cyan-400 font-semibold">meaningful digital experiences</span>.
                </p>
                <p className="text-lg">
                  I believe in writing <span className="text-green-400 font-semibold">clean, maintainable code</span> and staying up-to-date 
                  with the latest industry trends and best practices. My approach combines 
                  technical expertise with creative problem-solving to deliver solutions 
                  that not only work but also provide excellent user experiences.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-700/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">1+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">15+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills & Interests */}
            <motion.div
              variants={slideInFromRight(0.6)}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-tr-2xl" />
              
              <h3 className="text-3xl font-bold text-white mb-6 relative z-10">
                What I{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Do
                </span>
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  variants={slideInFromRight(0.8)}
                  className="group p-4 rounded-xl bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                    🎨 Frontend Development
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Creating responsive, interactive user interfaces using <span className="text-purple-400">React</span>, <span className="text-purple-400">Next.js</span>, 
                    and modern CSS frameworks like <span className="text-purple-400">Tailwind CSS</span>.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={slideInFromRight(1.0)}
                  className="group p-4 rounded-xl bg-gradient-to-r from-cyan-900/20 to-cyan-800/20 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    ⚙️ Backend Development
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Building robust server-side applications with <span className="text-cyan-400">Node.js</span>, <span className="text-cyan-400">Express</span>, 
                    and various databases to ensure scalable and secure solutions.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={slideInFromRight(1.2)}
                  className="group p-4 rounded-xl bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
                >
                  <h4 className="text-xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                    🚀 DevOps & Deployment
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Implementing <span className="text-green-400">CI/CD pipelines</span>, containerization with <span className="text-green-400">Docker</span>, 
                    and cloud deployment strategies for efficient development workflows.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutContent;