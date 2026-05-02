import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  Filter,
  GraduationCap,
  Layers,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, CategorySlug, DISORDERS } from '@/data/disorders';
import {
  applyGrade,
  Grade,
  loadAllProgress,
  newCard,
  saveProgress,
  selectDueQueue,
  StudyCard,
  studyStats,
} from '@/lib/sm2';
import { cn } from '@/lib/utils';

const SESSION_SIZE = 12;

export default function Study() {
  const [progress, setProgress] = useState<Record<string, StudyCard>>({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<CategorySlug | 'all'>('all');
  const [mode, setMode] = useState<'flash' | 'quiz'>('flash');

  useEffect(() => {
    loadAllProgress().then((p) => {
      setProgress(p);
      setLoading(false);
    });
  }, []);

  const filteredIds = useMemo(
    () =>
      DISORDERS.filter((d) => category === 'all' || d.category === category).map((d) => d.id),
    [category],
  );

  const stats = useMemo(() => studyStats(progress), [progress]);

  const [queue, setQueue] = useState<StudyCard[] | null>(null);
  const [index, setIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState<{ correct: number; total: number }>({
    correct: 0,
    total: 0,
  });

  const startSession = () => {
    const q = selectDueQueue(filteredIds, progress, SESSION_SIZE);
    setQueue(q.length ? q : filteredIds.slice(0, SESSION_SIZE).map(newCard));
    setIndex(0);
    setSessionResults({ correct: 0, total: 0 });
  };

  const endSession = () => {
    setQueue(null);
    setIndex(0);
  };

  const handleGrade = async (g: Grade) => {
    if (!queue) return;
    const current = queue[index];
    const updated = applyGrade(current, g);
    setProgress((p) => ({ ...p, [updated.disorder_id]: updated }));
    saveProgress(updated);
    setSessionResults((r) => ({ correct: r.correct + (g >= 3 ? 1 : 0), total: r.total + 1 }));
    if (index + 1 < queue.length) setIndex(index + 1);
    else setQueue([...queue]); // trigger end-of-session view
  };

  if (loading) {
    return (
      <div className="px-5 py-10 text-center text-sm text-muted-foreground">Loading study deck…</div>
    );
  }

  // Active session view
  if (queue && index < queue.length && sessionResults.total < queue.length) {
    return (
      <SessionView
        card={queue[index]}
        position={index + 1}
        total={queue.length}
        mode={mode}
        onGrade={handleGrade}
        onExit={endSession}
      />
    );
  }

  // Session complete
  if (queue && sessionResults.total >= queue.length && queue.length > 0) {
    const accuracy = Math.round((sessionResults.correct / sessionResults.total) * 100);
    return (
      <div className="mx-auto max-w-2xl px-5 py-10 animate-fade-up">
        <div className="rounded-3xl gradient-hero text-primary-foreground p-8 text-center shadow-elevated">
          <Trophy className="mx-auto h-12 w-12 mb-3" />
          <h1 className="font-display text-3xl font-semibold">Session complete</h1>
          <p className="mt-2 text-primary-foreground/80">
            {sessionResults.correct} of {sessionResults.total} correct · {accuracy}%
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button onClick={startSession} size="lg" className="rounded-2xl">
            <RotateCcw className="h-4 w-4" />
            New session
          </Button>
          <Button onClick={endSession} variant="outline" size="lg" className="rounded-2xl">
            Done
          </Button>
        </div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="mx-auto max-w-2xl">
      <header className="relative overflow-hidden gradient-hero text-primary-foreground px-5 pt-8 pb-10 rounded-b-[2rem] shadow-elevated">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-80">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Study Mode</span>
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-[1.1]">
          Master DSM-5-TR with spaced repetition.
        </h1>
        <p className="mt-2 text-sm text-primary-foreground/80">
          Flashcards and quizzes scheduled by the SM-2 algorithm — your brain's natural rhythm.
        </p>
      </header>

      <div className="px-5 pt-6 space-y-6">
        {/* Stats */}
        <section className="grid grid-cols-3 gap-3">
          <StatTile icon={Layers} label="Learned" value={stats.learned} />
          <StatTile icon={Sparkles} label="Due now" value={stats.due} accent />
          <StatTile icon={Trophy} label="Mastered" value={stats.mastered} />
        </section>

        {/* Mode selector */}
        <Tabs value={mode} onValueChange={(v) => setMode(v as 'flash' | 'quiz')}>
          <TabsList className="grid w-full grid-cols-2 rounded-2xl">
            <TabsTrigger value="flash" className="rounded-xl">
              <Brain className="h-4 w-4 mr-1.5" /> Flashcards
            </TabsTrigger>
            <TabsTrigger value="quiz" className="rounded-xl">
              <CheckCircle2 className="h-4 w-4 mr-1.5" /> Quiz
            </TabsTrigger>
          </TabsList>
          <TabsContent value="flash" className="text-sm text-muted-foreground mt-3">
            Review name → criteria. Self-grade your recall to drive scheduling.
          </TabsContent>
          <TabsContent value="quiz" className="text-sm text-muted-foreground mt-3">
            Match the description to the correct disorder from 4 choices.
          </TabsContent>
        </Tabs>

        {/* Category filter */}
        <section>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <Filter className="h-3.5 w-3.5" /> Focus
          </div>
          <div className="flex flex-wrap gap-2">
            <FilterChip active={category === 'all'} onClick={() => setCategory('all')}>
              All ({DISORDERS.length})
            </FilterChip>
            {CATEGORIES.map((c) => {
              const count = DISORDERS.filter((d) => d.category === c.slug).length;
              if (count === 0) return null;
              return (
                <FilterChip
                  key={c.slug}
                  active={category === c.slug}
                  onClick={() => setCategory(c.slug)}
                >
                  {c.name} ({count})
                </FilterChip>
              );
            })}
          </div>
        </section>

        {/* Start */}
        <Card className="rounded-3xl border-border shadow-soft overflow-hidden">
          <CardContent className="p-6">
            <div className="text-sm text-muted-foreground">
              Next session: up to {Math.min(SESSION_SIZE, filteredIds.length)} cards
              {stats.due > 0 ? ` · ${stats.due} due` : ''}
            </div>
            <Progress
              value={
                filteredIds.length === 0
                  ? 0
                  : Math.round(
                      (filteredIds.filter((id) => (progress[id]?.reps ?? 0) >= 3).length /
                        filteredIds.length) *
                        100,
                    )
              }
              className="mt-3 h-2"
            />
            <Button
              onClick={startSession}
              size="lg"
              className="mt-5 w-full rounded-2xl"
              disabled={filteredIds.length === 0}
            >
              <Sparkles className="h-4 w-4" />
              Start {mode === 'flash' ? 'flashcards' : 'quiz'}
            </Button>
          </CardContent>
        </Card>

        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </div>
  );
}

function StatTile({
  icon: Icon,
  label,
  value,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border bg-card p-4 shadow-soft',
        accent ? 'border-primary/40 bg-primary-soft' : 'border-border',
      )}
    >
      <Icon className={cn('h-4 w-4', accent ? 'text-primary' : 'text-muted-foreground')} />
      <div className="mt-2 text-2xl font-display font-semibold">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-full px-3 py-1.5 text-xs font-medium border transition',
        active
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-card text-foreground border-border hover:border-primary/40',
      )}
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

function SessionView({
  card,
  position,
  total,
  mode,
  onGrade,
  onExit,
}: {
  card: StudyCard;
  position: number;
  total: number;
  mode: 'flash' | 'quiz';
  onGrade: (g: Grade) => void;
  onExit: () => void;
}) {
  const disorder = DISORDERS.find((d) => d.id === card.disorder_id);
  const [revealed, setRevealed] = useState(false);
  const [picked, setPicked] = useState<string | null>(null);

  // Reset when card changes
  useEffect(() => {
    setRevealed(false);
    setPicked(null);
  }, [card.disorder_id]);

  // Build quiz options
  const options = useMemo(() => {
    if (mode !== 'quiz' || !disorder) return [];
    const distractors = DISORDERS.filter((d) => d.id !== disorder.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return [disorder, ...distractors].sort(() => Math.random() - 0.5);
  }, [card.disorder_id, mode, disorder]);

  if (!disorder) {
    return (
      <div className="px-5 py-10 text-center">
        <p className="text-sm text-muted-foreground">Card unavailable.</p>
        <Button onClick={onExit} className="mt-4">
          Back
        </Button>
      </div>
    );
  }

  const progressPct = Math.round(((position - 1) / total) * 100);

  return (
    <div className="mx-auto max-w-2xl px-5 pt-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={onExit}
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Exit
        </button>
        <div className="text-xs font-medium text-muted-foreground">
          {position} / {total}
        </div>
      </div>
      <Progress value={progressPct} className="h-1.5 mb-6" />

      {mode === 'flash' ? (
        <FlashCard
          disorder={disorder}
          revealed={revealed}
          onReveal={() => setRevealed(true)}
          onGrade={onGrade}
        />
      ) : (
        <QuizCard
          disorder={disorder}
          options={options}
          picked={picked}
          onPick={(id) => {
            if (picked) return;
            setPicked(id);
            const correct = id === disorder.id;
            // Map to SM-2 grade: correct first try = 5; wrong = 1
            setTimeout(() => onGrade(correct ? 5 : 1), 900);
          }}
        />
      )}
    </div>
  );
}

function FlashCard({
  disorder,
  revealed,
  onReveal,
  onGrade,
}: {
  disorder: (typeof DISORDERS)[number];
  revealed: boolean;
  onReveal: () => void;
  onGrade: (g: Grade) => void;
}) {
  return (
    <>
      <Card className="rounded-3xl shadow-elevated border-border overflow-hidden min-h-[340px]">
        <CardContent className="p-7">
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
            {disorder.category}
          </Badge>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">
            {disorder.name}
          </h2>
          {disorder.icd10 && (
            <div className="mt-1 text-xs text-muted-foreground">ICD-10: {disorder.icd10}</div>
          )}

          {!revealed ? (
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Recall the key diagnostic criteria.
              </p>
              <Button onClick={onReveal} size="lg" className="rounded-2xl">
                Show answer
              </Button>
            </div>
          ) : (
            <div className="mt-5 space-y-4 animate-fade-up">
              <p className="text-sm text-foreground/90">{disorder.overviewClinical}</p>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  Key criteria
                </div>
                <ul className="space-y-1.5 text-sm">
                  {disorder.criteriaSummary.slice(0, 5).map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {revealed && (
        <div className="mt-5 animate-fade-up">
          <div className="text-xs text-center text-muted-foreground mb-3">
            How well did you remember?
          </div>
          <div className="grid grid-cols-4 gap-2">
            <GradeButton onClick={() => onGrade(1)} tone="destructive" label="Forgot" sub="Again" />
            <GradeButton onClick={() => onGrade(3)} tone="warning" label="Hard" sub="Slow" />
            <GradeButton onClick={() => onGrade(4)} tone="primary" label="Good" sub="OK" />
            <GradeButton onClick={() => onGrade(5)} tone="success" label="Easy" sub="Fast" />
          </div>
        </div>
      )}
    </>
  );
}

function GradeButton({
  onClick,
  tone,
  label,
  sub,
}: {
  onClick: () => void;
  tone: 'destructive' | 'warning' | 'primary' | 'success';
  label: string;
  sub: string;
}) {
  const styles: Record<typeof tone, string> = {
    destructive: 'bg-destructive/10 text-destructive border-destructive/30 hover:bg-destructive/20',
    warning: 'bg-[hsl(var(--warning)/0.12)] text-[hsl(var(--warning-foreground))] border-[hsl(var(--warning)/0.4)] hover:bg-[hsl(var(--warning)/0.2)]',
    primary: 'bg-primary-soft text-primary border-primary/40 hover:bg-primary/10',
    success: 'bg-[hsl(var(--success)/0.12)] text-[hsl(var(--success))] border-[hsl(var(--success)/0.4)] hover:bg-[hsl(var(--success)/0.2)]',
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-2xl border py-3 px-2 transition active:scale-[0.97] flex flex-col items-center',
        styles[tone],
      )}
    >
      <span className="text-sm font-semibold leading-none">{label}</span>
      <span className="text-[10px] mt-1 opacity-70">{sub}</span>
    </button>
  );
}

function QuizCard({
  disorder,
  options,
  picked,
  onPick,
}: {
  disorder: (typeof DISORDERS)[number];
  options: typeof DISORDERS;
  picked: string | null;
  onPick: (id: string) => void;
}) {
  return (
    <>
      <Card className="rounded-3xl shadow-elevated border-border overflow-hidden">
        <CardContent className="p-7">
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
            Identify the disorder
          </Badge>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            {disorder.overviewClinical}
          </p>
          {disorder.criteriaSummary[0] && (
            <p className="mt-3 text-sm text-muted-foreground italic">
              Hint: {disorder.criteriaSummary[0]}
            </p>
          )}
        </CardContent>
      </Card>

      <div className="mt-5 space-y-2.5">
        {options.map((opt) => {
          const isCorrect = opt.id === disorder.id;
          const isPicked = picked === opt.id;
          const showState = picked !== null;
          return (
            <button
              key={opt.id}
              onClick={() => onPick(opt.id)}
              disabled={!!picked}
              className={cn(
                'w-full text-left rounded-2xl border-2 px-4 py-3.5 transition flex items-center justify-between gap-3',
                !showState && 'border-border bg-card hover:border-primary/40 active:scale-[0.99]',
                showState && isCorrect && 'border-[hsl(var(--success))] bg-[hsl(var(--success)/0.1)]',
                showState && isPicked && !isCorrect && 'border-destructive bg-destructive/10',
                showState && !isPicked && !isCorrect && 'border-border bg-card opacity-50',
              )}
            >
              <span className="font-medium text-sm">{opt.name}</span>
              {showState && isCorrect && (
                <CheckCircle2 className="h-5 w-5 text-[hsl(var(--success))] shrink-0" />
              )}
              {showState && isPicked && !isCorrect && (
                <XCircle className="h-5 w-5 text-destructive shrink-0" />
              )}
            </button>
          );
        })}
      </div>
    </>
  );
}
