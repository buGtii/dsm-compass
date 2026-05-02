import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Sparkles, GraduationCap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  { icon: Brain, title: 'Welcome to PsychRef', body: 'A calm, modern reference for the DSM-5-TR — for clinicians, students, and curious minds.' },
  { icon: Sparkles, title: 'AI Symptom Explorer', body: 'Describe symptoms in plain language and explore educationally-related disorders. Never a diagnosis.' },
  { icon: GraduationCap, title: 'Study, save, sync', body: 'Spaced-repetition flashcards, private notes, and bookmarks that follow you across devices.' },
];

export default function Onboarding() {
  const [i, setI] = useState(0);
  const nav = useNavigate();
  const Slide = slides[i];

  const finish = () => {
    localStorage.setItem('psychref:onboarded', '1');
    nav('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex flex-col justify-center items-center px-8 text-center">
        <div className="h-20 w-20 rounded-3xl bg-primary-soft text-primary flex items-center justify-center mb-6">
          <Slide.icon className="h-10 w-10" />
        </div>
        <h1 className="font-display text-3xl font-semibold">{Slide.title}</h1>
        <p className="mt-3 text-muted-foreground max-w-sm">{Slide.body}</p>
      </div>
      <div className="px-6 pb-10 safe-bottom">
        <div className="flex justify-center gap-1.5 mb-5">
          {slides.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-6 bg-primary' : 'w-1.5 bg-muted'}`} />
          ))}
        </div>
        {i < slides.length - 1 ? (
          <Button onClick={() => setI(i + 1)} className="w-full h-12">Next <ChevronRight className="h-4 w-4 ml-1" /></Button>
        ) : (
          <Button onClick={finish} className="w-full h-12">Get started</Button>
        )}
        <button onClick={finish} className="mt-3 w-full text-xs text-muted-foreground">Skip</button>
      </div>
    </div>
  );
}
