import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { CASES } from '@/data/cases';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function CasesPage() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const c = CASES[i];

  const next = () => {
    setPicked(null);
    setI((x) => (x + 1) % CASES.length);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-5">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
          <BookOpen className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold">Case-based learning</h1>
          <p className="text-xs text-muted-foreground">Fictional educational vignettes · {i + 1} of {CASES.length}</p>
        </div>
      </header>

      <DisclaimerBanner compact />

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft animate-fade-up">
        <h2 className="font-display text-lg font-semibold">{c.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.vignette}</p>

        <div className="mt-4 space-y-2">
          {c.options.map((o) => {
            const isCorrect = !!o.correct;
            const showState = picked !== null;
            const isPicked = picked === o.id;
            return (
              <button
                key={o.id}
                disabled={showState}
                onClick={() => setPicked(o.id)}
                className={`w-full text-left flex items-center justify-between rounded-xl border p-3 text-sm transition ${
                  !showState
                    ? 'border-border hover:border-primary'
                    : isCorrect
                      ? 'border-emerald-500/60 bg-emerald-500/10'
                      : isPicked
                        ? 'border-destructive/60 bg-destructive/10'
                        : 'border-border opacity-60'
                }`}
              >
                <span>{o.label}</span>
                {showState && isCorrect && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                {showState && isPicked && !isCorrect && <XCircle className="h-4 w-4 text-destructive" />}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="mt-4 rounded-xl bg-muted p-3">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Why</div>
            <p className="mt-1 text-sm">{c.explanation}</p>
            {c.disorderId && (
              <Link to={`/disorder/${c.disorderId}`} className="mt-2 inline-block text-xs text-primary font-medium">
                Read the full entry →
              </Link>
            )}
          </div>
        )}

        <button
          onClick={next}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Next case <ArrowRight className="h-4 w-4" />
        </button>
      </section>
    </div>
  );
}
