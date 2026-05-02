// Cloud sync helpers: bookmarks, recent views, notes.
import { supabase } from '@/integrations/supabase/client';

export async function cloudListBookmarks(): Promise<string[]> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return [];
  const { data } = await supabase.from('bookmarks').select('disorder_id').eq('user_id', auth.user.id);
  return (data ?? []).map((r) => r.disorder_id);
}

export async function cloudToggleBookmark(disorder_id: string, isOn: boolean) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return;
  if (isOn) {
    await supabase.from('bookmarks').insert({ user_id: auth.user.id, disorder_id });
  } else {
    await supabase.from('bookmarks').delete().eq('user_id', auth.user.id).eq('disorder_id', disorder_id);
  }
}

export async function cloudPushRecent(disorder_id: string) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return;
  await supabase.from('recent_views').delete().eq('user_id', auth.user.id).eq('disorder_id', disorder_id);
  await supabase.from('recent_views').insert({ user_id: auth.user.id, disorder_id });
}

export async function cloudListRecent(): Promise<string[]> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return [];
  const { data } = await supabase
    .from('recent_views')
    .select('disorder_id, viewed_at')
    .eq('user_id', auth.user.id)
    .order('viewed_at', { ascending: false })
    .limit(8);
  return (data ?? []).map((r) => r.disorder_id);
}

export interface CloudNote {
  id: string;
  disorder_id: string | null;
  title: string;
  content: string;
  updated_at: string;
}

export async function cloudListNotes(disorder_id?: string): Promise<CloudNote[]> {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return [];
  let q = supabase.from('notes').select('*').eq('user_id', auth.user.id).order('updated_at', { ascending: false });
  if (disorder_id) q = q.eq('disorder_id', disorder_id);
  const { data } = await q;
  return (data ?? []) as CloudNote[];
}

export async function cloudUpsertNote(note: Partial<CloudNote> & { title: string; content: string; disorder_id?: string | null }) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error('Sign in to save notes.');
  if (note.id) {
    const { data } = await supabase.from('notes').update({
      title: note.title, content: note.content, disorder_id: note.disorder_id ?? null, updated_at: new Date().toISOString(),
    }).eq('id', note.id).eq('user_id', auth.user.id).select().single();
    return data as CloudNote;
  }
  const { data } = await supabase.from('notes').insert({
    user_id: auth.user.id, title: note.title, content: note.content, disorder_id: note.disorder_id ?? null,
  }).select().single();
  return data as CloudNote;
}

export async function cloudDeleteNote(id: string) {
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return;
  await supabase.from('notes').delete().eq('id', id).eq('user_id', auth.user.id);
}
