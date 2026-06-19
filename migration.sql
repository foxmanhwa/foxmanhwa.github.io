-- Run this once in: Supabase Dashboard > SQL Editor > New Query > Run
-- Project: https://zildayxlcgenepnbzmwm.supabase.co

-- ── TABLES ──────────────────────────────────────────────────────────────────

CREATE TABLE now_playing (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  track      text        NOT NULL,
  artist     text        NOT NULL,
  art_url    text,
  fetched_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE currently (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  reading    text        NOT NULL DEFAULT '',
  watching   text        NOT NULL DEFAULT '',
  playing    text        NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE recommendations (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  type       text        NOT NULL CHECK (type IN ('song', 'manhwa', 'anime')),
  name       text        NOT NULL,
  content    text        NOT NULL,
  note       text,
  created_at timestamptz NOT NULL DEFAULT now(),
  hidden     boolean     NOT NULL DEFAULT false
);

CREATE TABLE yearbook (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  message    text        NOT NULL,
  sticker    text,
  created_at timestamptz NOT NULL DEFAULT now(),
  hidden     boolean     NOT NULL DEFAULT false
);

-- ── ROW LEVEL SECURITY ──────────────────────────────────────────────────────

ALTER TABLE now_playing     ENABLE ROW LEVEL SECURITY;
ALTER TABLE currently       ENABLE ROW LEVEL SECURITY;
ALTER TABLE recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE yearbook        ENABLE ROW LEVEL SECURITY;

-- ── ANON POLICIES (public site uses anon key) ────────────────────────────────

-- now_playing: read-only, no write
CREATE POLICY anon_select_now_playing ON now_playing
  FOR SELECT TO anon USING (true);

-- currently: read-only, no write
CREATE POLICY anon_select_currently ON currently
  FOR SELECT TO anon USING (true);

-- recommendations: read visible rows only
CREATE POLICY anon_select_recommendations ON recommendations
  FOR SELECT TO anon USING (hidden = false);

-- recommendations: insert only (hidden forced false, length guards)
CREATE POLICY anon_insert_recommendations ON recommendations
  FOR INSERT TO anon
  WITH CHECK (
    hidden = false
    AND char_length(trim(name))    >= 1
    AND char_length(trim(content)) >= 1
  );

-- yearbook: read visible rows only
CREATE POLICY anon_select_yearbook ON yearbook
  FOR SELECT TO anon USING (hidden = false);

-- yearbook: insert only (hidden forced false, length guards)
CREATE POLICY anon_insert_yearbook ON yearbook
  FOR INSERT TO anon
  WITH CHECK (
    hidden = false
    AND char_length(trim(name))    >= 1
    AND char_length(trim(message)) >= 1
  );

-- service_role key bypasses RLS automatically — no extra policies needed.
-- admin.html uses service_role and is .gitignored (never deployed to GitHub Pages).

-- ── SEED DATA ────────────────────────────────────────────────────────────────

INSERT INTO now_playing (track, artist)
VALUES ('unravel', 'TK from 凜として時雨');

INSERT INTO currently (reading, watching, playing)
VALUES ('Shadow Slave', 'Dandadan', 'Wuthering Waves');

INSERT INTO yearbook (name, message, sticker, created_at) VALUES
  ('azura',       'awesome site!! love the vibe',                 '✨', '2025-05-20 00:00:00+00'),
  ('voidwalker',  'your projects are really useful, thanks!',     '🚀', '2025-05-18 00:00:00+00'),
  ('raikousei',   'read omniscient reader. you won''t regret it', '📚', '2025-05-12 00:00:00+00'),
  ('stellarwind', 'found you from manhwa pulse, glad I did',      '🐱', '2025-04-30 00:00:00+00');
