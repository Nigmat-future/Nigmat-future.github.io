import { useI18n } from "../i18n/LanguageContext";
import { research } from "../data/research";
import type { Localized } from "../data/profile";

export function Research() {
  const { lang, t } = useI18n();
  const L = (s: Localized) => s[lang];

  return (
    <section id="research" aria-labelledby="research-title">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow" data-reveal><span>{t("research.eyebrow")}</span></p>
          <h2 id="research-title" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
            {t("research.title")}
          </h2>
          <p className="lede" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {t("research.lede")}
          </p>
        </header>

        <div className="research-list">
          {research.map((p, i) => (
            <article
              key={p.id}
              className="rproj"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms`, ["--accent" as string]: `var(--${p.accent})` }}
            >
              <div className="rproj__rail" aria-hidden="true" />

              <div className="rproj__head">
                <div className="rproj__id mono">
                  <span className="rproj__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="rproj__name">{p.name}</span>
                </div>
                <span className="rproj__period mono">{p.period}</span>
              </div>

              <div className="rproj__body">
                <p className="rproj__role" style={{ color: "var(--accent)" }}>{L(p.role)}</p>
                <p className="rproj__summary">{L(p.summary)}</p>

                <ul className="rproj__bullets">
                  {p.bullets.map((b, bi) => (
                    <li key={bi}>{L(b)}</li>
                  ))}
                </ul>

                <p className="rproj__meta mono">
                  {L(p.institution)} <span className="dim">·</span> {L(p.mentor)}
                </p>

                <div className="rproj__metrics">
                  {p.metrics.map((m, mi) => (
                    <div key={mi} className={`metric metric--${m.tone ?? "cyan"}`}>
                      <span className="metric__val">{m.value}</span>
                      <span className="metric__label">{L(m.label)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rproj__status">
                <span className={`tag tag--${p.accent}`}>
                  <span className="dot" />{L(p.status)}
                </span>
                {p.repo && (
                  <a className="rproj__repo" href={`https://github.com/Nigmat-future/${p.repo}`} target="_blank" rel="noreferrer">
                    {p.repo} ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
