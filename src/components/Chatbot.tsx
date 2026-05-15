import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import logo from "@/assets/school-logo.png";

const SUGGESTIONS = [
  "Apa fasilitas sekolah?",
  "Jam operasional sekolah?",
  "Sejarah sekolah ini?",
  "Bagaimana cara ke sekolah?",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  const send = (text: string) => {
    if (!text.trim()) return;
    sendMessage({ text: text.trim() });
    setInput("");
  };

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <>
      {/* Anchor target */}
      <div id="chatbot" className="absolute" />

      {/* Floating button */}
      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI chat"
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full gradient-primary text-primary-foreground grid place-items-center shadow-glow-red animate-pulse-ring"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[calc(100vh-8rem)] glass rounded-3xl shadow-elegant flex flex-col overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-border flex items-center gap-3 bg-card/60">
              <div className="relative">
                <img src={logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white p-1" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-background" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  Asisten Sekolah AI <Sparkles className="h-3.5 w-3.5 text-primary" />
                </p>
                <p className="text-[11px] text-muted-foreground">UPT SD Negeri 060851 · Online</p>
              </div>
              <button onClick={() => setOpen(false)} className="h-8 w-8 grid place-items-center rounded-lg hover:bg-secondary transition">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-6 space-y-4">
                  <div className="mx-auto h-16 w-16 rounded-full gradient-primary grid place-items-center shadow-glow-red">
                    <Sparkles className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Halo! Selamat datang 👋</p>
                    <p className="text-xs text-muted-foreground mt-1">Tanyakan apa saja tentang UPT SD Negeri 060851.</p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 pt-2">
                    {SUGGESTIONS.map((s) => (
                      <button key={s} onClick={() => send(s)} className="text-left text-xs px-3 py-2 rounded-xl border border-border bg-card hover:bg-secondary transition">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm shadow-soft ${
                        isUser
                          ? "gradient-primary text-primary-foreground rounded-br-md"
                          : "bg-card border border-border text-foreground rounded-bl-md"
                      }`}
                    >
                      {isUser ? (
                        <p className="whitespace-pre-wrap">{text}</p>
                      ) : (
                        <div className="prose prose-sm max-w-none prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-strong:text-foreground">
                          <ReactMarkdown>{text || "..."}</ReactMarkdown>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {status === "submitted" && (
                <div className="flex justify-start">
                  <div className="bg-card border border-border rounded-2xl rounded-bl-md px-3.5 py-3 shadow-soft">
                    <div className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "120ms" }} />
                      <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "240ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-3 border-t border-border bg-card/60 flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send(input);
                  }
                }}
                placeholder="Tulis pertanyaan Anda..."
                rows={1}
                className="flex-1 resize-none rounded-xl bg-background border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 max-h-32"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="h-11 w-11 shrink-0 rounded-xl gradient-primary text-primary-foreground grid place-items-center shadow-glow-red disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}