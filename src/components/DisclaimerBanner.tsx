import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-warning/30 bg-warning/10 p-3 text-warning-foreground">
      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-warning" />
      <p className={compact ? 'text-xs leading-snug' : 'text-sm leading-snug'}>
        <span className="font-semibold">Educational reference only.</span>{' '}
        This app does not provide medical diagnosis or treatment. Always consult a licensed mental health professional.
      </p>
    </div>
  );
}
