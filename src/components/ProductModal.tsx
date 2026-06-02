"use client";

import Image from "next/image";
import {
  Product,
  MembershipTier,
  MEMBERSHIP_LABELS,
  formatPrice,
} from "@/lib/products";

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

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-4 px-4 pb-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl animate-fade-in my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="bg-gray-50 rounded-t-2xl p-8 flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="256px"
              />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">
              {product.name}
            </h2>
            <span className="bg-[var(--accent)] text-black text-sm font-bold px-3 py-1 rounded-full shrink-0 ml-2">
              {product.points} CV
            </span>
          </div>

          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-800 mb-2">
              Chon goi & them vao gio:
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => onAddToCart(product, tier)}
                  className={`${tierColors[tier]} rounded-lg p-3 text-left transition-all active:scale-95`}
                >
                  <span className="block text-xs font-medium opacity-70">
                    {MEMBERSHIP_LABELS[tier]}
                  </span>
                  <span className="block font-bold text-sm">
                    {formatPrice(product.prices[tier])} VND
                  </span>
                  <span className="block text-xs mt-1 text-[var(--primary)] font-semibold">
                    + Them vao gio
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Thanh phan
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-600 mt-2 px-3">{product.ingredients}</p>
            </details>

            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Huong dan su dung
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-600 mt-2 px-3">{product.usage}</p>
            </details>

            <details className="group">
              <summary className="font-semibold text-gray-800 cursor-pointer flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                Cong dung
                <svg
                  className="w-4 h-4 transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-600 mt-2 px-3">{product.benefits}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
