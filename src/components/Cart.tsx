"use client";

import {
  CartItem,
  MEMBERSHIP_LABELS,
  formatPrice,
} from "@/lib/products";

export default function Cart({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemove,
  onSendEmail,
}: {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (index: number, delta: number) => void;
  onRemove: (index: number) => void;
  onSendEmail: () => void;
}) {
  const totalMoney = items.reduce(
    (sum, item) => sum + item.product.prices[item.membership] * item.quantity,
    0
  );
  const totalPoints = items.reduce(
    (sum, item) => sum + item.product.points * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" onClick={onClose}>
      <div
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[var(--primary)] text-white p-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Giỏ hàng ({items.length})</h2>
          <button onClick={onClose} className="hover:bg-white/20 rounded-full p-1 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <p>Giỏ hàng trống</p>
              <p className="text-sm mt-1">Hãy chọn sản phẩm để thêm vào giỏ</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.membership}`} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm text-gray-800">{item.product.name}</h4>
                      <span className="text-xs text-gray-500">Goi: {MEMBERSHIP_LABELS[item.membership]}</span>
                    </div>
                    <button
                      onClick={() => onRemove(index)}
                      className="text-red-400 hover:text-red-600 transition p-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(index, -1)}
                        className="w-7 h-7 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition text-sm font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(index, 1)}
                        className="w-7 h-7 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white flex items-center justify-center transition text-sm font-bold"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-[var(--primary)]">
                        {formatPrice(item.product.prices[item.membership] * item.quantity)} VND
                      </p>
                      <p className="text-xs text-gray-500">{item.product.points * item.quantity} CV</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Tổng tiền:</span>
              <span className="font-bold text-lg text-[var(--primary)]">{formatPrice(totalMoney)} VND</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Tổng điểm CV:</span>
              <span className="font-bold text-[var(--accent)]">{totalPoints.toLocaleString("vi-VN")} CV</span>
            </div>
            <button
              onClick={onSendEmail}
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-bold py-3 rounded-lg transition active:scale-95"
            >
              Gửi danh sách qua Email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
