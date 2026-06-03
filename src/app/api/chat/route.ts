import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { GoogleGenAI } from "@google/genai";
import { buildSystemPrompt } from "@/lib/knowledge-base";

// Legacy fallback - replaced by knowledge-base.ts
const SYSTEM_PROMPT = `Ban la tro ly tu van san pham cua Vinalink Group - Nguyen Duc Hoa. Ban tu van chuyen nghiep, than thien, bang tieng Viet.

DANH MUC SAN PHAM VINALINK:

1. THUC PHAM BO SUNG:
- Caphelink (888.691 VND, 300 CV): Ca phe ket hop Nam Chaga, Linh Chi, Dang sam, Maca. Tang nang luong, ho tro mien dich.
- VHealth Socola (652.909 VND, 207 CV): Bot dinh duong da nang - gao, dau nanh, dau xanh, yen mach, ca cao, Vitamin B1/B2/B6/C, Nam Chaga. Bo sung dinh duong, tang de khang.
- VHealth Tra Xanh (652.909 VND, 207 CV): Tuong tu VHealth Socola nhung vi tra xanh Matcha, chong oxy hoa tot.
- Quantum Hydrogen (780.000 VND, 205 CV): Nuoc uong Hydrogen phan tu nho. Chong oxy hoa, thanh loc co the.
- Green Quantum/Diep luc (192.436 VND, 54 CV): Nuoc co dac diep luc, bo sung chat xo, ho tro tieu hoa.
- Bach Xuan (832.582 VND, 280 CV): Nhan sam, Linh Chi, Dong trung ha thao. Tang cuong suc khoe toan dien.
- TOPAPRO (682.364 VND, 220 CV): Bot protein chat luong cao, Whey Protein Isolate, BCAA. Ho tro phat trien co bap.
- Oricode Sam (625.455 VND, 175 CV): Nhan sam Han Quoc, mat ong, Royal Jelly. Bo sung nang luong.

2. BAO VE SUC KHOE (TPBVSK):
- Detoxmune Max (584.182 VND, 185 CV): GAN - IMCDeltaImmune, Tho phuc linh, Calci alginat. Bao ve gan, giai doc gan. Dung cho nguoi viem gan, uong nhieu ruou bia.
- Cardiopro Max (519.382 VND, 155 CV): TIM - IMCDeltaImmune, Dan sam, Hoang ba, Natto. Hoat huyet, giam mo mau, bao ve tim mach.
- Jointlink Max (530.182 VND, 155 CV): KHOP - IMCDeltaImmune, Glucosamine, Chondroitin, Collagen type II. Giam dau nhuc xuong khop.
- Lacttocol Max (441.818 VND, 130 CV): RUOT - IMCDeltaImmune, Lactobacillus, FOS. Can bang vi sinh duong ruot, tang tieu hoa.
- Mindenergy Max (495.818 VND, 158 CV): NAO - IMCDeltaImmune, Ginkgo Biloba, DHA. Tang cuong tri nho, tuan hoan nao.
- Manlink Max (525.818 VND, 175 CV): NAM GIOI - IMCDeltaImmune, Maca, Tongkat Ali. Tang cuong sinh luc.
- Genecel Max (489.927 VND, 160 CV): TE BAO GOC - IMCDeltaImmune, Resveratrol, Coenzyme Q10. Chong lao hoa, tai tao te bao.
- Kidsmune Max (505.636 VND, 168 CV): TRE EM - IMCDeltaImmune, Vitamin C, Kem, Lysine. Tang mien dich cho tre.
- VTopcan (8.826.545 VND, 2850 CV): 120 goi - san pham cao cap nhat. Bao ve suc khoe toan dien.
- VSportGel (1.914.545 VND, 620 CV): 50 goi - Collagen peptide, Glucosamine. Ho tro van dong vien.

3. CHAM SOC CA NHAN:
- Kem danh rang VSmile 5 hop/loc (897.000 VND, 310 CV)
- Dau goi (490.000 VND, 125 CV), Dau xa (490.000 VND, 125 CV)
- Sua tam nu (352.000 VND, 100 CV), Sua tam nam (352.000 VND, 100 CV)
- Xit thom mieng (810.000 VND, 180 CV), Xit khu mui (750.000 VND, 180 CV)
- Ve sinh phu nu (235.000 VND, 55 CV), Son duong moi (185.000 VND, 45 CV)

4. CHAM SOC DA (ORICO):
- Nuoc tay trang Orico Micellar Water (587.127 VND, 185 CV)
- Sua rua mat Orico Cleanser (378.000 VND, 115 CV)
- Nuoc hoa hong Orico Toner (540.000 VND, 170 CV)
- Kem chong nang Orico Sun Screen (711.818 VND, 210 CV)
- Kem duong da Orico Cream (1.030.909 VND, 300 CV)

BANG GIA THEO CAP DO THANH VIEN: Thuong > Bac > Vang > Sieu Vang (giam dan).

COMBO GOI Y:
- Combo cham soc da: Tay trang -> Sua rua mat -> Toner -> Kem chong nang (sang) / Kem duong (toi)
- Combo suc khoe toan dien: Genecel + Detoxmune + Cardiopro + Lacttocol + VHealth
- Combo tang mien dich: Genecel + Detoxmune + Kidsmune + VHealth
- Combo xuong khop: Jointlink + VSportGel + Quantum
- Combo cham soc toc: Dau goi + Dau xa

LUU Y: Tat ca san pham TPBVSK deu dung lien tuc 3-6 thang de dat hieu qua tot nhat. Uong truoc an 30 phut hoac sau an 1 gio. Thuc pham nay khong phai la thuoc va khong co tac dung thay the thuoc chua benh.

Khi tu van:
- Hoi ro nhu cau suc khoe cua khach
- Goi y san pham phu hop va combo ket hop
- Giai thich thanh phan va cong dung
- Neu gia va diem CV
- Than thien, chuyen nghiep, khong qua dai dong
- Tra loi bang tieng Viet, khong dau (de tuong thich font)`;

