import { repoSnapshot, type RepoSnapshot } from "../data/repos";

export type Repo = {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  forks: number;
  url: string;
  updated: string; // ISO date
};

export type RepoResult = {
  repos: Repo[];
  total: number;
  totalStars: number;
  source: "live" | "cached";
};

const USER = "Nigmat-future";
const ENDPOINT = `https://api.github.com/users/${USER}/repos?per_page=100&sort=pushed`;

/**
 * Fetch repos live from GitHub REST API, falling back to a cached snapshot
 * on any network/parse failure. Never throws.
 */
export async function fetchRepos(
  signal?: AbortSignal,
): Promise<RepoResult> {
  try {
    const res = await fetch(ENDPOINT, {
      signal,
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as Array<Record<string, unknown>>;

    const repos: Repo[] = data
      .filter((r) => r && r.fork !== true)
      .map((r) => ({
        name: String(r.name ?? ""),
        description: String(r.description ?? ""),
        language: (r.language as string | null) ?? null,
        stars: Number(r.stargazers_count ?? 0),
        forks: Number(r.forks_count ?? 0),
        url: String(r.html_url ?? `https://github.com/${USER}`),
        updated: String(r.updated_at ?? "").slice(0, 10),
      }));

    if (repos.length === 0) throw new Error("empty");

    return {
      repos: repos.sort((a, b) => b.stars - a.stars),
      total: repos.length,
      totalStars: repos.reduce((s, r) => s + r.stars, 0),
      source: "live",
    };
  } catch {
    return fromSnapshot();
  }
}

function fromSnapshot(): RepoResult {
  const repos: Repo[] = repoSnapshot.map((r: RepoSnapshot) => ({ ...r }));
  return {
    repos: repos.sort((a, b) => b.stars - a.stars),
    total: 36,
    totalStars: repos.reduce((s, r) => s + r.stars, 0),
    source: "cached",
  };
}

export function formatStars(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function timeAgo(iso: string): string {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return iso;
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days < 1) return "today";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}
