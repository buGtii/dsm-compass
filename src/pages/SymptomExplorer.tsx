import { Sparkles } from 'lucide-react';
import DisclaimerBanner from '@/components/DisclaimerBanner';

export default function SymptomExplorer() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-5 space-y-4">
      <h1 className="font-display text-2xl font-semibold">AI Symptom Explorer</h1>
      <p className="text-sm text-muted-foreground">Coming next: enter symptoms to see possible related disorders, with confidence and clear non-diagnostic guidance.</p>
      <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-primary" />
        <p className="mt-3 font-medium">In development</p>
        <p className="mt-1 text-xs text-muted-foreground">This module will use AI to suggest related disorders for educational exploration only.</p>
      </div>
      <DisclaimerBanner />
    </div>
  );
}
