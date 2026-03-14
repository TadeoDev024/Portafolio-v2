"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    { role: "bot", content: "¡Hola! 👋 Soy TadeoBot. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final del chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/ia/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userMsg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "bot", content: data.texto || "Lo siento, tuve un error." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "bot", content: "Error de conexión." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 md:py-20 flex flex-col h-[85vh]">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-[#e6edf3]">🤖 TadeoBot</h1>
        <p className="text-[#8b949e] text-sm italic">Asistente de ventas 24/7</p>
      </div>

      <div className="flex-grow bg-[#161b22] border border-[#30363d] rounded-2xl flex flex-col overflow-hidden shadow-2xl">
        {/* Ventana de Chat */}
        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.role === "user" ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user" 
                  ? "bg-[#238636] text-white rounded-br-none" 
                  : "bg-[#30363d] text-[#e6edf3] border border-[#58a6ff]/30 rounded-bl-none"
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#30363d] p-4 rounded-2xl rounded-bl-none animate-pulse text-[#8b949e] text-xs">
                  Escribiendo...
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Input de Chat */}
        <form onSubmit={sendMessage} className="p-4 bg-[#0d1117] border-t border-[#30363d] flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Hazme una pregunta sobre los servicios..."
            className="flex-grow bg-[#161b22] border border-[#30363d] rounded-xl px-4 py-3 text-[#e6edf3] focus:outline-none focus:border-[#58a6ff] transition-all"
          />
          <button 
            disabled={isLoading}
            className="bg-[#58a6ff] text-white p-3 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          </button>
        </form>
      </div>
    </div>
  );
}