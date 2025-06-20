"use client";

import React from "react";
import Link from "next/link";
import { CommunityLinks, SocialMediaLinks } from "@/constants";

// Official brand colors for hover effects
const IconBrandColors: Record<string, string> = {
  Discord: "#5865F2",
  Facebook: "#1877F2",
  Instagram: "#E4405F",
  Twitter: "#1DA1F2",
  LinkedIn: "#0A66C2",
  "Buy Me a Coffee": "#FF813F",
  GitHub: "#ffffff", // White for visibility on dark background
};

const Footer = () => {
  // Render links with brand color hover effect
  const renderLinks = (links: typeof CommunityLinks) =>
    links.map(({ name, Icon, link }) => {
      const hoverColor = IconBrandColors[name] || "purple";

      return (
        <a
          key={name}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center my-3 cursor-pointer transition transform hover:scale-110"
          style={{ color: "inherit" }}
          onMouseEnter={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.color = hoverColor;
            e.currentTarget.style.color = hoverColor;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget.firstChild as HTMLElement).style.color = "";
            e.currentTarget.style.color = "";
          }}
        >
          <Icon className="text-xl sm:text-2xl" />
          <span className="text-[15px] ml-3">{name}</span>
        </a>
      );
    });

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-[15px] z-50 relative pointer-events-auto">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1200px]">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-around flex-wrap gap-8 sm:gap-0">

          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center sm:items-start">
            <div className="font-bold text-[16px] mb-4">Community</div>
            {renderLinks(CommunityLinks)}
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center sm:items-start">
            <div className="font-bold text-[16px] mb-4">Social Media</div>
            {renderLinks(SocialMediaLinks)}
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center sm:items-start">
            <div className="font-bold text-[16px] mb-4">About</div>

            <a
              href="https://www.buymeacoffee.com/SyedOmerAli"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-3 cursor-pointer transition transform hover:scale-110 hover:text-[#FF813F]"
            >
              <span className="text-[15px] ml-3">Become Sponsor</span>
            </a>

            <Link href="/about" passHref legacyBehavior>
              <a className="flex items-center my-3 cursor-pointer transition transform hover:scale-110 hover:text-purple-500">
                <span className="text-[15px] ml-3">Learning about me</span>
              </a>
            </Link>

            <a
              href="mailto:syedomerali2006@gmail.com"
              className="flex items-center my-3 cursor-pointer transition transform hover:scale-110 hover:text-purple-500"
            >
              <span className="text-[15px] ml-3">syedomerali2006@gmail.com</span>
            </a>
          </div>
        </div>

        <div className="mt-8 mb-4 text-[15px] text-center text-gray-400">
          &copy; Syed Omer Ali 2025 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
