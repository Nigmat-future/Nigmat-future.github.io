import type { Localized } from "./profile";

export type PubStatus = "accepted" | "review" | "conference";
export type PubRole = "first" | "coFirst";

export type Publication = {
  id: string;
  title: Localized;
  authors: Localized;
  venue: Localized;
  status: PubStatus;
  role: PubRole;
  url?: string;
  /** optional GitHub repo name for cross-linking */
  repo?: string;
};

export const publications: Publication[] = [
  {
    id: "pancancer-ferroptosis",
    title: {
      en: "Comprehensive Multi-omics and Single-Cell Analysis Reveals Ferroptosis Signature Associated with Tumor Microenvironment Remodeling and Therapeutic Decision-Making across Pan-Cancer",
      zh: "综合多组学与单细胞分析揭示泛癌铁死亡 signature 与肿瘤微环境重塑及治疗决策的关联",
    },
    authors: { en: "Qu Y†, Wei Q†, Wu C†, Rahim N†, et al.", zh: "Qu Y†, Wei Q†, Wu C†, Rahim N†, 等" },
    venue: { en: "International Journal of Surgery", zh: "International Journal of Surgery" },
    status: "accepted",
    role: "coFirst",
    url: "https://www.researchgate.net/publication/406894542",
  },
  {
    id: "cd73-selinexor",
    title: {
      en: "CD73 Inhibitor Significantly Enhances the Antitumor Activity of Selinexor in Multiple Myeloma by Specifically Activating CD8⁺ T Cells",
      zh: "CD73 抑制剂通过特异性激活 CD8⁺ T 细胞显著增强 Selinexor 在多发性骨髓瘤中的抗肿瘤活性",
    },
    authors: { en: "Zhang C†, Wei Q†, Rahim N†, Bian G†, et al.", zh: "Zhang C†, Wei Q†, Rahim N†, Bian G†, 等" },
    venue: { en: "Cancer Gene Therapy", zh: "Cancer Gene Therapy" },
    status: "accepted",
    role: "coFirst",
    url: "https://www.researchgate.net/publication/398360505",
  },
  {
    id: "car-t-fenbc",
    title: {
      en: "Bispecific CAR-T vs. BCMA-Specific CAR-T: Advancing Treatment for R/R Multiple Myeloma",
      zh: "双特异性 CAR-T 对比 BCMA 特异性 CAR-T：推进复发/难治多发性骨髓瘤的治疗",
    },
    authors: { en: "Rahim N.", zh: "Rahim N." },
    venue: { en: "FENBC 2025", zh: "FENBC 2025" },
    status: "conference",
    role: "first",
  },
  {
    id: "cd73-ash",
    title: {
      en: "Therapeutic Preclinical Study on the Synergy Between CD73 Inhibitors and Selinexor for Managing Multiple Myeloma",
      zh: "CD73 抑制剂与 Selinexor 协同治疗多发性骨髓瘤的临床前研究",
    },
    authors: { en: "Zhang C†, Wei Q†, Rahim N†, et al.", zh: "Zhang C†, Wei Q†, Rahim N†, 等" },
    venue: { en: "ASH 2025", zh: "ASH 2025" },
    status: "conference",
    role: "coFirst",
  },
  {
    id: "hubgpt-advsci",
    title: {
      en: "HubGPT: Retrieval-Augmented Identification of Hub Genes and Key Pathways",
      zh: "HubGPT：基于检索增强的核心基因与关键通路识别",
    },
    authors: { en: "Rahim N†, Chen R†, Yan C†, et al.", zh: "Rahim N†, Chen R†, Yan C†, 等" },
    venue: { en: "Advanced Science", zh: "Advanced Science" },
    status: "review",
    role: "coFirst",
    repo: "HubGPT",
  },
  {
    id: "bioagent",
    title: {
      en: "BioAgent: An Auditable Multi-Agent Framework for Reproducible Translational Bioinformatics",
      zh: "BioAgent：面向可复现转化生物信息学的可审计多智能体框架",
    },
    authors: { en: "Rahim N.", zh: "Rahim N." },
    venue: { en: "BMC Bioinformatics", zh: "BMC Bioinformatics" },
    status: "review",
    role: "first",
    url: "https://www.researchgate.net/publication/404259300",
    repo: "lyceumai",
  },
  {
    id: "circuit-icb",
    title: {
      en: "CIRCUIT-ICB: NMF-Based Discovery of Malignant Cell States Predicting Immune Checkpoint Blockade Resistance in Melanoma",
      zh: "CIRCUIT-ICB：基于 NMF 的恶性细胞状态发现，预测黑色素瘤免疫检查点阻断耐药",
    },
    authors: { en: "Rahim N.", zh: "Rahim N." },
    venue: { en: "Bioinformatics", zh: "Bioinformatics" },
    status: "review",
    role: "first",
    repo: "20260426-circuit-icb-pan-cancer-immune-checkpoint-blockade-resistance-cell-state-atlas",
  },
];
