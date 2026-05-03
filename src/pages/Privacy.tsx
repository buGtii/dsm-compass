import { Link } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="mx-auto max-w-2xl px-5 pt-5 pb-16">
      <Link to="/settings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <header className="mt-4 flex items-center gap-3">
        <div className="h-11 w-11 rounded-2xl bg-primary-soft text-primary flex items-center justify-center">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-semibold">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: May 3, 2026</p>
        </div>
      </header>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-foreground/90">
        <Section title="Overview">
          PsychRef · DSM-5-TR is an educational reference tool. We respect your privacy and collect the
          minimum data needed to make the app useful. The reference content itself works fully offline.
        </Section>

        <Section title="Data we store on your device">
          <ul className="list-disc pl-5 space-y-1">
            <li>Bookmarks, notes and study progress (local storage).</li>
            <li>Recently viewed disorders.</li>
            <li>App preferences (theme, study reminders).</li>
          </ul>
        </Section>

        <Section title="Data we store in the cloud (only if you sign in)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Email address used to create your account.</li>
            <li>Bookmarks, notes and study progress, synced to your account so you can use them on other devices.</li>
          </ul>
          You may delete your account at any time from Settings → Account.
        </Section>

        <Section title="AI Symptom Explorer">
          Text you enter into the AI Symptom Explorer is sent to our AI provider for processing.
          We do not store these queries on our servers and do not use them for training.
          Do not enter personally identifying information about yourself or any patient.
        </Section>

        <Section title="Notifications">
          If you enable Study Reminders, the app schedules local notifications on your device.
          No notification content is sent through any server — they are scheduled and delivered locally.
        </Section>

        <Section title="No medical advice">
          PsychRef is for education and clinical reference. It is not a diagnostic tool and does not
          replace professional evaluation, diagnosis, or treatment.
        </Section>

        <Section title="Contact">
          For privacy questions, email <span className="text-primary">privacy@psychref.app</span>.
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-base font-semibold mb-1.5">{title}</h2>
      <div className="text-muted-foreground">{children}</div>
    </section>
  );
}
