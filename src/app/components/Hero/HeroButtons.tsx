"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.8,
        ease: "easeOut",
    }}
      className="flex gap-4 mt-10"
    >
      <a
        href="/resume/Shahnaz_Shafreen_Resume.pdf"
        download
        className="group flex items-center gap-3 rounded-full border-2 border-blue-600 bg-white px-7 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-[0_15px_35px_rgba(37,99,235,0.30)]"
      >
        <Download
          size={18}
          className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-12"
        />
        Download Resume
      </a>

      <a
        href="https://github.com/Shafreen7kadhija"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full border-2 border-gray-900 bg-white px-7 py-3 font-semibold text-gray-900 transition-all duration-300 hover:-translate-y-1 hover:bg-gray-900 hover:text-white hover:shadow-xl"
      >
        <ExternalLink
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
        GitHub
      </a>
    </motion.div>
  );
}