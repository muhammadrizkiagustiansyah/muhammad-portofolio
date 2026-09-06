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
              Informatics Engineering graduate with a strong focus on Frontend Development, UI/UX Design, and Data Analytics. Experienced in building end-to-end responsive web and mobile applications through academic projects and an internship at Diskominfotik Kabupaten Bandung Barat. Proficient in Next.js, React, Tailwind CSS, Laravel, and Flutter, with specialized expertise in database management (SQL/PostgreSQL/BigQuery), payment gateway integration, and machine learning model implementation.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">
              <Card
                icon="💻"
                title="Frontend"
                text="Responsive & Interactive Interfaces"
              />

              <Card
                icon="🎨"
                title="UI/UX"
                text="User-Centered Design & Prototyping"
              />

              <Card
                icon="⚙️"
                title="Backend & API"
                text="REST API & Payment Integration"
              />

              <Card
                icon="📊"
                title="Data & SQL"
                text="Database, Power BI & Analytics"
              />

              <Card
                icon="📱"
                title="Mobile"
                text="Cross-Platform Flutter Apps"
              />

              <Card
                icon="🤖"
                title="Machine Learning"
                text="Python & Recommendation Systems"
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