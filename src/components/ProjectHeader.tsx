import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";
import type { Project } from "@/data/projects";

function TitleOverlay({ project }: { project: Project }) {
  return (
    <div>
      <div className="text-xs text-white/80">{project.number}</div>
      <div className="text-lg font-medium leading-tight">{project.title}</div>
      <div className="text-xs text-white/80">{project.category}</div>
    </div>
  );
}

export default function ProjectHeader({ project }: { project: Project }) {
  if (project.video) {
    const isPortrait = project.video.orientation === "portrait";
    return (
      <div className={isPortrait ? "mx-auto w-full max-w-sm" : "w-full"}>
        <VideoPlayer
          src={project.video.src}
          poster={project.video.poster}
          label="PLAY"
          aspectClassName={isPortrait ? "aspect-[9/16]" : "aspect-video"}
          overlay={<TitleOverlay project={project} />}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[12/5] w-full overflow-hidden bg-surface">
      <Image
        src={project.headerImage}
        alt={project.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-6 text-white">
        <TitleOverlay project={project} />
      </div>
    </div>
  );
}
