import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Layers } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="mt-16">
          <p className="text-violet-400 font-medium">{project.role}</p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            {project.title}
          </h1>

          <p className="text-zinc-400 mt-6 text-lg max-w-3xl leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* HERO COVER (HERO LOGO) */}
        <div className="relative mt-16 min-h-[400px] rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-zinc-950 flex items-center justify-center overflow-hidden">
          <div className="absolute w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full" />

          <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-3xl bg-white/5 border border-white/10 p-8 flex items-center justify-center backdrop-blur-sm">
            <img
              src={project.logo}
              alt={`${project.title} Logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* CASE STUDY */}
        <div className="grid md:grid-cols-2 gap-10 mt-24">
          <div>
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              OVERVIEW
            </p>

            <h2 className="text-3xl font-bold mt-4">About The Project</h2>

            <p className="text-zinc-400 leading-relaxed mt-6">
              {project.overview}
            </p>
          </div>

          <div>
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              MY ROLE
            </p>

            <h2 className="text-3xl font-bold mt-4">{project.role}</h2>

            <p className="text-zinc-400 mt-6">
              <span className="text-zinc-500">Project Period:</span>{" "}
              {project.period}
            </p>
          </div>
        </div>

        {/* PROBLEM & SOLUTION */}
        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
            <p className="text-red-400 text-sm font-semibold tracking-wider uppercase">
              THE PROBLEM
            </p>

            <p className="text-zinc-300 leading-relaxed mt-5">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-violet-500/5 border border-violet-500/10">
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
              THE SOLUTION
            </p>

            <p className="text-zinc-300 leading-relaxed mt-5">
              {project.solution}
            </p>
          </div>
        </div>

        {/* KEY FEATURES SECTION */}
        {project.features && project.features.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-violet-400 text-xs font-semibold tracking-wider uppercase">
                  SYSTEM CAPABILITIES
                </p>
                <h2 className="text-3xl font-bold mt-1">Key Features & Functionalities</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((featureGroup, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                    <h3 className="text-xl font-bold text-violet-300">
                      {featureGroup.role}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                      {featureGroup.items.length} Features
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {featureGroup.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCREENSHOTS */}
        <div className="mt-24">
          <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase">
            FINAL DESIGN
          </p>

          <h2 className="text-4xl font-bold mt-4">Project Screenshots</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {project.screenshots.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center p-4"
              >
                <img
                  src={item.image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={
                    item.type === "mobile"
                      ? "max-h-[500px] w-auto object-contain rounded-xl"
                      : "w-full h-auto object-cover rounded-xl"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}