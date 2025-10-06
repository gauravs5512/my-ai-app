import type { Request, Response } from "express";
import z from "zod";
import { chatService } from "../services/chat.service";

const chatSchema = z.object({
  prompt: z
    .string()
    .trim()
    .min(4, "Prompt is required")
    .max(1000, "Prompt is too long (max 1000 characters)"),
  conversationId: z.uuid(),
});

export const chatController = {
  senMessage: async (req: Request, res: Response) => {
    const parseResult = chatSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ error: z.treeifyError(parseResult.error) });
    }

    try {
      const { prompt, conversationId } = req.body;
      const response = await chatService.sendMessage(prompt, conversationId);
      return res.json({ message: response.message });
    } catch (ex) {
      return res.status(500).json({ error: "Something went wrong" });
    }
  },
};
