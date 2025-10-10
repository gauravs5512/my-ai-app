import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import axios from "axios";

type FormData = {
  prompt: string;
};

type ChatResponse = {
  message: string;
};

type Message = {
  content: string;
  role: "user" | "bot";
};

const ChatBot = () => {
  const [messeges, setMessages] = React.useState<Message[]>([]);
  const [isBotTypeing, setIsBotTyping] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const conversationId = useRef(crypto.randomUUID());
  const { register, handleSubmit, reset, formState } = useForm<FormData>();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messeges]);

  const onSubmit = async ({ prompt }: FormData) => {
    try {
      setMessages((prev) => [...prev, { content: prompt, role: "user" }]);
      setError(null);
      reset({ prompt: "" });
      setIsBotTyping(true);
      const { data } = await axios.post<ChatResponse>("/api/chat", {
        prompt: prompt,
        conversationId: conversationId.current,
      });

      setMessages((prev) => [...prev, { content: data.message, role: "bot" }]);
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsBotTyping(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  const onCopyMessage = (
    e: React.ClipboardEvent<HTMLParagraphElement>,
  ): void => {
    const selection = window.getSelection()?.toString().trim();
    if (selection) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", selection);
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col flex-1 gap-3 mb-10 overflow-y-auto">
        {messeges.map((message, index) => (
          <div
            ref={index === messeges.length - 1 ? lastMessageRef : null}
            onCopy={onCopyMessage}
            key={index}
            className={`px-3 py-1 ${message.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"} rounded-xl`}
          >
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        ))}
        {isBotTypeing && (
          <div className="flex self-start gap-1 px-3 py-3 bg-gray-200">
            <div className="w-2 h-2 rounded-full bg-gray-800 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800 animate-pulse [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-800 animate-pulse [animation-delay:0.4s]"></div>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={onKeyDown}
        className="flex flex-col gap-2 items-end border-2 p-4 rounded-3xl"
      >
        <textarea
          {...register("prompt", {
            required: true,
            validate: (value) => value.trim().length > 0,
          })}
          autoFocus
          placeholder="Ask anything..."
          className="w-full focus:outline-0 resize-none"
        />
        <Button disabled={!formState.isValid} className="rounded-full w-9 h-9">
          <FaArrowUp />
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
