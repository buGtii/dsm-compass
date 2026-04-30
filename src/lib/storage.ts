import { useEffect, useState } from 'react';

const KEY = 'psychref:bookmarks';

export function getBookmarks(): string[] {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '[]'); } catch { return []; }
}

export function useBookmarks() {
  const [ids, setIds] = useState<string[]>(() => getBookmarks());
  useEffect(() => {
    const onStorage = () => setIds(getBookmarks());
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  const toggle = (id: string) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };
  return { ids, toggle, has: (id: string) => ids.includes(id) };
}

const RECENT_KEY = 'psychref:recent';
export function getRecent(): string[] {
  try { return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]'); } catch { return []; }
}
export function pushRecent(id: string) {
  const cur = getRecent().filter((x) => x !== id);
  const next = [id, ...cur].slice(0, 8);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}
