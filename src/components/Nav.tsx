import { useEffect, useState } from "react";
import { useI18n } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import { LanguageToggle } from "./LanguageToggle";

const SECTIONS = [
  { id: "about", key: "nav.about" },
  { id: "research", key: "nav.research" },
  { id: "publications", key: "nav.publications" },
  { id: "opensource", key: "nav.opensource" },
  { id: "experience", key: "nav.experience" },
  { id: "contact", key: "nav.contact" },
];

export function Nav() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${open ? "nav--open" : ""}`}>
      <div className="nav__inner shell">
        <a href="#top" className="nav__brand" aria-label="Nigmat Rahim — home">
          <span className="nav__brand-mark" aria-hidden="true">N</span>
          <span className="nav__brand-text">
            <span className="nav__brand-name">Nigmat Rahim</span>
            <span className="nav__brand-sub">Biomedical AI</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`nav__link ${active === s.id ? "is-active" : ""}`}
            >
              {t(s.key)}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <LanguageToggle compact />
          <a className="btn btn--primary nav__cta" href="#contact">
            {t("nav.contact")}
            <span className="btn__icon" aria-hidden="true">
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="nav__mobile" aria-hidden={!open}>
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="nav__mobile-link"
            onClick={() => setOpen(false)}
          >
            {t(s.key)}
          </a>
        ))}
      </div>
    </header>
  );
}

export { profile };
