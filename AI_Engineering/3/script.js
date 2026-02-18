// script.js (inside folder 3)
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Resolve current directory of script.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from parent folder (AI_Engineering)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// Import and run environment check
import { checkEnvironment } from "../env.mjs";
checkEnvironment();

import openAI from 'openai';
const OpenAI = new openAI({
    apiKey: process.env.AI_KEY,
    baseURL: process.env.AI_URL,
    dangerouslyAllowBrowser: true //We should never store the API KEY in the frontend 
})
