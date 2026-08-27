import Link from "next/link";

const navItems = [
  { label: "Arbeiten", href: "/#arbeiten" },
  { label: "Reel", href: "/#showreel" },
  { label: "Lebenslauf", href: "/lebenslauf" },
  { label: "Kontakt", href: "/#kontakt" },
];

export default function Header() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-6 py-6 md:px-12 md:py-8">
      <Link href="/" className="flex items-baseline gap-3">
        <span className="text-sm font-semibold tracking-wide">ERIK FALK</span>
        <span className="hidden text-xs text-muted sm:inline">
          Digital Creator. Art-Director. 3D-Artist.
        </span>
      </Link>
      <nav className="flex flex-wrap gap-x-6 gap-y-1 text-xs tracking-wide text-foreground">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-muted transition-colors">
            {item.label.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}
