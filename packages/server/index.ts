import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import z from "zod";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const conversation = new Map<string, string>();

const chagSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(4, "Prompt is required")
    .max(1000, "Prompt is too long (max 1000 characters)"),
  conversationId: z.uuid(),
});

app.post("/api/chat", async (req: Request, res: Response) => {
  const parseResult = chagSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({ error: parseResult.error.format() });
  }
  const { prompt, conversionId } = req.body;

  try {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
      previous_response_id: conversation.get(conversionId) || undefined,
    });

    conversation.set(conversionId, response.id);

    return res.json({ message: response.output_text });
  } catch (ex) {
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.send({
    message: "Hello from the API!",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
