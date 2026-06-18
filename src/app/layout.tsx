import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  // Cho layout co lai khi ban phim ao bat len (Chrome Android).
  interactiveWidget: "resizes-content",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinalink - Nguyễn Đức Hoà | Sản phẩm sức khỏe & làm đẹp",
  description:
    "Cung cấp các sản phẩm bảo vệ sức khỏe và chăm sóc cá nhân chất lượng cao từ Vinalink Group. Tư vấn sản phẩm, kết hợp sản phẩm tối ưu.",
  keywords: "vinalink, nguyen duc hoa, suc khoe, lam dep, thuc pham chuc nang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
