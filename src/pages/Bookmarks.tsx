import { DISORDERS } from '@/data/disorders';
import DisorderCard from '@/components/DisorderCard';
import { useBookmarks } from '@/lib/storage';
import { BookmarkX } from 'lucide-react';

export default function Bookmarks() {
  const { ids } = useBookmarks();
  const items = ids.map((id) => DISORDERS.find((d) => d.id === id)).filter(Boolean) as typeof DISORDERS;
  return (
    <div className="mx-auto max-w-2xl px-4 pt-5">
      <h1 className="font-display text-2xl font-semibold">Saved</h1>
      <p className="mt-1 text-sm text-muted-foreground">Your bookmarked disorders.</p>
      <div className="mt-5 space-y-3 pb-6">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-10 text-center">
            <BookmarkX className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">No saved items yet. Tap the bookmark icon on any disorder to save it.</p>
          </div>
        ) : (
          items.map((d) => <DisorderCard key={d.id} disorder={d} />)
        )}
      </div>
    </div>
  );
}
