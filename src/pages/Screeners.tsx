import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ClipboardList, AlertTriangle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SCREENERS, Screener, scoreBand } from '@/data/screeners';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function ScreenersPage() {
  const { user } = useAuth();
  const [active, setActive] = useState<Screener | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    supabase.from('screener_results').select('*').order('taken_at', { ascending: false }).limit(20)
      .then(({ data }) => setHistory(data ?? []));
  }, [user, active]);

  const start = (s: Screener) => { setActive(s); setAnswers(new Array(s.questions.length).fill(-1)); };

  const submit = async () => {
    if (!active) return;
    if (answers.some(a => a < 0)) return toast.error('Answer all questions');
    const total = answers.reduce((a, b) => a + b, 0);
    const band = scoreBand(active, total);
    if (user) {
      const { error } = await supabase.from('screener_results').insert({
        user_id: user.id, screener: active.id, total_score: total, severity: band.label, answers,
      });
      if (error) toast.error(error.message);
    }
    toast.success(`Score: ${total} — ${band.label}`);
    // Stay on results view
    setActive({ ...active, _result: { total, band } } as any);
  };

  if (active) {
    const result = (active as any)._result;
    return (
      <div className="mx-auto max-w-2xl px-4 pt-5 pb-10">
        <button onClick={() => setActive(null)} className="flex items-center text-xs text-muted-foreground"><ChevronLeft className="h-3 w-3" />All screeners</button>
        <h1 className="mt-2 font-display text-2xl font-semibold">{active.name}</h1>
        <p className="text-sm text-muted-foreground">{active.fullName}</p>

        {result ? (
          <div className="mt-6 space-y-4">
            <div className={`rounded-2xl border p-5 text-center shadow-soft ${
              result.band.tone === 'good' ? 'border-emerald-300 bg-emerald-50 dark:bg-emerald-950/30' :
              result.band.tone === 'mild' ? 'border-amber-300 bg-amber-50 dark:bg-amber-950/30' :
              result.band.tone === 'moderate' ? 'border-orange-400 bg-orange-50 dark:bg-orange-950/30' :
              'border-destructive bg-destructive/10'}`}>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Total</div>
              <div className="text-5xl font-display font-bold mt-1">{result.total}</div>
              <div className="mt-1 font-semibold">{result.band.label}</div>
            </div>
            {active.followUp && <div className="rounded-xl bg-muted p-3 text-xs">{active.followUp}</div>}
            <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-xs">
              <AlertTriangle className="inline h-3 w-3 mr-1" />Educational screening only — not a diagnosis. Discuss results with a qualified clinician.
            </div>
            <Button onClick={() => setActive(null)} className="w-full" variant="outline">Done</Button>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <p className="text-sm">{active.prompt}</p>
            {active.questions.map((q, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-3 shadow-soft">
                <div className="text-sm font-medium mb-2">{i + 1}. {q}</div>
                <div className="grid grid-cols-2 gap-2">
                  {active.options.map(o => (
                    <button key={o.value} onClick={() => setAnswers(a => a.map((v, idx) => idx === i ? o.value : v))}
                      className={`rounded-xl border px-3 py-2 text-xs text-left transition ${answers[i] === o.value ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-background'}`}>
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <Button onClick={submit} className="w-full">Calculate score</Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-5">
      <div>
        <h1 className="font-display text-2xl font-semibold">Screeners</h1>
        <p className="text-sm text-muted-foreground">Validated, public-domain screening instruments.</p>
      </div>

      <div className="space-y-2">
        {SCREENERS.map(s => (
          <button key={s.id} onClick={() => start(s)} className="w-full text-left rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary"><ClipboardList className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-display font-semibold">{s.name} · <span className="text-muted-foreground font-normal text-xs">{s.fullName}</span></div>
                <div className="text-xs text-muted-foreground line-clamp-2">{s.description}</div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {user && history.length > 0 && (
        <section>
          <h2 className="font-display text-lg font-semibold mb-2">Your history</h2>
          <div className="space-y-2">
            {history.map(h => (
              <div key={h.id} className="rounded-xl border border-border bg-card p-3 text-sm flex items-center justify-between">
                <div>
                  <div className="font-medium">{h.screener.toUpperCase()}</div>
                  <div className="text-[11px] text-muted-foreground">{new Date(h.taken_at).toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold">{h.total_score}</div>
                  <div className="text-[11px] text-muted-foreground">{h.severity}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
