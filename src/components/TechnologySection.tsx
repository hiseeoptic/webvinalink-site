"use client";

const TECHNOLOGIES = [
  {
    icon: "🧬",
    name: "Công nghệ Enzyme",
    tag: "DeltaImmune",
    desc: "Sử dụng enzyme chuyên biệt để 'cắt gọt' vách tế bào vi khuẩn lợi thành các peptide sinh học siêu nhỏ — tạo ra hoạt chất kích hoạt miễn dịch tức thì, bền vững với axit và nhiệt độ.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: "💨",
    name: "Chiết xuất CO₂ siêu tới hạn",
    tag: "Tinh khiết",
    desc: "Dùng khí CO₂ ở trạng thái siêu tới hạn để chiết tách tinh chất từ thảo dược ở nhiệt độ thấp. Giữ trọn vẹn hoạt chất quý, không dư lượng dung môi hóa học, độ tinh khiết cao.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: "⚛️",
    name: "Công nghệ Cơ lượng tử",
    tag: "Nước Quantum",
    desc: "Tạo ra nước có cấu trúc cụm phân tử siêu nhỏ (Nước Quantum), giúp cơ thể và làn da hấp thụ dưỡng chất sâu hơn, nhanh hơn. Nền tảng của dòng Quantum và mỹ phẩm Orico.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "🌿",
    name: "Công nghệ nấu Cao",
    tag: "Cô đặc",
    desc: "Quy trình nấu cao chuẩn hóa cô đặc tinh chất dược liệu (Cao Đan sâm, Cao Hoàng bá, Cao Đinh lăng...), giữ lại hàm lượng hoạt chất cao nhất theo đúng y lý cổ truyền phương Đông.",
    color: "from-amber-500 to-orange-600",
  },
];

export default function TechnologySection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-[var(--primary)] text-xs font-bold px-3 py-1 rounded-full mb-3">
            SỰ KHÁC BIỆT VINALINK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            4 Công nghệ sản xuất tiên phong
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Vinalink kết hợp khoa học hiện đại với tinh hoa dược liệu phương Đông
            để tạo nên sản phẩm vượt trội
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`bg-gradient-to-br ${tech.color} p-6 text-white`}>
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <span className="text-xs font-medium bg-white/25 px-2 py-0.5 rounded-full">
                  {tech.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
