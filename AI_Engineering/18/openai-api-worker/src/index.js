const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

export default {
  async fetch(request, env) {
    // 1. Handle CORS (for your frontend)
    if (request.method === 'OPTIONS') return new Response(null, { headers: corsHeaders });

    try {
      const { prompt } = await request.json();

      // 2. Send request DIRECTLY to Gateway using standard fetch
      const response = await fetch("https://gateway.ai.cloudflare.com/v1/d7297e3e5152a44ac5c13eaea4026f3d/openai-api/openai/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: env.OPENAI_AI_MODEL,
          messages: [{ role: "user", content: prompt }]
        })
      });

      const data = await response.json();
      
      // 3. Send the AI's reply back to your frontend
      return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });

    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { 
        status: 500, 
        headers: corsHeaders 
      });
    }
  }
};