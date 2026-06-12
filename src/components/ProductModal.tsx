"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  Product,
  MembershipTier,
  MEMBERSHIP_LABELS,
  formatPrice,
} from "@/lib/products";
import { getHerbsForProduct, getHerbSynergy } from "@/lib/herbs";

const CHEVRON = (
  <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

type UserRole = "guest" | "customer" | "tvv";

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  userRole = "customer",
}: {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, tier: MembershipTier) => void;
  userRole?: UserRole;
}) {
  const allTiers: MembershipTier[] = ["normal", "silver", "gold", "super_gold"];
  const tiers = userRole === "tvv" ? allTiers : (["normal"] as MembershipTier[]);
  const herbs = getHerbsForProduct(product.slug);
  const herbSynergy = getHerbSynergy(product.slug);
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

  const handlePassSubmit = useCallback(async () => {
    try {
      const res = await fetch("/api/verify-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passValue }),
      });
      const data = await res.json();
      if (data.ok) {
        setIsAdmin(true);
        setShowPassInput(false);
        setPassValue("");
        localStorage.setItem("vl_admin_auth", "true");
        return;
      }
    } catch {
      // ignore, fall through to clear input
    }
    setPassValue("");
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
            {userRole === "tvv" && (
              <span className="bg-[var(--accent)] text-black text-sm font-bold px-3 py-1 rounded-full shrink-0 ml-2">
                {product.points} CV
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* DeltaImmune badge */}
          {/DeltaImmune|Delta-immune|Deltaimmune/i.test(product.ingredients) && (
            <div className="mb-4 flex items-center gap-3 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-3">
              <div className="text-2xl shrink-0">🧬</div>
              <div>
                <p className="font-bold text-sm text-emerald-800">
                  Chứa hoạt chất sinh học DeltaImmune<sup>®</sup>
                </p>
                <p className="text-xs text-emerald-600">
                  Công nghệ miễn dịch từ khoa học Xô Viết — kích hoạt đề kháng tức thì, bền vững.
                </p>
              </div>
            </div>
          )}

          {/* Pricing tiers - chỉ TVV thấy giá & giỏ hàng */}
          {userRole === "tvv" ? (
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-2">Chọn gói & thêm vào giỏ:</h3>
              <div className="grid grid-cols-2 gap-2">
                {tiers.map((tier) => (
                  <button key={tier} onClick={() => onAddToCart(product, tier)}
                    className={`${tierColors[tier]} rounded-lg p-3 text-left transition-all active:scale-95`}>
                    <span className="block text-xs font-medium opacity-70">{MEMBERSHIP_LABELS[tier]}</span>
                    <span className="block font-bold text-sm">{formatPrice(product.prices[tier])} VND</span>
                    <span className="block text-xs mt-1 text-[var(--primary)] font-semibold">+ Thêm vào giỏ</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] rounded-xl p-4 text-white text-center">
              <div className="text-2xl mb-1">💬</div>
              <p className="font-bold text-base mb-1">Quan tâm sản phẩm này?</p>
              <p className="text-sm text-green-50">
                Vui lòng liên hệ <strong>Tư vấn viên đã giới thiệu bạn</strong> để được tư vấn chi tiết về
                cách dùng, liệu trình và nhận báo giá &amp; ưu đãi tốt nhất.
              </p>
              <p className="text-xs text-green-100 mt-3 border-t border-white/20 pt-3">
                Bạn là Tư vấn viên? Hãy đăng nhập bằng mã số để xem bảng giá &amp; đặt hàng.
              </p>
            </div>
          )}

          {/* Expandable sections */}
          <div className="space-y-3 text-sm">
            {/* Thanh phan */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Thành phần cấu tạo {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.ingredients}</p>
            </details>

            {/* Huong dan su dung */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Hướng dẫn sử dụng {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.usage}</p>
            </details>

            {/* Cong dung */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Công dụng {CHEVRON}
              </summary>
              <p className="text-gray-600 mt-2 px-3 leading-relaxed">{product.benefits}</p>
            </details>

            {/* Thao duoc trong san pham */}
            {herbs.length > 0 && (
              <details className="group" open>
                <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
                  <span className="flex items-center gap-2">
                    <span>🌿</span> Thảo dược trong sản phẩm
                  </span>
                  {CHEVRON}
                </summary>

                {/* Tổng quan: các thảo dược kết hợp với nhau xử lý vấn đề gì */}
                {herbSynergy && (
                  <div className="mt-2 mb-1 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                    <p className="text-xs font-bold text-emerald-800 mb-1.5 flex items-center gap-1.5">
                      <span>🔬</span> Khi kết hợp với nhau, các thảo dược này làm gì trong cơ thể?
                    </p>
                    <p className="text-xs text-gray-700 leading-relaxed">{herbSynergy}</p>
                    <p className="text-[10px] text-gray-400 italic mt-2">
                      * Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh.
                    </p>
                  </div>
                )}

                <p className="text-xs text-gray-500 px-1 mt-2 mb-1">
                  Bấm vào từng vị thuốc để xem phân tích chi tiết vai trò trong sản phẩm.
                </p>
                <div className="mt-2 space-y-2 px-1">
                  {herbs.map((herb) => (
                    <details
                      key={herb.key}
                      className="group/herb bg-white border border-emerald-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                    >
                      <summary className="flex items-center gap-3 p-2 cursor-pointer list-none">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-50 shrink-0">
                          <Image
                            src={herb.image}
                            alt={herb.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 text-sm">{herb.name}</h4>
                          <p className="text-xs text-emerald-600 italic">{herb.scientificName}</p>
                          <p className="text-xs text-gray-500 line-clamp-1 group-open/herb:hidden">
                            {herb.benefit}
                          </p>
                        </div>
                        {herb.detail && (
                          <svg
                            className="w-4 h-4 text-emerald-500 shrink-0 transition-transform group-open/herb:rotate-180"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </summary>
                      <div className="px-3 pb-3 pt-1">
                        <p className="text-xs text-gray-600 leading-relaxed mb-2">{herb.benefit}</p>
                        {herb.detail && (
                          <div className="bg-emerald-50 rounded-lg p-3 border-l-2 border-emerald-400">
                            <p className="text-xs font-semibold text-emerald-700 mb-1">
                              Vì sao có trong sản phẩm này?
                            </p>
                            <p className="text-xs text-gray-700 leading-relaxed">{herb.detail}</p>
                          </div>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </details>
            )}

            {/* Xuat xu */}
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                Xuất xứ & Nhà sản xuất {CHEVRON}
              </summary>
              <div className="mt-2 px-3 space-y-2 text-gray-600">
                <p><span className="font-medium text-gray-700">Xuất xứ:</span> {product.origin}</p>
                <p><span className="font-medium text-gray-700">Nhà sản xuất:</span> {product.manufacturer}</p>
                <p><span className="font-medium text-gray-700">Tiếp thị & phân phối:</span> {product.distributor}</p>
              </div>
            </details>

            {/* Giay phep */}
            <details className="group">
              <summary
                className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition"
                onClick={handleRegClick}
              >
                Giấy phép & Đăng ký {CHEVRON}
              </summary>
              <div className="mt-2 px-3 space-y-2">
                <p className="text-gray-600">{product.registration}</p>

                {/* License image (visible to everyone if uploaded) */}
                {licenseUrl && (
                  <div className="mt-2 border rounded-lg overflow-hidden">
                    <p className="text-xs text-gray-500 p-2 bg-gray-50">Giấy chứng nhận đăng ký:</p>
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
                      <span>[Admin] Upload giấy phép</span>
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
