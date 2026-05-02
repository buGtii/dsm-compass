import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Loader2, AlertTriangle, ChevronRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { DISORDERS, CATEGORIES } from '@/data/disorders';
import { toast } from 'sonner';

interface RankResult {
  id: string;
  confidence: number;
  rationale: string;
  redFlags?: string[];
}

export default function SymptomExplorer() {
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<RankResult[]>([]);
  const [disclaimer, setDisclaimer] = useState('');

  const examples = [
    "I've been feeling sad and unmotivated for weeks, sleeping too much, and lost interest in things I used to enjoy.",
    "I get sudden waves of fear with chest pain and shortness of breath; I think I'm dying.",
    "I keep washing my hands and checking the door, even though I know it's locked.",
  ];

  const onAnalyze = async () => {
    if (!text.trim()) return;
    setBusy(true);
    setResults([]);
    try {
      const lite = DISORDERS.map((d) => ({
        id: d.id,
        name: d.name,
        category: d.category,
        overview: d.overviewSimple,
        keywords: d.keywords,
      }));
      const { data, error } = await supabase.functions.invoke('symptom-explorer', {
        body: { symptoms: text, disorders: lite },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setResults((data?.results ?? []).sort((a: RankResult, b: RankResult) => b.confidence - a.confidence));
      setDisclaimer(data?.disclaimer ?? '');
    } catch (e) {
      toast.error((e as Error).message || 'Could not analyze symptoms.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 space-y-4 pb-10">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary">
          <Sparkles className="h-3.5 w-3.5" /> AI-assisted
        </div>
        <h1 className="mt-1 font-display text-2xl font-semibold">Symptom Explorer</h1>
        <p className="mt-1 text-sm text-muted-foreground">Describe how you've been feeling. The AI will surface educationally-related disorders. <span className="font-medium text-foreground">Not a diagnosis.</span></p>
      </div>

      <DisclaimerBanner compact />

      <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="e.g. I've been feeling anxious for months, can't sleep, my mind races…"
          className="min-h-[120px] resize-none"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          {examples.map((ex, i) => (
            <button key={i} onClick={() => setText(ex)} className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-secondary">
              Example {i + 1}
            </button>
          ))}
        </div>
        <Button onClick={onAnalyze} disabled={busy || !text.trim()} className="mt-3 w-full h-11">
          {busy ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Sparkles className="h-4 w-4 mr-2" />}
          {busy ? 'Analyzing…' : 'Explore matches'}
        </Button>
      </div>

      {results.length > 0 && (
        <section className="space-y-3 animate-fade-up">
          <h2 className="font-display text-lg font-semibold">Possible related disorders</h2>
          {results.map((r) => {
            const d = DISORDERS.find((x) => x.id === r.id);
            if (!d) return null;
            const cat = CATEGORIES.find((c) => c.slug === d.category);
            const color = cat?.colorVar ?? 'var(--primary)';
            const pct = Math.round(r.confidence * 100);
            return (
              <Link key={r.id} to={`/disorder/${d.id}`} className="block rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider" style={{ color: `hsl(${color})` }}>{cat?.name}</div>
                    <h3 className="font-display text-lg font-semibold leading-tight">{d.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold" style={{ color: `hsl(${color})` }}>{pct}%</div>
                    <div className="text-[10px] text-muted-foreground uppercase">match</div>
                  </div>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `hsl(${color})` }} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.rationale}</p>
                {r.redFlags && r.redFlags.length > 0 && (
                  <div className="mt-2 flex items-start gap-2 rounded-lg bg-destructive/10 p-2 text-xs text-destructive">
                    <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                    <div><span className="font-semibold">Urgent: </span>{r.redFlags.join(' · ')}</div>
                  </div>
                )}
                <div className="mt-2 flex items-center text-xs text-primary">View details <ChevronRight className="h-3.5 w-3.5" /></div>
              </Link>
            );
          })}
          {disclaimer && <p className="text-[11px] italic text-muted-foreground">{disclaimer}</p>}
        </section>
      )}
    </div>
  );
}
