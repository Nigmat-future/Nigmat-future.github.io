import { useI18n } from "../i18n/LanguageContext";
import { profile } from "../data/profile";

export function Hero() {
  const { lang, t } = useI18n();

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <div className="hero__masthead" data-reveal>
            <span>
              <em>Vol. 01</em> &nbsp;·&nbsp; {t("hero.kicker")}
            </span>
            <span>Beijing · 2026</span>
          </div>

          <h1 id="hero-title" className="hero__title" data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            {t("hero.line1")} <em>{t("hero.line2")}</em>
          </h1>

          <p className="hero__tagline" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
            {t("hero.tagline")}
          </p>

          <p className="hero__role" data-reveal style={{ ["--reveal-delay" as string]: "240ms" }}>
            {profile.affiliation[lang]}
            <span className="hero__sep">·</span>
            {profile.location}
            <span className="hero__sep">·</span>
            {profile.degree[lang]}
          </p>

          <div className="hero__cta" data-reveal style={{ ["--reveal-delay" as string]: "300ms" }}>
            <a className="btn btn--primary" href="#research">
              {t("hero.cta.research")}
              <span className="btn__icon" aria-hidden="true">
                <ArrowDown />
              </span>
            </a>
            <a className="btn btn--ghost" href={profile.github.url} target="_blank" rel="noreferrer">
              {t("hero.cta.github")}
              <span className="btn__icon" aria-hidden="true">
                <ArrowOut />
              </span>
            </a>
          </div>

          <ul className="hero__stats" data-reveal style={{ ["--reveal-delay" as string]: "360ms" }} aria-label="Key numbers">
            <Stat value={String(profile.stats.repos)} label="Public repositories" />
            <Stat value={String(profile.stats.stars)} label="GitHub stars" glow />
            <Stat value={`${profile.stats.papers}+`} label="Publications & preprints" />
          </ul>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span>{t("hero.scroll")}</span>
        <span className="hero__scroll-line" />
      </a>
    </section>
  );
}

function Stat({ value, label, glow }: { value: string; label: string; glow?: boolean }) {
  return (
    <li className={`hero__stat ${glow ? "hero__stat--glow" : ""}`}>
      <span className="hero__stat-val">{value}</span>
      <span className="hero__stat-label">{label}</span>
    </li>
  );
}

function ArrowDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 2v9M3.5 7.5L7 11l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowOut() {
  return (
    <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
