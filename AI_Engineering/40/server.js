// server.js
import { hf, supabase, openAI } from "./config.mjs";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname));

// ✅ Persists across requests
const chatMessages = [
  {
    role: "system",
    content: `You are an enthusiastic movie expert who loves recommending movies to people.
     You will be given two pieces of information - some context about movies and a question. 
     Your main job is to formulate a short answer to the question using the provided context. 
     If the answer is not given in the context, find the answer in the conversation history if possible. 
     If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer.`,
  },
];

app.post("/ask", async (req, res) => {
  try {
    const query = req.body.query;
    console.log("✅ Step 1 - Query:", query);

    // Embedding
    const embeddingResponse = await hf.featureExtraction({
      model: process.env.EMBED_MODEL,
      inputs: query,
    });
    console.log("✅ Step 2 - Embedding type:", typeof embeddingResponse[0]);

    const embedding = Array.isArray(embeddingResponse[0])
      ? Array.from(embeddingResponse[0])
      : Array.from(embeddingResponse);
    console.log("✅ Step 3 - Embedding length:", embedding.length);

    // Supabase search
    const { data, error } = await supabase.rpc("match_movies", {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: 4,
    });
    console.log("✅ Step 4 - Supabase:", data, error);
    if (error) throw error;

    const context = data.map((obj) => obj.content).join("\n");
    console.log("✅ Step 5 - Context:", context);

    // ✅ Push user message into history
    chatMessages.push({
      role: "user",
      content: `Context: ${context} Question: ${query}`,
    });

    // Chat completion with full history
    const response = await openAI.chat.completions.create({
      model: process.env.AI_MODEL,
      messages: chatMessages,
    });
    console.log("✅ Step 6 - AI response received");

    const answer = response.choices[0].message.content;

    // ✅ Push assistant reply into history
    chatMessages.push({
      role: "assistant",
      content: answer,
    });

    res.json({ answer });
  } catch (err) {
    console.error("❌ ERROR:", err.message);
    res.status(500).json({ answer: "Sorry, something went wrong." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});