"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export type UserRole = "guest" | "customer" | "tvv";

export interface TVVInfo {
  maSo: string;
  hoTen: string;
  capBac: string;
  danhHieu: string;
  nhom: string;
}

interface RoleGateProps {
  children: (role: UserRole, tvvInfo: TVVInfo | null, onLogout: () => void) => React.ReactNode;
}

export default function RoleGate({ children }: RoleGateProps) {
  const [role, setRole] = useState<UserRole>("guest");
  const [tvvInfo, setTvvInfo] = useState<TVVInfo | null>(null);
  const [maSoInput, setMaSoInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTVVForm, setShowTVVForm] = useState(false);

  // Load saved role from localStorage
  useEffect(() => {
    const savedRole = localStorage.getItem("vl_user_role") as UserRole;
    const savedTvv = localStorage.getItem("vl_tvv_info");
    if (savedRole === "customer") {
      setRole("customer");
    } else if (savedRole === "tvv" && savedTvv) {
      setRole("tvv");
      setTvvInfo(JSON.parse(savedTvv));
    }
  }, []);

  const handleCustomer = useCallback(() => {
    setRole("customer");
    localStorage.setItem("vl_user_role", "customer");
  }, []);

  const handleTVVSubmit = useCallback(async () => {
    if (!maSoInput.trim()) {
      setError("Vui long nhap ma so TVV");
      return;
    }
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/verify-tvv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maSo: maSoInput.trim() }),
      });
      const data = await res.json();

      if (data.valid && data.tvv) {
        setRole("tvv");
        setTvvInfo(data.tvv);
        localStorage.setItem("vl_user_role", "tvv");
        localStorage.setItem("vl_tvv_info", JSON.stringify(data.tvv));
      } else {
        setError(data.error || "Ma so khong hop le");
      }
    } catch {
      setError("Loi ket noi. Vui long thu lai.");
    } finally {
      setIsLoading(false);
    }
  }, [maSoInput]);

  const handleLogout = useCallback(() => {
    setRole("guest");
    setTvvInfo(null);
    setMaSoInput("");
    setShowTVVForm(false);
    setError("");
    localStorage.removeItem("vl_user_role");
    localStorage.removeItem("vl_tvv_info");
  }, []);

  // If role is set, render children
  if (role !== "guest") {
    return <>{children(role, tvvInfo, handleLogout)}</>;
  }

  // Gate screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--primary-dark)] via-[var(--primary)] to-[var(--primary-light)] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl p-4 inline-block mx-auto mb-4 shadow-lg">
            <Image
              src="/images/logo.png"
              alt="Vinalink Group"
              width={120}
              height={120}
              className="mx-auto"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Vinalink Group</h1>
          <p className="text-green-200">Nguyen Duc Hoa - San pham suc khoe & lam dep</p>
        </div>

        {!showTVVForm ? (
          /* Role selection */
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
            <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
              Chao mung ban den voi Vinalink!
            </h2>
            <p className="text-gray-500 text-center text-sm mb-6">
              Ban la ai?
            </p>

            <div className="space-y-3">
              <button
                onClick={() => setShowTVVForm(true)}
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-bold py-4 rounded-xl transition active:scale-95 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
                Tu van vien (TVV)
              </button>

              <button
                onClick={handleCustomer}
                className="w-full bg-white border-2 border-gray-200 hover:border-[var(--primary)] text-gray-700 hover:text-[var(--primary)] font-bold py-4 rounded-xl transition active:scale-95 flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Khach hang
              </button>
            </div>
          </div>
        ) : (
          /* TVV login form */
          <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
            <button
              onClick={() => { setShowTVVForm(false); setError(""); }}
              className="text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1 text-sm transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Quay lai
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Xac minh Tu van vien
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Nhap ma so TVV de xem bang gia thanh vien
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ma so TVV
                </label>
                <input
                  type="text"
                  value={maSoInput}
                  onChange={(e) => { setMaSoInput(e.target.value); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleTVVSubmit()}
                  placeholder="Vi du: 351909"
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-[var(--primary)] transition"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm bg-red-50 rounded-lg p-3">
                  {error}
                </p>
              )}

              <button
                onClick={handleTVVSubmit}
                disabled={isLoading}
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-bold py-3 rounded-xl transition active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Dang kiem tra...
                  </>
                ) : (
                  "Xac minh"
                )}
              </button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Chua co ma so TVV?{" "}
              <button
                onClick={handleCustomer}
                className="text-[var(--primary)] hover:underline"
              >
                Vao voi tu cach khach hang
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
