import type { Localized } from "./profile";

export type Metric = { value: string; label: Localized; tone?: "gfp" | "cyan" | "violet" | "magenta" };

export type ResearchProject = {
  id: string;
  name: string;
  period: string;
  institution: Localized;
  mentor: Localized;
  role: Localized;
  summary: Localized;
  bullets: Localized[];
  metrics: Metric[];
  repo?: string; // optional GitHub repo name for cross-link
  status: Localized;
  accent: "gfp" | "cyan" | "violet" | "magenta";
};

export const research: ResearchProject[] = [
  {
    id: "thyropada",
    name: "ThyroPADA",
    period: "2025.01 – present",
    institution: {
      en: "Peking University Third Hospital",
      zh: "北京大学第三医院",
    },
    mentor: { en: "Mentor: Dr. Weilong Zhang", zh: "导师：张伟龙 博士" },
    role: {
      en: "Agentic diagnostic AI for thyroid FNA cytopathology",
      zh: "甲状腺 FNA 细胞病理智能体诊断系统",
    },
    summary: {
      en: "An AI-agent diagnostic system integrating RAG and multimodal LLMs (GPT-4o / 4.1) that autonomously extracts and quantifies 16 cytopathological features from thyroid whole-slide images — sharply reducing manual annotation by pathologists.",
      zh: "集成 RAG 与多模态 LLM（GPT-4o / 4.1）的智能体诊断系统，可自主从甲状腺全切片图像中提取并量化 16 项细胞病理特征，大幅减少病理医生的人工标注。",
    },
    bullets: [
      {
        en: "Curated the largest multi-center thyroid cytopathology dataset to date — 7 centers, 12,000+ cases.",
        zh: "构建迄今最大的多中心甲状腺细胞病理数据集——7 中心、12000+ 例。",
      },
      {
        en: "GBM model selected via grid search over 7 ML algorithms; human-AI comparison showed AI-assisted diagnosis outperformed both senior and junior pathologists.",
        zh: "通过 7 种机器学习算法网格搜索选出 GBM 模型；人机对比显示 AI 辅助诊断超越资深与初级病理医生。",
      },
    ],
    metrics: [
      { value: "0.96", label: { en: "Internal AUC", zh: "内部 AUC" }, tone: "gfp" },
      { value: "0.935–0.974", label: { en: "External AUC ×6 centers", zh: "外部 AUC ×6 中心" }, tone: "cyan" },
      { value: "90.7%", label: { en: "AI-assisted accuracy", zh: "AI 辅助准确率" }, tone: "violet" },
    ],
    status: { en: "Active", zh: "进行中" },
    accent: "gfp",
  },
  {
    id: "hubgpt",
    name: "HubGPT",
    period: "2024.11 – 2026.01",
    institution: { en: "Peking University Third Hospital", zh: "北京大学第三医院" },
    mentor: { en: "Mentor: Dr. Weilong Zhang", zh: "导师：张伟龙 博士" },
    role: {
      en: "RAG-based identification of hub genes & key pathways",
      zh: "基于 RAG 的核心基因与关键通路识别",
    },
    summary: {
      en: "A computational framework using retrieval-augmented generation to prioritize key genes and pathways in cancer — addressing the high false-positive rates of traditional KEGG enrichment across 24 cancer types.",
      zh: "利用检索增强生成优先排序癌症关键基因与通路的计算框架，针对传统 KEGG 富集分析高假阳性问题，覆盖 24 种癌型。",
    },
    bullets: [
      {
        en: "Defined custom scoring (Pri-value, R-value) distinguishing context-specific oncogenic drivers from housekeeping genes.",
        zh: "定义自定义评分（Pri-value、R-value），区分情境特异性癌驱动基因与管家基因。",
      },
      {
        en: "Removed irrelevant pathways (Malaria/Measles in Bladder Cancer) while elevating p53, PI3K-Akt; autonomously reconstructed the AML hierarchy ranking FLT3/KIT/STAT5B as top targets.",
        zh: "剔除无关通路（膀胱癌中的疟疾/麻疹），提升 p53、PI3K-Akt；自主重构 AML 层级，FLT3/KIT/STAT5B 位列前位。",
      },
    ],
    metrics: [
      { value: "24", label: { en: "Cancer types", zh: "癌型数" }, tone: "violet" },
      { value: "Pri · R", label: { en: "Custom scoring", zh: "自定义评分" }, tone: "cyan" },
      { value: "Adv. Sci.", label: { en: "Under review", zh: "审稿中" }, tone: "magenta" },
    ],
    repo: "HubGPT",
    status: { en: "Under review · Advanced Science", zh: "审稿中 · Advanced Science" },
    accent: "violet",
  },
  {
    id: "ferroptosis",
    name: "Pan-Cancer Ferroptosis Signature",
    period: "2024.02 – 2025.12",
    institution: { en: "Peking University Third Hospital", zh: "北京大学第三医院" },
    mentor: { en: "Mentor: Dr. Weilong Zhang", zh: "导师：张伟龙 博士" },
    role: {
      en: "Prognostic multi-omics signature (Fp.Sig) + clinical Shiny app",
      zh: "预后多组学 signature（Fp.Sig）+ 临床 Shiny 应用",
    },
    summary: {
      en: "Integrated multi-omics data from 10,510 TCGA samples across 33 cancer types using 10 distinct machine-learning algorithms, and deployed an interactive R Shiny app for clinicians to predict survival and immunotherapy response.",
      zh: "整合 33 癌型、10,510 例 TCGA 样本的多组学数据，使用 10 种机器学习算法，并部署 R Shiny 交互应用，供临床医生预测生存与免疫治疗响应。",
    },
    bullets: [
      {
        en: "Validated Fp.Sig showing significant negative correlation with SN-38 drug sensitivity in 5 myeloma cell lines.",
        zh: "验证 Fp.Sig 与 SN-38 药敏显著负相关（5 个骨髓瘤细胞系）。",
      },
    ],
    metrics: [
      { value: "0.67", label: { en: "C-index (max)", zh: "C-index（最高）" }, tone: "cyan" },
      { value: "10,510", label: { en: "TCGA samples", zh: "TCGA 样本" }, tone: "violet" },
      { value: "10", label: { en: "ML algorithms", zh: "ML 算法" }, tone: "gfp" },
    ],
    status: { en: "Accepted · Int. J. Surgery", zh: "已接收 · Int. J. Surgery" },
    accent: "cyan",
  },
  {
    id: "cd73",
    name: "CD73 × Selinexor Synergy",
    period: "2023.10 – 2025.10",
    institution: { en: "Peking University Third Hospital", zh: "北京大学第三医院" },
    mentor: { en: "Mentor: Dr. Weilong Zhang", zh: "导师：张伟龙 博士" },
    role: {
      en: "Single-cell mechanism of CD73 + selinexor in multiple myeloma",
      zh: "CD73 + selinexor 在多发性骨髓瘤中的单细胞机制",
    },
    summary: {
      en: "Analyzed single-cell RNA-seq from a murine tumor model (J558/BALB/c) to elucidate the synergistic antitumor mechanism, reconstructing differentiation trajectories of 45,000+ T/NK cells with Monocle.",
      zh: "分析小鼠肿瘤模型（J558/BALB/c）单细胞 RNA-seq 以阐明协同抗肿瘤机制，用 Monocle 重构 45,000+ T/NK 细胞分化轨迹。",
    },
    bullets: [
      {
        en: "Identified significant downregulation of the Malignant_Enpp1 tumor-promoting subpopulation.",
        zh: "发现 Malignant_Enpp1 促瘤亚群显著下调。",
      },
      {
        en: "Revealed combination therapy specifically activates CD8⁺ T-cell cytotoxic function (IFN-γ, Granzyme B, Prf1).",
        zh: "揭示联合治疗特异性激活 CD8⁺ T 细胞毒性功能（IFN-γ、Granzyme B、Prf1）。",
      },
    ],
    metrics: [
      { value: "45,000+", label: { en: "T/NK cells", zh: "T/NK 细胞" }, tone: "gfp" },
      { value: "CD8⁺ ↑", label: { en: "Cytotoxic activation", zh: "细胞毒性激活" }, tone: "magenta" },
      { value: "Cancer Gene Ther.", label: { en: "Accepted", zh: "已接收" }, tone: "violet" },
    ],
    status: { en: "Accepted · Cancer Gene Therapy", zh: "已接收 · Cancer Gene Therapy" },
    accent: "magenta",
  },
  {
    id: "car-t",
    name: "Bispecific vs. BCMA CAR-T",
    period: "2025.01 – 2025.04",
    institution: {
      en: "Shanghai Jiao Tong Univ. · Ruijin Hospital",
      zh: "上海交通大学医学院 · 瑞金医院",
    },
    mentor: { en: "Mentor: Prof. Dakang Xu", zh: "导师：许大康 教授" },
    role: {
      en: "Comparative trial meta-analysis + resistance scRNA-seq",
      zh: "比较性试验 Meta 分析 + 耐药 scRNA-seq",
    },
    summary: {
      en: "Led a comprehensive analysis of 7 clinical trials (n=190) demonstrating the superior efficacy of bispecific CAR-T over monospecific in relapsed/refractory multiple myeloma, and investigated resistance via scRNA-seq.",
      zh: "综合分析 7 项临床试验（n=190），证明双特异性 CAR-T 在复发/难治多发性骨髓瘤中优于单特异性，并通过 scRNA-seq 探究耐药机制。",
    },
    bullets: [
      {
        en: "Identified the MIF/CD74 pathway as a key contributor to immune escape in BCMA-negative resistant patients (p<0.001).",
        zh: "发现 MIF/CD74 通路是 BCMA 阴性耐药患者免疫逃逸的关键因素（p<0.001）。",
      },
    ],
    metrics: [
      { value: "89.6% vs 73%", label: { en: "ORR", zh: "ORR" }, tone: "gfp" },
      { value: "~18 vs 8.8 mo", label: { en: "Median PFS", zh: "中位 PFS" }, tone: "cyan" },
      { value: "FENBC 2025", label: { en: "First author", zh: "第一作者" }, tone: "violet" },
    ],
    status: { en: "Accepted · FENBC 2025", zh: "已接收 · FENBC 2025" },
    accent: "cyan",
  },
];
