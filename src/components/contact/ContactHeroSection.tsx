import React from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";

export function ContactHeroSection() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12">
      <Container variant="wide">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Đường dẫn trang" className="mb-4 sm:mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-evergreen-text-secondary">
            <li>
              <Link
                href="/"
                className="hover:text-evergreen-dark hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-sm"
              >
                Trang chủ
              </Link>
            </li>
            <li aria-hidden="true" className="text-evergreen-border-strong select-none">
              /
            </li>
            <li className="font-semibold text-evergreen-dark" aria-current="page">
              Liên hệ
            </li>
          </ol>
        </nav>

        {/* Hero Title & Lead (Compact luxury layout, not pushing form down) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-evergreen-border-subtle/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
              <PhoneCall className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/30" />
              <span>Kết nối & Tư vấn không gian</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Kết nối cùng LumiNest.
            </h1>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
              Mỗi không gian sống đều bắt đầu từ một cuộc trò chuyện. Hãy chia sẻ mong muốn của bạn để cùng chúng tôi kiến tạo chuẩn mực tổ ấm riêng.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
