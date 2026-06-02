import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinalink - Nguyen Duc Hoa | San pham suc khoe & lam dep",
  description:
    "Cung cap cac san pham bao ve suc khoe va cham soc ca nhan chat luong cao tu Vinalink Group. Tu van san pham, ket hop san pham toi uu.",
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
