import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/LanguageContext";
import { profile } from "../data/profile";
import { featuredRepos } from "../data/repos";
import { fetchRepos, formatStars, timeAgo, type Repo } from "../lib/github";
import type { Localized } from "../data/profile";

const FLAGSHIP = "lyceumai";
const LANG_FILTERS = ["All", "Python", "TypeScript", "HTML", "JavaScript"] as const;
type LangFilter = (typeof LANG_FILTERS)[number];

const LANG_COLOR: Record<string, string> = {
  Python: "var(--accent)",
  TypeScript: "var(--slate)",
  JavaScript: "var(--moss)",
  HTML: "var(--plum)",
};

export function OpenSource() {
  const { lang, t } = useI18n();
  const L = (s: Localized) => s[lang];
  const [data, setData] = useState<{ repos: Repo[]; source: "live" | "cached"; totalStars: number; total: number } | null>(null);
  const [filter, setFilter] = useState<LangFilter>("All");

  useEffect(() => {
    const ctrl = new AbortController();
    fetchRepos(ctrl.signal).then((r) =>
      setData({ repos: r.repos, source: r.source, totalStars: r.totalStars, total: r.total }),
    );
    return () => ctrl.abort();
  }, []);

  const flagship = useMemo(
    () => data?.repos.find((r) => r.name === FLAGSHIP) ?? null,
    [data],
  );

  /** hand-written bilingual blurb for a repo, if curated; else null */
  const blurbFor = (name: string): Localized | null => {
    const f = featuredRepos.find((r) => r.name === name);
    return f ? f.blurb : null;
  };

  const otherRepos = useMemo(() => {
    if (!data) return [];
    // exclude only the flagship (shown in its own card); keep featured + the rest.
    const featuredOrder = new Map(featuredRepos.map((f, i) => [f.name, i]));
    let rest = data.repos.filter((r) => r.name !== FLAGSHIP);
    // featured repos first (in curated order), then everything else by stars.
    rest.sort((a, b) => {
      const fa = featuredOrder.has(a.name) ? featuredOrder.get(a.name)! : 999;
      const fb = featuredOrder.has(b.name) ? featuredOrder.get(b.name)! : 999;
      if (fa !== fb) return fa - fb;
      return b.stars - a.stars;
    });
    if (filter !== "All") rest = rest.filter((r) => r.language === filter);
    return rest;
  }, [data, filter]);

  return (
    <section id="opensource" aria-labelledby="os-title">
      <div className="shell">
        <header className="section-head">
          <p className="eyebrow" data-reveal><span>{t("os.eyebrow")}</span></p>
          <h2 id="os-title" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
            {t("os.title")}
          </h2>
          <p className="lede" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            {t("os.lede")}
          </p>

          <div className="os__meta mono" data-reveal style={{ ["--reveal-delay" as string]: "180ms" }}>
            <span className={`os__src ${data?.source === "live" ? "is-live" : "is-cached"}`}>
              <span className="dot" />
              {data ? (data.source === "live" ? t("hero.live") : t("os.error")) : t("os.loading")}
            </span>
            <span className="os__sep">·</span>
            <span>{profile.stats.repos} repos</span>
            <span className="os__sep">·</span>
            <span>{data?.totalStars ?? profile.stats.stars}★</span>
          </div>
        </header>

        {/* Flagship */}
        {flagship && (
          <article className="flagship" data-reveal style={{ ["--reveal-delay" as string]: "60ms" }}>
            <div className="flagship__inner">
              <div className="flagship__head">
                <span className="tag tag--accent"><span className="dot" />{t("os.flagship")}</span>
                <span className="flagship__lang">
                  <span className="lang-dot" style={{ background: LANG_COLOR.Python }} />
                  {flagship.language ?? "—"}
                </span>
              </div>
              <h3 className="flagship__name">{flagship.name}</h3>
              <p className="flagship__desc">{L(featuredRepos.find((f) => f.name === FLAGSHIP)!.blurb) || flagship.description}</p>
              <div className="flagship__foot">
                <div className="flagship__stats">
                  <span><strong>{formatStars(flagship.stars)}</strong>{t("os.stars")}</span>
                  <span><strong>{flagship.forks}</strong>{t("os.forks")}</span>
                  <span><strong>{timeAgo(flagship.updated)}</strong>{t("os.updated")}</span>
                </div>
                <a className="btn btn--primary" href={flagship.url} target="_blank" rel="noreferrer">
                  View repository
                  <span className="btn__icon" aria-hidden="true">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </article>
        )}

        {/* More repos with filter */}
        <div className="os-more">
          <div className="os-more__head">
            <h3 className="os-more__title">{filter === "All" ? "All repositories" : `${filter} repositories`}</h3>
            <div className="os-more__filters" role="tablist" aria-label="Filter by language">
              {LANG_FILTERS.map((f) => (
                <button
                  key={f}
                  className={`os-filter ${filter === f ? "is-active" : ""}`}
                  onClick={() => setFilter(f)}
                  role="tab"
                  aria-selected={filter === f}
                >
                  {f === "All" ? t("os.lang.all") : f}
                </button>
              ))}
            </div>
          </div>

          <ul className="repo-mini">
            {otherRepos.length === 0 && (
              <li className="repo-mini__empty mono">{data ? "—" : t("os.loading")}</li>
            )}
            {otherRepos.map((r) => {
              const blurb = blurbFor(r.name);
              const desc = blurb ? L(blurb) : r.description || "—";
              return (
                <li key={r.name} className={`repo-mini__item ${blurb ? "is-featured" : ""}`}>
                  <a href={r.url} target="_blank" rel="noreferrer">
                    <span className="repo-mini__name mono">{r.name}</span>
                    <span className="repo-mini__desc">{desc}</span>
                    <span className="repo-mini__meta mono">
                      {r.language && (
                        <>
                          <span className="lang-dot" style={{ background: LANG_COLOR[r.language] ?? "var(--fg-4)" }} />
                          {r.language}
                        </>
                      )}
                      <span className="dim">★ {formatStars(r.stars)}</span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <a className="link-arrow os-more__cta" href={profile.github.url} target="_blank" rel="noreferrer">
            {t("os.more")}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
