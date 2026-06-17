# Nigmat Rahim — Personal Site

A single-page React + Vite + TypeScript personal site for **Nigmat Rahim** —
Biomedical AI builder & translational bioinformatician (Peking University).

Built around an established **fluorescence-microscopy × Lyceum-of-inquiry**
visual identity (ink field with GFP / cyan / violet / magenta emission lines;
Fraunces display serif + Inter Tight body + JetBrains Mono metrics).

## Features

- **EN / 中文** one-toggle bilingual UI (English-first, academic positioning).
- **Live GitHub data** — repos fetched at runtime from the GitHub REST API,
  with a cached snapshot fallback when offline or rate-limited.
- Sections: Hero (microscopy FOV) · About (3 pillars) · Research (5 projects
  with quantified metrics) · Publications (grouped by status) · Open Source
  (flagship + featured grid + filterable repo list) · Experience/Timeline ·
  Skills · Awards · Contact + footer.
- Reveal-on-scroll (IntersectionObserver), respects `prefers-reduced-motion`.
- Fully responsive, keyboard-accessible.

## Develop

```bash
npm install
npm run dev      # opens http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Structure

```
site/
├─ index.html
├─ src/
│  ├─ main.tsx               # entry (LanguageProvider + App)
│  ├─ App.tsx                # composes all sections
│  ├─ i18n/LanguageContext.tsx
│  ├─ data/                  # profile, research, publications, experience, repos
│  ├─ lib/                   # github.ts (live fetch + fallback), useReveal.ts
│  ├─ components/            # Nav, ScrollProgress, LanguageToggle
│  ├─ sections/              # Hero, About, Research, Publications, OpenSource, Experience, Contact
│  └─ styles/                # global.css (tokens), components.css (sections)
└─ public/brand/             # reused SVG art (caduceus, golden-spiral, …)
```

## Data sources

- CV (PDF): contact info, education, publications, research projects, awards, skills.
- GitHub `Nigmat-future`: 36 repos, 105★ — flagship `lyceumai` (98★).
- ResearchGate `Nigmat-Rahim`: 3 listed publications.

> Local preview only. Not published or deployed by default.
