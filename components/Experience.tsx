export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-violet-400 text-sm mb-4">EXPERIENCE</p>

        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Professional Experience
        </h2>

        <div className="max-w-4xl">
          <div className="border-l border-violet-500 pl-8 relative">
            <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-1" />

            <p className="text-violet-400">Jul 2025 — Aug 2025</p>

            <h3 className="text-2xl font-bold mt-3">Fullstack Developer</h3>

            <p className="text-zinc-400 mt-2">
              Dinas Komunikasi, Informatika dan Statistik Kabupaten Bandung Barat
            </p>

            <div className="mt-6 p-6 rounded-2xl bg-zinc-900 border border-white/10">
              <h4 className="font-semibold text-lg">
                Portal Pemesanan Ruang Rapat Pegawai KBB
              </h4>

              <ul className="text-zinc-400 mt-4 space-y-2">
                <li>
                  • Developed fullstack web application using CodeIgniter 4 (PHP framework) for backend architecture and HTML, CSS, JavaScript for frontend interfaces.
                </li>
                <li>
                  • Designed and managed relational database schemas in MySQL using XAMPP local environment.
                </li>
                <li>
                  • Built robust server-side logic, routing, authentication, and CRUD operations for meeting room reservation workflows.
                </li>
                <li>
                  • Designed interactive UI/UX wireframes and high-fidelity prototypes in Figma.
                </li>
                <li>
                  • Collaborated with the development team to deliver responsive and seamless booking experiences for local government employees.
                </li>
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                {["CodeIgniter 4", "PHP", "MySQL", "XAMPP", "JavaScript", "HTML/CSS", "Figma"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}