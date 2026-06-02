"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[var(--primary)] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VL</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Vinalink</h3>
                <p className="text-xs text-gray-400">Nguyen Duc Hoa</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cung cap cac san pham bao ve suc khoe va cham soc ca nhan chat luong cao tu Vinalink Group.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Danh muc</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-white transition cursor-pointer">Thuc pham bo sung</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Bao ve suc khoe</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Cham soc ca nhan</span></li>
              <li><span className="hover:text-white transition cursor-pointer">Cham soc da (Orico)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Lien he</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>nguyenduchoa@vinalink.com</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
                <span>vinalink.nguyenduchoa.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>&copy; 2024-2026 Nguyen Duc Hoa - Vinalink Group. Moi quyen duoc bao luu.</p>
          <p className="mt-1">Thuc pham nay khong phai la thuoc va khong co tac dung thay the thuoc chua benh.</p>
        </div>
      </div>
    </footer>
  );
}
