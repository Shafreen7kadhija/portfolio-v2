export default function Projects() {
  const projects = [
    {
      title: "AttendPro",
      description:
        "A modern web-based attendance management system that allows administrators to manage students, mark attendance, monitor analytics, and generate attendance records.",
      tech: ["React", "TypeScript", "Tailwind CSS", "SQLite"],
      github: "https://github.com/Shafreen7kadhija",
      demo: "#",
    },

    {
      title: "Portfolio Website",
      description:
        "A responsive developer portfolio built with Next.js and Tailwind CSS to showcase projects, technical skills, education, and contact information.",
      tech: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/Shafreen7kadhija",
      demo: "#",
    },

    {
      title: "E-Learning Website",
      description:
        "A responsive online learning platform developed to provide students with learning materials, interactive content, quizzes, and an engaging learning experience.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shafreen7kadhija",
      demo: "https://YOUR-ELEARNING-LINK.com",
    },

    {
      title: "Student Management System",
      description:
        "Java console application developed using Object-Oriented Programming principles to efficiently manage student records using file handling.",
      tech: ["Java", "OOP", "File Handling"],
      github: "https://github.com/Shafreen7kadhija",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project) => (

            <div
              key={project.title}
              className="bg-gray-100 rounded-2xl shadow-lg p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div>

                <h3 className="text-3xl font-bold text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-5 text-lg text-gray-700 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="px-4 py-1 rounded-full border border-blue-300 text-blue-600 bg-white text-sm font-medium"
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition duration-300"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Live Demo
                </a>

              </div>

            </div>

          ))}

        </div>

        <div className="text-center mt-16">

          <a
            href="https://github.com/Shafreen7kadhija"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-semibold text-blue-600 hover:gap-4 transition-all duration-300"
          >
            View More Projects on GitHub →
          </a>

        </div>

      </div>
    </section>
  );
}