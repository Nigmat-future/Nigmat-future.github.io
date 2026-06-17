/** Static profile / contact facts (from CV). */
export const profile = {
  name: "Nigmat Rahim",
  nameNative: "尼格麦提·热合木江",
  initials: "NR",
  email: "nigmatrahim4@gmail.com",
  emailAlt: "nigmatrahim@stu.pku.edu.cn",
  phone: "+86 13521755312",
  phoneHref: "tel:+8613521755312",
  github: {
    handle: "Nigmat-future",
    url: "https://github.com/Nigmat-future",
  },
  researchgate: {
    url: "https://www.researchgate.net/profile/Nigmat-Rahim",
  },
  avatar:
    "https://avatars.githubusercontent.com/u/174248627?v=4",
  location: "Beijing, China",
  affiliation: {
    en: "Peking University · Institute of Medical Technology",
    zh: "北京大学 · 医学技术学院",
  },
  degree: {
    en: "B.S. Medical Technology (Laboratory), 2022–2026 · GPA 3.21/4.0",
    zh: "检验技术学士，2022–2026 · GPA 3.21/4.0",
  },
  /** headline metrics, shown as chips */
  stats: {
    repos: 36,
    stars: 105,
    papers: 7,
  },
} as const;

export type Localized = { en: string; zh: string };
