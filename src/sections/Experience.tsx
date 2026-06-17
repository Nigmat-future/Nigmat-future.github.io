import { useI18n } from "../i18n/LanguageContext";
import { experiences, skills, awards } from "../data/experience";
import type { Localized } from "../data/profile";

export function Experience() {
  const { lang, t } = useI18n();
  const L = (s: Localized) => s[lang];

  return (
    <section id="experience" aria-labelledby="exp-title">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow" data-reveal><span>{t("exp.eyebrow")}</span></p>
          <h2 id="exp-title" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
            {t("exp.title")}
          </h2>
          <p className="lede" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {t("exp.lede")}
          </p>
        </header>

        <ol className="timeline">
          {experiences.map((e, i) => (
            <li
              key={e.id}
              className="tl-item"
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <div className="tl-item__node" aria-hidden="true">
                <span className="tl-item__dot" />
              </div>
              <div className="tl-item__body">
                <div className="tl-item__head">
                  <span className="tl-item__period mono">{L(e.period)}</span>
                  {e.tag && <span className="tag tag--cyan">{L(e.tag)}</span>}
                </div>
                <h3 className="tl-item__role">{L(e.role)}</h3>
                <p className="tl-item__org">{L(e.org)}</p>
                <ul className="tl-item__points">
                  {e.points.map((p, pi) => (
                    <li key={pi}>{L(p)}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        {/* Skills */}
        <div className="skills-block" data-reveal>
          <p className="eyebrow"><span>{t("skill.eyebrow")}</span></p>
          <h3 className="skills-block__title">{t("skill.title")}</h3>
          <div className="skills-grid">
            {skills.map((g) => (
              <div key={g.id} className="skill-group">
                <h4 className="skill-group__t mono">{t(g.titleKey)}</h4>
                <ul className="skill-group__items">
                  {g.items.map((it, ii) => (
                    <li key={ii}>{L(it)}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="awards" data-reveal>
          <p className="eyebrow"><span>{t("awards.eyebrow")}</span></p>
          <h3 className="awards__title">{t("awards.title")}</h3>
          <ul className="awards-grid">
            {awards.map((a) => (
              <li key={a.id} className={`award award--${a.tone}`}>
                <span className="award__year mono">{a.year}</span>
                <div className="award__body">
                  <p className="award__t">{L(a.title)}</p>
                  {a.detail && <p className="award__d mono">{L(a.detail)}</p>}
                </div>
                <span className="award__mark mono" aria-hidden="true">★</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
