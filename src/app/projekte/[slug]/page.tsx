import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectHeader from "@/components/ProjectHeader";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Erik Falk`,
    description: project.intro,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="px-6 pb-16 md:px-12">
      <Link
        href="/#arbeiten"
        className="mb-6 inline-flex items-center gap-2 text-xs tracking-wide text-muted hover:text-foreground"
      >
        <span aria-hidden>←</span> ZURÜCK ZU ARBEITEN
      </Link>

      <ProjectHeader project={project} />

      <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <p className="max-w-xl text-xl leading-snug md:text-2xl">{project.intro}</p>
          {project.description.length > 0 && (
            <div className="mt-6 flex max-w-xl flex-col gap-4 text-sm leading-relaxed text-muted">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm md:justify-self-end">
          <dt className="text-muted">Kunde:</dt>
          <dd>{project.client}</dd>
          <dt className="text-muted">Rolle:</dt>
          <dd>{project.role}</dd>
          {project.period && (
            <>
              <dt className="text-muted">Zeitraum:</dt>
              <dd>{project.period}</dd>
            </>
          )}
        </dl>
      </div>

      {project.gallery.length > 0 && (
        <div className="mt-12">
          <Gallery images={project.gallery} aspectClassName={project.galleryAspect} />
        </div>
      )}
    </div>
  );
}
