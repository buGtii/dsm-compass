import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { Disorder } from '@/data/disorders';
import { CATEGORIES } from '@/data/disorders';

const catColor = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.colorVar ?? 'var(--primary)';

export default function DisorderCard({ disorder, onClick }: { disorder: Disorder; onClick?: () => void }) {
  const color = catColor(disorder.category);
  const cat = CATEGORIES.find((c) => c.slug === disorder.category);
  return (
    <Link
      to={`/disorder/${disorder.id}`}
      onClick={onClick}
      className="group block rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:shadow-elevated hover:-translate-y-0.5"
    >
      <div className="flex items-start gap-3">
        <div
          className="h-10 w-1.5 rounded-full"
          style={{ background: `hsl(${color})` }}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
            <span style={{ color: `hsl(${color})` }}>{cat?.name}</span>
            {disorder.icd10 && <span className="text-border">•</span>}
            {disorder.icd10 && <span>ICD-10 {disorder.icd10}</span>}
          </div>
          <h3 className="mt-1 font-display text-lg font-semibold leading-tight text-foreground">
            {disorder.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {disorder.overviewSimple}
          </p>
        </div>
        <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
