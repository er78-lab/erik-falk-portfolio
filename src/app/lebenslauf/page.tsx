import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Lebenslauf — Erik Falk",
  description: "Beruflicher Werdegang von Erik Falk, Digital Creator und Art Director.",
};

const experience = [
  {
    role: "Art Director",
    company: "polygrail GmbH, Stuttgart",
    period: "08/2024 – 05/2026",
    points: [
      "Konzeption und Produktion von 3D- und KI-generiertem Visual- und Videokontent für nationale und internationale Kunden",
      "Gestaltung vollständiger KI-Kampagnen für Dethleffs, Leitz und Mey",
      "Entwicklung automatisierter 3D-/KI-Compositing-Workflows",
      "Maßgeblich zur Neukundengewinnung beigetragen (darunter Dethleffs, Uhlsport, Leitz) durch eigene Pitch- und Konzeptarbeit",
    ],
  },
  {
    role: "Senior 3D Artist / Art Director",
    company: "unexpected GmbH, Stuttgart",
    period: "10/2022 – 04/2024",
    points: [
      "Übernahme von Art-Direction-Verantwortung",
      "Schwerpunkte: Konzeption, 3D-Grafik, CGI, Bildgestaltung",
      "Umsetzung von Schlüsselbildern mit hochkomplexen technischen Inhalten, den sog. Metatopics für BOSCH BEG",
      "Erstes vollständig umgesetztes Unreal Engine Projekt für Mercedes",
    ],
  },
  {
    role: "Senior 3D Artist",
    company: "unexpected GmbH, Stuttgart (freiberuflich) · eigene Kunden, u. a. Carthago-Caravan, Bosch-Siemens Hausgeräte",
    period: "01/2006 – 10/2022",
    points: [
      "Langjährige, kontinuierliche Zusammenarbeit mit unexpected und Verantwortung für die visuelle Kommunikation namhafter Kunden, darunter Bosch Mobility, Mercedes-Benz, BMW, Vector und Blum",
      "Aufbau zentraler Kommunikationskonzepte für Bosch Mobility, darunter Glasfahrzeuge, markenneutrale Fahrzeuge, Bosch-Weißwelt",
      "CGI-Produktion für BMW-Fahrzeugreihen sowie Mitarbeit am seinerzeit größten Pitch von BMW in Kooperation mit Mackevision/Accenture",
      "Internationale Produktionen für Aiways, Roewe/SAIC, Weltmeister und Nio, in Kooperation mit der Agentur Taylor James Ltd. (USA)",
    ],
  },
  {
    role: "Kommunikationsdesigner Diplom (SFG)",
    company: "Freie Kunstschule Stuttgart (SFG)",
    period: "09/2001 – 06/2005",
    points: [
      "Schwerpunkte: Visuelle Kommunikation, Typografie, Logo-Entwicklung, Konzeption und Gestaltung, 3D-Visualisierung",
    ],
  },
];

const skills = [
  "Autodesk 3ds Max",
  "Unreal Engine",
  "Blender",
  "Adobe Photoshop",
  "Adobe Lightroom",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Adobe Premiere",
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

      <div className="flex flex-wrap items-start justify-between gap-8 border-b border-border pb-8">
        <div className="flex flex-wrap items-start gap-6">
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-surface md:h-28 md:w-28">
            <Image
              src="/images/erik-falk-portrait.png"
              alt="Erik Falk"
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-medium tracking-tight md:text-4xl">Erik Falk</h1>
            <p className="mt-2 text-sm text-muted">Digital Creator · Art Director · 3D-Artist</p>
            <div className="mt-4 flex flex-col gap-1 text-xs tracking-wide text-muted">
              <span>Ludwigsburg, Deutschland</span>
              <a href="tel:+4917622968556" className="hover:text-foreground w-fit">
                +49 176 22 96 85 56
              </a>
              <a
                href="mailto:erik.falk.cgi@gmail.com"
                className="hover:text-foreground w-fit"
              >
                erik.falk.cgi@gmail.com
              </a>
            </div>
          </div>
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
              Kommunikationsdesigner mit 20 Jahren Berufserfahrung. Ich produziere Content für
              Industrie- und Automotive-Kunden mit klassischer 3D-Visualisierung ebenso wie in
              Kombination mit KI-generierten Inhalten.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Ich übersetze komplexe Themen in eine klare Bildsprache. Produkte und Inhalte
              inszeniere ich dabei auf höchstem gestalterischem Niveau. Kundenanforderungen
              übertrage ich in ganzheitliche Konzepte und begleite den gesamten Prozess — von der
              Idee über die handwerkliche Umsetzung bis zum finalen Content.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              Im Team arbeite ich aktiv an einem konstruktiven Workflow, achte auf die besonderen
              Fähigkeiten der Kollegen und integriere besonders gern neue Technologien so, dass
              sie das Ergebnis optimieren und den Prozess vereinfachen.
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
