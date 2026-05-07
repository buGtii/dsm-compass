import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, Smile, Plus } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface MoodLog { id: string; logged_at: string; mood: number; energy: number | null; sleep_hours: number | null; note: string | null }

const FACES = ['😞', '🙁', '😐', '🙂', '😄'];

export default function MoodPage() {
  const { user, loading: authLoading } = useAuth();
  const [logs, setLogs] = useState<MoodLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [mood, setMood] = useState(3);
  const [energy, setEnergy] = useState(3);
  const [sleep, setSleep] = useState('7');
  const [note, setNote] = useState('');
  const [saving, setSaving] = useState(false);

  const load = async () => {
    if (!user) return;
    const { data } = await supabase.from('mood_logs').select('*').order('logged_at', { ascending: true }).limit(60);
    setLogs((data ?? []) as MoodLog[]);
    setLoading(false);
  };
  useEffect(() => { if (!authLoading) load(); }, [authLoading, user]);

  const save = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase.from('mood_logs').insert({
      user_id: user.id, mood, energy, sleep_hours: sleep ? Number(sleep) : null, note: note || null,
    });
    setSaving(false);
    if (error) return toast.error(error.message);
    toast.success('Logged');
    setNote('');
    load();
  };

  const chartData = useMemo(() => logs.map(l => ({
    d: new Date(l.logged_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
    mood: l.mood, energy: l.energy ?? null,
  })), [logs]);

  if (authLoading) return <Center><Loader2 className="h-6 w-6 animate-spin text-primary" /></Center>;
  if (!user) return (
    <div className="mx-auto max-w-2xl px-4 pt-6">
      <div className="rounded-2xl border border-dashed border-border p-8 text-center">
        <Smile className="mx-auto h-8 w-8 text-primary" />
        <h1 className="mt-3 font-display text-xl font-semibold">Sign in to track mood</h1>
        <p className="mt-1 text-sm text-muted-foreground">Your private wellness journal.</p>
        <Link to="/auth" className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground">Sign in</Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-5">
      <div>
        <h1 className="font-display text-2xl font-semibold">Mood Journal</h1>
        <p className="text-sm text-muted-foreground">Daily check-in to spot trends over time.</p>
      </div>

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft space-y-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Mood</div>
          <div className="mt-2 flex justify-between">
            {FACES.map((f, i) => (
              <button key={i} onClick={() => setMood(i + 1)}
                className={`h-12 w-12 rounded-2xl text-2xl transition ${mood === i + 1 ? 'bg-primary text-primary-foreground scale-110 shadow-elevated' : 'bg-muted'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Energy (1-5)</div>
            <Input type="number" min={1} max={5} value={energy} onChange={e => setEnergy(Number(e.target.value))} />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Sleep (hrs)</div>
            <Input type="number" step="0.5" value={sleep} onChange={e => setSleep(e.target.value)} />
          </div>
        </div>
        <Textarea value={note} onChange={e => setNote(e.target.value)} placeholder="What shaped today? (optional)" />
        <Button onClick={save} disabled={saving} className="w-full">
          {saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Plus className="h-4 w-4 mr-2" />}
          Log entry
        </Button>
      </section>

      <section className="rounded-2xl border border-border bg-card p-4 shadow-soft">
        <h2 className="font-display text-lg font-semibold mb-3">Trend (last 60 entries)</h2>
        {loading ? <Loader2 className="mx-auto h-5 w-5 animate-spin text-muted-foreground" /> : chartData.length === 0 ? (
          <p className="text-sm text-muted-foreground">No entries yet — log your first above.</p>
        ) : (
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="d" tick={{ fontSize: 10 }} />
                <YAxis domain={[1, 5]} tick={{ fontSize: 10 }} />
                <Tooltip contentStyle={{ background: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: 8 }} />
                <Line type="monotone" dataKey="mood" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="energy" stroke="hsl(var(--cat-anxiety))" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>
    </div>
  );
}

function Center({ children }: { children: React.ReactNode }) {
  return <div className="flex min-h-[60vh] items-center justify-center">{children}</div>;
}
