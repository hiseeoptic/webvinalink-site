import { NextRequest, NextResponse } from "next/server";

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
        const record: TVVRecord = {
          stt: fields[0] || "",
          maSo: fields[1] || "",
          hoTen: fields[2] || "",
          nhom: fields[3] || "",
          tang: fields[4] || "",
          htTrucHe: fields[5] || "",
          doi: fields[6] || "",
          capBac: fields[7] || "",
          danhHieu: fields[8] || "",
          maBT: fields[9] || "",
          nguoiBaoTro: fields[10] || "",
          maCD: fields[11] || "",
          nguoiChiDinh: fields[12] || "",
          vtChiDinh: fields[13] || "",
          thiTruong: fields[14] || "",
          tgNDConLai: fields[15] || "",
        };

        // Check if TVV is still active (TG ND Con Lai)
        const tgConLai = record.tgNDConLai.trim();
        const isExpired =
          tgConLai.includes("-") && !tgConLai.startsWith("0");

        if (isExpired) {
          return NextResponse.json({
            valid: false,
            error: `Ma so ${maSo} (${record.hoTen}) da het han hoat dong. Vui long lien he de gia han.`,
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
