"use client";

import { TRAINING_INTRO, TRAINING_MODULES } from "@/lib/training";

export default function TrainingSection() {
  return (
    <section id="dao-tao" className="bg-gradient-to-b from-amber-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
            DÀNH CHO TƯ VẤN VIÊN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            🎓 Lộ trình đào tạo TVV
          </h2>
          <p className="text-xl font-semibold text-[var(--primary)] mb-2">
            {TRAINING_INTRO.title}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">{TRAINING_INTRO.goal}</p>
          <div className="flex items-center justify-center gap-6 mt-5 text-sm">
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">{TRAINING_INTRO.moduleCount}</p>
              <p className="text-gray-500">Module</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">30</p>
              <p className="text-gray-500">Ngày thực hành</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[var(--primary)]">100%</p>
              <p className="text-gray-500">Miễn phí</p>
            </div>
          </div>
        </div>

        {/* Module accordions */}
        <div className="space-y-3">
          {TRAINING_MODULES.map((mod) => (
            <details
              key={mod.id}
              className="group bg-white rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <summary className="flex items-center gap-4 p-4 cursor-pointer list-none">
                <div className="w-11 h-11 rounded-full bg-[var(--primary)] text-white font-bold text-lg flex items-center justify-center shrink-0">
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
                      <p className="text-sm text-gray-600 leading-relaxed pl-4">{s.content}</p>
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
          ))}
        </div>

        {/* CTA to chatbot */}
        <div className="mt-8 text-center bg-[var(--primary)] text-white rounded-2xl p-6">
          <p className="font-bold text-lg mb-1">Cần huấn luyện chuyên sâu hơn?</p>
          <p className="text-green-100 text-sm">
            Hỏi trợ lý AI (góc phải màn hình) bất kỳ tình huống nào — xử lý từ chối, kịch bản gọi điện,
            cách tuyển dụng... AI sẽ hướng dẫn bạn theo từng module.
          </p>
        </div>
      </div>
    </section>
  );
}
