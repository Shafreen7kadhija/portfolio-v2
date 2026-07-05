"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MouseGlow from "../Hero/MouseGlow";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  const projects = [
    {
      title: "AttendPro",
      image: "/images/attendpro.png",

      description:
        "A full-stack Online Attendance Management System developed using React, TypeScript, Flask, SQLite, and Tailwind CSS. It allows administrators to manage students, mark attendance, view analytics, generate attendance reports, and monitor attendance records through a modern dashboard.",

      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Flask",
        "SQLite",
      ],

      github: "https://github.com/Shafreen7kadhija/attendpro",

      demo: "https://attendpro-inky.vercel.app",
    },

    {
      title: "E-Learning Website",

      image: "/images/learned.png",

      description:
        "A responsive online learning platform developed using HTML, CSS, JavaScript, and PHP. The platform includes learning resources, subject-wise materials, quizzes, previous year question papers, YouTube learning videos, user authentication, and an interactive learning experience.",

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
      ],

      github:
        "https://github.com/Shafreen7kadhija/e-learning-website",

      demo:
        "https://e-learning-website-xi-snowy.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative h-screen py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-white border-t border-blue-100"
    >
      <MouseGlow />
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-[120px]"></div>

<div className="absolute bottom-20 right-0 w-72 h-72 bg-indigo-300/20 rounded-full blur-[120px]"></div>

<div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-300/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-[1350px] mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-10"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Projects
          </h2>

          <div className="w-24 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-10 gap-y-8">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: false,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="group relative w-full overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md border border-blue-100 shadow-[0_15px_35px_rgba(37,99,235,0.10)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-400 hover:shadow-[0_25px_60px_rgba(59,130,246,0.35)]"
            >

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm group-hover:translate-x-[850px] transition-transform duration-1000"></div>

</div>
              {/* Image */}

              <div className="relative h-40 overflow-hidden rounded-t-2xl">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              </div>

              {/* Content */}

              <div className="p-5">

                <h3 className="text-2xl font-bold text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-700">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-blue-300 bg-blue-50 text-blue-700 text-sm font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-105 cursor-default"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-3 mt-5">
                                    <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                  >
                    <HiOutlineExternalLink size={20} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Button */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-10"
        >

          <a
            href="https://github.com/Shafreen7kadhija"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl font-semibold text-blue-600 transition-all duration-300 hover:gap-5 hover:text-blue-700"
          >
            <FaGithub size={26} />
            Explore More Projects on GitHub →
          </a>

        </motion.div>

      </div>

    </section>
  );
}