"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "bot",
      text: "Hi there! I'm Andrei's AI assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Updated to match a standard n8n Webhook node production/test structure path
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "http://localhost:5678/webhook/b8782daf-2030-421f-8334-0a29a81d42e8/chat";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "sendMessage",
          chatInput: userMessage.text,
          sessionId: "portfolio-chat-session", // Added a stable session key for n8n memory
        }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      // Read standard JSON return properties output from the AI Agent node
      let botResponseText = "Sorry, I received an unreadable response format.";
      if (Array.isArray(data) && data[0]?.output) {
        botResponseText = data[0].output;
      } else if (data.output) {
        botResponseText = data.output;
      } else if (data.text) {
        botResponseText = data.text;
      } else if (typeof data === "string") {
        botResponseText = data;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: botResponseText,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message to n8n:", error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: "Sorry, I couldn't connect to my brain right now. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full text-white bg-blue-500/90 hover:bg-accent hover:ring-1 hover:ring-blue-400/50 text-accent-foreground shadow-lg transition-all duration-300 z-50 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400/50 ${isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
          }`}
        aria-label="Open AI Chatbot"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] flex flex-col bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl transition-all duration-300 z-50 overflow-hidden transform origin-bottom-right ${isOpen
          ? "scale-100 opacity-100 translate-y-0"
          : "scale-95 opacity-0 translate-y-8 pointer-events-none"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-accent/10 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground leading-tight">Andrei's Agent</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
            aria-label="Close Chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 scrollbar-thin scrollbar-thumb-accent/20 scrollbar-track-transparent">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"
                }`}
            >
              <div
                className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center text-xs ${msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent/20 text-accent"
                  }`}
              >
                {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
              </div>
              <div
                className={`px-4 py-2.5 rounded-2xl text-sm ${msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-tr-sm"
                  : "bg-muted text-foreground rounded-tl-sm shadow-sm"
                  }`}
                style={{ wordBreak: "break-word" }}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 max-w-[85%] self-start">
              <div className="w-7 h-7 shrink-0 rounded-full bg-accent/20 text-accent flex items-center justify-center">
                <Bot size={14} />
              </div>
              <div className="px-4 py-3 rounded-2xl bg-muted text-foreground rounded-tl-sm shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-border/50 bg-background">
          <form onSubmit={handleSend} className="flex gap-2 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="flex-1 bg-muted/50 text-foreground border border-transparent rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-accent/50 focus:bg-background transition-colors placeholder:text-muted-foreground/60"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 shrink-0 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send size={16} className={input.trim() && !isLoading ? "translate-x-0.5" : ""} />
            </button>
          </form>
          <div className="text-center mt-2">
            <span className="text-[10px] text-muted-foreground/60">Powered Bertong Matigas</span>
          </div>
        </div>
      </div>
    </>
  );
}