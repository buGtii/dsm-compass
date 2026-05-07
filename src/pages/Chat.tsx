import { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DisclaimerBanner from '@/components/DisclaimerBanner';
import { toast } from 'sonner';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: 'assistant', content: "Hi — I'm your DSM-5-TR study companion. Ask me about disorders, criteria, differentials, or treatments. I'm educational only, not a diagnostician." },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const next: Msg[] = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/dsm-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: next }),
      });
      if (res.status === 429) { toast.error('Rate limit, try again shortly.'); setLoading(false); return; }
      if (res.status === 402) { toast.error('AI credits exhausted.'); setLoading(false); return; }
      if (!res.ok || !res.body) throw new Error('Chat failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buf = '';
      let acc = '';
      setMessages(m => [...m, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += decoder.decode(value, { stream: true });
        let nl;
        while ((nl = buf.indexOf('\n')) !== -1) {
          let line = buf.slice(0, nl);
          buf = buf.slice(nl + 1);
          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (!line.startsWith('data: ')) continue;
          const json = line.slice(6).trim();
          if (json === '[DONE]') continue;
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) {
              acc += c;
              setMessages(m => m.map((msg, i) => i === m.length - 1 ? { ...msg, content: acc } : msg));
              scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
            }
          } catch { buf = line + '\n' + buf; break; }
        }
      }
    } catch (e) {
      toast.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-2xl flex-col h-[calc(100vh-8rem)] px-4 pt-4">
      <div className="flex items-center gap-2 pb-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-hero text-primary-foreground"><Sparkles className="h-4 w-4" /></div>
        <div>
          <h1 className="font-display text-lg font-semibold leading-tight">AI Study Companion</h1>
          <p className="text-[11px] text-muted-foreground">Educational · DSM-5-TR grounded</p>
        </div>
      </div>
      <DisclaimerBanner compact />
      <div ref={scrollRef} className="mt-3 flex-1 overflow-y-auto space-y-3 pb-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-soft ${
              m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}>
              <div className="prose prose-sm max-w-none dark:prose-invert prose-p:my-1 prose-headings:my-2 prose-ul:my-1">
                <ReactMarkdown>{m.content || '…'}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {loading && messages[messages.length - 1]?.role === 'user' && (
          <div className="flex justify-start"><div className="rounded-2xl bg-card border border-border px-4 py-2"><Loader2 className="h-4 w-4 animate-spin text-primary" /></div></div>
        )}
      </div>
      <div className="sticky bottom-0 flex gap-2 bg-background py-3">
        <Input value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Ask about a disorder, criteria, differential…" disabled={loading} />
        <Button onClick={send} disabled={loading || !input.trim()} size="icon"><Send className="h-4 w-4" /></Button>
      </div>
    </div>
  );
}
