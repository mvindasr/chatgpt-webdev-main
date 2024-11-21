import dotenv from "dotenv";
import path from "path";
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OPENAI_KEY = process.env.API_KEY;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const configuration = new Configuration({ apiKey: OPENAI_KEY });
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/chat", async (req, res) => {
  const data = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();
    res.json(json);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch from OpenAI API" });
  }
});

app.post("/api/general", async (req, res) => {
  const body = req.body;
  const completion = await openai.createChatCompletion({
    messages: [{ role: "user", content: body.prompt }],
    model: "gpt-3.5-turbo",
  });

  res.json(completion.data.choices[0].message.content);
});

app.post("/api/image", async (req, res) => {});

app.post("/api/recipe", async (req, res) => {});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
