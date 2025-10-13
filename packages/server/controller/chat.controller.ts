import type { Request, Response } from "express";
import z from "zod";
import { chatService } from "../services/chat.service";
import { randomUUID } from "node:crypto";

const chatSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(1, "Prompt is required")
    .max(1000, "Prompt is too long (max 1000 characters)"),
  conversationId: z
    .string()
    .uuid({ message: "conversationId must be a valid UUID" })
    .optional(),
});

export const chatController = {
  sendMessage: async (req: Request, res: Response) => {
    const parseResult = chatSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ error: z.treeifyError(parseResult.error) });
    }

    try {
      const { prompt, conversationId } = parseResult.data;
      const normalizedConversationId = conversationId ?? randomUUID();
      const response = await chatService.sendMessage(
        prompt,
        normalizedConversationId,
      );
      return res.json({
        message: response.message,
        conversationId: normalizedConversationId,
      });
    } catch (ex) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  },
};
