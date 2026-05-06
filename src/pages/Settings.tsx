import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, LogOut, User as UserIcon, Upload, Info, Shield, Loader2, Bell, Clock, Users, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { ensurePermission, loadReminderSettings, saveReminderSettings, scheduleDailyReminder, type ReminderSettings } from '@/lib/reminders';
import { useRole, ROLE_META, type Role } from '@/lib/role';
import { downloadDisorderCsv } from '@/lib/exportCsv';

export default function SettingsPage() {
  const { user, loading } = useAuth();
  const nav = useNavigate();
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark');
  const [importing, setImporting] = useState(false);
  const [reminders, setReminders] = useState<ReminderSettings>(() => loadReminderSettings());
  const [role, setRoleState] = useRole();

  useEffect(() => { saveReminderSettings(reminders); scheduleDailyReminder(reminders); }, [reminders]);

  const onToggleReminders = async (v: boolean) => {
    if (v) {
      const ok = await ensurePermission();
      if (!ok) { toast.error('Notification permission denied'); return; }
    }
    setReminders((r) => ({ ...r, enabled: v }));
    toast.success(v ? 'Daily study reminder set' : 'Reminder turned off');
  };

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

      <Section title="Mode">
        <div className="grid grid-cols-2 gap-2">
          {(Object.keys(ROLE_META) as Role[]).map((r) => {
            const m = ROLE_META[r];
            const on = role === r;
            return (
              <button
                key={r}
                onClick={() => { setRoleState(r); toast.success(`Switched to ${m.label} mode`); }}
                className={`rounded-xl border p-3 text-left transition ${on ? 'border-primary bg-primary-soft/40' : 'border-border bg-background'}`}
              >
                <div className="text-xl">{m.emoji}</div>
                <div className="font-semibold text-sm mt-0.5">{m.label}</div>
                <div className="text-[11px] text-muted-foreground leading-snug">{m.tagline}</div>
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Appearance">
        <Row label="Dark mode" icon={dark ? Moon : Sun}>
          <Switch checked={dark} onCheckedChange={setDark} />
        </Row>
      </Section>

      <Section title="Data">
        <button onClick={() => { downloadDisorderCsv(); toast.success('CSV downloaded'); }} className="w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-primary-soft text-primary flex items-center justify-center"><Download className="h-4 w-4" /></div>
            <div className="text-left">
              <div className="font-medium text-sm">Export disorders to CSV</div>
              <div className="text-xs text-muted-foreground">For research analysis</div>
            </div>
          </div>
          <span className="text-xs text-primary font-medium">Download</span>
        </button>
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

      <Section title="Study reminders">
        <Row label="Daily study reminder" icon={Bell}>
          <Switch checked={reminders.enabled} onCheckedChange={onToggleReminders} />
        </Row>
        {reminders.enabled && (
          <div className="flex items-center gap-3 pl-12">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <input
              type="time"
              value={`${String(reminders.hour).padStart(2,'0')}:${String(reminders.minute).padStart(2,'0')}`}
              onChange={(e) => {
                const [h, m] = e.target.value.split(':').map(Number);
                setReminders((r) => ({ ...r, hour: h, minute: m }));
              }}
              className="rounded-lg border border-border bg-background px-2 py-1 text-sm"
            />
            <span className="text-xs text-muted-foreground">Local notification, repeats daily</span>
          </div>
        )}
      </Section>

      <Section title="About">
        <Row label="Version 1.0.0" icon={Info} />
        <Link to="/privacy"><Row label="Privacy Policy" icon={Shield} /></Link>
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
