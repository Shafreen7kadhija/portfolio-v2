"use client";

import "./Skills.css";

import { motion } from "framer-motion";
import MouseGlow from "../Hero/MouseGlow";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
export default function Skills() {
  const row1 = [
    { icon: <FaJava />, name: "Java" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaJs />, name: "JavaScript" },
  ];

  const row2 = [
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: "🛢️", name: "DBMS" },
    { icon: "📘", name: "DSA" },
  ];

  const row3 = [
    { icon: "🏗️", name: "OOP" },
    { icon: "🖥️", name: "Operating Systems" },
    { icon: "🔗", name: "REST API" },
    { icon: "🧠", name: "Problem Solving" },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-blue-100"
    >
      <MouseGlow />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Technical Skills
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Row 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="marquee mb-8"
        >
          <div className="marquee-track">
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <div key={index} className="skill-pill">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="marquee-reverse mb-8"
        >
          <div className="marquee-track-reverse">
            {[...row2, ...row2, ...row2].map((skill, index) => (
              <div key={index} className="skill-pill">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="marquee"
        >
          <div className="marquee-track">
            {[...row3, ...row3, ...row3].map((skill, index) => (
              <div key={index} className="skill-pill">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}