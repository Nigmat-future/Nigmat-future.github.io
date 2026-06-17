import { useI18n } from "../i18n/LanguageContext";
import type { Localized } from "../data/profile";

const PILLARS: { icon: string; tKey: string; dKey: string; accent: string }[] = [
  { icon: "◈", tKey: "about.pillar1.t", dKey: "about.pillar1.d", accent: "var(--cyan)" },
  { icon: "❖", tKey: "about.pillar2.t", dKey: "about.pillar2.d", accent: "var(--violet)" },
  { icon: "✶", tKey: "about.pillar3.t", dKey: "about.pillar3.d", accent: "var(--gfp)" },
];

export function About() {
  const { lang, t } = useI18n();
  const L = (s: Localized) => s[lang];

  return (
    <section id="about" aria-labelledby="about-title">
      <div className="shell">
        <div className="about__grid">
          <div className="about__lead">
            <p className="eyebrow" data-reveal>
              <span>{t("about.eyebrow")}</span>
            </p>
            <h2 id="about-title" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
              {t("about.title")}
            </h2>
            <p className="about__lede" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
              {t("about.lede")}
            </p>
            <p className="about__p" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
              {t("about.p1")}
            </p>
          </div>

          <ol className="pillars">
            {PILLARS.map((p, i) => (
              <li
                key={p.tKey}
                className="pillar"
                data-reveal
                style={{ ["--reveal-delay" as string]: `${240 + i * 90}ms`, ["--pillar-accent" as string]: p.accent }}
              >
                <span className="pillar__icon mono" aria-hidden="true">{p.icon}</span>
                <h3 className="pillar__title">{t(p.tKey)}</h3>
                <p className="pillar__desc">{t(p.dKey)}</p>
                <span className="pillar__index mono">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
