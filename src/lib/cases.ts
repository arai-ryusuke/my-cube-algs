export type Category = 'oll' | 'pll' | 'f2l';

export interface Algorithm {
  id: string;
  notation: string;
  comment?: string;
  fingertricks?: string;
  learned_at?: string;
  is_primary?: boolean;
}

interface CaseDataRaw {
  id: string;
  category: Category;
  name: string;
  setup?: string;
  algorithms: Algorithm[];
  tags?: string[];
  notes?: string;
}

export interface CaseData extends Omit<CaseDataRaw, 'setup'> {
  setup: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  oll: 'OLL',
  pll: 'PLL',
  f2l: 'F2L',
};

export const CATEGORIES: Category[] = ['oll', 'pll', 'f2l'];

export function primaryAlg(c: { algorithms: Algorithm[] }): Algorithm {
  return c.algorithms.find((a) => a.is_primary) ?? c.algorithms[0];
}

// Invert a standard whitespace-separated algorithm string.
// Handles base/prime/double-turn tokens (R, R', R2, R2', x, Uw, Mw2, ...).
// Does NOT handle parenthesized groups or commutator/conjugate brackets.
export function invertAlg(alg: string): string {
  return alg
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(invertMove)
    .reverse()
    .join(' ');
}

function invertMove(m: string): string {
  if (m.endsWith("2'")) return m.slice(0, -1); // R2' is the same as R2
  if (m.endsWith('2')) return m; // 180° is self-inverse
  if (m.endsWith("'")) return m.slice(0, -1); // R' → R
  return m + "'"; // R → R'
}

function normalize(raw: CaseDataRaw): CaseData {
  return {
    ...raw,
    setup: raw.setup ?? invertAlg(primaryAlg(raw).notation),
  };
}

const modules = import.meta.glob<{ default: CaseDataRaw }>('../../data/**/*.json', {
  eager: true,
});

export const allCases: CaseData[] = Object.values(modules)
  .map((m) => normalize(m.default))
  .sort((a, b) => a.id.localeCompare(b.id));

export function casesByCategory(category: Category): CaseData[] {
  return allCases.filter((c) => c.category === category);
}

const BASE = import.meta.env.BASE_URL;

export function link(path: string = ''): string {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const cleaned = path.replace(/^\//, '');
  return base + cleaned;
}