async function callClaude(messages: { role: string; content: string }[], systemPrompt: string) {
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const formattedMessages = messages.map((m) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }));

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: systemPrompt,
    messages: formattedMessages,
  });

  const textBlock = response.content.find((b) => b.type === "text");
  return textBlock ? textBlock.text : "Xin loi, toi khong the tra loi luc nay.";
}

async function callGemini(messages: { role: string; content: string }[], systemPrompt: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

  const history = messages.slice(0, -1).map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  const lastMessage = messages[messages.length - 1].content;

  const chat = ai.chats.create({
    model: "gemini-2.0-flash",
    history,
    config: {
      systemInstruction: systemPrompt,
    },
  });

  const response = await (await chat).sendMessage({ message: lastMessage });
  return response.text || "Xin loi, toi khong the tra loi luc nay.";
}

export async function POST(req: NextRequest) {
  try {
    const { messages, provider, userRole } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400 }
      );
    }

    // Build role-specific system prompt
    const role = userRole === "tvv" ? "tvv" : "customer";
    const systemPrompt = buildSystemPrompt(role);

    let reply: string;

    if (provider === "claude") {
      if (!process.env.ANTHROPIC_API_KEY) {
        return NextResponse.json(
          { error: "ANTHROPIC_API_KEY chua duoc cau hinh" },
          { status: 500 }
        );
      }
      reply = await callClaude(messages, systemPrompt);
    } else {
      if (!process.env.GEMINI_API_KEY) {
        return NextResponse.json(
          { error: "GEMINI_API_KEY chua duoc cau hinh" },
          { status: 500 }
        );
      }
      reply = await callGemini(messages, systemPrompt);
    }

    return NextResponse.json({ reply, provider });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const message =
      error instanceof Error ? error.message : "Loi khong xac dinh";
    return NextResponse.json(
      { error: `Loi khi goi API: ${message}` },
      { status: 500 }
    );
  }
}
