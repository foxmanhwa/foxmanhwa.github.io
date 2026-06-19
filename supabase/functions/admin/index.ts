import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const ADMIN_EMAIL = "manhwapulsemilo@gmail.com";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, content-type",
  "Content-Type": "application/json",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }

  try {
    const authHeader = req.headers.get("Authorization") ?? "";
    const token = authHeader.replace(/^Bearer\s+/i, "");
    if (!token) return json({ error: "Missing token" }, 401);

    const url = Deno.env.get("SUPABASE_URL")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY")!;

    // Verify caller's JWT and confirm email
    const userClient = createClient(url, anonKey, {
      global: { headers: { Authorization: `Bearer ${token}` } },
    });
    const { data: { user }, error: authErr } = await userClient.auth.getUser();
    if (authErr || !user) return json({ error: "Invalid token" }, 401);
    if (user.email !== ADMIN_EMAIL) return json({ error: "Forbidden" }, 403);

    // Service-role client for all data operations
    const db = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const body = await req.json();
    const { action } = body;

    if (action === "get-currently") {
      const { data, error } = await db.from("currently").select("*").limit(1).single();
      if (error) throw error;
      return json(data);
    }

    if (action === "update-currently") {
      const { reading, watching, playing } = body;
      const { data: existing } = await db.from("currently").select("id").limit(1).single();
      if (existing) {
        const { data, error } = await db
          .from("currently")
          .update({ reading, watching, playing, updated_at: new Date().toISOString() })
          .eq("id", existing.id)
          .select()
          .single();
        if (error) throw error;
        return json(data);
      }
      const { data, error } = await db
        .from("currently")
        .insert({ reading, watching, playing })
        .select()
        .single();
      if (error) throw error;
      return json(data);
    }

    if (action === "get-now-playing") {
      const { data, error } = await db
        .from("now_playing")
        .select("*")
        .order("fetched_at", { ascending: false })
        .limit(1)
        .single();
      if (error) throw error;
      return json(data);
    }

    if (action === "update-now-playing") {
      const { track, artist, art_url } = body;
      await db.from("now_playing").delete().not("id", "is", null);
      const { data, error } = await db
        .from("now_playing")
        .insert({ track, artist, art_url: art_url || null })
        .select()
        .single();
      if (error) throw error;
      return json(data);
    }

    if (action === "list-recommendations") {
      const { show_hidden, type_filter } = body;
      let q = db.from("recommendations").select("*").order("created_at", { ascending: false });
      if (!show_hidden) q = q.eq("hidden", false);
      if (type_filter && type_filter !== "all") q = q.eq("type", type_filter);
      const { data, error } = await q;
      if (error) throw error;
      return json(data);
    }

    if (action === "list-yearbook") {
      const { show_hidden } = body;
      let q = db.from("yearbook").select("*").order("created_at", { ascending: false });
      if (!show_hidden) q = q.eq("hidden", false);
      const { data, error } = await q;
      if (error) throw error;
      return json(data);
    }

    if (action === "hide-row" || action === "restore-row") {
      const { table, id } = body;
      if (!["recommendations", "yearbook"].includes(table)) {
        return json({ error: "Invalid table" }, 400);
      }
      const hidden = action === "hide-row";
      const { error } = await db.from(table).update({ hidden }).eq("id", id);
      if (error) throw error;
      return json({ ok: true });
    }

    return json({ error: `Unknown action: ${action}` }, 400);

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return json({ error: msg }, 500);
  }
});

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: CORS });
}
