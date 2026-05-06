import { useMemo, useState } from 'react';
import { AlertTriangle, Phone, LifeBuoy } from 'lucide-react';
import DisclaimerBanner from '@/components/DisclaimerBanner';

const QUESTIONS = [
  { id: 'q1', text: 'Thoughts of being better off dead or self-harm in the past 2 weeks?', weight: 3 },
  { id: 'q2', text: 'A specific plan or means to harm yourself?', weight: 4 },
  { id: 'q3', text: 'Recent intent or rehearsal of self-harm?', weight: 4 },
  { id: 'q4', text: 'Severe hopelessness or feeling trapped?', weight: 2 },
  { id: 'q5', text: 'Recent major loss, crisis, or substance use escalation?', weight: 1 },
  { id: 'q6', text: 'Access to lethal means (firearm, large medication supply)?', weight: 3 },
  { id: 'q7', text: 'Previous suicide attempt?', weight: 3 },
];

export default function RiskPage() {
  const [ans, setAns] = useState<Record<string, boolean>>({});
  const score = useMemo(
    () => QUESTIONS.reduce((s, q) => s + (ans[q.id] ? q.weight : 0), 0),
    [ans],
  );
  const max = QUESTIONS.reduce((s, q) => s + q.weight, 0);
  const level = score >= 10 ? 'high' : score >= 5 ? 'moderate' : score > 0 ? 'low' : 'none';
  const levelMeta = {
    none: { color: 'text-muted-foreground', label: 'No flags reported', advice: 'No risk indicators selected. Continue routine support and check in regularly.' },
    low: { color: 'text-amber-500', label: 'Low concern', advice: 'Monitor symptoms, encourage support network, and re-screen if symptoms worsen.' },
    moderate: { color: 'text-orange-500', label: 'Moderate concern', advice: 'Consider safety planning, means restriction counselling, and a follow-up within 24–72h with a mental-health professional.' },
    high: { color: 'text-destructive', label: 'High concern — act now', advice: 'Do not leave the person alone. Arrange immediate evaluation by a clinician or contact emergency / crisis services.' },
  }[level];

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-5">
      <header className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold">Risk screen</h1>
          <p className="text-xs text-muted-foreground">A brief educational checklist — not a validated instrument.</p>
        </div>
      </header>

      <DisclaimerBanner compact />

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft space-y-2">
        {QUESTIONS.map((q) => (
          <label key={q.id} className={`flex gap-3 rounded-xl border p-3 cursor-pointer transition ${ans[q.id] ? 'border-destructive/60 bg-destructive/5' : 'border-border'}`}>
            <input
              type="checkbox"
              checked={!!ans[q.id]}
              onChange={(e) => setAns((x) => ({ ...x, [q.id]: e.target.checked }))}
              className="mt-0.5 h-4 w-4 accent-destructive"
            />
            <span className="text-sm leading-snug">{q.text}</span>
          </label>
        ))}
      </section>

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Risk indication</div>
            <div className={`font-display text-2xl font-semibold ${levelMeta.color}`}>{levelMeta.label}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-display font-semibold">{score}/{max}</div>
            <div className="text-[11px] text-muted-foreground">weighted score</div>
          </div>
        </div>
        <p className="mt-3 text-sm">{levelMeta.advice}</p>
      </section>

      <section className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4 space-y-3">
        <div className="flex items-center gap-2 text-destructive font-semibold">
          <LifeBuoy className="h-4 w-4" /> Crisis resources
        </div>
        <ul className="text-sm space-y-1.5">
          <li><Phone className="h-3.5 w-3.5 inline mr-1" /> <span className="font-semibold">988</span> — Suicide & Crisis Lifeline (US/Canada call or text)</li>
          <li><Phone className="h-3.5 w-3.5 inline mr-1" /> <span className="font-semibold">112 / 911</span> — Emergency services</li>
          <li><Phone className="h-3.5 w-3.5 inline mr-1" /> <span className="font-semibold">+92 311 7786264</span> — Umang Pakistan helpline</li>
          <li><Phone className="h-3.5 w-3.5 inline mr-1" /> <span className="font-semibold">findahelpline.com</span> — Worldwide directory</li>
        </ul>
      </section>
    </div>
  );
}
