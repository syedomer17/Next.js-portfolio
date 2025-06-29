"use client";

import { Socials } from "@/constants";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const IconBrandColors: Record<string, string> = {
  LinkedIn: "#0A66C2",
  Facebook: "#1877F2",
  Instagram: "#E4405F",
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <a href="#about-me" className="flex items-center space-x-2">
          <img
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden sm:block text-gray-300 text-sm md:text-base">
            Syed Omer Ali
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 space-x-4">
          <a href="#about-me" className="cursor-pointer">
            About me
          </a>
          <a href="#skills" className="cursor-pointer">
            Skills
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-4">
          {Socials.map(({ name, Icon, link }) => {
            const hoverColor = IconBrandColors[name] || "purple";
            return (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-200 transition transform hover:scale-110"
                style={{ color: "inherit" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "";
                }}
              >
                <Icon size={22} />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#030014ee] backdrop-blur-lg w-full mt-2 py-3 px-4 rounded-lg space-y-3"
          >
            <div className="flex flex-col space-y-2 text-gray-200">
              <a
                href="#about-me"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About me
              </a>
              <a
                href="#skills"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
            </div>
            <div className="flex flex-row gap-4 mt-3">
              {Socials.map(({ name, Icon, link }) => {
                const hoverColor = IconBrandColors[name] || "purple";
                return (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-gray-200 transition transform hover:scale-110"
                    style={{ color: "inherit" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = hoverColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
