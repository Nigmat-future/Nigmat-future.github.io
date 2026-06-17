import { useI18n } from "../i18n/LanguageContext";

/** EN ⇄ 中 toggle. Mono, compact, keeps current state in localStorage. */
export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggle } = useI18n();
  return (
    <button
      className={`lang-toggle ${compact ? "lang-toggle--compact" : ""}`}
      onClick={toggle}
      aria-label={lang === "en" ? "切换到中文" : "Switch to English"}
      title={lang === "en" ? "中文" : "English"}
    >
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
      <span aria-hidden="true" className="lang-toggle__sep">/</span>
      <span className={lang === "zh" ? "is-active" : ""}>中</span>
    </button>
  );
}
