"use client";

import { motion } from "framer-motion";
import MouseGlow from "../Hero/MouseGlow";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-blue-100 overflow-hidden"
    >
      {/* Mouse Glow */}
      <MouseGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            About Me
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="text-3xl font-bold text-blue-600 mb-8">
              Who am I?
            </h3>

            <p className="text-gray-700 leading-9 text-lg">
              I am <span className="font-semibold">Shahnaz Shafreen</span>, a
              Computer Science Engineering student passionate about{" "}
              <span className="font-semibold text-blue-600">Java</span>,{" "}
              <span className="font-semibold text-blue-600">
                Data Structures & Algorithms
              </span>,{" "}
              <span className="font-semibold text-blue-600">
                Web Development
              </span>,{" "}
              and{" "}
              <span className="font-semibold text-blue-600">
                Software Engineering
              </span>.
            </p>

            <p className="text-gray-700 leading-9 text-lg mt-6">
                I enjoy building real-world software, solving challenging coding
                problems, and continuously expanding my technical knowledge.
                Beyond programming, I enjoy playing chess, a game that has
                strengthened my analytical thinking, strategic planning, and
                problem-solving approach.
            </p>
          </motion.div>

          {/* Right Side */}
          <div className="grid grid-cols-2 gap-8">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="h-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-600">3+</h3>
              <p className="mt-3 text-gray-600 font-medium">
                Completed Projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-600">300+</h3>
              <p className="mt-3 text-gray-600 font-medium">
                DSA Problems Solved
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-600">Java</h3>
              <p className="mt-3 text-gray-600 font-medium">
                Primary Language
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="h-40 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-600">2027</h3>
              <p className="mt-3 text-gray-600 font-medium">
                Expected Graduation
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}