"use client";

import { useState, useEffect, useCallback, useRef } from "react";

/* ──────────────────────────────────────────────────────────
   Phần mở đầu: Banner slideshow giới thiệu Chủ tịch Nguyễn Xuân
   Hoàng & hệ sinh thái IMC / Vinalink Group.

   ẢNH: đặt file thật vào public/images/intro/ theo đúng tên ở
   trường `img` bên dưới (vd chairman.jpg). Khi có file, ảnh sẽ
   tự hiện đè lên nền gradient; chưa có thì hiển thị nền + icon.
   ────────────────────────────────────────────────────────── */

interface Slide {
  badge: string;
  title: string;
  subtitle: string;
  points: string[];
  icon: string;
  img: string;
  cta?: { label: string; href: string };
}

const SLIDES: Slide[] = [
  {
    badge: "HỆ SINH THÁI IMC GROUP",
    title: "Dược sĩ Nguyễn Xuân Hoàng",
    subtitle: "Người sáng lập & Chủ tịch IMC · Chủ tịch Vinalink Group",
    points: [
      "Hơn 20 năm xây dựng hệ sinh thái chăm sóc sức khỏe cộng đồng “thuần Việt”.",
      "Kết hợp thảo dược cổ truyền và công nghệ sinh học hiện đại.",
    ],
    icon: "👨‍⚕️",
    img: "/images/intro/chairman.jpg",
    cta: { label: "▶ Xem giới thiệu IMC", href: "https://youtu.be/vuRYl7SSAbs" },
  },
  {
    badge: "NGHIÊN CỨU · SẢN XUẤT · KIỂM ĐỊNH",
    title: "Hệ sinh thái IMC",
    subtitle: "Công ty Tư vấn Y Dược Quốc tế (IMC) — thành lập 2003 tại Hà Nội",
    points: [
      "Hơn 20 năm phát triển, gần 80 sản phẩm được thị trường tin dùng.",
      "Hơn 300 nhân sự, chuỗi sản xuất khép kín đạt chuẩn GMP-ISO.",
    ],
    icon: "🌿",
    img: "/images/intro/imc.jpg",
    cta: { label: "▶ Video giới thiệu IMC", href: "https://youtu.be/vuRYl7SSAbs" },
  },
  {
    badge: "HÀNH TRÌNH 19 NĂM",
    title: "Vinalink Group",
    subtitle: "Phân phối · Xây dựng cộng đồng · Mô hình kinh tế chia sẻ",
    points: [
      "Đối tác chiến lược của IMC — đưa sản phẩm đến tận tay người dùng.",
      "Đồng hành cùng cộng đồng “sống khỏe và cùng làm giàu”.",
    ],
    icon: "🤝",
    img: "/images/intro/vinalink.jpg",
    cta: { label: "▶ Hành trình 19 năm Vinalink", href: "https://youtu.be/6xTcoAdml6o" },
  },
  {
    badge: "ĐẠT CHUẨN QUỐC TẾ",
    title: "Nhà máy GMP-ISO",
    subtitle: "Dây chuyền sản xuất hiện đại, khép kín",
    points: [
      "Nhà máy thực phẩm bảo vệ sức khỏe đạt chuẩn GMP, ISO.",
      "Kiểm soát chất lượng nghiêm ngặt từ nguyên liệu tới thành phẩm.",
    ],
    icon: "🏭",
    img: "/images/intro/factory.jpg",
    cta: { label: "▶ Sản phẩm & nhà máy IMC", href: "https://youtu.be/nPAusKLTKNA" },
  },
  {
    badge: "NGUYÊN LIỆU THUẦN VIỆT",
    title: "Vùng trồng dược liệu",
    subtitle: "Vùng nguyên liệu thảo dược canh tác theo hướng chuẩn GAP",
    points: [
      "Chủ động nguồn dược liệu sạch, truy xuất được nguồn gốc.",
      "Kết hợp tinh hoa thảo dược Việt với công nghệ chiết xuất hiện đại.",
    ],
    icon: "🌱",
    img: "/images/intro/farm.jpg",
    cta: { label: "▶ Xem quy trình sản xuất", href: "https://youtu.be/nPAusKLTKNA" },
  },
];

const STATS = [
  { num: "20+", label: "Năm phát triển" },
  { num: "~80", label: "Sản phẩm" },
  { num: "300+", label: "Nhân sự" },
  { num: "GMP-ISO", label: "Đạt chuẩn quốc tế" },
];

const AUTOPLAY_MS = 6000;

export default function IntroSection() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const paused = useRef(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((dir: number) => {
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
  }, []);

  // Tự động chuyển slide.
  useEffect(() => {
    const t = setInterval(() => {
      if (!paused.current) setCurrent((c) => (c + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  const slide = SLIDES[current];

  return (
    <section
      className="bg-white"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      aria-label="Giới thiệu hệ sinh thái IMC & Vinalink"
    >
      <div
        className="relative overflow-hidden bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)]"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          key={current}
          className="max-w-7xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-6 md:gap-10 items-center animate-fade-in"
        >
          {/* Text */}
          <div className="order-2 md:order-1 text-white">
            <span className="inline-block bg-white/15 text-[var(--accent-light)] text-xs font-bold tracking-wide px-3 py-1 rounded-full mb-3">
              {slide.badge}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-2">
              {slide.title}
            </h2>
            <p className="text-green-100 text-sm md:text-lg mb-4">{slide.subtitle}</p>
            <ul className="space-y-1.5 mb-6">
              {slide.points.map((p) => (
                <li key={p} className="flex gap-2 text-green-50 text-sm md:text-base">
                  <span className="text-[var(--accent-light)] mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {slide.cta && (
              <a
                href={slide.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-gray-900 font-bold text-sm md:text-base px-5 py-3 rounded-full transition active:scale-95 shadow-lg"
              >
                {slide.cta.label}
              </a>
            )}
          </div>

          {/* Visual */}
          <div className="order-1 md:order-2">
            <div className="relative w-full h-52 md:h-80 rounded-2xl overflow-hidden ring-1 ring-white/20 bg-white/10 flex items-center justify-center">
              {/* Nền + icon (hiện khi chưa có ảnh thật) */}
              <div className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-6xl md:text-7xl mb-2">{slide.icon}</span>
                <span className="text-white/70 text-xs md:text-sm">{slide.title}</span>
              </div>
              {/* Ảnh thật (tự hiện khi file tồn tại trong public/images/intro) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.img}
                alt={slide.title}
                onLoad={() => setLoaded((s) => ({ ...s, [slide.img]: true }))}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                  loaded[slide.img] ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Mũi tên */}
        <button
          onClick={() => go(-1)}
          aria-label="Slide trước"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition"
        >
          ‹
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Slide sau"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/25 hover:bg-black/40 text-white flex items-center justify-center transition"
        >
          ›
        </button>

        {/* Chấm chỉ slide */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-[var(--accent)]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Dải số liệu */}
      <div className="max-w-7xl mx-auto px-4 -mt-px">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 border-x border-b border-gray-100 rounded-b-xl overflow-hidden bg-white">
          {STATS.map((s) => (
            <div key={s.label} className="py-5 text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-[var(--primary)]">{s.num}</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
