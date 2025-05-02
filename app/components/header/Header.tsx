import Icon from "@/app/assets/photos/d-icon.png";
import Image from "next/image";
import AnimatedNavItem from "../../ui-component/AnimatedHeader";
import ThemeToggle from "../themetoggle/ThemeToggle";

const Header = () => {
  return (
    <header className="bg-background  h-24 flex items-center justify-between  fixed top-0 w-full z-20 ">
      {/* Left-aligned icon */}
      <div className="flex items-center">
        <div className="px-12 text-fontcolor">
          <Image
            src={Icon}
            alt="Logo"
            className="object-cover cursor-pointer"
            height={45}
            width={45}
          />
        </div>
      </div>

      {/* Right-aligned navigation links */}
      <div className="flex p-2 w-full justify-end">
        <AnimatedNavItem href="#home" label="Home" />
        <AnimatedNavItem href="#experience" label="Experience" />
        <AnimatedNavItem href="#skills" label="Skills" />
        <AnimatedNavItem href="#projects" label="Projects" />
        <AnimatedNavItem href="#contact" label="Contact" />
      </div>
      <ThemeToggle />
    </header>
  );
};

export default Header;
