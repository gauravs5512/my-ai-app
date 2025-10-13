import OpenAI from "openai";
import { converationRepository } from "../repositories/conversation.repositories";
import template from "../prompts/chatbot.txt";
import fs from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const gauravInfo = fs.readFileSync(
  path.join(__dirname, "..", "prompts", "GauravAbout.md"),
  "utf-8",
);
const instuctions = template.replace("{{gauravInfo}}", gauravInfo);

interface ChatResponse {
  id: string;
  message: string;
}

export const chatService = {
  async sendMessage(
    prompt: string,
    conversationId: string,
  ): Promise<ChatResponse> {
    const response = await client.responses.create({
      model: "gpt-4o-mini",
      instructions: instuctions,
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 100,
      previous_response_id:
        converationRepository.getLastResponseId(conversationId) ?? undefined,
    });

    converationRepository.setLastResponseId(conversationId, response.id);
    return {
      id: response.id,
      message: response.output_text,
    };
  },
};
