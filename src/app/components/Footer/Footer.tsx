"use client";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-200 bg-gradient-to-r from-slate-900 via-[#0b132b] to-slate-900">

      {/* Blue Glow */}
      <div className="absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-10">

        {/* Name */}

        <h2 className="text-center text-3xl font-bold text-white">
          Shahnaz Shafreen
        </h2>

        <p className="mt-2 text-center text-blue-300">
          Software Engineer • Java Developer
        </p>

        {/* Social Icons */}

        <div className="mt-6 flex justify-center gap-5">

          <a
            href="mailto:shafreenshahnaz@gmail.com"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
          >
            <FaEnvelope
              size={18}
              className="text-white transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/shafreen-shariff-614239329/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
          >
            <FaLinkedin
              size={18}
              className="text-white transition-transform duration-300 group-hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/Shafreen7kadhija"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
          >
            <FaGithub
              size={18}
              className="text-white transition-transform duration-300 group-hover:scale-110"
            />
          </a>

        </div>

        {/* Divider */}

        <div className="mx-auto mt-8 max-w-md border-t border-white/10"></div>

        {/* Copyright */}

        <p className="mt-5 text-center text-sm text-gray-400">
          © 2026 Shahnaz Shafreen. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}