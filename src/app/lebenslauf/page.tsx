import Link from "next/link";

export const metadata = {
  title: "Lebenslauf — Erik Falk",
  description: "Beruflicher Werdegang von Erik Falk, Digital Creator und Art Director.",
};

const experience = [
  {
    role: "Art Director",
    company: "polygrail GmbH, Stuttgart",
    period: "2024 – heute",
    points: [
      "Konzeption und Produktion von KI-generiertem Visual- und Videokontent für nationale und internationale Kunden",
      "Entwicklung vollständiger KI-Kampagnen u. a. für Dethleffs, Mey Bodywear, Mercedes-Benz Trucks und Breuninger",
      "Aufbau und Steuerung von KI-Workflows auf Basis von Seedance, Kling, Flux, Wan und Nano Banana",
      "Pitchentwicklung und Kundenberatung zur strategischen KI-Integration in bestehende Kommunikationsprozesse",
    ],
  },
  {
    role: "Senior 3D Artist",
    company: "unexpected GmbH, Stuttgart",
    period: "2006 – 2024",
    points: [
      "Langjährige Verantwortung für visuelle Kommunikation namhafter Kunden: Bosch Mobility, BMW, Mercedes-Benz, Porsche, Vector Informatik, Julius Blum GmbH u. v. m.",
      "Entwicklung und Etablierung zentraler Kommunikationskonzepte für Bosch Mobility — u. a. Glasfahrzeuge, virtuelle Markenfahrzeuge, Weißwelt-Welt sowie eine unternehmensweite 3D-Produktdatenbank",
      "CGI-Produktion für BMW-Fahrzeugreihen (2er, 3er, 5er, i4) sowie Mitarbeit am 300-Mio.-Euro-Pitch von BMW in Zusammenarbeit mit Mackevision/Accenture",
      "Internationale Produktionen u. a. für Aiways, Roewe/SAIC, Weltmeister und Nio (in Kooperation mit Taylor James Ltd., USA)",
    ],
  },
  {
    role: "Kommunikationsdesigner Diplom (SFG)",
    company: "Freie Kunstschule Stuttgart (SFG)",
    period: "2001 – 2005",
    points: ["Schwerpunkte: Visuelle Kommunikation, Typografie, Konzeption und Gestaltung"],
  },
];

const skills = [
  "Autodesk 3ds-max",
  "Adobe Photoshop",
  "Unreal Engine",
  "Blender",
  "Adobe Lightroom",
  "Adobe Illustrator",
  "Adobe AfterEffects",
  "DaVinci Resolve",
];

const languages = ["Deutsch", "Englisch"];

export default function LebenslaufPage() {
  return (
    <div className="px-6 pb-16 md:px-12">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-xs tracking-wide text-muted hover:text-foreground"
      >
        <span aria-hidden>←</span> ZUR STARTSEITE
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-8">
        <div>
          <h1 className="text-3xl font-medium tracking-tight md:text-4xl">Erik Falk</h1>
          <p className="mt-2 text-sm text-muted">
            Digital Creator · Art Director · 3D &amp; KI Artist
          </p>
          <p className="mt-4 text-xs tracking-wide text-muted">
            Ludwigsburg, Deutschland ·{" "}
            <a
              href="https://www.linkedin.com/in/erik-falk-011aab324"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              LINKEDIN
            </a>
          </p>
        </div>
        <a
          href="/erik-falk-lebenslauf.pdf"
          download
          className="inline-flex items-center gap-2 border border-foreground px-5 py-2.5 text-xs tracking-wide hover:bg-foreground hover:text-background transition-colors"
        >
          PDF HERUNTERLADEN
        </a>
      </div>

      <div className="mt-10 grid gap-12 md:grid-cols-[2fr_1fr]">
        <div>
          <section>
            <h2 className="text-xs tracking-[0.2em] text-muted">PROFIL</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Kommunikationsdesigner mit über 20 Jahren Erfahrung in der visuellen Kommunikation —
              von klassischer 3D-Visualisierung bis zur vollständig KI-gestützten
              Contentproduktion. Spezialist darin, technische Komplexität in starke,
              verständliche Bildsprache zu übersetzen. Tiefe Automotive-Expertise kombiniert mit
              einem ausgeprägten Gespür für Marken, Gestaltung und die Bedürfnisse des Kunden.
              Kreativer Kopf mit strategischem Blick — und dem Handwerk, Ideen konsequent
              umzusetzen.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-xs tracking-[0.2em] text-muted">BERUFSERFAHRUNG</h2>
            <div className="mt-6 flex flex-col gap-10">
              {experience.map((job) => (
                <div key={job.role + job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-medium">{job.role}</h3>
                    <span className="text-xs text-muted">{job.period}</span>
                  </div>
                  <p className="text-sm text-muted">{job.company}</p>
                  <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden>·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-xs tracking-[0.2em] text-muted">SKILLS</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xs tracking-[0.2em] text-muted">SPRACHEN</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-muted">
              {languages.map((lang) => (
                <li key={lang}>{lang}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
