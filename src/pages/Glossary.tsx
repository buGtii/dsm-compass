import { useMemo, useState } from 'react';
import { Search, BookA } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { GLOSSARY } from '@/data/glossary';

export default function GlossaryPage() {
  const [q, setQ] = useState('');
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return GLOSSARY;
    return GLOSSARY.filter(g => g.term.toLowerCase().includes(s) || g.definition.toLowerCase().includes(s));
  }, [q]);

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10">
      <div className="flex items-center gap-2">
        <BookA className="h-5 w-5 text-primary" />
        <h1 className="font-display text-2xl font-semibold">Clinical Glossary</h1>
      </div>
      <p className="text-sm text-muted-foreground">Key terms used in DSM-5-TR and mental status exams.</p>
      <div className="relative mt-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input value={q} onChange={e => setQ(e.target.value)} placeholder="Search terms…" className="pl-9" />
      </div>
      <div className="mt-4 space-y-2">
        {filtered.map(g => (
          <div key={g.term} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <div className="font-display font-semibold">{g.term}</div>
            <p className="text-sm text-muted-foreground mt-0.5">{g.definition}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-sm text-muted-foreground text-center py-8">No matches.</p>}
      </div>
    </div>
  );
}
