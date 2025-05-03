"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Icon from "@/app/assets/photos/d-icon.png";
import AnimatedNavItem from "../../ui-component/AnimatedHeader";
import ThemeToggle from "../themetoggle/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <AnimatedNavItem href="#home" label="Home" />
      <AnimatedNavItem href="#experience" label="Experience" />
      <AnimatedNavItem href="#skills" label="Skills" />
      <AnimatedNavItem href="#projects" label="Projects" />
      <AnimatedNavItem href="#contact" label="Contact" />
    </>
  );

  return (
    <header className="bg-background h-24 fixed top-0 w-full z-20 flex items-center justify-between px-6 md:px-12">
      {/* Left - Logo */}
      <div className="text-fontcolor">
        <Image
          src={Icon}
          alt="Logo"
          className="object-cover cursor-pointer"
          height={45}
          width={45}
        />
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4">{navLinks}</nav>

      {/* Theme toggle */}
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Mobile hamburger icon */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        <button onClick={() => setIsOpen(true)}>
          <Bars3Icon className="h-6 w-6 text-fontcolor" />
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6"
          >
            <XMarkIcon className="h-8 w-8 text-fontcolor" />
          </button>
          <nav className="flex flex-col items-center space-y-4 text-lg">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
