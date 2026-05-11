export type Category = 'oll' | 'pll' | 'f2l';

export interface Algorithm {
  id: string;
  notation: string;
  comment?: string;
  fingertricks?: string;
  learned_at?: string;
  is_primary?: boolean;
}

export interface CaseData {
  id: string;
  category: Category;
  name: string;
  setup: string;
  algorithms: Algorithm[];
  tags?: string[];
  notes?: string;
}

const modules = import.meta.glob<{ default: CaseData }>('../../data/**/*.json', {
  eager: true,
});

export const allCases: CaseData[] = Object.values(modules)
  .map((m) => m.default)
  .sort((a, b) => a.id.localeCompare(b.id));

export function casesByCategory(category: Category): CaseData[] {
  return allCases.filter((c) => c.category === category);
}

export function primaryAlg(c: CaseData): Algorithm {
  return c.algorithms.find((a) => a.is_primary) ?? c.algorithms[0];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  oll: 'OLL',
  pll: 'PLL',
  f2l: 'F2L',
};

export const CATEGORIES: Category[] = ['oll', 'pll', 'f2l'];

const BASE = import.meta.env.BASE_URL;

export function link(path: string = ''): string {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  const cleaned = path.replace(/^\//, '');
  return base + cleaned;
}
