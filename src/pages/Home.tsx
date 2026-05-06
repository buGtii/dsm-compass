import { Link } from 'react-router-dom';
import { Search, Brain, BookmarkCheck, LayoutGrid, Sparkles, GraduationCap, NotebookPen, GitCompare, ClipboardCheck, BookOpen, AlertTriangle, Download } from 'lucide-react';
import { CATEGORIES, DISORDERS } from '@/data/disorders';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import DisorderCard from '@/components/DisorderCard';
import { getRecent, useBookmarks } from '@/lib/storage';
import { useRole, ROLE_META } from '@/lib/role';
import { downloadDisorderCsv } from '@/lib/exportCsv';

export default function Home() {
  const [role] = useRole();
  const meta = ROLE_META[role];
  const { ids: bookmarks } = useBookmarks();
  const recentIds = getRecent();
  const recent = recentIds.map((id) => DISORDERS.find((d) => d.id === id)).filter(Boolean);

  return (
    <div className="mx-auto max-w-2xl">
      {/* Hero */}
      <header className="relative overflow-hidden gradient-hero text-primary-foreground px-5 pt-8 pb-10 rounded-b-[2rem] shadow-elevated">
        <div className="absolute inset-0 gradient-glow opacity-60 pointer-events-none" />
        <div className="relative">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-80">
            <Brain className="h-3.5 w-3.5" />
            <span>PsychRef · DSM-5-TR</span>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.1]">
            A calm, clinical reference for the mind.
          </h1>
          <p className="mt-2 text-sm text-primary-foreground/80 max-w-md">
            {meta.emoji} {meta.label} mode · {meta.tagline}
          </p>

          <Link
            to="/search"
            className="mt-6 flex items-center gap-3 rounded-2xl bg-card/95 px-4 py-3.5 text-card-foreground shadow-elevated transition active:scale-[0.99]"
          >
            <Search className="h-5 w-5 text-primary" />
            <span className="text-sm text-muted-foreground">Search disorders, symptoms, ICD codes…</span>
          </Link>
        </div>
      </header>

      <div className="px-5 pt-6 space-y-6">
        <DisclaimerBanner compact />

        {/* Quick actions — role aware */}
        <section className="grid grid-cols-2 gap-3">
          {role === 'student' && <>
            <QuickTile to="/study" icon={GraduationCap} title="Study Mode" subtitle="Flashcards & quiz" />
            <QuickTile to="/cases" icon={BookOpen} title="Case Learning" subtitle="Vignettes" />
            <QuickTile to="/symptom" icon={Sparkles} title="AI Explorer" subtitle="Symptom mapping" muted />
            <QuickTile to="/compare" icon={GitCompare} title="Compare" subtitle="Side-by-side" muted />
          </>}
          {role === 'clinician' && <>
            <QuickTile to="/checklist" icon={ClipboardCheck} title="DSM Checklist" subtitle="Tick criteria" />
            <QuickTile to="/risk" icon={AlertTriangle} title="Risk Screen" subtitle="Crisis flags" />
            <QuickTile to="/compare" icon={GitCompare} title="Differential" subtitle="Compare" muted />
            <QuickTile to="/notes" icon={NotebookPen} title="Session Notes" subtitle="PDF export" muted />
          </>}
          {role === 'researcher' && <>
            <QuickTile to="/categories" icon={LayoutGrid} title="Browse" subtitle={`${CATEGORIES.length} groups`} />
            <QuickTile to="/compare" icon={GitCompare} title="Compare" subtitle="Up to 3" />
            <button onClick={downloadDisorderCsv} className="text-left rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:shadow-elevated">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary"><Download className="h-5 w-5" /></div>
                <div><div className="font-semibold leading-tight">Export CSV</div><div className="text-[11px] text-primary">Full dataset</div></div>
              </div>
            </button>
            <QuickTile to="/symptom" icon={Sparkles} title="AI Explorer" subtitle="Semantic" muted />
          </>}
          {role === 'patient' && <>
            <QuickTile to="/symptom" icon={Sparkles} title="Symptom Explorer" subtitle="Plain-language" />
            <QuickTile to="/risk" icon={AlertTriangle} title="Get Help Now" subtitle="Crisis resources" />
            <QuickTile to="/categories" icon={LayoutGrid} title="Browse" subtitle="Learn about it" muted />
            <QuickTile to="/notes" icon={NotebookPen} title="My Notes" subtitle="Private journal" muted />
          </>}
          <QuickTile to="/bookmarks" icon={BookmarkCheck} title="Saved" subtitle="Your bookmarks" muted />
        </section>

        {/* Recent */}
        {recent.length > 0 && (
          <Section title="Continue exploring">
            <div className="space-y-3">
              {recent.slice(0, 3).map((d) => d && <DisorderCard key={d.id} disorder={d} />)}
            </div>
          </Section>
        )}

        {/* Bookmarks */}
        {bookmarks.length > 0 && (
          <Section
            title="Saved"
            action={
              <Link to="/bookmarks" className="text-xs font-medium text-primary">
                See all
              </Link>
            }
          >
            <div className="space-y-3">
              {bookmarks.slice(0, 2).map((id) => {
                const d = DISORDERS.find((x) => x.id === id);
                return d ? <DisorderCard key={id} disorder={d} /> : null;
              })}
            </div>
          </Section>
        )}

        {/* Featured categories */}
        <Section title="DSM-5-TR Categories">
          <div className="grid grid-cols-2 gap-3">
            {CATEGORIES.slice(0, 6).map((c) => (
              <Link
                key={c.slug}
                to={`/categories/${c.slug}`}
                className="rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition"
              >
                <div className="h-2 w-10 rounded-full mb-3" style={{ background: `hsl(${c.colorVar})` }} />
                <div className="font-display font-semibold leading-tight">{c.name}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.description}</div>
              </Link>
            ))}
          </div>
        </Section>

        {/* Trending / sample */}
        <Section title="Featured disorders">
          <div className="space-y-3">
            {DISORDERS.slice(0, 4).map((d) => (
              <DisorderCard key={d.id} disorder={d} />
            ))}
          </div>
        </Section>

        <BookmarkCheck className="hidden" />
      </div>
    </div>
  );
}

function Section({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="animate-fade-up">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function QuickTile({
  to,
  icon: Icon,
  title,
  subtitle,
  muted,
}: {
  to: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  muted?: boolean;
}) {
  return (
    <Link
      to={to}
      className="group rounded-2xl border border-border bg-card p-4 shadow-soft transition hover:shadow-elevated"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <div className="font-semibold leading-tight">{title}</div>
          <div className={`text-[11px] ${muted ? 'text-muted-foreground' : 'text-primary'}`}>{subtitle}</div>
        </div>
      </div>
    </Link>
  );
}
