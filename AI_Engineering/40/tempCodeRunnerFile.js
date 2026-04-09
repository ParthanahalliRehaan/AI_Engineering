// server.js
import { hf, supabase, openAI } from "./config.mjs"; // dotenv runs here
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/ask", async (req, res) => {
  try {
    const query = req.body.query;

    // Embedding
    const embeddingResponse = await hf.featureExtraction({
      model: process.env.EMBED_MODEL, // safe now
      inputs: query,
    });
    const embedding = Array.from(embeddingResponse);

    // Supabase search
    const { data, error } = await supabase.rpc("match_movies", {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 4,
    });
    if (error) throw error;

    const context = data.map((obj) => obj.content).join("\n");

    // Chat completion
    const messages = [
      {
        role: "system",
        content: `You are an enthusiastic movie expert who loves recommending movies...`,
      },
      { role: "user", content: `Context: ${context} Question: ${query}` },
    ];

    const response = await openAI.chat.completions.create({
      model: process.env.AI_MODEL,
      messages,
      temperature: 0.65,
      frequency_penalty: 0.5,
    });

    res.json({ answer: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ answer: "Sorry, something went wrong." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});