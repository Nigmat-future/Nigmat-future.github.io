import { useI18n } from "../i18n/LanguageContext";
import { publications, type PubStatus } from "../data/publications";
import type { Localized } from "../data/profile";

const GROUPS: { id: PubStatus; labelKey: string }[] = [
  { id: "accepted", labelKey: "pub.status.accepted" },
  { id: "conference", labelKey: "pub.status.conference" },
  { id: "review", labelKey: "pub.status.review" },
];

export function Publications() {
  const { lang, t } = useI18n();
  const L = (s: Localized) => s[lang];

  return (
    <section id="publications" aria-labelledby="pub-title">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow" data-reveal><span>{t("pub.eyebrow")}</span></p>
          <h2 id="pub-title" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
            {t("pub.title")}
          </h2>
          <p className="lede" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {t("pub.lede")}
          </p>
        </header>

        <div className="pubs">
          {GROUPS.map((g) => {
            const items = publications.filter((p) => p.status === g.id);
            if (items.length === 0) return null;
            return (
              <div key={g.id} className="pub-group" data-reveal>
                <div className="pub-group__head">
                  <span className={`pub-group__tag tag tag--${statusTone(g.id)}`}>
                    <span className="dot" />{t(g.labelKey)}
                  </span>
                  <span className="pub-group__count mono">{items.length}</span>
                </div>

                <ol className="pub-list">
                  {items.map((p) => (
                    <li key={p.id} className="pub">
                      <div className="pub__main">
                        <p className="pub__title">{L(p.title)}</p>
                        <p className="pub__authors mono">{L(p.authors)}</p>
                      </div>
                      <div className="pub__meta">
                        <span className="pub__venue">{L(p.venue)}</span>
                        <span className={`pub__role tag tag--${roleTone(p.role)}`}>
                          {t(p.role === "first" ? "pub.role.first" : "pub.role.coFirst")}
                        </span>
                        {p.url && (
                          <a className="pub__link mono" href={p.url} target="_blank" rel="noreferrer" aria-label="View on ResearchGate">
                            RG ↗
                          </a>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function statusTone(s: PubStatus): "gfp" | "cyan" | "violet" {
  return s === "accepted" ? "gfp" : s === "conference" ? "cyan" : "violet";
}
function roleTone(r: "first" | "coFirst"): "magenta" | "violet" {
  return r === "first" ? "magenta" : "violet";
}
