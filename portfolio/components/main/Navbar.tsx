"use client";

import { Socials } from "@/constants";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const IconBrandColors: Record<string, string> = {
  LinkedIn: "#0A66C2",
  Facebook: "#1877F2",
  Instagram: "#E4405F",
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Filter to only show LinkedIn, Facebook, and Instagram
  const filteredSocials = Socials.filter(social => 
    ['LinkedIn', 'Facebook', 'Instagram'].includes(social.name)
  );

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo */}
        <Link href="/about" className="flex items-center space-x-2">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden sm:block text-gray-300 text-sm md:text-base">
            Syed Omer Ali
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-4 py-2 rounded-full text-gray-200 space-x-4">
          <Link href="/" className="cursor-pointer">
            Home
          </Link>
          <Link href="/about" className="cursor-pointer">
            About
          </Link>
          <Link href="/skills" className="cursor-pointer">
            Skills
          </Link>
          <Link href="/projects" className="cursor-pointer">
            Projects
          </Link>
          <Link href="/connect" className="cursor-pointer">
            Connect
          </Link>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex flex-row gap-4">
          {filteredSocials.map(({ name, Icon, link }) => {
            const hoverColor = IconBrandColors[name] || "#7042f8";
            return (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#0300145e] border border-[#7042f861] text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                style={{ 
                  transition: 'all 0.3s ease',
                  minWidth: '40px',
                  minHeight: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverColor;
                  e.currentTarget.style.borderColor = hoverColor;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.color = '';
                }}
              >
                <Icon size={20} />
              </Link>
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
              <Link
                href="/"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/skills"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/projects"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/connect"
                className="cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
            <div className="flex flex-row gap-3 mt-3 justify-center">
              {filteredSocials.map(({ name, Icon, link }) => {
                const hoverColor = IconBrandColors[name] || "#7042f8";
                return (
                  <Link
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#0300145e] border border-[#7042f861] text-gray-200 hover:text-white transition-all duration-300 transform hover:scale-110"
                    style={{ 
                      transition: 'all 0.3s ease',
                      minWidth: '40px',
                      minHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = hoverColor;
                      e.currentTarget.style.borderColor = hoverColor;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '';
                      e.currentTarget.style.borderColor = '';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <Icon size={20} />
                  </Link>
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