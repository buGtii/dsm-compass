import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Search } from 'lucide-react';
import { DISORDERS } from '@/data/disorders';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function ChecklistPage() {
  const [q, setQ] = useState('');
  const [selectedId, setSelectedId] = useState<string>(DISORDERS[0]?.id ?? '');
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const filtered = useMemo(
    () => DISORDERS.filter((d) => d.name.toLowerCase().includes(q.toLowerCase())).slice(0, 30),
    [q],
  );
  const disorder = DISORDERS.find((d) => d.id === selectedId);
  const items = disorder?.criteriaSummary ?? [];
  const metCount = items.filter((_, i) => checked[`${selectedId}:${i}`]).length;

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-5">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
          <ClipboardCheck className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold">DSM Checklist</h1>
          <p className="text-xs text-muted-foreground">Tick paraphrased criteria during a session. Educational only.</p>
        </div>
      </header>

      <DisclaimerBanner compact />

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Pick a disorder…"
            className="w-full rounded-xl border border-border bg-background pl-9 pr-3 py-2.5 text-sm"
          />
        </div>
        <div className="flex flex-wrap gap-2 max-h-32 overflow-auto">
          {filtered.map((d) => (
            <button
              key={d.id}
              onClick={() => { setSelectedId(d.id); setChecked({}); }}
              className={`rounded-full px-3 py-1.5 text-xs border transition ${
                selectedId === d.id ? 'bg-primary text-primary-foreground border-primary' : 'border-border bg-background'
              }`}
            >
              {d.shortName ?? d.name}
            </button>
          ))}
        </div>
      </section>

      {disorder && (
        <section className="rounded-2xl border border-border bg-card p-4 shadow-soft animate-fade-up">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="font-display text-lg font-semibold">{disorder.name}</h2>
              <Link to={`/disorder/${disorder.id}`} className="text-xs text-primary">View full details →</Link>
            </div>
            <div className="text-right">
              <div className="text-2xl font-display font-semibold text-primary">{metCount}/{items.length}</div>
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground">criteria met</div>
            </div>
          </div>
          <ul className="space-y-2">
            {items.map((c, i) => {
              const k = `${selectedId}:${i}`;
              const on = !!checked[k];
              return (
                <li key={k}>
                  <label className={`flex gap-3 rounded-xl border p-3 cursor-pointer transition ${on ? 'border-primary bg-primary-soft/40' : 'border-border bg-background'}`}>
                    <input
                      type="checkbox"
                      checked={on}
                      onChange={(e) => setChecked((x) => ({ ...x, [k]: e.target.checked }))}
                      className="mt-0.5 h-4 w-4 accent-primary"
                    />
                    <span className="text-sm leading-snug">{c}</span>
                  </label>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-[11px] italic text-muted-foreground">
            Paraphrased educational summary. Ticking criteria does not yield a diagnosis — clinical judgment, history, and rule-outs are required.
          </p>
        </section>
      )}
    </div>
  );
}
