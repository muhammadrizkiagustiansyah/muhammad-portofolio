const skillCategories = [
  {
    title: "UI/UX Design",
    score: 9,
    skills: [
      "UI/UX Design",
      "Wireframing",
      "User Flow",
      "Prototyping",
      "Figma",
    ],
  },
  {
    title: "Frontend Development",
    score: 9,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    score: 8,
    skills: ["Laravel", "PHP", "Node.js", "CodeIgniter 4"],
  },
  {
    title: "API & Payment Integration",
    score: 8,
    skills: [
      "RESTful API",
      "GraphQL",
      "API Gateway",
      "Midtrans",
      "Xendit",
      "PayPal",
      "Webhook",
    ],
  },
  {
    title: "Mobile Development",
    score: 7,
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Database & Data Analytics",
    score: 8.5,
    skills: [
      "SQL",
      "PostgreSQL",
      "BigQuery",
      "MySQL",
      "Power BI",
      "Data Warehouse",
    ],
  },
  {
    title: "Data & Machine Learning",
    score: 9,
    skills: [
      "Python",
      "Machine Learning",
      "Recommendation System",
      "Data Visualization",
      "Tableau",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
];

const tools = [
  "Visual Studio Code",
  "Git & GitHub",
  "Figma",
  "Google Colab",
  "Jupyter Notebook",
  "Postman",
  "Tableau",
  "Power BI",
  "Microsoft SSIS",
  "Microsoft Excel",
  "Microsoft Office",
  "XAMPP",
  "Dbeaver",
  "Vercel",
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-violet-400 text-sm mb-4">SKILLS & TOOLS</p>

        <h2 className="text-4xl md:text-5xl font-bold">My Tech Stack</h2>

        {/* TECHNICAL SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-7 rounded-3xl border border-white/10 bg-zinc-900 flex flex-col justify-between"
            >
              <div>
                {/* HEADER KATEGORI & SKOR */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <span className="text-sm font-medium text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full border border-violet-500/20">
                    {category.score}/10
                  </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-2 bg-zinc-800 rounded-full mt-4 overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${category.score * 10}%` }}
                  />
                </div>

                {/* DAFTAR SKILL */}
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 text-sm rounded-full bg-white/5 text-zinc-400 border border-white/5 hover:text-white hover:bg-violet-500/10 hover:border-violet-500/20 transition duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BAGIAN TOOLS & SOFTWARE */}
        <div className="mt-20 p-8 md:p-10 rounded-3xl border border-white/10 bg-zinc-900">
          <h3 className="text-2xl font-bold text-white mb-2">
            Tools & Software Ecosystem
          </h3>
          <p className="text-zinc-400 text-sm mb-8">
            Daily productivity, development, and analytical tools I work with
          </p>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm rounded-2xl bg-violet-500/5 text-zinc-300 border border-violet-500/15 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white transition duration-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}