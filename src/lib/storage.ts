import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { cloudListBookmarks, cloudToggleBookmark, cloudPushRecent, cloudListRecent } from './cloudSync';

const KEY = 'psychref:bookmarks';
const RECENT_KEY = 'psychref:recent';

export function getBookmarks(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]'); } catch { return []; }
}
function setBookmarksLocal(ids: string[]) {
  localStorage.setItem(KEY, JSON.stringify(ids));
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>(() => getBookmarks());

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        const cloud = await cloudListBookmarks();
        if (!active) return;
        // Merge: union of local + cloud, push union to cloud for any missing.
        const union = Array.from(new Set([...cloud, ...getBookmarks()]));
        setBookmarksLocal(union);
        setIds(union);
        for (const id of union) {
          if (!cloud.includes(id)) await cloudToggleBookmark(id, true);
        }
      }
    })();
    const onStorage = () => setIds(getBookmarks());
    window.addEventListener('storage', onStorage);
    return () => { active = false; window.removeEventListener('storage', onStorage); };
  }, []);

  const toggle = async (id: string) => {
    const isAdding = !ids.includes(id);
    const next = isAdding ? [...ids, id] : ids.filter((x) => x !== id);
    setBookmarksLocal(next);
    setIds(next);
    try { await cloudToggleBookmark(id, isAdding); } catch { /* offline ok */ }
  };
  return { ids, toggle, has: (id: string) => ids.includes(id) };
}

export function getRecent(): string[] {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]'); } catch { return []; }
}
export function pushRecent(id: string) {
  const cur = getRecent().filter((x) => x !== id);
  const next = [id, ...cur].slice(0, 8);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
  cloudPushRecent(id).catch(() => {});
}

export async function refreshRecentFromCloud(): Promise<string[]> {
  const cloud = await cloudListRecent();
  if (cloud.length) {
    localStorage.setItem(RECENT_KEY, JSON.stringify(cloud));
    return cloud;
  }
  return getRecent();
}
