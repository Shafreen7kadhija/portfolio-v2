"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      animate={{ y: [0, 8, 0] }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-blue-600"
    >
      <span className="text-sm mb-2 tracking-wide">
        Scroll Down
      </span>

      <ChevronDown size={24} />
    </motion.a>
  );
}