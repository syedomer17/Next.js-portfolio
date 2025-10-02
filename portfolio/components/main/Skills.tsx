"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Cloud_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

const Skills = () => {
  // Combine all skills and reorganize into custom rows
  const allSkills = [
    ...Frontend_skill,
    ...Backend_skill,
    ...Full_stack,
    ...Cloud_skill,
    ...Other_skill
  ];

  // Define custom row configurations
  const skillRows = [
    { skills: allSkills.slice(0, 12), delay: 0 }, // First row - 12 skills
    { skills: allSkills.slice(12, 22), delay: 0.1 }, // Second row - 10 skills
    { skills: allSkills.slice(22, 29), delay: 0.2 }, // Third row - 7 skills
    { skills: allSkills.slice(29, 33), delay: 0.3 }, // Fourth row - 4 skills
  ];

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 w-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.95)" }}
    >
      {/* Title */}
      <SkillText />

      {/* Skill Rows */}
      {skillRows.map((row, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="flex flex-wrap justify-center gap-6 mt-4 w-full px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: row.delay }}
          viewport={{ once: true }}
        >
          {row.skills.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </motion.div>
      ))}

      {/* Background Video */}
      <div className="absolute inset-0 z-[-10] opacity-30 flex items-center justify-center bg-cover">
        <video
          className="w-full h-auto object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
          src="/cards-video.webm"
        />
      </div>
    </section>
  );
};

export default Skills;