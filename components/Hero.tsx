import { ArrowDown, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-600/20 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-violet-400 mb-6">👋 Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Muhammad Rizki
              <br />
              <span className="text-zinc-500">Agustiansyah.</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-violet-400 mt-8">
              Software Engineer & Data Enthusiast
            </h2>

            <p className="text-zinc-400 mt-6 max-w-xl leading-relaxed">
              I specialize in building end-to-end web & mobile applications, integrating robust APIs and payment systems, as well as transforming data into actionable insights through analytics and machine learning.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href="/cv/CV-Muhammad-Rizki-Agustiansyah.pdf"
                download
                className="px-6 py-3 rounded-full border border-white/15 hover:bg-white/5 transition flex items-center gap-2"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            <div className="flex gap-10 mt-14">
              <div>
                <h3 className="text-2xl font-bold">4+</h3>
                <p className="text-sm text-zinc-500">Featured Projects</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">3.72</h3>
                <p className="text-sm text-zinc-500">GPA</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">2026</h3>
                <p className="text-sm text-zinc-500">Portfolio</p>
              </div>
            </div>
          </div>

          {/* RIGHT - FOTO */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-violet-600 blur-[80px] opacity-30 rounded-full" />

              <div className="relative w-[280px] md:w-[380px] aspect-square rounded-[40px] overflow-hidden border border-white/10 bg-zinc-900">
                <img
                  src="/images/profile/profile.jpg"
                  alt="Muhammad Rizki Agustiansyah"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-xs text-zinc-500">Based in</p>
                <p className="font-medium">Bandung, Indonesia 🇮🇩</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}