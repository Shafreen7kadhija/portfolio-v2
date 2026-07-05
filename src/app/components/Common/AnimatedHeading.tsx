"use client";

import { motion } from "framer-motion";

interface AnimatedHeadingProps {
  title: string;
}

export default function AnimatedHeading({
  title,
}: AnimatedHeadingProps) {
  return (
    <div className="mb-20 overflow-hidden">

      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl md:text-6xl font-bold text-gray-900"
      >
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: false }}
            transition={{
              delay: index * 0.08,
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h2>

      {/* Animated Lines */}

      <div className="relative mt-7 h-1 w-full overflow-hidden">

        <motion.div
          initial={{
            x: "-120%",
          }}
          whileInView={{
            x: "0%",
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="absolute left-0 w-[48%] h-1 bg-blue-600 rounded-full"
        />

        <motion.div
          initial={{
            x: "120%",
          }}
          whileInView={{
            x: "0%",
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="absolute right-0 w-[48%] h-1 bg-blue-600 rounded-full"
        />

      </div>

    </div>
  );
}