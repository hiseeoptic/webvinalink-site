import { NextRequest, NextResponse } from "next/server";

// Xac thuc mat khau admin phia SERVER.
// Mat khau doc tu bien moi truong ADMIN_PASS (KHONG hardcode trong source,
// KHONG lo trong bundle trinh duyet). Cau hinh trong .env.local va tren Vercel.
export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    const adminPass = process.env.ADMIN_PASS;

    if (!adminPass) {
      return NextResponse.json(
        { ok: false, error: "Chua cau hinh ADMIN_PASS tren server." },
        { status: 500 }
      );
    }

    const ok = typeof password === "string" && password === adminPass;
    return NextResponse.json({ ok });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Loi he thong. Vui long thu lai." },
      { status: 500 }
    );
  }
}
