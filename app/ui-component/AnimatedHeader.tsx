"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  label: string;
}
const AnimatedNavItem = ({ href, label }: NavItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative px-2 cursor-pointer">
      <a
        href={href}
        className="text-[var(--fontcolor)]  text-base transition duration-400 hover:text-bordercolor"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative inline-block pb-1">
          {label}
          {/* Animated Underline */}
          <motion.div
            className="absolute left-[-4px] bottom-0 h-[2px] bg-bordercolor"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "calc(100% + 9px)" : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </span>
      </a>
    </div>
  );
};

export default AnimatedNavItem;
