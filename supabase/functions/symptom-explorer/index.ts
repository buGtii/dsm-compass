// AI Symptom Explorer — uses Lovable AI Gateway (no API key required from user).
// Educational only; never diagnostic.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DisorderLite {
  id: string;
  name: string;
  category: string;
  overview: string;
  keywords: string[];
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { symptoms, disorders } = await req.json() as {
      symptoms: string;
      disorders: DisorderLite[];
    };

    if (!symptoms || !symptoms.trim()) {
      return new Response(JSON.stringify({ error: "Please describe symptoms." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "AI service not configured." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Build a compact catalog the model can rank against.
    const catalog = disorders
      .slice(0, 200)
      .map((d) => `- id:${d.id} | ${d.name} (${d.category}) — ${d.overview} | kw:${d.keywords.slice(0, 12).join(",")}`)
      .join("\n");

    const system = `You are a clinical educational assistant. You DO NOT diagnose.
Given user-described symptoms, rank up to 6 DSM-5-TR-related disorders from the provided catalog
that are most consistent with the description. For each return:
- id (must match catalog)
- confidence: 0..1
- rationale: 1-2 short sentences linking symptoms to the disorder
- redFlags: array of urgent indicators if any (suicidal ideation, psychosis, harm)
Always include a final "disclaimer" string emphasizing this is educational only and not a diagnosis.
Respond ONLY by calling the rank_disorders tool.`;

    const user = `Symptoms described by user:
"""${symptoms}"""

Catalog (id | name (category) — overview | kw:keywords):
${catalog}`;

    const tool = {
      type: "function",
      function: {
        name: "rank_disorders",
        description: "Return ranked likely disorders from the catalog.",
        parameters: {
          type: "object",
          properties: {
            results: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  confidence: { type: "number" },
                  rationale: { type: "string" },
                  redFlags: { type: "array", items: { type: "string" } },
                },
                required: ["id", "confidence", "rationale"],
                additionalProperties: false,
              },
            },
            disclaimer: { type: "string" },
          },
          required: ["results", "disclaimer"],
          additionalProperties: false,
        },
      },
    };

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: system },
          { role: "user", content: user },
        ],
        tools: [tool],
        tool_choice: { type: "function", function: { name: "rank_disorders" } },
      }),
    });

    if (aiRes.status === 429) {
      return new Response(JSON.stringify({ error: "Rate limit reached. Please try again shortly." }), {
        status: 429,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiRes.status === 402) {
      return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits in Lovable Cloud." }), {
        status: 402,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiRes.ok) {
      const t = await aiRes.text();
      return new Response(JSON.stringify({ error: "AI gateway error", detail: t }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiRes.json();
    const call = data.choices?.[0]?.message?.tool_calls?.[0];
    let payload: unknown = null;
    try {
      payload = call ? JSON.parse(call.function.arguments) : null;
    } catch {
      payload = null;
    }

    return new Response(JSON.stringify(payload ?? { results: [], disclaimer: "Educational only." }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
