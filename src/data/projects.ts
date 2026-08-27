export type GallerySpan = "full" | "half" | "third";

export type GalleryImage = {
  src: string;
  span: GallerySpan;
  alt?: string;
};

export type ProjectVideo = {
  src: string;
  poster: string;
  orientation: "landscape" | "portrait";
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  role: string;
  period?: string;
  intro: string;
  description: string[];
  headerImage: string;
  gridImage: string;
  video?: ProjectVideo;
  gallery: GalleryImage[];
  /** Tailwind aspect-ratio class for gallery tiles. Defaults to 4:3 if omitted. */
  galleryAspect?: string;
  gridAspect: "square" | "tall" | "xltall";
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "bosch-mobility",
    title: "BOSCH Mobility",
    category: "Communication",
    client: "Bosch",
    role: "Art-Direction, 3d-Artist",
    period: "2008 -",
    intro:
      "Für Bosch Mobility habe ich über die Jahre an unzähligen Grafiken, Keyvisuals und Animationen gearbeitet und neue Formate für die Kommunikation mitentwickelt.",
    description: [
      "Drei Meilensteine.",
      "„Das markenneutrale Fahrzeug“. Über die Jahre habe ich unzählige generische Fahrzeuge entwickelt. Angefangen vom Design-Prozess bis hin zum Feinmodelling sind so Fahrzeuge aller Klassen entstanden. Die 3d-Fahrzeuge konnten dann in allen Medien und Formaten eingesetzt werden.",
      "„Das Glasauto“. Die Idee des gläsernen Fahrzeugs habe ich bereits Ende der Nullerjahre für BOSCH verfolgt, weiterentwickelt und standardisiert. In den gläsernen Fahrzeugen werden einzelne Bosch-Komponenten bis hin zu ganzen System-Lösungen visualisiert. Ein immer wiederkehrendes Format, mit dem über die Zeit viele hunderte Visuals entstanden sind.",
      "„Die Weiss-Welt“. Für das visuelle Format Technik-erklären ergab sich die Aufgabe eine in sich geschlossene Welt, mit standardisierten Elementen, Farben, Licht und Oberflächen zu entwickeln. Die standardisierte Bildsprache für Still und Animation ermöglicht so eine homogene Darstellung über alle Medien hinweg.",
    ],
    headerImage: "/images/projekt01_bosch_mobility_header.jpg",
    gridImage: "/images/landingpage_01_bosch.jpg",
    gallery: [
      { src: "/images/projekt01_bosch_mobility_motiv01.jpg", span: "half" },
      { src: "/images/projekt01_bosch_mobility_motiv02.jpg", span: "half" },
      { src: "/images/projekt01_bosch_mobility_motiv03.jpg", span: "third" },
      { src: "/images/projekt01_bosch_mobility_motiv04.jpg", span: "third" },
      { src: "/images/projekt01_bosch_mobility_motiv05.jpg", span: "third" },
      { src: "/images/projekt01_bosch_mobility_motiv06.jpg", span: "half" },
      { src: "/images/projekt01_bosch_mobility_motiv07.jpg", span: "half" },
    ],
    gridAspect: "square",
  },
  {
    number: "02",
    slug: "vector-informatik",
    title: "VECTOR Informatik",
    category: "Communication",
    client: "VECTOR Informatik",
    role: "Art-Direction, 3d-Artist",
    period: "2019 -",
    intro:
      "Für VECTOR Informatik habe ich über die Jahre zahlreiche Keyvisuals und Kampagnenmotive für die Unternehmenskommunikation entwickelt.",
    description: [
      "Die Motive begleiten die Kommunikation von VECTOR entlang zentraler Zukunftsthemen der Automobil- und Embedded-Softwarebranche – von autonomem Fahren über Cybersecurity bis hin zu Cloud- und Chip-Technologien.",
      "Zu den Themen Autonomes Fahren, Ladeinfrastruktur und autonome Mobilität sind Visuals entstanden, die Fahrzeuge im urbanen Kontext zeigen – reduziert, technisch und zukunftsgerichtet inszeniert.",
    ],
    headerImage: "/images/projekt02_vector_header.jpg",
    gridImage: "/images/landingpage_02_vector.jpg",
    gallery: [
      { src: "/images/projekt02_vector_motiv01.jpg", span: "half" },
      { src: "/images/projekt02_vector_motiv02.jpg", span: "half" },
      { src: "/images/projekt02_vector_motiv03.jpg", span: "third" },
      { src: "/images/projekt02_vector_motiv04.jpg", span: "third" },
      { src: "/images/projekt02_vector_motiv05.jpg", span: "third" },
    ],
    gridAspect: "square",
  },
  {
    number: "03",
    slug: "aiways",
    title: "AIWAYS Cars",
    category: "Product Launch",
    client: "AIWAYS Cars",
    role: "Art-Direction, 3d-Artist",
    period: "2018",
    intro:
      "Zum Launch des AIWAYS U5 habe ich an eine Serie von CGI-Motiven für die Produktkommunikation des U5 gearbeitet – von klassischen CGI-Studiomotiven bis hin zu Technik-Erklär-Filmen.",
    description: [
      "Im Zentrum stand die Entwicklung einer hochwertigen, herstellertypischen Bildsprache für den globalen Markenauftritt. Auf Basis der CAD-Daten sind detailgetreue Exterior- und Interior-Shots im neutralen Studio-Setup entstanden, ergänzt um Technik-Visuals, die Antrieb, Plattform und Fahrzeugaufbau in ihrer ganzen Komplexität sichtbar machen. Dazu habe ich Animationen konzipiert und umgesetzt, die das Fahrzeug in Bewegung inszenieren und die Motive für digitale und bewegte Formate erweitern.",
      "Von der Kamera-Perspektive über Licht-Setup bis zum finalen Rendering lag die gesamte visuelle Verantwortung für das Projekt in meiner Hand – ein umfassendes CGI-Paket, das als visuelle Basis für den weltweiten Markenauftritt von AIWAYS diente.",
    ],
    headerImage: "/images/projekt03_aiways_header.jpg",
    gridImage: "/images/landingpage_03_aiways.jpg",
    gallery: [
      { src: "/images/projekt03_aiways_motiv01.jpg", span: "half" },
      { src: "/images/projekt03_aiways_motiv02.jpg", span: "half" },
      { src: "/images/projekt03_aiways_motiv03.jpg", span: "half" },
      { src: "/images/projekt03_aiways_motiv04.jpg", span: "half" },
      { src: "/images/projekt03_aiways_motiv05.jpg", span: "half" },
      { src: "/images/projekt03_aiways_motiv06.jpg", span: "half" },
    ],
    gridAspect: "xltall",
  },
  {
    number: "04",
    slug: "bmw-i4",
    title: "BMW",
    category: "BMW i4 Web Content",
    client: "BMW",
    role: "Art-Direction, 3d-Artist",
    period: "2022",
    intro:
      "Zur Einführung des BMW i4 entstanden bei uns zahlreiche CGI-Motive für den Web-Auftritt.",
    description: [
      "In dem Projekt wurde auf Basis von Real-Footage in allen Motiven das Fahrzeug neu gerendert und im Foto ersetzt. Hinzukommend wurde das Fahrzeug jeweils in allen Ausstattungsvarianten und allen Farben gerendert.",
      "Die Aufgabe umfasste dabei CAD-Datensatz Aufbereitung, Kamera-Match, Rendering und Photoshop-Retouch.",
    ],
    headerImage: "/images/projekt04_bmw_i4_header.jpg",
    gridImage: "/images/landingpage_04_bmw.jpg",
    gallery: [
      { src: "/images/projekt04_bmw_i4_motiv01_gif_v0001.gif", span: "full" },
      { src: "/images/projekt04_bmw_i4_motiv02.jpg", span: "half" },
      { src: "/images/projekt04_bmw_i4_motiv03.jpg", span: "half" },
      { src: "/images/projekt04_bmw_i4_motiv04.jpg", span: "half" },
      { src: "/images/projekt04_bmw_i4_motiv05.jpg", span: "half" },
    ],
    gridAspect: "tall",
  },
  {
    number: "05",
    slug: "mercedes-made-to-measure",
    title: "Mercedes-Benz",
    category: "Made to Measure - Showroom Konzept",
    client: "Mercedes-Benz",
    role: "Art-Direction, 3d-Artist",
    period: "2025",
    intro:
      "Für Mercedes-Benz „Made to Measure“ haben wir gemeinsam mit dem Architekturbüro Heller Studios eine Architekturvisualisierung des exklusiven Showrooms in der Unreal-Engine umgesetzt.",
    description: [
      "Der Showroom ist Teil des Manufaktur-Programms von Mercedes-Benz, in dem Kunden ihr Fahrzeug jenseits der regulären Ausstattungslinien bis ins Detail individualisieren können. Für die Präsentation des Konzepts haben wir gemeinsam mit Heller Studios den Raum architektonisch visualisiert und in einen 1:18 Minuten langen Film übersetzt.",
      "Der gesamte Film wurde in der Unreal Engine umgesetzt.",
    ],
    headerImage: "/images/projekt05_made-to-measure_header.jpg",
    gridImage: "/images/landingpage_05_mercedes_made-to-measure.png",
    video: {
      src: "/videos/projekt05_made_to_measure.mp4",
      poster: "/images/projekt05_made-to-measure_header.jpg",
      orientation: "portrait",
    },
    gallery: [],
    gridAspect: "square",
  },
  {
    number: "06",
    slug: "dethleffs",
    title: "Dethleffs",
    category: "KI Pitch",
    client: "Dethleffs",
    role: "Art-Direction, KI-Artist",
    period: "2026",
    intro:
      "Für Dethleffs habe ich ein Pilotprojekt umgesetzt, das zeigen sollte, wie realistisch Fahrszenen ganz ohne 3D- oder CAD-Daten komplett KI generiert wirken können.",
    description: [
      "Statt auf klassische CGI-Workflows zu setzen, entstanden die Fahrszenen komplett auf Fotobasis. Die zentrale Frage: Wie produktgenau lässt sich der Dethleffs Globetrotter T46 4x4 darstellen, wenn keine 3D-Daten zur Verfügung stehen – und wie überzeugend wirkt das Fahrzeug in einer dynamischen, Off-Road Umgebung?",
      "Das Ergebnis hat den Kunden positiv überrascht und wir konnten Dethleffs als neuen Kunden gewinnen.",
    ],
    headerImage: "/images/projekt06_dethleffs_header.jpg",
    gridImage: "/images/landingpage_06_dethleffs.jpg",
    video: {
      src: "/videos/projekt06_dethleffs.mp4",
      poster: "/images/projekt06_dethleffs_header.jpg",
      orientation: "landscape",
    },
    gallery: [],
    gridAspect: "square",
  },
  {
    number: "07",
    slug: "blum",
    title: "BLUM",
    category: "Communication",
    client: "BLUM",
    role: "Art-Direction, 3d-Artist",
    period: "2018 -",
    intro:
      "BLUM war über viele Jahre ein wichtiger Kunde, für den ich zahlreiche CGI-Keyvisuals entwickelt habe – mit Fokus auf die technische Kommunikation der Produkte.",
    description: [
      "Im Zentrum standen die hochwertigen Scharnier- und Schubladensysteme von BLUM für den Küchenbau. In den Motiven ging es darum, die technische Präzision und Funktionsweise der Systeme visuell greifbar zu machen – von Detailaufnahmen einzelner Komponenten bis hin zur Einbindung in reale Küchenumgebungen.",
      "Neben den Keyvisuals sind zahlreiche Erklärfilme entstanden, die Schritt für Schritt zeigen, wie die BLUM-Systeme beim Küchenaufbau montiert werden – von der Schubladenmechanik bis zur Klappautomatik.",
    ],
    headerImage: "/images/projekt07_blum_header.jpg",
    gridImage: "/images/landingpage_07_blum.jpg",
    gallery: [
      { src: "/images/projekt07_blum_motiv01.jpg", span: "half" },
      { src: "/images/projekt07_blum_motiv02.jpg", span: "half" },
      { src: "/images/projekt07_blum_motiv03.jpg", span: "half" },
      { src: "/images/projekt07_blum_motiv04.jpg", span: "half" },
      { src: "/images/projekt07_blum_motiv05.jpg", span: "half" },
      { src: "/images/projekt07_blum_motiv06.jpg", span: "half" },
    ],
    gridAspect: "tall",
  },
  {
    number: "08",
    slug: "mey-bodywear",
    title: "MEY Bodywear",
    category: "KI Pitch",
    client: "MEY Bodywear",
    role: "Art-Direction, KI-Artist",
    period: "2025",
    intro:
      "Für MEY Bodywear galt es eine komplette Fotoserie vollständig ai-generated zu entwickeln.",
    description: [
      "Ziel des Pitches war es zu zeigen, wie MEY zukünftig Kampagnenmotive erstellen könnte, ganz ohne klassisches Fotoshooting. Maßgabe war dabei eine unbedingte Produkt-Genauigkeit.",
      "Es entstanden ai-generierte Models und Locations, die als Schauplätze professioneller Fotoshootings dienen: ein verträumtes, altes Grand-Hotel und eine alpine Jagdhütte in winterlicher Landschaft. So entstanden stimmungsvolle Bildwelten, die die Möglichkeiten ai-generierter Kampagnen aufzeigten.",
    ],
    headerImage: "/images/projekt08_mey_header.jpg",
    gridImage: "/images/landingpage_08_mey_v0001.jpg",
    gallery: [
      { src: "/images/projekt08_mey_motiv01.jpg", span: "third" },
      { src: "/images/projekt08_mey_motiv02.jpg", span: "third" },
      { src: "/images/projekt08_mey_motiv03.jpg", span: "third" },
      { src: "/images/projekt08_mey_motiv04.jpg", span: "third" },
      { src: "/images/projekt08_mey_motiv05.jpg", span: "third" },
      { src: "/images/projekt08_mey_motiv06.jpg", span: "third" },
    ],
    galleryAspect: "aspect-[3/4]",
    gridAspect: "tall",
  },
  {
    number: "09",
    slug: "lapp-kabel",
    title: "LAPP Kabel",
    category: "Keyvisuals",
    client: "LAPP Kabel",
    role: "Art-Direction, 3d-Artist",
    period: "2016",
    intro:
      "Für LAPP Kabel galt es eine Bildsprache zu entwickeln, die das Produkt künstlerisch in Szene setzt. Unendliche Möglichkeiten durch Flexibilität.",
    description: [
      "Statt die Produkte klassisch funktional zu zeigen, standen bei diesem Projekt Form und Bewegung im Vordergrund. Die Energieführungsketten wurden zu organischen, spiralförmigen Kompositionen arrangiert, die dem Betrachter eher wie abstrakte Skulpturen als wie technische Bauteile begegnen.",
      "So entstand eine Bildsprache, die das Produkt aus einem ungewohnten Blickwinkel zeigt und gleichzeitig die Präzision und Flexibilität der LAPP-Systeme unterstreicht.",
    ],
    headerImage: "/images/projekt09_lapp_header.jpg",
    gridImage: "/images/landingpage_09_lapp.jpg",
    gallery: [
      { src: "/images/projekt09_lapp_motiv01.jpg", span: "half" },
      { src: "/images/projekt09_lapp_motiv02.jpg", span: "half" },
      { src: "/images/projekt09_lapp_motiv03.jpg", span: "half" },
      { src: "/images/projekt09_lapp_motiv04.jpg", span: "half" },
    ],
    gridAspect: "tall",
  },
  {
    number: "10",
    slug: "mercedes-a-class",
    title: "Mercedes-Benz China",
    category: "Produkt-Film",
    client: "Mercedes-Benz",
    role: "Art-Direction, 3d-Artist",
    period: "2023",
    intro:
      "Für Mercedes-Benz China ist ein klassischer Full-CGI Produktfilm entstanden, der die Mercedes-Benz A-Class L zeigt – eine Langversion speziell für den chinesischen Markt.",
    description: [
      "Der Film zeigt das Fahrzeug in einer reduzierten, architektonischen Kulisse, die den Fokus ganz auf Form und Proportion der A-Class L legt. Von Modeling über Licht bis zum finalen Rendering entstand der Film vollständig in 3ds-max, gerendert mit Vray.",
    ],
    headerImage: "/images/projekt10_mercedes_a-class_header_v0001.jpg",
    gridImage: "/images/landingpage_10_mercedes_a-class.jpg",
    video: {
      src: "/videos/projekt10_mercedes_a-class.mp4",
      poster: "/images/projekt10_mercedes_a-class_header_v0001.jpg",
      orientation: "landscape",
    },
    gallery: [
      { src: "/images/projekt10_mercedes_a-class_motiv01.jpg", span: "half" },
      { src: "/images/projekt10_mercedes_a-class_motiv02.jpg", span: "half" },
    ],
    gridAspect: "tall",
  },
  {
    number: "11",
    slug: "riyadh-air",
    title: "Riyadh Air",
    category: "Company Launch",
    client: "Riyadh Air",
    role: "Art-Direction, 3d-Artist",
    period: "2023",
    intro:
      "Zum Launch der saudi-arabischen Fluggesellschaft Riyadh Air 2023 sind zahlreiche CGI-Motive und Animationen entstanden, die die markante Lackierung der Flugzeuge in Szene setzen.",
    description: [
      "Im Zentrum standen die beiden charakteristischen Farbvarianten der Flotte, die in unterschiedlichen Umgebungen und Perspektiven inszeniert wurden. So entstand eine visuelle Basis für den Markenauftritt der neuen Airline.",
    ],
    headerImage: "/images/projekt11_riyadh_air_header.jpg",
    gridImage: "/images/landingpage_11_riyadh_air.jpg",
    gallery: [
      { src: "/images/projekt11_riyadh_air_motiv01.jpg", span: "half" },
      { src: "/images/projekt11_riyadh_air_motiv02.jpg", span: "half" },
      { src: "/images/projekt11_riyadh_air_motiv03.jpg", span: "half" },
      { src: "/images/projekt11_riyadh_air_motiv04.jpg", span: "half" },
    ],
    gridAspect: "square",
  },
  {
    number: "12",
    slug: "alphavan",
    title: "ALPHAVAN",
    category: "Shooting Motive",
    client: "Alphavan",
    role: "Art-Direction, 3d-Artist",
    period: "2023",
    intro:
      "Für Alphavan haben wir den Camper klassisch fotografiert – mit echtem Fahrzeug vor Ort, statt CGI.",
    description: [
      "Für die finalen Bilder wurden unterschiedliche Belichtungen in Photoshop zusammengesetzt und zu einem stimmigen Gesamtbild retuschiert – klassische Post-Production-Arbeit, die Licht, Kontrast und Details ausbalanciert.",
    ],
    headerImage: "/images/projekt12_alphavan_header.jpg",
    gridImage: "/images/landingpage_12_alphavan.jpg",
    gallery: [
      { src: "/images/projekt12_alphavan_motiv01_gif.gif", span: "half" },
      { src: "/images/projekt12_alphavan_motiv02.jpg", span: "half" },
    ],
    gridAspect: "tall",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { prev, next };
}
