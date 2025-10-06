import express from "express";
import type { Request, Response } from "express";
import { chatController } from "./controller/chat.controller";

const router = express.Router();

router.post("/api/chat", async (req: Request, res: Response) =>
  chatController.senMessage(req, res),
);

export default router;
