"use client";

import { useState, useRef, useEffect, useCallback } from "react";

type Provider = "gemini" | "claude";
type UserRole = "guest" | "customer" | "tvv";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const CUSTOMER_SUGGESTIONS = [
  "Sản phẩm nào tốt cho gan?",
  "Tư vấn combo chăm sóc da",
  "Sản phẩm nào cho trẻ em?",
  "Tìm sản phẩm dưới 500.000 VND",
];

const TVV_SUGGESTIONS = [
  "Lộ trình đào tạo cho người mới",
  "Cách đặt lịch hẹn không bị từ chối",
  "Hướng dẫn xử lý từ chối 'đắt quá'",
  "Cách tuyển dụng hiệu quả",
];

export default function ChatBot({ userRole = "customer" }: { userRole?: UserRole }) {
  const isTVV = userRole === "tvv";
  const SUGGESTIONS = isTVV ? TVV_SUGGESTIONS : CUSTOMER_SUGGESTIONS;
  const welcomeMsg = isTVV
    ? "Xin chào TVV! Mình là trợ lý Vinalink. Mình có thể tư vấn sản phẩm, đào tạo kỹ năng bán hàng, xử lý từ chối, hướng dẫn tuyển dụng, và các bước bắt đầu kinh doanh. Bạn cần hỗ trợ gì?"
    : "Xin chào! Mình là trợ lý tư vấn sản phẩm Vinalink. Bạn cần tư vấn về sản phẩm nào hoặc có câu hỏi gì về sức khỏe & làm đẹp không?";

  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: welcomeMsg },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [provider, setProvider] = useState<Provider>("gemini");
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Vung nhin thay thuc (tru ban phim ao che) de o nhap luon noi tren ban phim.
  const [vp, setVp] = useState<{ top: number; height: number } | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const headerClickCount = useRef(0);
  const headerClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load provider from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("vl_chat_provider");
    if (saved === "claude" || saved === "gemini") {
      setProvider(saved);
    }
  }, []);

  // Show attention bubble after 3 seconds
  useEffect(() => {
    if (isOpen) { setShowBubble(false); return; }
    const timer = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, vp, isOpen]);

  // Theo doi man hinh nho (dien thoai) de bat che do toan man hinh.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Bam theo ban phim ao bang VisualViewport (chay ca iOS lan Android).
  useEffect(() => {
    if (!isOpen || typeof window === "undefined") return;
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () => setVp({ top: vv.offsetTop, height: vv.height });
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      setVp(null);
    };
  }, [isOpen]);

  // Khoa cuon nen khi mo toan man hinh tren mobile.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = isOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  // Hidden admin trigger: double-click on status dot
  const handleStatusClick = useCallback(() => {
    headerClickCount.current += 1;
    if (headerClickTimer.current) clearTimeout(headerClickTimer.current);
    if (headerClickCount.current >= 2) {
      headerClickCount.current = 0;
      setShowAdmin(true);
    } else {
      headerClickTimer.current = setTimeout(() => {
        headerClickCount.current = 0;
      }, 400);
    }
  }, []);

  const handlePassSubmit = useCallback(async () => {
    try {
      const res = await fetch("/api/verify-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passInput }),
      });
      const data = await res.json();
      if (data.ok) {
        setAdminAuth(true);
        setPassError(false);
        setPassInput("");
        return;
      }
    } catch {
      // fall through to error state
    }
    setPassError(true);
    setTimeout(() => setPassError(false), 2000);
  }, [passInput]);

  const switchProvider = useCallback(
    (p: Provider) => {
      setProvider(p);
      localStorage.setItem("vl_chat_provider", p);
      // Add system message about the switch
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `[Admin] Đã chuyển sang ${p === "claude" ? "Claude AI" : "Gemini AI"}. Tất cả tin nhắn tiếp theo sẽ dùng ${p === "claude" ? "Claude" : "Gemini"}.`,
        },
      ]);
    },
    []
  );

  const handleSend = useCallback(
    async (text?: string) => {
      const query = text || input.trim();
      if (!query || isLoading) return;

      const userMsg: Message = { role: "user", content: query };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setIsLoading(true);

      try {
        // Build conversation history (last 10 messages for context)
        const history = [...messages, userMsg]
          .slice(-10)
          .map((m) => ({ role: m.role, content: m.content }));

        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history, provider, userRole }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Lỗi kết nối");
        }

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } catch (err: unknown) {
        const errorMsg =
          err instanceof Error ? err.message : "Lỗi không xác định";
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: `Xin lỗi, đã xảy ra lỗi: ${errorMsg}. Vui lòng thử lại.`,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages, provider, userRole]
  );

  return (
    <>
      {/* Floating chat button + signal bubble */}
      {!isOpen && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
          style={{ bottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          {/* Attention bubble */}
          {showBubble && (
            <div
              className="bg-white rounded-2xl rounded-br-sm shadow-lg px-4 py-3 max-w-[240px] animate-fade-in cursor-pointer border border-gray-100"
              onClick={() => { setIsOpen(true); setShowBubble(false); }}
            >
              <p className="text-sm text-gray-800 font-medium">
                {isTVV ? "Cần hỗ trợ bán hàng hay tuyển dụng? 💬" : "Xin chào! Cần tư vấn sản phẩm? 💬"}
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); setShowBubble(false); }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full text-xs flex items-center justify-center text-gray-500"
              >
                x
              </button>
            </div>
          )}
          <button
            onClick={() => { setIsOpen(true); setShowBubble(false); }}
            className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-all active:scale-90 relative"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {/* Pulse ring animation */}
            <span className="absolute inset-0 rounded-full bg-[var(--primary)] opacity-30 animate-ping" />
          </button>
        </div>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className="fixed z-50 flex flex-col bg-white overflow-hidden animate-fade-in inset-x-0 bottom-0 top-0 sm:inset-auto sm:top-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[85vh] sm:rounded-2xl sm:border sm:border-gray-200 sm:shadow-2xl"
          style={isMobile && vp ? { top: vp.top, height: vp.height, bottom: "auto" } : undefined}
        >
          {/* Header */}
          <div
            className="bg-[var(--primary)] text-white p-4 flex items-center justify-between sm:rounded-t-2xl"
            style={isMobile ? { paddingTop: "max(1rem, env(safe-area-inset-top))" } : undefined}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">Tư Vấn Vinalink</h3>
                {/* Hidden admin trigger: double-click the status text */}
                <p
                  className="text-xs text-green-200 cursor-default select-none"
                  onClick={handleStatusClick}
                >
                  Trực tuyến
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setShowAdmin(false);
                setAdminAuth(false);
              }}
              className="hover:bg-white/20 rounded-full p-1 transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Admin panel (hidden by default) */}
          {showAdmin && (
            <div className="bg-gray-900 text-white px-4 py-3 text-xs animate-fade-in">
              {!adminAuth ? (
                <div className="flex gap-2 items-center">
                  <input
                    type="password"
                    value={passInput}
                    onChange={(e) => setPassInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handlePassSubmit()}
                    placeholder="Mật khẩu..."
                    className={`flex-1 bg-gray-800 border rounded px-2 py-1 text-xs focus:outline-none ${
                      passError ? "border-red-500" : "border-gray-600"
                    }`}
                    autoFocus
                  />
                  <button
                    onClick={handlePassSubmit}
                    className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded transition"
                  >
                    OK
                  </button>
                  <button
                    onClick={() => {
                      setShowAdmin(false);
                      setPassInput("");
                    }}
                    className="text-gray-400 hover:text-white transition"
                  >
                    X
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">AI Engine:</span>
                  <div className="flex gap-1">
                    <button
                      onClick={() => switchProvider("gemini")}
                      className={`px-3 py-1 rounded transition text-xs font-medium ${
                        provider === "gemini"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      Gemini
                    </button>
                    <button
                      onClick={() => switchProvider("claude")}
                      className={`px-3 py-1 rounded transition text-xs font-medium ${
                        provider === "claude"
                          ? "bg-orange-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      Claude
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      setShowAdmin(false);
                      setAdminAuth(false);
                    }}
                    className="text-gray-400 hover:text-white transition ml-2"
                  >
                    X
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 min-h-0 overflow-y-auto p-4 space-y-3 sm:min-h-[300px]">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[var(--primary)] text-white ml-auto"
                      : msg.content.startsWith("[Admin]")
                      ? "bg-gray-800 text-gray-300 text-xs italic"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-1 px-4 py-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full" style={{ animation: "pulse-dot 1.4s infinite 0s" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full" style={{ animation: "pulse-dot 1.4s infinite 0.2s" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full" style={{ animation: "pulse-dot 1.4s infinite 0.4s" }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions + Input */}
          <div
            className="px-4 py-2 border-t"
            style={isMobile ? { paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" } : undefined}
          >
            {messages.length <= 2 && (
              <div className="flex gap-1 flex-wrap mb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSend(s)}
                    disabled={isLoading}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1 transition disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Nhập câu hỏi..."
                disabled={isLoading}
                enterKeyHint="send"
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--primary)] transition disabled:bg-gray-50"
                style={{ fontSize: "16px" }}
              />
              <button
                onClick={() => handleSend()}
                disabled={isLoading}
                className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-full w-10 h-10 flex items-center justify-center transition active:scale-90 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
