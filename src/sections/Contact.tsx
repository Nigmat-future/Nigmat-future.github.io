import { useI18n } from "../i18n/LanguageContext";
import { profile } from "../data/profile";

export function Contact() {
  const { lang, t } = useI18n();

  return (
    <section id="contact" aria-labelledby="contact-title" className="contact">
      <div className="shell">
        <div className="contact__panel" data-reveal>
          <div className="contact__glow" aria-hidden="true" />
          <p className="eyebrow"><span>{t("contact.eyebrow").trim()}</span></p>
          <h2 id="contact-title">{t("contact.title")}</h2>
          <p className="contact__lede">{t("contact.lede")}</p>

          <div className="contact__channels">
            <a className="contact__channel" href={`mailto:${profile.email}`}>
              <span className="contact__ch-label mono">{t("contact.email")}</span>
              <span className="contact__ch-value">{profile.email}</span>
            </a>
            <a className="contact__channel" href={profile.phoneHref}>
              <span className="contact__ch-label mono">{t("contact.phone")}</span>
              <span className="contact__ch-value">{profile.phone}</span>
            </a>
            <a className="contact__channel" href={profile.github.url} target="_blank" rel="noreferrer">
              <span className="contact__ch-label mono">{t("contact.github")}</span>
              <span className="contact__ch-value">@{profile.github.handle}</span>
            </a>
            <a className="contact__channel" href={profile.researchgate.url} target="_blank" rel="noreferrer">
              <span className="contact__ch-label mono">{t("contact.rg")}</span>
              <span className="contact__ch-value">Nigmat Rahim ↗</span>
            </a>
          </div>

          <a className="btn btn--primary contact__mail" href={`mailto:${profile.email}`}>
            {t("contact.email")} →
          </a>
        </div>

        <footer className="footer">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="footer__mark mono" aria-hidden="true">∮</span>
              <div>
                <p className="footer__name">{profile.name}</p>
                <p className="footer__tag mono">{t("footer.tag")}</p>
              </div>
            </div>
            <div className="footer__greek">
              <p className="footer__greek-line">{t("footer.greek")}</p>
              <p className="footer__greek-tr mono">{t("footer.greek.tr")}</p>
            </div>
          </div>
          <div className="footer__bottom mono">
            <span>© {new Date().getFullYear()} {profile.name}. {t("footer.rights")}</span>
            <span className="footer__built">{t("footer.built")}</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
