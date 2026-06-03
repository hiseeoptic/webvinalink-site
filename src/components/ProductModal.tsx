"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Product,
  MembershipTier,
  MEMBERSHIP_LABELS,
  formatPrice,
} from "@/lib/products";

const ADMIN_PASS = "02081995";
const CHEVRON = (
  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, tier: MembershipTier) => void;
}) {
  const tiers: MembershipTier[] = ["normal", "silver", "gold", "super_gold"];
  const tierColors: Record<MembershipTier, string> = {
    normal: "bg-gray-100 hover:bg-gray-200 text-gray-800",
    silver: "bg-slate-200 hover:bg-slate-300 text-slate-800",
    gold: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800",
    super_gold: "bg-amber-200 hover:bg-amber-300 text-amber-900",
  };

  // Admin state for license upload
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPassInput, setShowPassInput] = useState(false);
  const [passValue, setPassValue] = useState("");
  const [licenseUrl, setLicenseUrl] = useState<string | null>(null);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load license from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`vl_license_${product.slug}`);
    if (saved) setLicenseUrl(saved);
    const adminState = localStorage.getItem("vl_admin_auth");
    if (adminState === "true") setIsAdmin(true);
  }, [product.slug]);

  // Hidden admin trigger: double-click on registration section label
  const handleRegClick = useCallback(() => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
    if (clickCountRef.current >= 2) {
      clickCountRef.current = 0;
      if (!isAdmin) {
        setShowPassInput(true);
      }
    } else {
      clickTimerRef.current = setTimeout(() => { clickCountRef.current = 0; }, 400);
    }
  }, [isAdmin]);

  const handlePassSubmit = useCallback(() => {
    if (passValue === ADMIN_PASS) {
      setIsAdmin(true);
      setShowPassInput(false);
      setPassValue("");
      localStorage.setItem("vl_admin_auth", "true");
    } else {
      setPassValue("");
    }
  }, [passValue]);

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setLicenseUrl(dataUrl);
      localStorage.setItem(`vl_license_${product.slug}`, dataUrl);
    };
    reader.readAsDataURL(file);
  }, [product.slug]);

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-4 px-4 pb-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-fade-in my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Product Image */}
        <div className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="bg-gray-50 rounded-t-2xl p-8 flex justify-center">
            <div className="relative w-64 h-64">
              <Image src={product.image} alt={product.name} fill className="object-contain" sizes="256px" />
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Title + CV */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
            <span className="bg-[var(--accent)] text-black text-sm font-bold px-3 py-1 rounded-full shrink-0 ml-2">
              {product.points} CV
            </span>
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Pricing tiers */}
          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">Chon goi & them vao gio:</h3>
            <div className="grid grid-cols-2 gap-2">
              {tiers.map((tier) => (
                <button key={tier} onClick={() => onAddToCart(product, tier)}
                  className={`${tierColors[tier]} rounded-lg p-3 text-left transition-all active:scale-95`}>
                  <span className="block text-xs font-medium opacity-70">{MEMBERSHIP_LABELS[tier]}</span>
                  <span className="block font-bold text-sm">{formatPrice(product.prices[tier])} VND</span>
                  <span className="block text-xs mt-1 text-[var(--primary)] font-semibold">+ Them vao gio</span>
                </button>
              ))}
            </div>
          </div>

          {/* Expandable sections */}
          <div className="space-y-3 text-sm">
            {/* Thanh phan */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Thanh phan cau tao {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.ingredients}</p>
            </details>

            {/* Huong dan su dung */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Huong dan su dung {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.usage}</p>
            </details>

            {/* Cong dung */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Cong dung {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.benefits}</p>
            </details>

            {/* Xuat xu */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                Xuat xu & Nha san xuat {CHEVRON}
              </summary>
              <div className="mt-2 px-3 space-y-2 text-gray-600">
                <p><span className="font-medium text-gray-700">Xuat xu:</span> {product.origin}</p>
                <p><span className="font-medium text-gray-700">Nha san xuat:</span> {product.manufacturer}</p>
                <p><span className="font-medium text-gray-700">Tiep thi & phan phoi:</span> {product.distributor}</p>
              </div>
            </details>

            {/* Giay phep */}
            <details className="group">
              <summary
                className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition"
                onClick={handleRegClick}
              >
                Giay phep & Dang ky {CHEVRON}
              </summary>
              <div className="mt-2 px-3 space-y-2">
                <p className="text-gray-600">{product.registration}</p>

                {/* License image (visible to everyone if uploaded) */}
                {licenseUrl && (
                  <div className="mt-2 border rounded-lg overflow-hidden">
                    <p className="text-xs text-gray-500 p-2 bg-gray-50">Giay chung nhan dang ky:</p>
                    <img src={licenseUrl} alt="Giay phep" className="w-full" />
                  </div>
                )}

                {/* Hidden admin upload (only visible after double-click + password) */}
                {showPassInput && !isAdmin && (
                  <div className="flex gap-2 mt-2 animate-fade-in">
                    <input
                      type="password"
                      value={passValue}
                      onChange={(e) => setPassValue(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handlePassSubmit()}
                      placeholder="Mat khau admin..."
                      className="flex-1 border rounded px-2 py-1 text-xs focus:outline-none focus:border-[var(--primary)]"
                      autoFocus
                    />
                    <button onClick={handlePassSubmit} className="bg-gray-800 text-white px-3 py-1 rounded text-xs">OK</button>
                  </div>
                )}

                {isAdmin && (
                  <div className="mt-2 p-2 bg-gray-900 rounded-lg animate-fade-in">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>[Admin] Upload giay phep</span>
                      <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                    </label>
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
