"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import ContactForm from "../sub/ContactForm";
import ContactInfo from "../sub/ContactInfo";

const Connect = () => {
  return (
    <div className="relative flex flex-col h-full w-full min-h-screen" id="connect">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Floating Elements */}
      <div className="absolute top-32 left-20 w-16 h-16 bg-purple-400/10 rounded-full blur-2xl animate-pulse z-[5]" />
      <div className="absolute top-80 right-32 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-1000 z-[5]" />
      <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-pink-400/10 rounded-full blur-2xl animate-pulse delay-2000 z-[5]" />

      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center px-6 sm:px-10 lg:px-20 mt-32 lg:mt-40 w-full z-[20] min-h-screen"
      >
        <div className="max-w-7xl w-full space-y-20">
          
          {/* Header Section */}
          <div className="text-center space-y-8">
            <motion.div
              variants={slideInFromTop}
              className="inline-flex items-center justify-center mx-auto max-w-fit px-6 py-3 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-purple-400/30 rounded-full"
            >
              <SparklesIcon className="text-purple-400 mr-3 h-5 w-5" />
              <h1 className="text-sm font-medium text-gray-300 tracking-wide">LET'S WORK TOGETHER</h1>
            </motion.div>

            <motion.div
              variants={slideInFromTop}
              className="space-y-6"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-medium">
                  connect
                </span>
                ?
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about technology. Let's turn your ideas into reality.
              </p>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Contact Form Section */}
            <motion.div
              variants={slideInFromLeft(0.5)}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Send me a{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    message
                  </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Have a project in mind? Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              variants={slideInFromRight(0.5)}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
                  Get in{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 drop-shadow-lg">
                    touch
                  </span>
                </h2>
                <p className="text-lg text-white leading-relaxed drop-shadow-sm">
                  Prefer a more direct approach? Reach out through any of these channels.
                </p>
              </div>
              <ContactInfo />
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            variants={slideInFromTop}
            className="text-center space-y-8 pt-16"
          >
            <div className="max-w-4xl mx-auto space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-white">
                Let's build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                  amazing
                </span>{" "}
                together
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a startup looking to disrupt the market or an established company 
                seeking to innovate, I'm here to help bring your vision to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
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
                  View My Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
              
              <motion.a
                href="mailto:syedomeralii@gmail.com"
                className="group px-8 py-4 border-2 border-slate-600 text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:border-purple-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 text-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Directly
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Connect;