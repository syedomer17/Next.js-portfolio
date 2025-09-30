"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CommunityLinks, SocialMediaLinks } from "@/constants";
import { FaEnvelope, FaUser, FaComments } from "react-icons/fa";

// Official brand colors for hover effects
const IconBrandColors: Record<string, string> = {
  Discord: "#5865F2",
  Facebook: "#1877F2",
  Instagram: "#E4405F",
  Twitter: "#1DA1F2",
  LinkedIn: "#0A66C2",
  "Buy Me a Coffee": "#FF813F",
  GitHub: "#ffffff",
};

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Enhanced render links with professional styling
  const renderLinks = (links: typeof CommunityLinks) =>
    links.map(({ name, Icon, link }) => {
      const hoverColor = IconBrandColors[name] || "#8b5cf6";

      return (
        <motion.a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm relative overflow-hidden mb-2"
          style={{ color: "inherit" }}
          variants={itemVariants}
          whileHover={{ x: 8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onMouseEnter={(e) => {
            const icon = e.currentTarget.querySelector('.footer-icon') as HTMLElement;
            const text = e.currentTarget.querySelector('.footer-text') as HTMLElement;
            if (icon) {
              icon.style.color = hoverColor;
              icon.style.filter = `drop-shadow(0 0 12px ${hoverColor}60)`;
              icon.style.transform = 'scale(1.1)';
            }
            if (text) {
              text.style.color = hoverColor;
            }
          }}
          onMouseLeave={(e) => {
            const icon = e.currentTarget.querySelector('.footer-icon') as HTMLElement;
            const text = e.currentTarget.querySelector('.footer-text') as HTMLElement;
            if (icon) {
              icon.style.color = '#d1d5db';
              icon.style.filter = 'none';
              icon.style.transform = 'scale(1)';
            }
            if (text) {
              text.style.color = '#d1d5db';
            }
          }}
        >
          {/* Hover background effect */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
            style={{ 
              background: `linear-gradient(135deg, ${hoverColor}30, ${hoverColor}10)` 
            }}
          />
          
          {/* Icon container */}
          <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 mr-4">
            <Icon 
              className="footer-icon text-xl text-gray-300 transition-all duration-300"
            />
          </div>
          
          {/* Text */}
          <span className="footer-text text-sm font-medium text-gray-300 transition-all duration-300 relative z-10">
            {name}
          </span>

          {/* Animated underline */}
          <div 
            className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"
            style={{ backgroundColor: hoverColor }}
          />
        </motion.a>
      );
    });

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 z-50 relative pointer-events-auto">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1200px]">
        <div className="w-full flex flex-col lg:flex-row items-start justify-between flex-wrap gap-12 lg:gap-16">

          {/* Personal Info Section */}
          <div className="flex-1 min-w-[280px] max-w-[380px] pr-0 lg:pr-8">
            <div className="relative mb-6">
              <h2 className="text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Syed Omer Ali
                </span>
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3"></div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 pr-4">
              Full-Stack Developer crafting exceptional digital experiences with cutting-edge technologies and innovative solutions.
            </p>
            
            <div className="flex items-center mb-4 py-2">
              <FaEnvelope className="text-gray-400 mr-4" />
              <a 
                href="mailto:syedomerali2006@gmail.com"
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                syedomerali2006@gmail.com
              </a>
            </div>
            
            <div className="flex items-center py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-4 animate-pulse"></div>
              <span className="text-green-400 text-sm">Available for projects</span>
            </div>
          </div>

          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col px-4 lg:px-0">
            <div className="relative mb-6">
              <div className="font-bold text-[16px] text-white">
                Community
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3"></div>
            </div>
            <div className="space-y-1">
              {renderLinks(CommunityLinks)}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col px-4 lg:px-0">
            <div className="relative mb-6">
              <div className="font-bold text-[16px] text-white">
                Social Media
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3"></div>
            </div>
            <div className="space-y-1">
              {renderLinks(SocialMediaLinks)}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="min-w-[200px] flex flex-col px-4 lg:px-0">
            <div className="relative mb-6">
              <div className="font-bold text-[16px] text-white">
                Quick Links
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 mt-3"></div>
            </div>

            <div className="space-y-1">
              {/* Support My Work */}
              <motion.a
                href="https://www.buymeacoffee.com/SyedOmerAli"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 mr-4">
                  <span className="text-xl">❤️</span>
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-orange-400 transition-all duration-300 relative z-10">
                  Support My Work
                </span>
              </motion.a>

              {/* About Me */}
              <motion.div
                className="group flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/about">
                  <div className="flex items-center w-full">
                    <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 mr-4">
                      <FaUser className="text-xl text-gray-300 group-hover:text-purple-400 transition-all duration-300" />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-all duration-300 relative z-10">
                      About Me
                    </span>
                  </div>
                </Link>
              </motion.div>

              {/* Get In Touch */}
              <motion.a
                href="mailto:syedomerali2006@gmail.com"
                className="group flex items-center py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300 mr-4">
                  <FaComments className="text-xl text-gray-300 group-hover:text-blue-400 transition-all duration-300" />
                </div>
                <span className="text-sm font-medium text-gray-300 group-hover:text-blue-400 transition-all duration-300 relative z-10">
                  Get In Touch
                </span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full border-t border-gray-700/50 mt-16 pt-8 px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-400">
              © 2025 Syed Omer Ali. All rights reserved. ✨
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;