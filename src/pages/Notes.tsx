import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Plus, Trash2, Download, Loader2, NotebookPen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';
import { CloudNote, cloudDeleteNote, cloudListNotes, cloudUpsertNote } from '@/lib/cloudSync';
import { DISORDERS } from '@/data/disorders';
import { exportNoteToPDF } from '@/lib/pdf';
import { toast } from 'sonner';

export default function NotesPage() {
  const { user, loading: authLoading } = useAuth();
  const [notes, setNotes] = useState<CloudNote[]>([]);
  const [active, setActive] = useState<CloudNote | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (authLoading) return;
    if (!user) { setLoading(false); return; }
    cloudListNotes().then((n) => { setNotes(n); setLoading(false); });
  }, [user, authLoading]);

  const newNote = async () => {
    const created = await cloudUpsertNote({ title: 'Untitled note', content: '' });
    setNotes((n) => [created, ...n]);
    setActive(created);
  };

  const save = async () => {
    if (!active) return;
    setSaving(true);
    try {
      const updated = await cloudUpsertNote(active);
      setNotes((n) => n.map((x) => (x.id === updated.id ? updated : x)));
      setActive(updated);
      toast.success('Saved');
    } catch (e) { toast.error((e as Error).message); }
    finally { setSaving(false); }
  };

  const del = async (id: string) => {
    await cloudDeleteNote(id);
    setNotes((n) => n.filter((x) => x.id !== id));
    if (active?.id === id) setActive(null);
  };

  const exportPDF = () => {
    if (!active) return;
    const linked = active.disorder_id ? DISORDERS.find((d) => d.id === active.disorder_id)?.name : '';
    exportNoteToPDF(active.title, active.content, linked ? `Linked: ${linked}` : undefined);
  };

  if (authLoading) return <Center><Loader2 className="h-6 w-6 animate-spin text-primary" /></Center>;
  if (!user) {
    return (
      <div className="mx-auto max-w-2xl px-4 pt-6">
        <div className="rounded-2xl border border-dashed border-border p-8 text-center">
          <NotebookPen className="mx-auto h-8 w-8 text-primary" />
          <h1 className="mt-3 font-display text-xl font-semibold">Sign in to use Notes</h1>
          <p className="mt-1 text-sm text-muted-foreground">Notes sync securely across your devices.</p>
          <Link to="/auth" className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Sign in</Link>
        </div>
      </div>
    );
  }

  if (active) {
    return (
      <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-3">
        <button onClick={() => setActive(null)} className="text-xs text-muted-foreground">← All notes</button>
        <Input value={active.title} onChange={(e) => setActive({ ...active, title: e.target.value })} className="text-lg font-display font-semibold" />
        <select
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          value={active.disorder_id ?? ''}
          onChange={(e) => setActive({ ...active, disorder_id: e.target.value || null })}
        >
          <option value="">— No linked disorder —</option>
          {DISORDERS.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
        </select>
        <Textarea value={active.content} onChange={(e) => setActive({ ...active, content: e.target.value })} className="min-h-[260px]" placeholder="Write your clinical or study notes…" />
        <div className="flex gap-2">
          <Button onClick={save} disabled={saving} className="flex-1">{saving && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}Save</Button>
          <Button onClick={exportPDF} variant="outline"><Download className="h-4 w-4 mr-1" />PDF</Button>
          <Button onClick={() => del(active.id)} variant="ghost" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold">Notes</h1>
          <p className="text-sm text-muted-foreground">Private clinical & study notes.</p>
        </div>
        <Button onClick={newNote} size="sm"><Plus className="h-4 w-4 mr-1" />New</Button>
      </div>
      <div className="mt-4 space-y-2">
        {loading ? <Loader2 className="mx-auto mt-10 h-6 w-6 animate-spin text-muted-foreground" /> : notes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center">
            <FileText className="mx-auto h-8 w-8 text-muted-foreground" />
            <p className="mt-3 text-sm text-muted-foreground">No notes yet. Tap "New" to create one.</p>
          </div>
        ) : notes.map((n) => {
          const linked = n.disorder_id ? DISORDERS.find((d) => d.id === n.disorder_id)?.name : null;
          return (
            <button key={n.id} onClick={() => setActive(n)} className="w-full text-left rounded-2xl border border-border bg-card p-4 shadow-soft hover:shadow-elevated transition">
              <div className="flex items-center justify-between gap-2">
                <div className="font-display font-semibold truncate">{n.title}</div>
                <div className="text-[10px] text-muted-foreground shrink-0">{new Date(n.updated_at).toLocaleDateString()}</div>
              </div>
              {linked && <div className="text-[11px] text-primary">↳ {linked}</div>}
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.content || 'Empty note'}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-[60vh] items-center justify-center">{children}</div>;
}
