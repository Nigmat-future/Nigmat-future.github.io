import type { Localized } from "./profile";

export type Experience = {
  id: string;
  org: Localized;
  role: Localized;
  period: Localized;
  points: Localized[];
  tag?: Localized;
};

export const experiences: Experience[] = [
  {
    id: "pku3-clinical",
    org: { en: "Peking University Third Hospital", zh: "北京大学第三医院" },
    role: { en: "Clinical Laboratory Rotation", zh: "临床检验科轮转" },
    period: { en: "2025.05 – 2025.11", zh: "2025.05 – 2025.11" },
    tag: { en: "Clinical", zh: "临床" },
    points: [
      {
        en: "6-month rotation across biochemistry, immunology, haematology, microbiology, and molecular diagnostics.",
        zh: "为期 6 个月的轮转，覆盖生化、免疫、血液、微生物与分子诊断。",
      },
      {
        en: "Performed qPCR / real-time PCR pathogen detection, ELISA antigen-antibody testing, and flow-cytometry immune analyses under SOPs.",
        zh: "在标准操作规程下完成 qPCR / 实时 PCR 病原检测、ELISA 抗原抗体检测与流式免疫分析。",
      },
      {
        en: "Ran internal quality control — daily calibration, error investigation, instrument maintenance, and performance validation.",
        zh: "执行室内质控——每日校准、误差排查、仪器维护与性能验证。",
      },
    ],
  },
  {
    id: "pku3-research",
    org: { en: "Peking University Third Hospital", zh: "北京大学第三医院" },
    role: { en: "Undergraduate Researcher", zh: "本科研究助理" },
    period: { en: "2023.10 – present", zh: "2023.10 – 至今" },
    tag: { en: "Research", zh: "科研" },
    points: [
      {
        en: "Lead the ThyroPADA, HubGPT, ferroptosis signature, and CD73 synergy lines under Dr. Weilong Zhang.",
        zh: "在张伟龙博士指导下主导 ThyroPADA、HubGPT、铁死亡 signature 与 CD73 协同研究线。",
      },
    ],
  },
  {
    id: "ruijin",
    org: { en: "SJTU School of Medicine · Ruijin Hospital", zh: "上海交通大学医学院 · 瑞金医院" },
    role: { en: "Visiting Researcher", zh: "访问研究者" },
    period: { en: "2025.01 – 2025.04", zh: "2025.01 – 2025.04" },
    tag: { en: "Research", zh: "科研" },
    points: [
      {
        en: "Bispecific vs. BCMA CAR-T meta-analysis and resistance scRNA-seq under Prof. Dakang Xu.",
        zh: "在许大康教授指导下完成双特异性 vs BCMA CAR-T Meta 分析与耐药 scRNA-seq。",
      },
    ],
  },
  {
    id: "pkuhsc-study",
    org: { en: "PKU Health Science Center", zh: "北大医学部" },
    role: { en: "Vice Monitor, Study Committee", zh: "学习委员 · 副班长" },
    period: { en: "2023.09 – present", zh: "2023.09 – 至今" },
    tag: { en: "Leadership", zh: "学生工作" },
    points: [
      {
        en: "Led an R-language study group with graduate mentors — TCGA/GEO usage and deploying AlphaFold 2/3.",
        zh: "与研究生导师共同带领 R 语言学习小组——TCGA/GEO 使用与 AlphaFold 2/3 部署。",
      },
      {
        en: "Organized reading groups on Transformer and ViT architectures and their translational applications.",
        zh: "组织 Transformer 与 ViT 架构读书会，探讨其转化应用。",
      },
    ],
  },
];

export type SkillGroup = {
  id: string;
  titleKey: string;
  items: Localized[];
};

export const skills: SkillGroup[] = [
  {
    id: "programming",
    titleKey: "skill.langs.t",
    items: [
      { en: "Python (Pandas, NumPy, PyTorch)", zh: "Python（Pandas、NumPy、PyTorch）" },
      { en: "R (tidyverse, Seurat, ggplot2, Shiny)", zh: "R（tidyverse、Seurat、ggplot2、Shiny）" },
      { en: "Scikit-learn · ML (RSF, Elastic Net)", zh: "Scikit-learn · 机器学习（RSF、弹性网）" },
      { en: "Shell scripting · RAG pipelines", zh: "Shell 脚本 · RAG 流水线" },
    ],
  },
  {
    id: "bioinfo",
    titleKey: "skill.bio.t",
    items: [
      { en: "Single-cell RNA-seq", zh: "单细胞 RNA-seq" },
      { en: "Multi-omics integration", zh: "多组学整合" },
      { en: "GSEA · KEGG / GO pathway analysis", zh: "GSEA · KEGG / GO 通路分析" },
      { en: "Survival analysis", zh: "生存分析" },
    ],
  },
  {
    id: "viz",
    titleKey: "skill.viz.t",
    items: [
      { en: "BioRender", zh: "BioRender" },
      { en: "Adobe Illustrator", zh: "Adobe Illustrator" },
      { en: "ggplot2 · Shiny", zh: "ggplot2 · Shiny" },
    ],
  },
  {
    id: "human-lang",
    titleKey: "skill.human.t",
    items: [
      { en: "Uyghur & Mandarin — bilingual native", zh: "维吾尔语 & 普通话——双语母语" },
      { en: "English — fluent (TOEFL 99, CET-4/6)", zh: "英语——流利（TOEFL 99，CET-4/6）" },
      { en: "French · German — basic", zh: "法语 · 德语——基础" },
    ],
  },
];

export type Award = {
  id: string;
  year: string;
  title: Localized;
  detail?: Localized;
  tone: "gfp" | "cyan" | "violet" | "magenta";
};

export const awards: Award[] = [
  {
    id: "pku-research",
    year: "2025",
    title: {
      en: "Outstanding Research Award",
      zh: "优秀科研奖",
    },
    detail: {
      en: "Peking University Health Science Center",
      zh: "北京大学医学部",
    },
    tone: "gfp",
  },
  {
    id: "kaggle-rna",
    year: "2025",
    title: {
      en: "Stanford RNA 3D Folding Challenge — Bronze Medal (Top 9%)",
      zh: "斯坦福 RNA 3D 折叠挑战赛——铜牌（Top 9%）",
    },
    detail: { en: "Ranked 131 / 1,516 global teams", zh: "全球 131 / 1,516 队" },
    tone: "cyan",
  },
  {
    id: "innovation",
    year: "2024",
    title: {
      en: "Second Prize, Undergraduate Innovation Program",
      zh: "本科生创新创业计划 · 二等奖",
    },
    detail: {
      en: "Peking University Third Hospital",
      zh: "北京大学第三医院",
    },
    tone: "violet",
  },
];
