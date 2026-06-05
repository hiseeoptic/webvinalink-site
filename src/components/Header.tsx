"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({
  cartCount,
  onCartClick,
}: {
  cartCount: number;
  onCartClick: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--primary)] text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Vinalink Group"
            width={40}
            height={40}
            className="rounded"
          />
          <div>
            <h1 className="text-xl font-bold leading-tight">Vinalink</h1>
            <p className="text-xs text-green-200">Nguyễn Đức Hoà</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-green-200 transition">
            Sản phẩm
          </Link>
          <Link href="#dao-tao" className="hover:text-green-200 transition">
            Đào tạo
          </Link>
          <Link href="#about" className="hover:text-green-200 transition">
            Giới thiệu
          </Link>
          <Link href="#contact" className="hover:text-green-200 transition">
            Liên hệ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            className="relative bg-white/20 hover:bg-white/30 rounded-full p-2 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[var(--accent)] text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[var(--primary-dark)] px-4 py-3 animate-fade-in">
          <Link
            href="/"
            className="block py-2 hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Sản phẩm
          </Link>
          <Link
            href="#about"
            className="block py-2 hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Giới thiệu
          </Link>
          <Link
            href="#contact"
            className="block py-2 hover:text-green-200"
            onClick={() => setMenuOpen(false)}
          >
            Liên hệ
          </Link>
        </nav>
      )}
    </header>
  );
}
