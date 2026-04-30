import { CATEGORIES, DISORDERS, type Disorder } from '@/data/disorders';

export interface SearchResult {
  disorder: Disorder;
  score: number;
  matchedOn: string[];
}

const normalize = (s: string) => s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();

// Lightweight fuzzy: substring + token overlap + keyword match. Good enough offline.
export function searchDisorders(query: string, opts?: { category?: string }): SearchResult[] {
  const q = normalize(query);
  if (!q) {
    return DISORDERS
      .filter((d) => !opts?.category || d.category === opts.category)
      .map((disorder) => ({ disorder, score: 0, matchedOn: [] }));
  }
  const tokens = q.split(' ').filter((t) => t.length > 1);
  const results: SearchResult[] = [];

  for (const d of DISORDERS) {
    if (opts?.category && d.category !== opts.category) continue;
    const haystacks: { weight: number; text: string; label: string }[] = [
      { weight: 10, text: normalize(d.name), label: 'name' },
      { weight: 8, text: normalize(d.shortName ?? ''), label: 'short' },
      { weight: 6, text: normalize(d.icd10 ?? ''), label: 'icd' },
      { weight: 5, text: normalize(d.keywords.join(' ')), label: 'keyword' },
      { weight: 3, text: normalize(d.overviewSimple), label: 'overview' },
      { weight: 2, text: normalize([...(d.symptoms.cognitive ?? []), ...(d.symptoms.emotional ?? []), ...(d.symptoms.behavioral ?? []), ...(d.symptoms.physical ?? [])].join(' ')), label: 'symptom' },
    ];

    let score = 0;
    const matched = new Set<string>();
    for (const h of haystacks) {
      if (!h.text) continue;
      if (h.text.includes(q)) { score += h.weight * 2; matched.add(h.label); }
      for (const t of tokens) {
        if (h.text.includes(t)) { score += h.weight; matched.add(h.label); }
      }
    }
    if (score > 0) results.push({ disorder: d, score, matchedOn: [...matched] });
  }

  return results.sort((a, b) => b.score - a.score);
}

export const ALL_CATEGORIES = CATEGORIES;
