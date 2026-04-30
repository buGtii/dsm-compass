import { useMemo, useState } from 'react';
import { Search as SearchIcon, X, SlidersHorizontal } from 'lucide-react';
import { searchDisorders } from '@/lib/search';
import { CATEGORIES } from '@/data/disorders';
import DisorderCard from '@/components/DisorderCard';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { cn } from '@/lib/utils';

const SUGGESTIONS = [
  'fear of social situations',
  'hearing voices',
  'always worried',
  'cant sleep',
  'flashbacks',
  'mood swings',
  'cant focus',
  'binge eating',
];

export default function SearchPage() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<string | undefined>(undefined);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const results = useMemo(() => searchDisorders(q, { category: cat }), [q, cat]);

  return (
    <div className="mx-auto max-w-2xl">
      <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-xl border-b border-border safe-top">
        <div className="px-4 py-3 flex items-center gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search disorders, symptoms, ICD…"
              className="w-full rounded-2xl border border-border bg-card pl-9 pr-9 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
              inputMode="search"
              autoComplete="off"
            />
            {q && (
              <button
                onClick={() => setQ('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-muted-foreground hover:bg-muted"
                aria-label="Clear"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-2xl border transition',
              cat ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground',
            )}
            aria-label="Filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        {filtersOpen && (
          <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-none">
            <Chip active={!cat} onClick={() => setCat(undefined)}>All</Chip>
            {CATEGORIES.map((c) => (
              <Chip key={c.slug} active={cat === c.slug} onClick={() => setCat(cat === c.slug ? undefined : c.slug)} color={c.colorVar}>
                {c.name}
              </Chip>
            ))}
          </div>
        )}
      </header>

      <div className="px-4 pt-4 space-y-4">
        {!q && (
          <>
            <DisclaimerBanner compact />
            <div>
              <div className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Try searching</div>
              <div className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQ(s)}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:bg-primary-soft hover:border-primary/40 transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="space-y-3 pb-6">
          {q && results.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No matches for “{q}”. Try a symptom or different term.
            </div>
          )}
          {results.map((r) => (
            <DisorderCard key={r.disorder.id} disorder={r.disorder} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Chip({ children, active, onClick, color }: { children: React.ReactNode; active?: boolean; onClick: () => void; color?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium transition',
        active ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground hover:bg-muted',
      )}
      style={!active && color ? { borderColor: `hsl(${color} / 0.4)` } : undefined}
    >
      {children}
    </button>
  );
}
