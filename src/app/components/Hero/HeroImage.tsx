"use client";

import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="relative flex items-center justify-center"
    >
      {/* Soft Blue Glow */}
      <div className="absolute w-[390px] h-[390px] rounded-full bg-blue-400/15 blur-3xl"></div>

      {/* Outer Ring */}
      <div className="absolute w-[355px] h-[355px] rounded-full border border-blue-200"></div>

      {/* White Ring */}
      <div className="absolute w-[340px] h-[340px] rounded-full border-[8px] border-white shadow-[0_20px_60px_rgba(37,99,235,0.20)]"></div>

      {/* Profile Image */}
      <motion.img
        src="/images/profile.jpg"
        alt="Profile"
        whileHover={{
          scale: 1.025,
          rotate: 0.8,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative w-[310px] h-[310px] rounded-full object-cover border-[8px] border-white shadow-[0_20px_60px_rgba(37,99,235,0.20)] cursor-pointer"
      />
    </motion.div>
  );
}