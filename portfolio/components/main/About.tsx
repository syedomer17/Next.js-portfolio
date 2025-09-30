"use client";

"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AboutContent from "../sub/AboutContent";
import AboutExperience from "../sub/AboutExperience";

const About = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Floating Elements - More Subtle */}
      <div className="absolute top-32 left-20 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse z-[5]" />
      <div className="absolute top-80 right-32 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000 z-[5]" />
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse delay-2000 z-[5]" />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 mt-32 lg:mt-40 w-full z-[20] gap-16 lg:gap-0 min-h-screen"
      >
        <div className="h-full w-full flex flex-col gap-8 justify-center text-center lg:text-left max-w-4xl">
          <motion.div
            variants={slideInFromTop}
            className="inline-flex items-center justify-center lg:justify-start mx-auto lg:mx-0 max-w-fit px-6 py-3 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-purple-400/30 rounded-full"
          >
            <SparklesIcon className="text-purple-400 mr-3 h-5 w-5" />
            <h1 className="text-sm font-medium text-gray-300 tracking-wide">FULL-STACK DEVELOPER & ARCHITECT</h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-medium">
                exceptional
              </span>
              <br />
              digital experiences
            </h1>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            Passionate about building scalable, high-performance applications that solve real-world problems. 
            I combine{" "}
            <span className="text-purple-400 font-semibold">technical excellence</span>{" "}
            with{" "}
            <span className="text-cyan-400 font-semibold">creative innovation</span>{" "}
            to deliver solutions that exceed expectations.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-col sm:flex-row gap-6 pt-8 justify-center lg:justify-start"
          >
            <motion.a
              href="/Syed-Omer-Ali.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 text-center border border-purple-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group px-8 py-4 border-2 border-slate-600 text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 text-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </span>
            </motion.a>
          </motion.div>

          {/* Professional Stats */}
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="flex flex-row gap-12 pt-12 justify-center lg:justify-start"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">1+</div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">15+</div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">10+</div>
              <div className="text-sm text-gray-400 font-medium tracking-wide">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full lg:w-auto h-full flex justify-center items-center relative"
        >
          {/* Enhanced background effects */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] h-[300px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          </div>
          
          <div className="relative z-10 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
            <Image
              src="/mainIconsdark.svg"
              alt="Technology Stack"
              height={550}
              width={550}
              className="relative z-10 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Content Sections */}
      <div className="flex flex-col gap-20 mt-20 z-[20]">
        <AboutContent />
        <AboutExperience />
      </div>
    </div>
  );
};

export default About;