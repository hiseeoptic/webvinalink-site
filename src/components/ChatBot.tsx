"use client";

import { useState, useRef, useEffect } from "react";
import { products, Product } from "@/lib/products";

interface Message {
  role: "user" | "bot";
  content: string;
  products?: Product[];
}

const SUGGESTIONS = [
  "San pham nao tot cho gan?",
  "Tu van combo cham soc da",
  "San pham nao cho tre em?",
  "Tim san pham duoi 500.000 VND",
];

function findRelevantProducts(query: string): Product[] {
  const q = query.toLowerCase();

  const keywordMap: Record<string, string[]> = {
    gan: ["detoxmune-max"],
    tim: ["cardiopro-max"],
    "tim mach": ["cardiopro-max"],
    khop: ["jointlink-max"],
    "xuong khop": ["jointlink-max"],
    ruot: ["lacttocol-max"],
    "tieu hoa": ["lacttocol-max"],
    "bo nao": ["mindenergy-max"],
    "nao bo": ["mindenergy-max"],
    "tri nho": ["mindenergy-max"],
    "mat ngu": ["mindenergy-max"],
    nam: ["manlink-max", "sua-tam-nam"],
    "nam gioi": ["manlink-max"],
    "tre em": ["kidsmune-max"],
    da: ["kem-chong-nang", "nuoc-tay-trang", "nuoc-hoa-hong-toner", "sua-rua-mat", "kem-duong-da"],
    "cham soc da": ["kem-chong-nang", "nuoc-tay-trang", "nuoc-hoa-hong-toner", "sua-rua-mat", "kem-duong-da"],
    toc: ["dau-goi", "dau-xa"],
    "mien dich": ["detoxmune-max", "genecel-max", "kidsmune-max"],
    "giam can": ["vhealth-socola", "vhealth-tra-xanh", "green-quantum"],
    "tang can": ["topapro", "vhealth-socola"],
    protein: ["topapro"],
    "the thao": ["vsportgel", "topapro"],
    coffee: ["caphelink"],
    "ca phe": ["caphelink"],
    "rang mieng": ["kem-danh-rang-vsmile", "xit-thom-mieng"],
    "lao hoa": ["genecel-max", "kem-duong-da"],
    "chong nang": ["kem-chong-nang"],
  };

  const matched = new Set<string>();
  for (const [keyword, slugs] of Object.entries(keywordMap)) {
    if (q.includes(keyword)) {
      slugs.forEach((s) => matched.add(s));
    }
  }

  if (matched.size > 0) {
    return products.filter((p) => matched.has(p.slug));
  }

  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.benefits.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

function generateResponse(query: string): Message {
  const q = query.toLowerCase();
  const relevant = findRelevantProducts(query);

  if (q.includes("gia") || q.includes("bao nhieu") || q.includes("duoi")) {
    const priceMatch = q.match(/(\d[\d.,]*)/);
    if (priceMatch) {
      const maxPrice = parseInt(priceMatch[1].replace(/[.,]/g, ""));
      const affordable = products.filter((p) => p.prices.normal <= maxPrice);
      if (affordable.length > 0) {
        return {
          role: "bot",
          content: `Co ${affordable.length} san pham duoi ${maxPrice.toLocaleString("vi-VN")} VND. Day la cac lua chon phu hop:`,
          products: affordable.slice(0, 6),
        };
      }
      return {
        role: "bot",
        content: `Khong tim thay san pham nao duoi ${maxPrice.toLocaleString("vi-VN")} VND. Ban co the tham khao cac san pham khac hoac lien he de duoc tu van them.`,
      };
    }
  }

  if (q.includes("combo") || q.includes("ket hop") || q.includes("bo")) {
    if (q.includes("da") || q.includes("dep")) {
      const skinProducts = products.filter((p) => p.category === "cham-soc-da");
      return {
        role: "bot",
        content:
          "Combo cham soc da Orico gom: Nuoc tay trang -> Sua rua mat -> Toner -> Kem chong nang (sang) / Kem duong (toi). Su dung theo thu tu nay de dat hieu qua tot nhat!",
        products: skinProducts,
      };
    }
    if (q.includes("suc khoe") || q.includes("toan dien")) {
      return {
        role: "bot",
        content:
          "Combo suc khoe toan dien goi y: Genecel (te bao goc) + Detoxmune (gan) + Cardiopro (tim) + Lacttocol (ruot) + VHealth (dinh duong). Ket hop nay giup bao ve co the tu ben trong ra ngoai!",
        products: products.filter((p) =>
          ["genecel-max", "detoxmune-max", "cardiopro-max", "lacttocol-max", "vhealth-socola"].includes(p.slug)
        ),
      };
    }
    if (q.includes("toc") || q.includes("hair")) {
      const hairProducts = products.filter((p) => ["dau-goi", "dau-xa"].includes(p.slug));
      return {
        role: "bot",
        content: "Combo cham soc toc: Dau goi + Dau xa. Su dung dau goi truoc, massage nhe 2-3 phut roi xa sach. Sau do dung dau xa de toc mem muot hon!",
        products: hairProducts,
      };
    }
    return {
      role: "bot",
      content:
        "Ban muon combo cho muc dich gi? Vi du: cham soc da, bao ve suc khoe toan dien, tang cuong mien dich, hay cham soc ca nhan? Hay cho minh biet de tu van chinh xac hon!",
    };
  }

  if (relevant.length > 0) {
    return {
      role: "bot",
      content: `Tim thay ${relevant.length} san pham phu hop voi yeu cau cua ban:`,
      products: relevant.slice(0, 6),
    };
  }

  return {
    role: "bot",
    content:
      "Cam on ban da hoi! Minh co the tu van ve: san pham suc khoe (gan, tim, khop, nao, mien dich...), cham soc da Orico, cham soc ca nhan, hoac goi y combo ket hop. Ban muon tim hieu ve gi?",
  };
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Xin chao! Minh la tro ly tu van san pham Vinalink. Ban can tu van ve san pham nao hoac co cau hoi gi ve suc khoe & lam dep khong?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (text?: string) => {
    const query = text || input.trim();
    if (!query) return;

    const userMsg: Message = { role: "user", content: query };
    const botResponse = generateResponse(query);

    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-all active:scale-90 z-50"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200 overflow-hidden animate-fade-in">
          <div className="bg-[var(--primary)] text-white p-4 flex items-center justify-between rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">Tu Van Vinalink</h3>
                <p className="text-xs text-green-200">Truc tuyen</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[300px] max-h-[400px]">
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === "user"
                      ? "bg-[var(--primary)] text-white ml-auto"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-2 space-y-1">
                    {msg.products.map((p) => (
                      <div
                        key={p.id}
                        className="bg-green-50 border border-green-200 rounded-lg p-2 text-xs"
                      >
                        <span className="font-semibold text-[var(--primary)]">
                          {p.name}
                        </span>
                        <span className="text-gray-500 ml-2">
                          {p.prices.normal.toLocaleString("vi-VN")} VND
                        </span>
                        <p className="text-gray-600 mt-0.5 line-clamp-1">
                          {p.benefits}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="px-4 py-2 border-t">
            <div className="flex gap-1 flex-wrap mb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSend(s)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full px-3 py-1 transition"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Nhap cau hoi..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[var(--primary)] transition"
              />
              <button
                onClick={() => handleSend()}
                className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white rounded-full w-10 h-10 flex items-center justify-center transition active:scale-90"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
