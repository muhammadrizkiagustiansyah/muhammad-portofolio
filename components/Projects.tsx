import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-violet-400 text-sm mb-4">FEATURED PROJECTS</p>

            <h2 className="text-4xl md:text-5xl font-bold">Selected Work</h2>
          </div>

          <p className="hidden md:block text-zinc-500 max-w-sm">
            A selection of projects covering UI/UX design, frontend
            development, full-stack integration, and mobile applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="group rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 hover:border-violet-500/50 transition flex flex-col justify-between"
            >
              <div>
                {/* PROJECT COVER */}
                <div className="h-[260px] md:h-[300px] relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600/20 via-zinc-900 to-zinc-950">
                  {/* Background decoration */}
                  <div className="absolute w-[250px] h-[250px] rounded-full bg-violet-600/20 blur-[80px]" />

                  {/* Logo */}
                  <div className="relative z-10 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-6 group-hover:scale-110 transition duration-500">
                    <img
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Decorative circle */}
                  <div className="absolute -right-20 -bottom-20 w-60 h-60 border border-white/5 rounded-full" />
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 border border-white/5 rounded-full" />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <div className="flex justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>

                      <p className="text-violet-400 mt-1.5 text-sm font-medium">
                        {project.role}
                      </p>
                    </div>

                    <ArrowUpRight className="text-zinc-500 group-hover:text-violet-400 transition shrink-0" />
                  </div>

                  <p className="text-zinc-400 mt-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* HIGHLIGHTED FEATURES PREVIEW */}
                  <div className="mt-6 pt-5 border-t border-white/5">
                    <p className="text-xs font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                      Key Highlights & Features
                    </p>
                    <div className="space-y-1.5">
                      {project.features.flatMap((f) => f.items).slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* TOOLS BADGES */}
              <div className="px-7 pb-7 pt-2 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs bg-white/5 text-zinc-400 border border-white/5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}