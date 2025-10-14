import React, { useRef } from "react";
import axios from "axios";
import TypingIndicator from "./TypingIndicator";
import type { Message } from "./ChatMessages";
import ChatMessages from "./ChatMessages";
import ChatInput, { type ChatFormData } from "../ChatInput";

type ChatResponse = {
  message: string;
  conversationId: string;
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api",
  timeout: 120_000, // allow up to 2 minutes for responses
});

const ChatBot = () => {
  const [messeges, setMessages] = React.useState<Message[]>([]);
  const [isBotTypeing, setIsBotTyping] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const conversationId = useRef<string>(crypto.randomUUID());

  const onSubmit = async ({ prompt }: ChatFormData) => {
    try {
      setMessages((prev) => [...prev, { content: prompt, role: "user" }]);
      setError(null);
      setIsBotTyping(true);
      const { data } = await apiClient.post<ChatResponse>("/chat", {
        prompt: prompt,
        conversationId: conversationId.current,
      });

      conversationId.current = data.conversationId;
      setMessages((prev) => [...prev, { content: data.message, role: "bot" }]);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
        <ChatMessages messages={messeges} />
        {isBotTypeing && <TypingIndicator />}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <ChatInput onSubmit={onSubmit} />
    </div>
  );
};

export default ChatBot;
