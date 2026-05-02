// SM-2 spaced repetition with Supabase sync + localStorage fallback.
import { supabase } from '@/integrations/supabase/client';

export interface StudyCard {
  disorder_id: string;
  ease: number;          // E-Factor, default 2.5
  interval_days: number; // current interval
  reps: number;          // successful reps in a row
  due_at: string;        // ISO timestamp
  last_grade: number | null;
}

export type Grade = 0 | 1 | 2 | 3 | 4 | 5;

const LS_KEY = 'psychref.study.v1';

function loadLocal(): Record<string, StudyCard> {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY) || '{}');
  } catch {
    return {};
  }
}
function saveLocal(map: Record<string, StudyCard>) {
  localStorage.setItem(LS_KEY, JSON.stringify(map));
}

export function newCard(disorder_id: string): StudyCard {
  return {
    disorder_id,
    ease: 2.5,
    interval_days: 0,
    reps: 0,
    due_at: new Date().toISOString(),
    last_grade: null,
  };
}

/** SM-2: returns the next state given current card + grade (0..5). */
export function applyGrade(card: StudyCard, grade: Grade): StudyCard {
  let { ease, interval_days, reps } = card;

  // Update ease factor
  ease = Math.max(1.3, ease + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));

  if (grade < 3) {
    // Failed → reset
    reps = 0;
    interval_days = 1;
  } else {
    reps += 1;
    if (reps === 1) interval_days = 1;
    else if (reps === 2) interval_days = 6;
    else interval_days = Math.round(interval_days * ease);
  }

  const due = new Date();
  due.setDate(due.getDate() + interval_days);

  return {
    ...card,
    ease: Math.round(ease * 1000) / 1000,
    interval_days,
    reps,
    due_at: due.toISOString(),
    last_grade: grade,
  };
}

export async function loadAllProgress(): Promise<Record<string, StudyCard>> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return loadLocal();

  const { data, error } = await supabase
    .from('study_progress')
    .select('disorder_id, ease, interval_days, reps, due_at, last_grade')
    .eq('user_id', auth.user.id);

  if (error || !data) return loadLocal();
  const map: Record<string, StudyCard> = {};
  for (const r of data) {
    map[r.disorder_id] = {
      disorder_id: r.disorder_id,
      ease: r.ease,
      interval_days: r.interval_days,
      reps: r.reps,
      due_at: r.due_at,
      last_grade: r.last_grade,
    };
  }
  return map;
}

export async function saveProgress(card: StudyCard): Promise<void> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    const map = loadLocal();
    map[card.disorder_id] = card;
    saveLocal(map);
    return;
  }

  await supabase.from('study_progress').upsert(
    {
      user_id: auth.user.id,
      disorder_id: card.disorder_id,
      ease: card.ease,
      interval_days: card.interval_days,
      reps: card.reps,
      due_at: card.due_at,
      last_grade: card.last_grade,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,disorder_id' },
  );
}

/** Pick due cards (or seed new ones if deck empty). */
export function selectDueQueue(
  allDisorderIds: string[],
  progress: Record<string, StudyCard>,
  limit = 20,
): StudyCard[] {
  const now = Date.now();
  const due: StudyCard[] = [];
  const fresh: StudyCard[] = [];

  for (const id of allDisorderIds) {
    const c = progress[id];
    if (!c) {
      fresh.push(newCard(id));
    } else if (new Date(c.due_at).getTime() <= now) {
      due.push(c);
    }
  }
  // Sort due by oldest due first
  due.sort((a, b) => new Date(a.due_at).getTime() - new Date(b.due_at).getTime());
  const queue = [...due, ...fresh].slice(0, limit);
  return queue;
}

export function studyStats(progress: Record<string, StudyCard>) {
  const now = Date.now();
  let learned = 0;
  let due = 0;
  let mastered = 0;
  for (const c of Object.values(progress)) {
    if (c.reps > 0) learned += 1;
    if (new Date(c.due_at).getTime() <= now) due += 1;
    if (c.reps >= 5 && c.ease >= 2.3) mastered += 1;
  }
  return { learned, due, mastered, total: Object.keys(progress).length };
}
