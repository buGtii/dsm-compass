import { useState } from 'react';
import { X, Plus, GitCompare } from 'lucide-react';
import { DISORDERS, CATEGORIES } from '@/data/disorders';
import { Button } from '@/components/ui/button';

export default function ComparePage() {
  const [ids, setIds] = useState<string[]>([]);
  const [picker, setPicker] = useState(false);
  const items = ids.map((id) => DISORDERS.find((d) => d.id === id)!).filter(Boolean);

  const add = (id: string) => {
    if (ids.length >= 3 || ids.includes(id)) return;
    setIds([...ids, id]);
    setPicker(false);
  };

  const rows: { label: string; get: (d: typeof DISORDERS[0]) => string | string[] | undefined }[] = [
    { label: 'Category', get: (d) => CATEGORIES.find((c) => c.slug === d.category)?.name },
    { label: 'ICD-10', get: (d) => d.icd10 },
    { label: 'Onset', get: (d) => d.onsetTypical },
    { label: 'Prevalence', get: (d) => d.prevalence },
    { label: 'Overview', get: (d) => d.overviewSimple },
    { label: 'Key criteria', get: (d) => d.criteriaSummary.slice(0, 3) },
    { label: 'Differentials', get: (d) => d.differentials },
    { label: 'Comorbidities', get: (d) => d.comorbidities },
    { label: 'Therapies', get: (d) => d.treatments?.therapies },
    { label: 'Medications', get: (d) => d.treatments?.medicationClasses },
  ];

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
        <GitCompare className="h-3.5 w-3.5" /> Differential
      </div>
      <h1 className="mt-1 font-display text-2xl font-semibold">Compare disorders</h1>
      <p className="mt-1 text-sm text-muted-foreground">Pick up to 3 to view side-by-side.</p>

      <div className="mt-4 grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.max(items.length + (items.length < 3 ? 1 : 0), 1)}, minmax(0,1fr))` }}>
        {items.map((d) => {
          const cat = CATEGORIES.find((c) => c.slug === d.category);
          return (
            <div key={d.id} className="rounded-2xl border border-border bg-card p-3 shadow-soft">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-wider" style={{ color: `hsl(${cat?.colorVar})` }}>{cat?.name}</div>
                  <div className="font-display font-semibold leading-tight">{d.name}</div>
                </div>
                <button onClick={() => setIds(ids.filter((i) => i !== d.id))} className="text-muted-foreground"><X className="h-4 w-4" /></button>
              </div>
            </div>
          );
        })}
        {items.length < 3 && (
          <button onClick={() => setPicker(true)} className="rounded-2xl border-2 border-dashed border-border p-3 text-center text-sm text-muted-foreground hover:border-primary hover:text-primary">
            <Plus className="h-5 w-5 mx-auto" />Add
          </button>
        )}
      </div>

      {items.length >= 2 && (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
          <table className="w-full text-sm">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border first:border-t-0">
                  <td className="bg-muted/50 px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground align-top w-28">{row.label}</td>
                  {items.map((d) => {
                    const v = row.get(d);
                    return (
                      <td key={d.id} className="px-3 py-2 align-top">
                        {Array.isArray(v) ? (v?.length ? <ul className="space-y-0.5">{v.map((x) => <li key={x}>• {x}</li>)}</ul> : <span className="text-muted-foreground">—</span>) : (v || <span className="text-muted-foreground">—</span>)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {picker && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 p-4" onClick={() => setPicker(false)}>
          <div className="w-full max-w-md rounded-2xl bg-card border border-border shadow-elevated p-4 max-h-[70vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="font-display text-lg font-semibold mb-2">Add disorder</div>
            <div className="overflow-y-auto space-y-1">
              {DISORDERS.filter((d) => !ids.includes(d.id)).map((d) => (
                <button key={d.id} onClick={() => add(d.id)} className="w-full rounded-lg p-2 text-left text-sm hover:bg-muted">
                  <div className="font-medium">{d.name}</div>
                  <div className="text-[11px] text-muted-foreground">{CATEGORIES.find((c) => c.slug === d.category)?.name}</div>
                </button>
              ))}
            </div>
            <Button variant="outline" onClick={() => setPicker(false)} className="mt-3">Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}
