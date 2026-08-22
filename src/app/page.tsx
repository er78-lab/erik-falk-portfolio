import VideoPlayer from "@/components/VideoPlayer";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <section id="showreel" className="grid gap-10 px-6 pb-16 pt-8 md:grid-cols-2 md:px-12 md:pt-16">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-5xl">
            Idee.
            <br />
            Gestaltung.
            <br />
            Kontent.
          </h1>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
            15+ Jahre Kommunikationsdesign, von klassischem 3D bis KI-Produktion. Technische
            Komplexität, starke Bilder – Automotive-Expertise mit Markengespür und strategischem
            Kopf.
          </p>
        </div>
        <VideoPlayer
          src="/videos/showreel.mp4"
          poster="/images/landingpage_showreel_screen_v0001.jpeg"
          label="PLAY SHOWREEL"
          className="self-center"
          aspectClassName="aspect-video"
        />
      </section>

      <ProjectGrid />
    </>
  );
}
