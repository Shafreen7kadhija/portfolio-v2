export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { icon: "☕", name: "Java", level: "Advanced" },
        { icon: "🐍", name: "Python", level: "Intermediate" },
        { icon: "💻", name: "C", level: "Intermediate" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { icon: "🌐", name: "HTML", level: "Advanced" },
        { icon: "🎨", name: "CSS", level: "Advanced" },
        { icon: "🟨", name: "JavaScript", level: "Intermediate" },
        { icon: "⚛️", name: "React.js", level: "Intermediate" },
        { icon: "▲", name: "Next.js", level: "Intermediate" },
        { icon: "💨", name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { icon: "🗄️", name: "SQL", level: "Intermediate" },
        { icon: "🌿", name: "Git", level: "Intermediate" },
        { icon: "🐙", name: "GitHub", level: "Intermediate" },
      ],
    },
    {
      title: "Core Computer Science",
      skills: [
        { icon: "📘", name: "Data Structures & Algorithms", level: "Strong" },
        { icon: "🏗️", name: "Object-Oriented Programming", level: "Strong" },
        { icon: "🛢️", name: "DBMS", level: "Strong" },
        { icon: "🖥️", name: "Operating Systems", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-14">
          Technical Skills
        </h2>

        <div className="space-y-14">

          {skillCategories.map((category) => (
            <div key={category.title}>

              <h3 className="text-2xl font-semibold text-blue-600 mb-8">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 gap-8">

                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-white rounded-2xl shadow-lg h-40 flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                  >
                    <div className="text-4xl mb-3">
                      {skill.icon}
                    </div>

                    <h4 className="text-xl font-semibold text-blue-600">
                      {skill.name}
                    </h4>

                    <p className="text-gray-600 mt-2">
                      {skill.level}
                    </p>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}