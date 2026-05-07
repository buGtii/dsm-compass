
CREATE TABLE public.mood_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  logged_at timestamptz NOT NULL DEFAULT now(),
  mood smallint NOT NULL CHECK (mood BETWEEN 1 AND 5),
  energy smallint CHECK (energy BETWEEN 1 AND 5),
  sleep_hours numeric(3,1),
  note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.mood_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own mood select" ON public.mood_logs FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own mood insert" ON public.mood_logs FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own mood update" ON public.mood_logs FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Own mood delete" ON public.mood_logs FOR DELETE USING (auth.uid() = user_id);
CREATE INDEX mood_logs_user_time ON public.mood_logs(user_id, logged_at DESC);

CREATE TABLE public.screener_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  screener text NOT NULL,
  total_score integer NOT NULL,
  severity text NOT NULL,
  answers jsonb NOT NULL DEFAULT '[]'::jsonb,
  taken_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.screener_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own screener select" ON public.screener_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Own screener insert" ON public.screener_results FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Own screener delete" ON public.screener_results FOR DELETE USING (auth.uid() = user_id);
CREATE INDEX screener_user_time ON public.screener_results(user_id, taken_at DESC);
