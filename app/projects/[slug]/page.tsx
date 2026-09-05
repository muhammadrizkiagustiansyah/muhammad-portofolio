import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
          <p className="text-violet-400">{project.role}</p>

          <h1 className="text-5xl md:text-7xl font-bold mt-4">
            {project.title}
          </h1>

          <p className="text-zinc-400 mt-6 text-lg max-w-3xl">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-white/5 text-zinc-400"
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
            <p className="text-violet-400 text-sm">OVERVIEW</p>

            <h2 className="text-3xl font-bold mt-4">About The Project</h2>

            <p className="text-zinc-400 leading-relaxed mt-6">
              {project.overview}
            </p>
          </div>

          <div>
            <p className="text-violet-400 text-sm">MY ROLE</p>

            <h2 className="text-3xl font-bold mt-4">{project.role}</h2>

            <p className="text-zinc-400 mt-6">
              Project Period: {project.period}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-20">
          <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10">
            <p className="text-red-400 text-sm">THE PROBLEM</p>

            <p className="text-zinc-300 leading-relaxed mt-5">
              {project.problem}
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-violet-500/5 border border-violet-500/10">
            <p className="text-violet-400 text-sm">THE SOLUTION</p>

            <p className="text-zinc-300 leading-relaxed mt-5">
              {project.solution}
            </p>
          </div>
        </div>

        {/* SCREENSHOTS */}
        <div className="mt-24">
          <p className="text-violet-400 text-sm">FINAL DESIGN</p>

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