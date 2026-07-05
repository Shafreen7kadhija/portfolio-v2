"use client";

import { motion } from "framer-motion";
import MouseGlow from "../Hero/MouseGlow";

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-blue-100 overflow-hidden"
    >
      <MouseGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Education
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-5"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Card */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white/90 backdrop-blur-md rounded-3xl border border-blue-100 p-8 shadow-[0_15px_35px_rgba(37,99,235,0.10)] hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.18)] transition-all duration-300"
          >

            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 text-white text-2xl mb-5">
              🎓
            </div>

            <h3 className="text-3xl font-bold text-blue-600 leading-tight">
              Bannari Amman Institute of Technology
            </h3>

            <p className="mt-5 text-xl font-semibold text-gray-900">
              Bachelor of Engineering
            </p>

            <p className="text-gray-600 mt-1">
              Computer Science and Engineering
            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                2023 - 2027
              </span>

              <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                Final Year
              </span>

            </div>

            <p className="mt-6 text-gray-700 leading-8">
              Currently pursuing my Bachelor's degree with a strong interest in
              <span className="font-semibold text-blue-600">
                {" "}Java Development
              </span>,
              <span className="font-semibold text-blue-600">
                {" "}Software Engineering
              </span>,
              <span className="font-semibold text-blue-600">
                {" "}Full Stack Development
              </span>,
              and
              <span className="font-semibold text-blue-600">
                {" "}Data Structures & Algorithms
              </span>.
            </p>

          </motion.div>

          {/* Right Side */}

          <div className="grid grid-cols-2 gap-6">

            {/* Card 1 */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                BE CSE
              </h3>

              <p className="mt-2 text-gray-600">
                Degree
              </p>
            </motion.div>

            {/* Card 2 */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-4xl font-bold text-blue-600">
                2027
              </h3>

              <p className="mt-2 text-gray-600">
                Graduation
              </p>
            </motion.div>

            {/* Card 3 */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                Final
              </h3>

              <p className="mt-2 text-gray-600">
                Current Year
              </p>
            </motion.div>

            {/* Card 4 */}

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="h-36 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_15px_35px_rgba(37,99,235,0.10)] flex flex-col justify-center items-center hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(37,99,235,0.18)] transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                Full Stack
              </h3>

              <p className="mt-2 text-gray-600">
                Focus Area
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}