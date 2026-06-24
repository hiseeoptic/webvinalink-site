"use client";

import Image from "next/image";
import { Product, formatPrice } from "@/lib/products";

type UserRole = "guest" | "customer" | "tvv";

export default function ProductCard({
  product,
  onClick,
  userRole = "customer",
}: {
  product: Product;
  onClick: () => void;
  userRole?: UserRole;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden border border-gray-100"
    >
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {userRole === "tvv" && (
          <div className="absolute top-2 right-2 bg-[var(--accent)] text-black text-xs font-bold px-2 py-1 rounded-full">
            {product.points} CV
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        {userRole === "tvv" ? (
          <>
            <p className="text-[var(--primary)] font-bold text-base">
              {formatPrice(product.prices.normal)} VND
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Sau Vàng: {formatPrice(product.prices.super_gold)} VND
            </p>
          </>
        ) : (
          <p className="text-sm text-[var(--primary)] font-semibold mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Xem chi tiết &amp; liên hệ tư vấn
          </p>
        )}
      </div>
    </div>
  );
}
