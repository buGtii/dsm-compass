import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, LogOut, User as UserIcon, Upload, Info, Shield, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const nav = useNavigate();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark');
  const [importing, setImporting] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const onSignOut = async () => {
    await supabase.auth.signOut();
    toast.success('Signed out');
    nav('/auth');
  };

  const onImport = async (file: File) => {
    setImporting(true);
    try {
      const text = await file.text();
      const json = JSON.parse(text);
      if (!Array.isArray(json)) throw new Error('Expected an array of disorders.');
      const sample = json[0];
      if (!sample?.id || !sample?.name || !sample?.category) throw new Error('Each entry must have id, name, category.');
      localStorage.setItem('psychref:imported-disorders', JSON.stringify(json));
      toast.success(`Imported ${json.length} disorders. Reload to apply.`);
    } catch (e) {
      toast.error('Invalid file: ' + (e as Error).message);
    } finally {
      setImporting(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 pb-10 space-y-4">
      <h1 className="font-display text-2xl font-semibold">Settings</h1>

      <Section title="Account">
        {loading ? <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" /> : user ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-soft text-primary flex items-center justify-center"><UserIcon className="h-5 w-5" /></div>
              <div className="min-w-0">
                <div className="font-medium truncate">{user.email}</div>
                <div className="text-xs text-muted-foreground">Cloud sync enabled</div>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={onSignOut}><LogOut className="h-4 w-4 mr-1" />Sign out</Button>
          </div>
        ) : (
          <Link to="/auth" className="flex items-center justify-between">
            <div>
              <div className="font-medium">Sign in</div>
              <div className="text-xs text-muted-foreground">Sync bookmarks, notes & study progress</div>
            </div>
            <Button size="sm">Sign in</Button>
          </Link>
        )}
      </Section>

      <Section title="Appearance">
        <Row label="Dark mode" icon={dark ? Moon : Sun}>
          <Switch checked={dark} onCheckedChange={setDark} />
        </Row>
      </Section>

      <Section title="Content">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center"><Upload className="h-4 w-4" /></div>
            <div>
              <div className="font-medium">Import custom dataset</div>
              <div className="text-xs text-muted-foreground">Load your own licensed JSON</div>
            </div>
          </div>
          <input type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && onImport(e.target.files[0])} />
          <Button asChild size="sm" variant="outline" disabled={importing}>
            <span>{importing ? 'Importing…' : 'Choose'}</span>
          </Button>
        </label>
      </Section>

      <Section title="About">
        <Row label="Version 1.0.0" icon={Info} />
        <Row label="Privacy & data" icon={Shield} />
        <p className="mt-2 text-xs text-muted-foreground">PsychRef summarizes DSM-5-TR concepts for educational use. Content is paraphrased and is not a substitute for professional evaluation.</p>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-4 shadow-soft">
      <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
function Row({ label, icon: Icon, children }: { label: string; icon: React.ComponentType<{ className?: string }>; children?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-muted text-foreground flex items-center justify-center"><Icon className="h-4 w-4" /></div>
        <div className="font-medium text-sm">{label}</div>
      </div>
      {children}
    </div>
  );
}
