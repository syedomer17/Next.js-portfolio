"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { Certificate } from "crypto";

const AboutExperience = () => {
  const experiences = [
    {
      title: "AWS & DevOps Engineer Intern",
      company: "Full Stack Academy",
      period: "2025 - Present",
      description: [
        "Gaining hands-on experience with AWS cloud services, CI/CD pipelines, and containerization",
        "Learning and applying DevOps practices for scalable deployments and infrastructure automation",
        "Working on real-time projects to integrate backend systems with secure and efficient workflows",
        "Exploring system design, monitoring, and deployment strategies in cloud-native environments",
      ],
      color: "from-cyan-500 to-blue-500",
      status: "Current",
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Code for India",
      period: "2024 - 2025",
      description: [
        "Built and deployed full-stack applications using MERN stack with TypeScript and MongoDB",
        "Integrated GitHub OAuth authentication, cookies, and JWT for secure user sessions",
        "Implemented CRUD operations, APIs, and real-world features such as gist management",
        "Collaborated in a team environment to deliver scalable and user-friendly solutions",
      ],
      color: "from-purple-500 to-indigo-500",
      status: "Completed",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Methodist College of Engineering and Technology",
      period: "2024 - 2028",
      description: `Pursuing a Bachelor's degree in Computer Science Engineering with a specialization in Artificial Intelligence and Machine Learning. 
Completed coursework in Data Structures & Algorithms, Discrete Structures, SQL, and IoT. 
Hands-on experience in full-stack web development with a focus on MERN stack technologies. 
Passionate about building scalable applications and exploring system design and DevOps.`,
      color: "from-amber-500 to-orange-500",
      achievements: [
        "Dean's List (3 semesters)",
        "Outstanding CS Student Award",
        "Lead Developer - Student Portal Project",
      ],
    },
  ];

  const certifications = [
    {
      title: "AWS and DevOps Certified",
      issuer: "Full Stack Academy",
      year: "2025",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Full Stack Developer",
      issuer: "Code for India",
      year: "2025",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Postman API Fundamentals Student Certificate",
      issuer: "Postman",
      year: "2025",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 z-[20] relative py-20">
      {/* Sophisticated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-cyan-900/20 backdrop-blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent_50%)]" />

      <div className="max-w-[1400px] w-full relative space-y-24">
        {/* Professional Experience Section */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.h2
              variants={slideInFromTop}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight"
            >
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-medium">
                Journey
              </span>
            </motion.h2>
            <motion.div
              variants={slideInFromTop}
              className="w-32 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto"
            />
            <motion.p
              variants={slideInFromTop}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A track record of delivering exceptional digital solutions and
              driving innovation across diverse technology landscapes.
            </motion.p>
          </div>

          {/* Experience Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line for larger screens */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 via-cyan-400 to-green-400 hidden md:block" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromLeft(0.3 + index * 0.2)}
                  className="relative flex flex-col md:flex-row items-start gap-8"
                >
                  {/* Timeline marker */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-r from-slate-900 to-slate-800 border-4 border-purple-400 rounded-full relative z-10 flex-shrink-0 shadow-lg">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full" />
                  </div>

                  
                  {/* Content card */}
                  <div className="flex-1">
                    <div className="group relative p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-2xl">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <h3
                                className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}
                              >
                                {exp.title}
                              </h3>
                              <span
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  exp.status === "Current"
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                    : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                }`}
                              >
                                {exp.status}
                              </span>
                            </div>
                            <p className="text-xl text-gray-300 font-medium">
                              {exp.company}
                            </p>
                          </div>
                          <div className="bg-slate-800/60 px-4 py-2 rounded-lg border border-slate-600/50">
                            <span className="text-purple-300 font-semibold text-lg">
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-4">
                          {exp.description.map((item, i) => (
                            <motion.div
                              key={i}
                              variants={slideInFromLeft(0.5 + i * 0.1)}
                              className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-700/40 transition-colors duration-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0" />
                              <p className="text-gray-300 leading-relaxed">
                                {item}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education & Certifications Section */}
        <motion.div
          variants={slideInFromRight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Education &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 font-medium">
                Credentials
              </span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-200 mb-6">
                Academic Background
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={slideInFromLeft(0.5 + index * 0.2)}
                  className="group p-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-green-400/50 transition-all duration-500 hover:transform hover:scale-[1.02] shadow-2xl"
                >
                  <div className="space-y-6">
                    <div className="flex flex-col space-y-3">
                      <h4
                        className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${edu.color}`}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-xl text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      <div className="bg-slate-800/60 px-4 py-2 rounded-lg border border-slate-600/50 w-fit">
                        <span className="text-green-300 font-semibold">
                          {edu.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed text-lg">
                      {edu.description}
                    </p>

                    <div className="space-y-3">
                      <h5 className="text-lg font-semibold text-gray-200">
                        Key Achievements:
                      </h5>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full" />
                            <span className="text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-200 mb-6">
                Professional Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={slideInFromRight(0.5 + index * 0.2)}
                    className="group p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h4
                          className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${cert.color}`}
                        >
                          {cert.title}
                        </h4>
                        <p className="text-gray-300 font-medium">
                          {cert.issuer}
                        </p>
                      </div>
                      <div className="bg-slate-800/60 px-3 py-1 rounded-lg border border-slate-600/50">
                        <span className="text-blue-300 font-semibold">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Core
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-medium">
                Values
              </span>
            </h2>
            <div className="w-32 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              variants={slideInFromLeft(0.8)}
              className="group text-center p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105 shadow-xl"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">
                Excellence Driven
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Committed to delivering exceptional quality in every project,
                with meticulous attention to detail and adherence to industry
                best practices.
              </p>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(1.0)}
              className="group text-center p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 shadow-xl"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💡
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                Innovation Focused
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Constantly exploring cutting-edge technologies and methodologies
                to create solutions that push boundaries and exceed
                expectations.
              </p>
            </motion.div>

            <motion.div
              variants={slideInFromLeft(1.2)}
              className="group text-center p-8 bg-gradient-to-br from-green-900/20 to-teal-900/20 backdrop-blur-sm border border-green-500/30 rounded-2xl hover:border-green-400/60 transition-all duration-500 hover:transform hover:scale-105 shadow-xl"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🤝
              </div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">
                Collaboration Minded
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Fostering strong partnerships with teams and clients, believing
                that the best results come from open communication and shared
                vision.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutExperience;
