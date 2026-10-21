import React from "react";
import Link from "next/link";
import { Home, Building2, Search } from "lucide-react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";

export default function PropertyNotFound() {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary flex flex-col justify-between selection:bg-evergreen-lime selection:text-evergreen-dark">
      <Navbar />

      <main className="pt-32 pb-24 flex items-center justify-center flex-1">
        <Container>
          <div className="max-w-xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-white border border-evergreen-border-subtle shadow-lg">
            <div className="w-16 h-16 rounded-3xl bg-evergreen-subtle text-evergreen-forest flex items-center justify-center mx-auto mb-6 shadow-xs">
              <Building2 className="w-8 h-8" />
            </div>

            <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
              Mã lỗi 404 — Không tìm thấy
            </span>

            <h1 className="text-2xl sm:text-3xl font-bold text-evergreen-text-primary tracking-tight mb-3">
              Bất động sản không tồn tại
            </h1>

            <p className="text-sm text-evergreen-text-secondary leading-relaxed mb-8">
              Bất động sản bạn đang tìm kiếm có thể đã được gỡ bỏ, thay đổi đường dẫn
              hoặc không nằm trong bộ sưu tập mẫu của LumiNest.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/bat-dong-san"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-evergreen-dark hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs"
              >
                <Search className="w-4 h-4 text-evergreen-lime" />
                <span>Xem danh sách bất động sản</span>
              </Link>

              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-xs sm:text-sm font-medium transition-colors"
              >
                <Home className="w-4 h-4 text-evergreen-forest" />
                <span>Quay về trang chủ</span>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
