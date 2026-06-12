"use client";

import { COURSES, TrainingModule, DEVELOPMENT_ROADMAP } from "@/lib/training";

const PHASE_THEME = [
  { ring: "border-[var(--primary)]", badge: "bg-[var(--primary)]", soft: "bg-green-50", text: "text-[var(--primary)]" },
  { ring: "border-amber-500", badge: "bg-amber-600", soft: "bg-amber-50", text: "text-amber-700" },
  { ring: "border-blue-500", badge: "bg-blue-600", soft: "bg-blue-50", text: "text-blue-700" },
  { ring: "border-purple-500", badge: "bg-purple-600", soft: "bg-purple-50", text: "text-purple-700" },
];

function RoadmapOverview() {
  return (
    <div className="mb-14">
      <div className="text-center mb-8">
        <span className="inline-block bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
          LỘ TRÌNH TỔNG QUAN
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          🚀 Hành trình 4 giai đoạn của Tư vấn viên
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Lộ trình đúc kết từ các chuyên gia kinh doanh theo mạng hàng đầu thế giới
          (Eric Worre – Go Pro, Richard B. Brooke – The Four Year Career, Mark Yarnell – Your First Year).
          Mỗi giai đoạn gắn với một khóa học và cột mốc thăng tiến rõ ràng.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {DEVELOPMENT_ROADMAP.map((p, i) => {
          const t = PHASE_THEME[i] || PHASE_THEME[0];
          return (
            <div
              key={p.num}
              className={`relative bg-white rounded-2xl border-t-4 ${t.ring} border border-gray-100 shadow-sm hover:shadow-md transition p-5 flex flex-col`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-12 h-12 rounded-xl ${t.soft} flex items-center justify-center text-2xl shrink-0`}>
                  {p.emoji}
                </div>
                <div>
                  <span className={`inline-block ${t.badge} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}>
                    GIAI ĐOẠN {p.num}
                  </span>
                  <p className="font-bold text-gray-900 text-sm leading-tight mt-0.5">{p.name}</p>
                  <p className="text-xs text-gray-400">{p.period}</p>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">{p.goal}</p>

              <ul className="space-y-1.5 mb-4 flex-1">
                {p.focus.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-1.5 text-xs text-gray-700">
                    <span className={`${t.text} mt-0.5`}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`${t.soft} rounded-lg p-2.5 mb-2`}>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-0.5">Khóa học</p>
                <p className={`text-xs font-semibold ${t.text} leading-tight`}>{p.course}</p>
              </div>
              <div className="flex items-start gap-1.5 text-xs">
                <span className="text-gray-400 shrink-0">📖 Nguồn:</span>
                <span className="text-gray-600 italic">{p.source}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ghi chú minh bạch nguồn */}
      <p className="text-xs text-gray-400 italic text-center mt-6 max-w-3xl mx-auto leading-relaxed">
        📖 <strong>Về nguồn nội dung:</strong> Khóa 1–2 dựa trên tài liệu nội bộ &amp; phương pháp của Tom &quot;Big Al&quot; Schreiter.
        Khóa 3–4 &amp; lộ trình được tổng hợp, biên soạn lại từ các chuyên gia ngành có thật (Eric Worre – Go Pro,
        Richard B. Brooke – The Four Year Career, Mark Yarnell – Your First Year), KHÔNG phải tài liệu chính thức của Vinalink.
        Lộ trình mang tính định hướng đào tạo; tiêu chuẩn thăng cấp &amp; thu nhập theo quy định chính thức của công ty.
      </p>
    </div>
  );
}

function ModuleAccordion({ mod, color }: { mod: TrainingModule; color: string }) {
  return (
    <details className="group bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition overflow-hidden">
      <summary className="flex items-center gap-4 p-4 cursor-pointer list-none">
        <div className={`w-11 h-11 rounded-full ${color} text-white font-bold text-lg flex items-center justify-center shrink-0`}>
          {mod.id}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-base leading-tight">
            Module {mod.id}: {mod.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1 group-open:hidden">
            {mod.objective}
          </p>
        </div>
        <svg
          className="w-5 h-5 text-[var(--primary)] shrink-0 transition-transform group-open:rotate-180"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-4 pb-5 pt-1 sm:pl-[4.75rem]">
        <p className="text-sm text-gray-600 italic mb-4 bg-amber-50 rounded-lg p-3">
          🎯 {mod.objective}
        </p>

        <div className="space-y-3 mb-4">
          {mod.sections.map((s, i) => (
            <div key={i}>
              <h4 className="font-semibold text-gray-800 text-sm mb-1 flex items-start gap-2">
                <span className="text-[var(--primary)]">▸</span> {s.heading}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed pl-4 whitespace-pre-line">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border-l-4 border-[var(--primary)] rounded-r-lg p-3 mb-4">
          <p className="text-xs font-bold text-[var(--primary)] mb-1">💡 BÀI HỌC CHÍNH</p>
          <p className="text-sm text-gray-700">{mod.takeaway}</p>
        </div>

        <div>
          <p className="text-xs font-bold text-gray-500 mb-2">CÂU HỎI ÔN TẬP</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            {mod.reviewQuestions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ol>
        </div>
      </div>
    </details>
  );
}

export default function TrainingSection() {
  const courseColors = ["bg-[var(--primary)]", "bg-amber-600", "bg-blue-600", "bg-purple-600"];

  return (
    <section id="dao-tao" className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header chung */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            DÀNH CHO TƯ VẤN VIÊN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            🎓 Lộ trình đào tạo TVV
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {COURSES.length} khóa học nền tảng theo {DEVELOPMENT_ROADMAP.length} giai đoạn phát triển — từ
            cách đặt lịch hẹn, nghệ thuật kể chuyện, đến nhân bản đội nhóm và trở thành thủ lĩnh.
          </p>
        </div>

        {/* Lộ trình tổng quan 4 giai đoạn */}
        <RoadmapOverview />

        {/* Tiêu đề danh sách khóa học */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">📚 Nội dung chi tiết các khóa học</h3>
          <p className="text-gray-500 text-sm mt-1">Nhấn vào từng module để xem nội dung đầy đủ</p>
        </div>

        {/* Từng khóa */}
        <div className="space-y-12">
          {COURSES.map((course, ci) => (
            <div key={ci}>
              {/* Mini-header của khóa */}
              <div className="text-center mb-5">
                <span className={`inline-block ${courseColors[ci] || "bg-[var(--primary)]"} text-white text-xs font-bold px-3 py-1 rounded-full mb-2`}>
                  KHÓA {ci + 1} · GIAI ĐOẠN {ci + 1}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{course.intro.title}</h3>
                <p className="text-gray-600 text-sm max-w-2xl mx-auto mt-1">{course.intro.goal}</p>
                <p className="text-xs text-gray-400 mt-2">{course.intro.moduleCount} module · Miễn phí</p>
              </div>

              {/* Module accordions */}
              <div className="space-y-3">
                {course.modules.map((mod) => (
                  <ModuleAccordion key={mod.id} mod={mod} color={courseColors[ci] || "bg-[var(--primary)]"} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA to chatbot */}
        <div className="mt-12 text-center bg-[var(--primary)] text-white rounded-2xl p-6">
          <p className="font-bold text-lg mb-1">Cần huấn luyện chuyên sâu hơn?</p>
          <p className="text-green-100 text-sm">
            Hỏi trợ lý AI (góc phải màn hình) bất kỳ tình huống nào — xử lý từ chối, kịch bản gọi điện,
            cách kể chuyện thuyết phục... AI sẽ hướng dẫn bạn theo từng module.
          </p>
        </div>
      </div>
    </section>
  );
}
