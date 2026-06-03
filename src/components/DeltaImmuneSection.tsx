"use client";

export default function DeltaImmuneSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-[var(--primary-dark)] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[var(--accent)] text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
            CÔNG NGHỆ LÕI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            DeltaImmune<sup className="text-[var(--accent)]">®</sup>
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Hoạt chất sinh học là trái tim của mọi sản phẩm Vinalink — bí mật từ
            nền khoa học quân sự Xô Viết
          </p>
        </div>

        {/* Story timeline */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🔬</div>
            <h3 className="font-bold text-lg mb-2 text-[var(--accent-light)]">
              Nguồn gốc tuyệt mật
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              Thập niên 1970 tại Leningrad, chính phủ Xô Viết ra chỉ thị tuyệt
              mật: tìm cách bảo vệ thủy thủ tàu ngầm và quân đội khỏi bệnh tật.
              Sau hàng trăm thử nghiệm, họ phát hiện sức mạnh từ vách tế bào vi
              khuẩn lợi <em>Lactobacillus rhamnosus</em>.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">☢️</div>
            <h3 className="font-bold text-lg mb-2 text-[var(--accent-light)]">
              Thử thách Chernobyl 1986
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              Trong thảm họa hạt nhân Chernobyl, công nghệ này đã chứng minh sức
              mạnh khi giúp phục hồi hệ miễn dịch suy giảm cho hàng chục nghìn
              người nhiễm phóng xạ — một kỳ tích y học.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🇻🇳</div>
            <h3 className="font-bold text-lg mb-2 text-[var(--accent-light)]">
              Về Việt Nam (1994)
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              TS. Hoàng Xuân Ba lần đầu kết hợp DeltaImmune với dược liệu cổ
              truyền Việt Nam, tạo nên triết lý độc đáo: Tây y trị ngọn, Đông y
              trị gốc — nền tảng các sản phẩm Vinalink ngày nay.
            </p>
          </div>
        </div>

        {/* Not a probiotic */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-8 mb-8 border border-white/10">
          <h3 className="text-xl font-bold mb-4 text-center">
            DeltaImmune KHÔNG phải là Probiotic thông thường
          </h3>
          <p className="text-center text-green-100 text-sm mb-6 max-w-3xl mx-auto">
            Công nghệ enzyme đặc hiệu &quot;cắt gọt&quot; vách tế bào vi khuẩn
            thành các đoạn peptide peptidoglycan siêu nhỏ. Chúng không sống,
            không chết — chúng là những <strong className="text-white">&quot;Mã Lệnh sinh học&quot;</strong> thuần
            túy, kích hoạt hệ miễn dịch tức thì.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-2 text-green-200 font-medium">Tiêu chí</th>
                  <th className="text-left py-2 px-2 text-red-300 font-medium">Probiotic thường</th>
                  <th className="text-left py-2 px-2 text-[var(--accent-light)] font-medium">DeltaImmune</th>
                </tr>
              </thead>
              <tbody className="text-green-50">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">Sống sót qua axit dạ dày</td>
                  <td className="py-3 px-2 text-red-200">Tỷ lệ chết rất cao</td>
                  <td className="py-3 px-2">Bền vững tuyệt đối</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">Tốc độ kích hoạt miễn dịch</td>
                  <td className="py-3 px-2 text-red-200">Chậm (cần sinh sôi)</td>
                  <td className="py-3 px-2">Tức thì, trực tiếp</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-2">Nguy cơ viêm / dị ứng</td>
                  <td className="py-3 px-2 text-red-200">Có thể xảy ra</td>
                  <td className="py-3 px-2">Không (điều hòa miễn dịch)</td>
                </tr>
                <tr>
                  <td className="py-3 px-2">Điều kiện bảo quản</td>
                  <td className="py-3 px-2 text-red-200">Phải để tủ lạnh</td>
                  <td className="py-3 px-2">Nhiệt độ phòng, nhiều năm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[var(--accent)] text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
            <h4 className="font-semibold mb-1">Kích hoạt</h4>
            <p className="text-xs text-green-200">Peptidoglycan &amp; Muramyl peptide đi vào cơ thể, gửi tín hiệu cảnh báo.</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[var(--accent)] text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
            <h4 className="font-semibold mb-1">Sản xuất Cytokine</h4>
            <p className="text-xs text-green-200">Thúc đẩy sinh các cytokine quan trọng (TNF-α, IL-2, IFN).</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 bg-[var(--accent)] text-black rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
            <h4 className="font-semibold mb-1">Đội quân tinh nhuệ</h4>
            <p className="text-xs text-green-200">Kích hoạt Đại thực bào, tế bào NK và Lympho T/B bảo vệ toàn thân.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
