"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-6 w-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.95)" }}
    >
      {/* Title */}
      <SkillText />

      {/* Skill Groups */}
      {[
        { data: Skill_data, delay: 0 },
        { data: Frontend_skill, delay: 0.1 },
        { data: Backend_skill, delay: 0.2 },
        { data: Full_stack, delay: 0.3 },
        { data: Other_skill, delay: 0.4 },
      ].map((group, groupIndex) => (
        <motion.div
          key={groupIndex}
          className="flex flex-wrap justify-center gap-6 mt-4 w-full px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: group.delay }}
          viewport={{ once: true }}
        >
          {group.data.map((image, index) => (
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
