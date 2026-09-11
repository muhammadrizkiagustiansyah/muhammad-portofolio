export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-violet-400 text-sm mb-4">ABOUT ME</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Designing interfaces.
              <br />
              Building digital experiences.
            </h2>
          </div>

          <div>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Informatics Engineering graduate specializing in Fullstack Development, UI/UX Design, and AI Integration. Experienced in architecting end-to-end web and mobile applications through academic projects and an internship at Diskominfotik Kabupaten Bandung Barat. Proficient in Next.js, Laravel, CodeIgniter 4, Flutter, and Tailwind CSS, with specialized expertise in REST API development, payment gateway integration, database management (MySQL/PostgreSQL), and AI-driven solutions including LLM API integration and route navigation models.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <Card
                icon="💻"
                title="Fullstack Web"
                text="Next.js, Laravel & CodeIgniter 4"
              />

              <Card
                icon="📱"
                title="Mobile Dev"
                text="Cross-Platform Flutter Apps"
              />

              <Card
                icon="🎨"
                title="UI/UX Design"
                text="User-Centered Design & Prototyping"
              />

              <Card
                icon="🤖"
                title="AI & Automation"
                text="Gemini API & Route Navigation Models"
              />

              <Card
                icon="⚙️"
                title="Backend & API"
                text="REST API, MySQL & Payment Gateways"
              />

              <Card
                icon="📊"
                title="Data Analytics"
                text="SQL, Power BI & Data Visualization"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-violet-500/30 transition duration-300">
      <div className="text-2xl mb-4">{icon}</div>

      <h3 className="font-semibold text-white">{title}</h3>

      <p className="text-sm text-zinc-400 mt-2">{text}</p>
    </div>
  );
}