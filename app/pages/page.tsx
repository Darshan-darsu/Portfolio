"use client";
import { useState, useEffect, useRef } from "react";
import Portfolio from "../components/main/Portfolio";

export default function TestComponent() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingUp(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - Hides on Scroll Down, Shows on Scroll Up */}
      <header
        className={`fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center px-6 shadow-md transition-transform duration-300 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        } z-50`}
      >
        <h1 className="text-xl font-bold">Header</h1>
      </header>

      {/* Layout Wrapper */}
      <div className="flex pt-16">
        {/* Left Sidebar - Adjusts position based on header visibility */}
        <aside
          className={`w-[12.5%] h-screen fixed left-0 bg-gray-800 text-white p-4 flex flex-col items-center transition-all duration-10 ${
            isScrollingUp ? "top-16" : "top-0"
          }`}
        >
          <p>Left Sidebar</p>
        </aside>

        {/* Main Content - Scrollable */}
        <main className="ml-[12.5%] mr-[12.5%] w-[75%]  min-h-screen">
          <Portfolio />
        </main>

        {/* Right Sidebar - Adjusts position based on header visibility */}
        <aside
          className={`w-[12.5%] h-screen fixed right-0 bg-gray-800 text-white p-4 flex flex-col items-center transition-all duration-300 ${
            isScrollingUp ? "top-16" : "top-0"
          }`}
        >
          <p>Right Sidebar</p>
        </aside>
      </div>

      {/* Footer - Full Width, Not Fixed */}
      <footer className="w-full h-16 bg-gray-900 text-white flex items-center justify-center shadow-md">
        <p>Footer</p>
      </footer>
    </div>
  );
}
