import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Bookmark, BookmarkCheck, Share2, Sparkles, GraduationCap } from 'lucide-react';
import { CATEGORIES, DISORDERS, findRelated } from '@/data/disorders';
import { useBookmarks, pushRecent } from '@/lib/storage';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import DisorderCard from '@/components/DisorderCard';
import { cn } from '@/lib/utils';

export default function DisorderDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const disorder = DISORDERS.find((d) => d.id === id);
  const { has, toggle } = useBookmarks();
  const [easy, setEasy] = useState(false);

  useEffect(() => { if (id) pushRecent(id); }, [id]);

  if (!disorder) {
    return (
      <div className="p-6">
        <p>Disorder not found.</p>
        <Link to="/" className="text-primary underline">Back home</Link>
      </div>
    );
  }
  const cat = CATEGORIES.find((c) => c.slug === disorder.category);
  const color = cat?.colorVar ?? 'var(--primary)';
  const related = findRelated(disorder.id);
  const saved = has(disorder.id);

  const onShare = async () => {
    const text = `${disorder.name} — ${disorder.overviewSimple}`;
    try {
      if (navigator.share) await navigator.share({ title: disorder.name, text });
      else await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <div className="mx-auto max-w-2xl pb-10">
      {/* Header */}
      <div
        className="relative px-4 pt-4 pb-8 rounded-b-[2rem] text-primary-foreground overflow-hidden"
        style={{ background: `linear-gradient(135deg, hsl(${color}) 0%, hsl(${color} / 0.75) 100%)` }}
      >
        <div className="absolute inset-0 gradient-glow opacity-30 pointer-events-none" />
        <div className="relative flex items-center justify-between">
          <button onClick={() => nav(-1)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            <button onClick={onShare} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur">
              <Share2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => toggle(disorder.id)}
              aria-label={saved ? 'Remove bookmark' : 'Add bookmark'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur"
            >
              {saved ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className="relative mt-5">
          <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">{cat?.name}</div>
          <h1 className="mt-1 font-display text-3xl font-semibold leading-[1.05]">{disorder.name}</h1>
          {disorder.shortName && <div className="mt-1 text-sm opacity-80">{disorder.shortName}</div>}
          <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
            {disorder.icd10 && <Pill>ICD-10 · {disorder.icd10}</Pill>}
            {disorder.prevalence && <Pill>{disorder.prevalence}</Pill>}
            {disorder.onsetTypical && <Pill>Onset: {disorder.onsetTypical}</Pill>}
          </div>
        </div>
      </div>

      <div className="px-4 pt-5 space-y-5">
        <DisclaimerBanner compact />

        {/* Overview toggle */}
        <section className="rounded-2xl border border-border bg-card p-4 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Overview</h2>
            <button
              onClick={() => setEasy((v) => !v)}
              className={cn(
                'flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition',
                easy ? 'bg-primary text-primary-foreground border-primary' : 'border-border bg-background text-foreground',
              )}
            >
              {easy ? <Sparkles className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
              {easy ? 'Simple' : 'Clinical'}
            </button>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {easy ? disorder.overviewSimple : disorder.overviewClinical}
          </p>
        </section>

        {/* Criteria */}
        <Card title="Diagnostic criteria (summary)">
          <ul className="space-y-2">
            {disorder.criteriaSummary.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                  style={{ background: `hsl(${color} / 0.15)`, color: `hsl(${color})` }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-foreground/90 leading-snug">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[11px] italic text-muted-foreground">Paraphrased educational summary, not verbatim DSM-5-TR text.</p>
        </Card>

        {/* Symptoms */}
        {disorder.symptoms && (
          <Card title="Symptoms">
            <div className="grid grid-cols-2 gap-3">
              {(['cognitive', 'emotional', 'behavioral', 'physical'] as const).map((k) => {
                const items = disorder.symptoms?.[k];
                if (!items?.length) return null;
                return (
                  <div key={k} className="rounded-xl bg-muted/50 p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{k}</div>
                    <ul className="mt-1.5 space-y-1 text-sm">
                      {items.map((s) => <li key={s} className="leading-snug">• {s}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Severity */}
        {disorder.severity && (
          <Card title="Severity levels">
            {(['mild', 'moderate', 'severe'] as const).map((k) => (
              <div key={k} className="border-t border-border first:border-t-0 py-2.5">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: `hsl(${color})` }}>{k}</div>
                <p className="mt-0.5 text-sm text-muted-foreground">{disorder.severity![k]}</p>
              </div>
            ))}
          </Card>
        )}

        {/* Risk factors */}
        {disorder.riskFactors && (
          <Card title="Risk factors">
            <div className="space-y-2.5">
              {(['biological', 'environmental', 'social'] as const).map((k) => {
                const items = disorder.riskFactors?.[k];
                if (!items?.length) return null;
                return (
                  <div key={k}>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{k}</div>
                    <p className="text-sm">{items.join(' · ')}</p>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {/* Differentials */}
        {disorder.differentials?.length && (
          <Card title="Differential diagnoses">
            <div className="flex flex-wrap gap-2">
              {disorder.differentials.map((d) => (
                <span key={d} className="rounded-full bg-muted px-3 py-1 text-xs">{d}</span>
              ))}
            </div>
          </Card>
        )}

        {/* Comorbidities */}
        {disorder.comorbidities?.length && (
          <Card title="Common comorbidities">
            <div className="flex flex-wrap gap-2">
              {disorder.comorbidities.map((d) => (
                <span key={d} className="rounded-full bg-primary-soft px-3 py-1 text-xs text-primary">{d}</span>
              ))}
            </div>
          </Card>
        )}

        {/* Treatments */}
        {disorder.treatments && (
          <Card title="Treatment approaches">
            {disorder.treatments.therapies?.length ? (
              <Block label="Therapies">{disorder.treatments.therapies.join(' · ')}</Block>
            ) : null}
            {disorder.treatments.medicationClasses?.length ? (
              <Block label="Medication classes">{disorder.treatments.medicationClasses.join(' · ')}</Block>
            ) : null}
            {disorder.treatments.lifestyle?.length ? (
              <Block label="Lifestyle">{disorder.treatments.lifestyle.join(' · ')}</Block>
            ) : null}
            <p className="mt-3 text-[11px] italic text-muted-foreground">Treatment decisions require evaluation by a qualified clinician.</p>
          </Card>
        )}

        {/* Warnings */}
        {disorder.warnings?.length && (
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-destructive">Clinical warnings</div>
            <ul className="mt-2 space-y-1 text-sm">
              {disorder.warnings.map((w) => <li key={w}>• {w}</li>)}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">
              In an emergency, contact local crisis services. In the US, dial or text <span className="font-semibold text-foreground">988</span>.
            </p>
          </div>
        )}

        {/* Related */}
        {related.length > 0 && (
          <section>
            <h2 className="font-display text-lg font-semibold mb-2">Related disorders</h2>
            <div className="space-y-3">
              {related.map((d) => <DisorderCard key={d.id} disorder={d} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-soft animate-fade-up">
      <h2 className="font-display text-lg font-semibold mb-3">{title}</h2>
      {children}
    </section>
  );
}
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border first:border-t-0 py-2">
      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <p className="text-sm mt-0.5">{children}</p>
    </div>
  );
}
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full bg-white/15 backdrop-blur px-2.5 py-1 font-medium">{children}</span>;
}
