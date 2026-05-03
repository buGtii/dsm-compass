// Offline-first inverted-index search. Built once on first call, cached in
// memory + localStorage. Works fully offline since DISORDERS data ships with
// the bundle.
import { DISORDERS, type Disorder } from '@/data/disorders';

interface Posting { id: string; weight: number }
type Index = Record<string, Posting[]>;

const CACHE_KEY = 'psychref:searchIndex:v1';
let memoryIndex: Index | null = null;

const tokenize = (s: string): string[] =>
  s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter((t) => t.length > 1);

function build(): Index {
  const idx: Index = {};
  const fields: (keyof Disorder | 'sym')[] = ['name', 'shortName', 'icd10', 'keywords', 'overviewSimple', 'sym'];
  const weights: Record<string, number> = { name: 10, shortName: 8, icd10: 6, keywords: 5, overviewSimple: 3, sym: 2 };

  for (const d of DISORDERS) {
    for (const f of fields) {
      let text = '';
      if (f === 'sym') {
        const s = d.symptoms || {} as any;
        text = [...(s.cognitive ?? []), ...(s.emotional ?? []), ...(s.behavioral ?? []), ...(s.physical ?? [])].join(' ');
      } else if (f === 'keywords') {
        text = (d.keywords || []).join(' ');
      } else {
        text = ((d as any)[f] || '') as string;
      }
      for (const tok of tokenize(text)) {
        (idx[tok] ||= []).push({ id: d.id, weight: weights[f as string] });
      }
    }
  }
  return idx;
}

export function getIndex(): Index {
  if (memoryIndex) return memoryIndex;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      memoryIndex = JSON.parse(cached);
      return memoryIndex!;
    }
  } catch {}
  memoryIndex = build();
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(memoryIndex)); } catch {}
  return memoryIndex;
}

export function fastSearch(query: string, limit = 50): Disorder[] {
  const idx = getIndex();
  const tokens = tokenize(query);
  if (!tokens.length) return [];
  const scores = new Map<string, number>();
  for (const t of tokens) {
    const postings = idx[t];
    if (!postings) {
      // prefix match fallback
      for (const k of Object.keys(idx)) {
        if (k.startsWith(t)) for (const p of idx[k]) scores.set(p.id, (scores.get(p.id) || 0) + p.weight);
      }
      continue;
    }
    for (const p of postings) scores.set(p.id, (scores.get(p.id) || 0) + p.weight);
  }
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([id]) => DISORDERS.find((d) => d.id === id)!)
    .filter(Boolean);
}

// Warm the cache early.
export function warmIndex() {
  setTimeout(() => getIndex(), 50);
}
