"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Cart from "@/components/Cart";
import ChatBot from "@/components/ChatBot";
import RoleGate, { UserRole, TVVInfo } from "@/components/RoleGate";
import DeltaImmuneSection from "@/components/DeltaImmuneSection";
import TechnologySection from "@/components/TechnologySection";
import TrainingSection from "@/components/TrainingSection";
import {
  Product,
  MembershipTier,
  CartItem,
  products,
  CATEGORIES,
  formatPrice,
  MEMBERSHIP_LABELS,
} from "@/lib/products";

export default function Home() {
  return (
    <RoleGate>
      {(role, tvvInfo, onLogout) => (
        <HomeContent role={role} tvvInfo={tvvInfo} onLogout={onLogout} />
      )}
    </RoleGate>
  );
}

function HomeContent({ role, tvvInfo, onLogout }: { role: UserRole; tvvInfo: TVVInfo | null; onLogout: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Giá đọc từ Google Sheet (fallback về giá gốc trong code nếu lỗi)
  const [liveProducts, setLiveProducts] = useState<Product[]>(products);

  useEffect(() => {
    let active = true;
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        if (active && Array.isArray(data.products) && data.products.length > 0) {
          setLiveProducts(data.products);
        }
      })
      .catch(() => {
        /* giữ giá gốc */
      });
    return () => {
      active = false;
    };
  }, []);

  const filteredProducts = liveProducts
    .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
    .filter(
      (p) =>
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = useCallback(
    (product: Product, tier: MembershipTier) => {
      setCart((prev) => {
        const existing = prev.findIndex(
          (item) =>
            item.product.id === product.id && item.membership === tier
        );
        if (existing >= 0) {
          const updated = [...prev];
          updated[existing] = {
            ...updated[existing],
            quantity: updated[existing].quantity + 1,
          };
          return updated;
        }
        return [...prev, { product, membership: tier, quantity: 1 }];
      });
      setSelectedProduct(null);
    },
    []
  );

  const handleUpdateQuantity = useCallback(
    (index: number, delta: number) => {
      setCart((prev) => {
        const updated = [...prev];
        const newQty = updated[index].quantity + delta;
        if (newQty <= 0) {
          updated.splice(index, 1);
        } else {
          updated[index] = { ...updated[index], quantity: newQty };
        }
        return updated;
      });
    },
    []
  );

  const handleRemove = useCallback((index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const handleSendEmail = useCallback(() => {
    const email = prompt("Nhap email de gui danh sach san pham:");
    if (!email) return;

    let body = "DANH SACH SAN PHAM - VINALINK\n";
    body += "================================\n\n";
    let totalMoney = 0;
    let totalPoints = 0;

    cart.forEach((item) => {
      const price = item.product.prices[item.membership] * item.quantity;
      const points = item.product.points * item.quantity;
      totalMoney += price;
      totalPoints += points;
      body += `${item.product.name}\n`;
      body += `  So luong: ${item.quantity} | Goi: ${MEMBERSHIP_LABELS[item.membership]}\n`;
      body += `  Gia: ${formatPrice(price)} VND | Diem: ${points} CV\n\n`;
    });

    body += "================================\n";
    body += `TONG TIEN: ${formatPrice(totalMoney)} VND\n`;
    body += `TONG DIEM: ${totalPoints} CV\n\n`;
    body += "Lien he: suckhoechudong.nguyenduchoa.com\n";

    window.location.href = `mailto:${email}?subject=Danh sach san pham Vinalink - Nguyen Duc Hoa&body=${encodeURIComponent(body)}`;
  }, [cart]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header cartCount={cartCount} onCartClick={() => setCartOpen(true)} />

      {/* TVV Welcome Bar */}
      {role === "tvv" && tvvInfo && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-[var(--primary)] text-white text-xs px-2 py-0.5 rounded-full font-medium">TVV</span>
              <span className="text-gray-700">Xin chào, <strong>{tvvInfo.hoTen}</strong> (Mã số: {tvvInfo.maSo})</span>
              {tvvInfo.capBac && <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">{tvvInfo.capBac}</span>}
            </div>
            <button onClick={onLogout} className="text-gray-500 hover:text-red-500 text-xs transition">Đăng xuất</button>
          </div>
        </div>
      )}
      {role === "customer" && (
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
            <span className="text-gray-600">Bạn đang xem với tư cách <strong>khách hàng</strong> (giá bán lẻ)</span>
            <button onClick={onLogout} className="text-[var(--primary)] hover:underline text-xs transition">Đổi vai trò</button>
          </div>
        </div>
      )}

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Sản phẩm sức khỏe & làm đẹp
          </h2>
          <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
            Vinalink Group - Bảo vệ sức khỏe gia đình bạn với các sản phẩm chất lượng cao từ thiên nhiên
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)] text-sm"
            />
            <svg
              className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-[var(--primary)]">{liveProducts.length}+</p>
            <p className="text-xs text-gray-500">Sản phẩm</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--primary)]">4</p>
            <p className="text-xs text-gray-500">Mức giá thành viên</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--primary)]">5</p>
            <p className="text-xs text-gray-500">Danh mục</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--primary)]">100%</p>
            <p className="text-xs text-gray-500">Chất lượng</p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.key
                  ? "bg-[var(--primary)] text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6 flex-1">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <svg
              className="w-16 h-16 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-lg">Không tìm thấy sản phẩm nào</p>
            <p className="text-sm mt-1">Thử tìm kiếm với từ khóa khác</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
                userRole={role}
              />
            ))}
          </div>
        )}
      </main>

      {/* DeltaImmune Highlight */}
      <DeltaImmuneSection />

      {/* Production Technologies */}
      <TechnologySection />

      {/* TVV Training Curriculum */}
      <TrainingSection />

      {/* About Section */}
      <section id="about" className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Tại sao chọn Vinalink?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Chất lượng đảm bảo</h3>
              <p className="text-sm text-gray-600">Sản phẩm được chứng nhận ATTP, đăng ký với Bộ Y tế, sản xuất theo tiêu chuẩn quốc tế.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Giá tốt nhất</h3>
              <p className="text-sm text-gray-600">4 mức giá ưu đãi theo cấp độ thành viên: Thường, Bạc, Vàng và Siêu Vàng.</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Hỗ trợ tận tâm</h3>
              <p className="text-sm text-gray-600">Đội ngũ tư vấn viên chuyên nghiệp, chatbot tư vấn 24/7, hỗ trợ kết hợp sản phẩm tối ưu.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          userRole={role}
        />
      )}

      {/* Cart Drawer */}
      <Cart
        items={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        onSendEmail={handleSendEmail}
      />

      {/* ChatBot */}
      <ChatBot userRole={role} />
    </div>
  );
}
