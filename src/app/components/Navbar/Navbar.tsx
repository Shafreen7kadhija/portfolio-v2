"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md py-3"
          : "bg-white/20 backdrop-blur-lg py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-600 tracking-tight hover:opacity-80 transition"
        >
          Shahnaz Shafreen
        </a>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-700">

          <li>
            <a
              href="#home"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#education"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative transition duration-300 hover:text-blue-600 hover:font-semibold after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Resume Button */}
        <a
          href="/resume/Shahnaz_Shafreen_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-blue-600 px-6 py-2.5 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:scale-105"
          >
            View Resume
        </a>

      </div>
    </nav>
  );
}