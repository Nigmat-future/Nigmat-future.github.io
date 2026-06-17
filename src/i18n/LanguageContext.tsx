import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh";

type Dict = Record<string, string>;

/** UI chrome strings — structural data lives in src/data with its own bilingual fields. */
const STRINGS: Record<Lang, Dict> = {
  en: {
    "nav.about": "About",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.opensource": "Open Source",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "lang.toggle": "中文",
    "lang.label": "EN",

    "hero.kicker": "Biomedical AI · Agentic Research · Bioinformatics",
    "hero.line1": "Building autonomous biomedical",
    "hero.line2": "research systems",
    "hero.tagline":
      "Turning ambiguous biomedical questions into reproducible analyses, publishable study designs, and research products people actually use.",
    "hero.role": "B.S. Medical Technology · Peking University · Beijing, China",
    "hero.cta.research": "Read the research",
    "hero.cta.github": "Open source",
    "hero.live": "Live from GitHub",
    "hero.scroll": "scroll",

    "about.eyebrow": "Theoria · The Stance",
    "about.title": "Modular over monolithic. Research-aware over generic.",
    "about.lede":
      "I build autonomous systems that carry a biomedical question from first principles to a reproducible, publishable artifact — coordinating literature, public cohorts, executable code, and manuscript-grade outputs.",
    "about.p1":
      "My work sits at the seam between machine intelligence and the wet-lab clinic: AI for translational medicine, multi-omics, single-cell, and retrieval-augmented reasoning over the biomedical literature.",
    "about.pillar1.t": "Agentic Research Systems",
    "about.pillar1.d":
      "Multi-agent orchestration that walks question → evidence → manuscript, with auditable provenance rather than black-box claims.",
    "about.pillar2.t": "Translational Bioinformatics",
    "about.pillar2.d":
      "Single-cell, multi-omics, and clinical cohorts (TCGA, GEO) turned into prognostic signatures and validated models.",
    "about.pillar3.t": "Scientific Developer Tooling",
    "about.pillar3.d":
      "Local-first agents, LLM routers, and skill suites that make rigorous research faster and more reproducible.",

    "research.eyebrow": "Empiria · The Evidence",
    "research.title": "Research with measurable outcomes",
    "research.lede":
      "Five lines of work across diagnostic AI, RAG-based pathway reasoning, pan-cancer signatures, and immunotherapy — each with quantified clinical or methodological results.",

    "pub.eyebrow": "Logos · The Argument",
    "pub.title": "Publications & submissions",
    "pub.lede":
      "Co-first and first-author work spanning surgery, gene therapy, hematology, and methodology journals.",
    "pub.col.work": "Work",
    "pub.col.role": "Role",
    "pub.col.venue": "Venue",
    "pub.col.status": "Status",
    "pub.status.accepted": "Accepted",
    "pub.status.review": "Under review",
    "pub.status.conference": "Conference",
    "pub.role.coFirst": "Co-first author",
    "pub.role.first": "First author",

    "os.eyebrow": "Techne · The Craft",
    "os.title": "Open source & research products",
    "os.lede":
      "36 public repositories turning research ideas into usable tools. Selected highlights below — fetched live from GitHub, with a cached snapshot as fallback.",
    "os.flagship": "Flagship",
    "os.stars": "stars",
    "os.forks": "forks",
    "os.updated": "updated",
    "os.more": "All repositories on GitHub",
    "os.lang.all": "All languages",
    "os.loading": "Fetching repositories…",
    "os.error": "Couldn't reach GitHub live — showing cached snapshot.",
    "os.by": "by Nigmat-future",

    "exp.eyebrow": "Krisis · The Practice",
    "exp.title": "Experience",
    "exp.lede": "Hospitals, labs, and the clinic floor.",

    "skill.eyebrow": "Praxis · The Toolkit",
    "skill.title": "Skills & methods",
    "skill.langs.t": "Programming & Data Science",
    "skill.bio.t": "Bioinformatics & Computational Biology",
    "skill.viz.t": "Visualization",
    "skill.human.t": "Languages",

    "awards.eyebrow": "Eidos · Recognition",
    "awards.title": "Awards",
    "awards.kaggle.rank": "Ranked 131 / 1,516 global teams",

    "contact.eyebrow": "Praxis · The Handshake",
    "contact.title": "Get in touch",
    "contact.lede":
      "Open to research collaboration, graduate opportunities, and conversations about AI in translational medicine.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.github": "GitHub",
    "contact.rg": "ResearchGate",

    "footer.tag": "Building autonomous biomedical research systems",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with React · set in Fraunces & Newsreader",
    "footer.greek": "ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ",
    "footer.greek.tr": "The unexamined life is not worth living — Socrates",
  },
  zh: {
    "nav.about": "关于",
    "nav.research": "研究",
    "nav.publications": "论文",
    "nav.opensource": "开源",
    "nav.experience": "经历",
    "nav.contact": "联系",

    "lang.toggle": "EN",
    "lang.label": "中",

    "hero.kicker": "生物医学 AI · 智能体研究系统 · 生物信息学",
    "hero.line1": "构建自主的生物医学",
    "hero.line2": "研究系统",
    "hero.tagline":
      "把模糊的生物医学问题，转化为可复现的分析、可发表的实验设计，以及人们真正会用的研究产品。",
    "hero.role": "北京大学医学技术学院 · 检验技术 · 中国北京",
    "hero.cta.research": "查看研究",
    "hero.cta.github": "查看开源",
    "hero.live": "GitHub 实时数据",
    "hero.scroll": "向下滚动",

    "about.eyebrow": "Theoria · 立场",
    "about.title": "模块化优于单体。研究感知优于通用。",
    "about.lede":
      "我构建自主系统，让一个生物医学问题从第一性原理出发，走完文献综述、公开队列、可执行代码，直到可复现、可发表的成果——全程可审计。",
    "about.p1":
      "我的工作位于机器智能与临床湿实验的接缝处：面向转化医学的 AI、多组学、单细胞，以及对生物医学文献的检索增强推理。",
    "about.pillar1.t": "智能体研究系统",
    "about.pillar1.d":
      "多智能体编排，串联「问题 → 证据 → 手稿」，以可审计的溯源取代黑盒式断言。",
    "about.pillar2.t": "转化生物信息学",
    "about.pillar2.d":
      "把单细胞、多组学与临床队列（TCGA、GEO）转化为预后 signature 与已验证模型。",
    "about.pillar3.t": "科研开发者工具",
    "about.pillar3.d":
      "本地优先的智能体、LLM 路由与技能套件，让严谨的研究更快、更可复现。",

    "research.eyebrow": "Empiria · 证据",
    "research.title": "可量化的研究产出",
    "research.lede":
      "五条研究线，覆盖诊断 AI、RAG 通路推理、泛癌 signature 与免疫治疗——每条都带有可量化的临床或方法学结果。",

    "pub.eyebrow": "Logos · 论证",
    "pub.title": "论文与在投稿",
    "pub.lede": "共同一作与一作工作，跨越外科、基因治疗、血液与方法学期刊。",
    "pub.col.work": "工作",
    "pub.col.role": "作者角色",
    "pub.col.venue": "期刊/会议",
    "pub.col.status": "状态",
    "pub.status.accepted": "已接收",
    "pub.status.review": "审稿中",
    "pub.status.conference": "会议",
    "pub.role.coFirst": "共同一作",
    "pub.role.first": "第一作者",

    "os.eyebrow": "Techne · 技艺",
    "os.title": "开源与研究产品",
    "os.lede":
      "36 个公开仓库，把研究想法变成可用工具。下列为精选亮点——运行时从 GitHub 实时拉取，断网时回退缓存快照。",
    "os.flagship": "旗舰项目",
    "os.stars": "星标",
    "os.forks": "派生",
    "os.updated": "更新于",
    "os.more": "在 GitHub 查看全部仓库",
    "os.lang.all": "全部语言",
    "os.loading": "正在拉取仓库…",
    "os.error": "无法连接 GitHub，已显示缓存快照。",
    "os.by": "来自 Nigmat-future",

    "exp.eyebrow": "Krisis · 实践",
    "exp.title": "经历",
    "exp.lede": "医院、实验室与临床一线。",

    "skill.eyebrow": "Praxis · 工具箱",
    "skill.title": "技能与方法",
    "skill.langs.t": "编程与数据科学",
    "skill.bio.t": "生物信息与计算生物学",
    "skill.viz.t": "可视化",
    "skill.human.t": "语言",

    "awards.eyebrow": "Eidos · 认可",
    "awards.title": "奖项",
    "awards.kaggle.rank": "全球 131 / 1,516 队",

    "contact.eyebrow": " Praxis · 握手",
    "contact.title": "联系我",
    "contact.lede": "欢迎研究合作、研究生机会，以及关于转化医学 AI 的交流。",
    "contact.email": "邮箱",
    "contact.phone": "电话",
    "contact.github": "GitHub",
    "contact.rg": "ResearchGate",

    "footer.tag": "构建自主的生物医学研究系统",
    "footer.rights": "保留所有权利。",
    "footer.built": "基于 React 构建 · Fraunces 与 Newsreader 排版",
    "footer.greek": "ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ",
    "footer.greek.tr": "未经审视的人生不值得过 —— 苏格拉底",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "nr-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((p) => (p === "en" ? "zh" : "en")),
      t: (key: string) => STRINGS[lang][key] ?? STRINGS.en[key] ?? key,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
