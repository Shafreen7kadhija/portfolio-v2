"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="w-full max-w-3xl"
    >
      {/* Hello Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 shadow-lg mb-8 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl">
        <span className="text-blue-600 font-semibold text-base">
          Hello, I'm
        </span>

        <span className="text-xl animate-pulse">👋</span>
      </div>

      {/* Name */}
      <h1 className="text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
        Shahnaz Shafreen 
      </h1>

      {/* Animated Profession */}
      <div className="mt-6 h-14 flex items-center">
        <TypeAnimation
          sequence={[
            "💻 Software Engineer",
            2000,
            "☕ Java Developer",
            2000,
            "⚛ React Developer",
            2000,
            "🧠 Problem Solver",
            2000,
          ]}
          wrapper="span"
          speed={60}
          repeat={Infinity}
          className="text-3xl font-semibold text-blue-600"
        />
      </div>

      {/* Description */}
      <p className="mt-8 text-lg leading-9 text-gray-600 max-w-3xl">
        Passionate Computer Science Engineering student focused on Java,
        Data Structures & Algorithms, Web Development, and building
        scalable, real-world software projects while continuously
        improving my problem-solving skills.
      </p>

    </motion.div>
  );
}