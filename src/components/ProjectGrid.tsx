import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const aspectClass: Record<Project["gridAspect"], string> = {
  square: "aspect-square",
  tall: "aspect-[3/4]",
  xltall: "aspect-[3/5]",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className={`group relative block w-full overflow-hidden bg-surface ${aspectClass[project.gridAspect]}`}
    >
      <Image
        src={project.gridImage}
        alt={project.title}
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="text-xs tracking-wide text-white/80">{project.number}</div>
        <div className="text-lg font-medium leading-tight">{project.title}</div>
        <div className="text-xs text-white/80">{project.category}</div>
      </div>
    </Link>
  );
}

export default function ProjectGrid() {
  const columns = [
    projects.filter((_, i) => i % 3 === 0),
    projects.filter((_, i) => i % 3 === 1),
    projects.filter((_, i) => i % 3 === 2),
  ];

  return (
    <section id="arbeiten" className="px-6 py-16 md:px-12">
      <h2 className="mb-8 text-xs tracking-[0.2em] text-muted">AUSGEWÄHLTE ARBEITEN</h2>

      {/* Mobile: simple stacked list in natural reading order */}
      <div className="flex flex-col gap-6 md:hidden">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Desktop: three explicit columns matching the design's staggered heights */}
      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-6">
            {col.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
