import { NextResponse } from "next/server";
import { products as baseProducts } from "@/lib/products";

// ============================================================
// API đọc giá sản phẩm từ Google Sheet (tự cập nhật)
// Sheet: Bảng giá sản phẩm Vinalink - tab "Productlist"
// Cột: 0=Mã, 1=Tên, 2=Niêm yết, 3=Bạc, 4=Vàng, 5=Sau Vàng, 6=CV
// Khớp với sản phẩm theo Mã (= id sản phẩm trong web)
// Cache 5 phút: sửa giá trong Sheet -> web cập nhật sau ~5 phút.
// ============================================================

const SHEET_ID = "1nRllEKfgiI1PEeZzXpyOw5p_ySPRcEi978AfDG7kPEk";
const SHEET_NAME = "Productlist";
const REVALIDATE_SECONDS = 300;

function toInt(s: string | undefined): number {
  if (!s) return 0;
  return parseInt(String(s).replace(/[^\d]/g, "")) || 0;
}

// Parser CSV hỗ trợ trường có dấu ngoặc kép và dấu phẩy bên trong
function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else {
      if (c === '"') {
        inQuotes = true;
      } else if (c === ",") {
        row.push(field);
        field = "";
      } else if (c === "\n" || c === "\r") {
        if (c === "\r" && text[i + 1] === "\n") i++;
        row.push(field);
        rows.push(row);
        row = [];
        field = "";
      } else {
        field += c;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

export async function GET() {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
      SHEET_NAME
    )}`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE_SECONDS } });

    if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`);

    const csv = await res.text();
    const rows = parseCSV(csv);

    // Map: id sản phẩm -> giá
    const priceMap = new Map<
      number,
      { normal: number; silver: number; gold: number; super_gold: number; points: number }
    >();

    for (let i = 1; i < rows.length; i++) {
      const r = rows[i];
      const id = toInt(r[0]);
      if (!id) continue;
      const normal = toInt(r[2]);
      if (!normal) continue; // bỏ qua dòng không có giá
      priceMap.set(id, {
        normal,
        silver: toInt(r[3]) || normal,
        gold: toInt(r[4]) || normal,
        super_gold: toInt(r[5]) || normal,
        points: toInt(r[6]),
      });
    }

    // Ghép giá từ Sheet vào sản phẩm gốc (giữ nguyên hình ảnh, thảo dược, thành phần)
    const merged = baseProducts.map((p) => {
      const sp = priceMap.get(p.id);
      if (!sp) return p;
      return {
        ...p,
        prices: {
          normal: sp.normal,
          silver: sp.silver,
          gold: sp.gold,
          super_gold: sp.super_gold,
        },
        points: sp.points || p.points,
      };
    });

    return NextResponse.json({ products: merged, source: "sheet", count: priceMap.size });
  } catch (error: unknown) {
    // Lỗi -> dùng giá gốc trong code (fallback an toàn)
    const message = error instanceof Error ? error.message : "unknown";
    return NextResponse.json({ products: baseProducts, source: "fallback", error: message });
  }
}
