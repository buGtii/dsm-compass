
-- profiles
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  theme text default 'light',
  default_mode text default 'clinical',
  onboarded boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "Users view own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users insert own profile" on public.profiles for insert with check (auth.uid() = id);
create policy "Users update own profile" on public.profiles for update using (auth.uid() = id);

-- auto create profile
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name) values (new.id, coalesce(new.raw_user_meta_data->>'name', split_part(new.email,'@',1)));
  return new;
end; $$;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- bookmarks
create table public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  disorder_id text not null,
  created_at timestamptz not null default now(),
  unique(user_id, disorder_id)
);
alter table public.bookmarks enable row level security;
create policy "Own bookmarks select" on public.bookmarks for select using (auth.uid() = user_id);
create policy "Own bookmarks insert" on public.bookmarks for insert with check (auth.uid() = user_id);
create policy "Own bookmarks delete" on public.bookmarks for delete using (auth.uid() = user_id);

-- recent_views
create table public.recent_views (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  disorder_id text not null,
  viewed_at timestamptz not null default now(),
  unique(user_id, disorder_id)
);
alter table public.recent_views enable row level security;
create policy "Own recent select" on public.recent_views for select using (auth.uid() = user_id);
create policy "Own recent upsert" on public.recent_views for insert with check (auth.uid() = user_id);
create policy "Own recent update" on public.recent_views for update using (auth.uid() = user_id);
create policy "Own recent delete" on public.recent_views for delete using (auth.uid() = user_id);

-- notes
create table public.notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  disorder_id text,
  title text not null default 'Untitled',
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.notes enable row level security;
create policy "Own notes select" on public.notes for select using (auth.uid() = user_id);
create policy "Own notes insert" on public.notes for insert with check (auth.uid() = user_id);
create policy "Own notes update" on public.notes for update using (auth.uid() = user_id);
create policy "Own notes delete" on public.notes for delete using (auth.uid() = user_id);

create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end; $$;
create trigger notes_touch before update on public.notes for each row execute function public.touch_updated_at();
create trigger profiles_touch before update on public.profiles for each row execute function public.touch_updated_at();

-- study progress for flashcards
create table public.study_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  disorder_id text not null,
  ease real not null default 2.5,
  interval_days int not null default 1,
  reps int not null default 0,
  due_at timestamptz not null default now(),
  last_grade int,
  updated_at timestamptz not null default now(),
  unique(user_id, disorder_id)
);
alter table public.study_progress enable row level security;
create policy "Own study select" on public.study_progress for select using (auth.uid() = user_id);
create policy "Own study insert" on public.study_progress for insert with check (auth.uid() = user_id);
create policy "Own study update" on public.study_progress for update using (auth.uid() = user_id);
create policy "Own study delete" on public.study_progress for delete using (auth.uid() = user_id);
create trigger study_touch before update on public.study_progress for each row execute function public.touch_updated_at();
