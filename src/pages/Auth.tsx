import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function AuthPage() {
  const nav = useNavigate();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) nav('/', { replace: true });
    });
  }, [nav]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({
          email,
          password: pw,
          options: {
            emailRedirectTo: `${window.location.origin}/`,
            data: { name },
          },
        });
        if (error) throw error;
        toast.success('Check your email to confirm your account.');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password: pw });
        if (error) throw error;
        toast.success('Welcome back.');
        nav('/', { replace: true });
      }
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    setBusy(true);
    try {
      const res = await lovable.auth.signInWithOAuth('google', { redirect_uri: `${window.location.origin}/` });
      if ('error' in res && res.error) throw res.error;
      if (!('redirected' in res) || !res.redirected) nav('/', { replace: true });
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="gradient-hero text-primary-foreground px-6 pt-10 pb-12 rounded-b-[2rem]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-80">
          <Brain className="h-3.5 w-3.5" /> PsychRef · DSM-5-TR
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold">{mode === 'signin' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-1 text-sm text-primary-foreground/80">Sync bookmarks, notes & study progress across devices.</p>
      </div>
      <div className="mx-auto w-full max-w-md px-6 -mt-6">
        <div className="rounded-3xl border border-border bg-card p-5 shadow-elevated">
          <Button onClick={onGoogle} disabled={busy} variant="outline" className="w-full h-11">
            <svg className="h-4 w-4 mr-2" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35.5 24 35.5c-6.4 0-11.5-5.1-11.5-11.5S17.6 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 13.2 4.5 4.5 13.2 4.5 24S13.2 43.5 24 43.5c10.8 0 19.5-8.7 19.5-19.5 0-1.2-.1-2.3-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12.5 24 12.5c2.9 0 5.6 1.1 7.6 2.9l5.7-5.7C33.6 6.3 29 4.5 24 4.5 16.3 4.5 9.7 8.6 6.3 14.7z"/><path fill="#4CAF50" d="M24 43.5c5.2 0 9.9-2 13.5-5.2l-6.2-5.2c-2 1.4-4.5 2.4-7.3 2.4-5.3 0-9.7-3.4-11.3-8L6.2 32C9.5 38.4 16.2 43.5 24 43.5z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C40.9 35 43.5 30 43.5 24c0-1.2-.1-2.3-.4-3.5z"/></svg>
            Continue with Google
          </Button>
          <div className="my-4 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
          </div>
          <form onSubmit={onSubmit} className="space-y-3">
            {mode === 'signup' && (
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
              </div>
            )}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="pw">Password</Label>
              <Input id="pw" type="password" required minLength={6} value={pw} onChange={(e) => setPw(e.target.value)} />
            </div>
            <Button type="submit" disabled={busy} className="w-full h-11">
              {busy && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              {mode === 'signin' ? 'Sign in' : 'Create account'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {mode === 'signin' ? (
              <button onClick={() => setMode('signup')} className="text-primary font-medium">Need an account? Sign up</button>
            ) : (
              <button onClick={() => setMode('signin')} className="text-primary font-medium">Have an account? Sign in</button>
            )}
          </div>
          <div className="mt-3 text-center">
            <Link to="/" className="text-xs text-muted-foreground">Continue without account →</Link>
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-muted-foreground px-4">
          Educational reference only. Not a diagnostic tool.
        </p>
      </div>
    </div>
  );
}
