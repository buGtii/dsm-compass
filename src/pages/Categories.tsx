import { Link, useParams } from 'react-router-dom';
import { CATEGORIES, DISORDERS } from '@/data/disorders';
import DisorderCard from '@/components/DisorderCard';
import { ChevronLeft } from 'lucide-react';

export default function Categories() {
  const { slug } = useParams();
  if (slug) {
    const cat = CATEGORIES.find((c) => c.slug === slug);
    if (!cat) return <div className="p-6">Category not found.</div>;
    const items = DISORDERS.filter((d) => d.category === slug);
    return (
      <div className="mx-auto max-w-2xl">
        <header className="px-4 pt-4 pb-3 flex items-center gap-2">
          <Link to="/categories" className="flex h-9 w-9 items-center justify-center rounded-full bg-card border border-border">
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Category</div>
            <h1 className="font-display text-xl font-semibold">{cat.name}</h1>
          </div>
        </header>
        <div className="px-4 space-y-3 pb-6">
          {items.map((d) => <DisorderCard key={d.id} disorder={d} />)}
          {items.length === 0 && <p className="text-sm text-muted-foreground">No disorders in this category yet.</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5">
      <h1 className="font-display text-2xl font-semibold">Browse by category</h1>
      <p className="mt-1 text-sm text-muted-foreground">Explore disorders organized by DSM-5-TR groupings.</p>
      <div className="mt-5 grid grid-cols-2 gap-3 pb-6">
        {CATEGORIES.map((c) => {
          const count = DISORDERS.filter((d) => d.category === c.slug).length;
          return (
            <Link
              key={c.slug}
              to={`/categories/${c.slug}`}
              className="rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition"
            >
              <div className="h-2 w-10 rounded-full mb-3" style={{ background: `hsl(${c.colorVar})` }} />
              <div className="font-display font-semibold leading-tight">{c.name}</div>
              <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.description}</div>
              <div className="mt-2 text-[11px] font-medium" style={{ color: `hsl(${c.colorVar})` }}>{count} disorder{count === 1 ? '' : 's'}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
