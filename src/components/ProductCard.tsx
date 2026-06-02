"use client";

import Image from "next/image";
import { Product, formatPrice } from "@/lib/products";

export default function ProductCard({
  product,
  onClick,
}: {
  product: Product;
  onClick: () => void;
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
        <div className="absolute top-2 right-2 bg-[var(--accent)] text-black text-xs font-bold px-2 py-1 rounded-full">
          {product.points} CV
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.name}
        </h3>
        <p className="text-[var(--primary)] font-bold text-base">
          {formatPrice(product.prices.normal)} VND
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Sieu Vang: {formatPrice(product.prices.super_gold)} VND
        </p>
      </div>
    </div>
  );
}
