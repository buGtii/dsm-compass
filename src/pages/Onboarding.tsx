import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, GraduationCap, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROLE_META, setRole, type Role } from '@/lib/role';

const slides = [
  { icon: Brain, title: 'Welcome to PsychRef', body: 'A calm, modern reference for the DSM-5-TR — for clinicians, students, researchers, and curious minds.' },
  { icon: Sparkles, title: 'AI Symptom Explorer', body: 'Describe symptoms in plain language and explore educationally-related disorders. Never a diagnosis.' },
  { icon: GraduationCap, title: 'Study, save, sync', body: 'Spaced-repetition flashcards, private notes, and bookmarks that follow you across devices.' },
  { icon: Users, title: 'Pick your mode', body: 'Tailor the home screen to how you use PsychRef. You can switch any time in Settings.' },
];

const ROLES: Role[] = ['student', 'clinician', 'researcher', 'patient'];

export default function Onboarding() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<Role>('student');
  const nav = useNavigate();
  const Slide = slides[i];

  const finish = () => {
    setRole(picked);
    localStorage.setItem('psychref:onboarded', '1');
    nav('/');
  };

  const isLast = i === slides.length - 1;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col justify-center items-center px-8 text-center">
        <div className="h-20 w-20 rounded-3xl bg-primary-soft text-primary flex items-center justify-center mb-6">
          <Slide.icon className="h-10 w-10" />
        </div>
        <h1 className="font-display text-3xl font-semibold">{Slide.title}</h1>
        <p className="mt-3 text-muted-foreground max-w-sm">{Slide.body}</p>

        {isLast && (
          <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-sm">
            {ROLES.map((r) => {
              const m = ROLE_META[r];
              const on = picked === r;
              return (
                <button
                  key={r}
                  onClick={() => setPicked(r)}
                  className={`rounded-2xl border p-3 text-left transition ${on ? 'border-primary bg-primary-soft/40' : 'border-border bg-card'}`}
                >
                  <div className="text-2xl">{m.emoji}</div>
                  <div className="font-semibold mt-1">{m.label}</div>
                  <div className="text-[11px] text-muted-foreground leading-snug">{m.tagline}</div>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <div className="px-6 pb-10 safe-bottom">
        <div className="flex justify-center gap-1.5 mb-5">
          {slides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-6 bg-primary' : 'w-1.5 bg-muted'}`} />
          ))}
        </div>
        {!isLast ? (
          <Button onClick={() => setI(i + 1)} className="w-full h-12">Next <ChevronRight className="h-4 w-4 ml-1" /></Button>
        ) : (
          <Button onClick={finish} className="w-full h-12">Get started as {ROLE_META[picked].label}</Button>
        )}
        <button onClick={finish} className="mt-3 w-full text-xs text-muted-foreground">Skip</button>
      </div>
    </div>
  );
}
