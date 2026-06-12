import { NextRequest, NextResponse } from "next/server";

// Admin/owner account - not in the sheet because they own the network.
// Ma so admin doc tu bien moi truong ADMIN_CODE (KHONG hardcode trong source).
const ADMIN_TVV = {
  maSo: process.env.ADMIN_CODE || "",
  hoTen: "NGUYỄN ĐỨC HÒA",
  capBac: "ADMIN",
  danhHieu: "Nguoi sang lap",
  nhom: "",
};

interface TVVRecord {
  stt: string;
  maSo: string;
  hoTen: string;
  nhom: string;
  tang: string;
  htTrucHe: string;
  doi: string;
  capBac: string;
  danhHieu: string;
  maBT: string;
  nguoiBaoTro: string;
  maCD: string;
  nguoiChiDinh: string;
  vtChiDinh: string;
  thiTruong: string;
  tgNDConLai: string;
}

function parseCSVLine(line: string): string[] {
  const fields: string[] = [];
  let current = "";
  let inQuotes = false;
  for (const char of line) {
    if (char === '"' && !inQuotes) {
      inQuotes = true;
    } else if (char === '"' && inQuotes) {
      inQuotes = false;
    } else if (char === "," && !inQuotes) {
      fields.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields.map((f) => f.replace(/^"|"$/g, ""));
}

export async function POST(req: NextRequest) {
  try {
    const { maSo } = await req.json();

    if (!maSo || typeof maSo !== "string") {
      return NextResponse.json(
        { valid: false, error: "Vui long nhap ma so TVV" },
        { status: 400 }
      );
    }

    // Check admin account first
    if (maSo.trim() === ADMIN_TVV.maSo) {
      return NextResponse.json({
        valid: true,
        isAdmin: true,
        tvv: ADMIN_TVV,
      });
    }

    const sheetId = "1kbfpwUgdBesilJcoyl7K3HCMMOeVXiRvlOI-0nvZ-80";
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;

    const response = await fetch(url, { next: { revalidate: 300 } });

    if (!response.ok) {
      return NextResponse.json(
        {
          valid: false,
          error:
            "Khong the ket noi Google Sheet. Vui long thu lai sau hoac lien he admin.",
        },
        { status: 500 }
      );
    }

    const csvText = await response.text();
    const lines = csvText.split(/\r?\n/);

    // Find the TVV by maSo
    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;
      const fields = parseCSVLine(lines[i]);
      if (fields.length < 2) continue;

      const recordMaSo = fields[1]?.trim();

      if (recordMaSo === maSo.trim()) {
        // Column mapping (Sheet has empty columns at index 5, 8, 10, 12):
        // 0:STT 1:MaSo 2:HoTen 3:Nhom 4:Tang 5:(empty)
        // 6:HTTrucHe 7:Doi(Fi) 8:(empty) 9:CapBac 10:(empty)
        // 11:DanhHieu 12:(empty) 13:MaBT 14:NguoiBaoTro
        // 15:MaCD 16:NguoiChiDinh 17:VTChiDinh 18:ThiTruong 19:TGNDConLai
        const record: TVVRecord = {
          stt: fields[0] || "",
          maSo: fields[1] || "",
          hoTen: fields[2] || "",
          nhom: fields[3] || "",
          tang: fields[4] || "",
          htTrucHe: fields[6] || "",
          doi: fields[7] || "",
          capBac: fields[9] || "",
          danhHieu: fields[11] || "",
          maBT: fields[13] || "",
          nguoiBaoTro: fields[14] || "",
          maCD: fields[15] || "",
          nguoiChiDinh: fields[16] || "",
          vtChiDinh: fields[17] || "",
          thiTruong: fields[18] || "",
          tgNDConLai: fields[19] || "",
        };

        // Check if TVV is still active (TG ND Con Lai)
        // Format: "-3 Tháng" = expired, "1 tháng" = active
        const tgConLai = record.tgNDConLai.trim().toLowerCase();
        const isExpired = tgConLai.startsWith("-");
        const monthMatch = tgConLai.match(/-(\d+)/);
        const expiredMonths = monthMatch ? parseInt(monthMatch[1]) : 0;

        // If expired more than 6 months, block completely
        if (isExpired && expiredMonths >= 6) {
          return NextResponse.json({
            valid: false,
            error: `Ma so ${maSo} (${record.hoTen}) da bi cat do het han qua 6 thang. Vui long lien he de gia han.`,
          });
        }

        return NextResponse.json({
          valid: true,
          tvv: {
            maSo: record.maSo,
            hoTen: record.hoTen,
            capBac: record.capBac,
            danhHieu: record.danhHieu,
            nhom: record.nhom,
            tgConLai: record.tgNDConLai.trim(),
            isExpired,
          },
        });
      }
    }

    return NextResponse.json({
      valid: false,
      error: `Khong tim thay ma so TVV: ${maSo}. Vui long kiem tra lai.`,
    });
  } catch (error: unknown) {
    console.error("TVV verify error:", error);
    return NextResponse.json(
      { valid: false, error: "Loi he thong. Vui long thu lai sau." },
      { status: 500 }
    );
  }
}
