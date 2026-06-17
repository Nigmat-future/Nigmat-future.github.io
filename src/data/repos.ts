import type { Localized } from "./profile";

/** Curated featured repos: name + hand-written bilingual descriptions for nicer cards. */
export type FeaturedRepo = {
  name: string;
  blurb: Localized;
  /** role hint shown as a tag */
  kind: "agent" | "rag" | "tool" | "skill" | "infra";
};

export const featuredRepos: FeaturedRepo[] = [
  {
    name: "lyceumai",
    blurb: {
      en: "A peripatetic multi-agent system for end-to-end bioinformatics research — from question, to evidence, to manuscript.",
      zh: "漫步式多智能体系统，端到端生物信息研究——从问题、证据到手稿。",
    },
    kind: "agent",
  },
  {
    name: "HubGPT",
    blurb: {
      en: "Biomedical RAG system for gene-disease reasoning, pathway scoring, and publication-oriented evaluation.",
      zh: "面向基因-疾病推理、通路评分与发表导向评估的生物医学 RAG 系统。",
    },
    kind: "rag",
  },
  {
    name: "TopoLogos",
    blurb: {
      en: "A spatial-transcriptomics agent skill — a thinking partner, not a tool executor. BioMCP-powered.",
      zh: "空间转录组智能体技能——思考伙伴而非工具执行器。基于 BioMCP。",
    },
    kind: "agent",
  },
  {
    name: "axon",
    blurb: {
      en: "Local-first, capability-aware LLM router gateway with zero-config key auto-discovery.",
      zh: "本地优先、能力感知的 LLM 路由网关，零配置密钥自动发现。",
    },
    kind: "infra",
  },
  {
    name: "AgenticBioAnalysis",
    blurb: {
      en: "Agentic layer for orchestrating biomedical analysis workflows end-to-end.",
      zh: "端到端编排生物医学分析工作流的智能体层。",
    },
    kind: "agent",
  },
  {
    name: "publishable-research-orchestrator",
    blurb: {
      en: "Turn a vague research idea into a publication-grade execution plan with milestones and exit criteria.",
      zh: "把模糊的研究想法变为含里程碑与退出标准的可发表执行计划。",
    },
    kind: "skill",
  },
  {
    name: "biomedical-codex-skills",
    blurb: {
      en: "9 publishable skills for biomedical AI coding & agent workflows — QC, intake, scaffolding, porting.",
      zh: "9 个面向生物医学 AI 编码与智能体工作流的可发布技能——QC、接入、脚手架、迁移。",
    },
    kind: "skill",
  },
  {
    name: "cellhop",
    blurb: {
      en: "One-liners to hop between Python AnnData and R Seurat without intermediate files.",
      zh: "无需中间文件，一行在 Python AnnData 与 R Seurat 之间互转。",
    },
    kind: "tool",
  },
  {
    name: "rverflow",
    blurb: {
      en: "Tame R/Bioconductor dependency chains for reproducible bioinformatics pipelines.",
      zh: "驯服 R/Bioconductor 依赖链，保障生信流程可复现。",
    },
    kind: "tool",
  },
  {
    name: "pretext-med",
    blurb: {
      en: "AI-powered clinical report generator — GLM-4 + pretext, zero-layout-shift streaming.",
      zh: "AI 临床报告生成器——GLM-4 + pretext，零布局偏移流式输出。",
    },
    kind: "tool",
  },
];

export const featuredNames = new Set(featuredRepos.map((r) => r.name));

/**
 * Cached snapshot — used as fallback when GitHub is unreachable.
 * Mirrors the scan taken on 2026-06-17.
 */
export type RepoSnapshot = {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updated: string;
};

export const repoSnapshot: RepoSnapshot[] = [
  { name: "lyceumai", description: "A peripatetic multi-agent system for end-to-end bioinformatics research", language: "Python", stars: 98, forks: 10, url: "https://github.com/Nigmat-future/lyceumai", updated: "2026-06-12" },
  { name: "HubGPT", description: "Biomedical RAG for gene-disease reasoning, pathway scoring & publication-oriented evaluation", language: "JavaScript", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/HubGPT", updated: "2026-06-12" },
  { name: "TopoLogos", description: "Spatial-transcriptomics agent skill — a thinking partner. BioMCP-powered.", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/TopoLogos", updated: "2026-06-12" },
  { name: "axon", description: "Local-first, capability-aware LLM router gateway with zero-config key auto-discovery", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/axon", updated: "2026-06-15" },
  { name: "AgenticBioAnalysis", description: "Agentic orchestration of biomedical analysis workflows", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/AgenticBioAnalysis", updated: "2025-11-16" },
  { name: "publishable-research-orchestrator", description: "Turn a vague research idea into a publication-grade execution plan", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/publishable-research-orchestrator", updated: "2026-04-20" },
  { name: "biomedical-codex-skills", description: "A publishable multi-skill repository for biomedical AI coding and agent workflows", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/biomedical-codex-skills", updated: "2026-04-03" },
  { name: "cellhop", description: "One-liners to hop between Python AnnData and R Seurat without intermediate files", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/cellhop", updated: "2025-09-22" },
  { name: "rverflow", description: "Tame R/Bioconductor dependency chains for reproducible bioinformatics pipelines", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/rverflow", updated: "2025-09-22" },
  { name: "pretext-med", description: "AI-powered clinical report generator — GLM-4 + pretext, zero-layout-shift streaming", language: "HTML", stars: 1, forks: 0, url: "https://github.com/Nigmat-future/pretext-med", updated: "2026-04-06" },
  { name: "CodexPlusPlus", description: "An enhanced tool for CodexApp — better to use, more comfortable", language: null, stars: 1, forks: 0, url: "https://github.com/Nigmat-future/CodexPlusPlus", updated: "2026-06-11" },
  { name: "hermes-agent", description: "The agent that grows with you", language: null, stars: 1, forks: 0, url: "https://github.com/Nigmat-future/hermes-agent", updated: "2026-06-11" },
  { name: "oh-my-openagent", description: "The one and only agent harness for complex codebases", language: null, stars: 1, forks: 0, url: "https://github.com/Nigmat-future/oh-my-openagent", updated: "2026-06-11" },
  { name: "Biomni", description: "Biomni: a general-purpose biomedical AI agent", language: null, stars: 0, forks: 0, url: "https://github.com/Nigmat-future/Biomni", updated: "2026-06-12" },
  { name: "pad-to-vibe", description: "Connect tablet sketches to Claude Code via MCP — draw wireframes, sync, implement", language: "TypeScript", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/pad-to-vibe", updated: "2026-04-14" },
  { name: "MCP-manager", description: "Auto management of MCP", language: "TypeScript", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/MCP-manager", updated: "2025-12-06" },
  { name: "Pipeline-Construction", description: "Bioinformatics pipeline construction", language: "Python", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/Pipeline-Construction", updated: "2026-01-11" },
  { name: "Nigmat", description: "Personal page assets", language: "HTML", stars: 0, forks: 0, url: "https://github.com/Nigmat-future/Nigmat", updated: "2026-04-20" },
];

/** Aggregate counts for the hero chips / os header. */
export const repoTotals = {
  total: 36,
  stars: 105,
  forks: 10,
  languages: { Python: 13, TypeScript: 8, HTML: 5, JavaScript: 2 },
};
