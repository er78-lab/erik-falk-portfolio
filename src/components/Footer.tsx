export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="mt-24 flex flex-wrap items-start justify-between gap-x-6 gap-y-6 px-6 py-8 text-xs tracking-wide text-muted md:px-12"
    >
      <div>
        <span className="font-semibold text-foreground">ERIK FALK</span>{" "}
        <span className="hidden sm:inline">Digital Creator. Art-Direction. 3d-Artist.</span>
        <div className="mt-2 leading-relaxed">
          <div>Auf der Schanz 39</div>
          <div>71640 Ludwigsburg</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        <a
          href="mailto:erik.falk.cgi@gmail.com"
          className="hover:text-foreground transition-colors"
        >
          ERIK.FALK.CGI@GMAIL.COM
        </a>
        <a href="tel:+4917622968556" className="hover:text-foreground transition-colors">
          0176 22 96 85 56
        </a>
        <a
          href="https://www.linkedin.com/in/erik-falk-011aab324"
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LINKEDIN
        </a>
      </div>
      <div>© {new Date().getFullYear()} ALL RIGHTS RESERVED</div>
    </footer>
  );
}
