import React from "react";
import Link from "next/link";
import { Leaf, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-8 pb-12 pt-16 border-t border-evergreen-border-subtle bg-white">
      <Container variant="wide">
        {/* Top Editorial Headline */}
        <div className="pb-12 sm:pb-16 border-b border-evergreen-border-subtle/80 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.12]">
              Khám phá không gian sống truyền cảm hứng.
            </h2>
            <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-3 leading-relaxed max-w-xl">
              Nơi hội tụ tinh hoa kiến trúc xanh và giải pháp công năng thông minh, kiến tạo giá trị an cư bền vững cho các thế hệ tinh hoa.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/bat-dong-san"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-evergreen-dark hover:bg-black text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Xem danh mục dự án</span>
              <ArrowUpRight className="w-4 h-4 text-evergreen-lime" />
            </Link>
          </div>
        </div>

        {/* 4-Column Navigation & Info */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
              aria-label={`${SITE_CONFIG.name} — Trang chủ`}
            >
              <span className="w-9 h-9 rounded-full bg-evergreen-dark text-evergreen-lime flex items-center justify-center shadow-xs">
                <Leaf className="w-4 h-4 text-evergreen-lime fill-evergreen-lime/20" />
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg tracking-tight text-evergreen-text-primary">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] text-evergreen-text-secondary -mt-1 font-medium tracking-wide">
                  Eco-Luxury Living
                </span>
              </div>
            </Link>

            <p className="text-xs text-evergreen-text-secondary leading-relaxed max-w-sm mt-1">
              Dự án giao diện mẫu website bất động sản sinh thái cao cấp tại Việt Nam lấy cảm hứng từ ngôn ngữ kiến trúc đương đại và triết lý sống hòa hợp thiên nhiên.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-evergreen-subtle border border-evergreen-border-subtle w-fit text-[11px] text-evergreen-forest font-medium mt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Giao diện Frontend Demo 2026</span>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-evergreen-text-primary">
              Điều hướng
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-evergreen-text-secondary">
              <li>
                <Link
                  href="/"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/bat-dong-san"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Bất động sản
                </Link>
              </li>
              <li>
                <Link
                  href="/ve-chung-toi"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-evergreen-text-primary">
              Dòng sản phẩm
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-evergreen-text-secondary">
              <li>
                <Link
                  href="/bat-dong-san?type=biet-thu"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Biệt thự sinh thái
                </Link>
              </li>
              <li>
                <Link
                  href="/bat-dong-san?type=can-ho"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Căn hộ xanh cao cấp
                </Link>
              </li>
              <li>
                <Link
                  href="/bat-dong-san?type=penthouse"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Sky Villa & Penthouse
                </Link>
              </li>
              <li>
                <Link
                  href="/bat-dong-san?type=dinh-thu"
                  className="hover:text-evergreen-dark hover:underline transition-colors"
                >
                  Dinh thự ven sông / biển
                </Link>
              </li>
            </ul>
          </div>

          {/* Transparency Disclaimer (2 Cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-evergreen-text-primary">
              Minh bạch
            </span>
            <p className="text-xs text-evergreen-text-muted leading-relaxed">
              Mọi mức giá, hình ảnh và thông số dự án là dữ liệu mô phỏng để đánh giá trải nghiệm giao diện người dùng.
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-evergreen-text-secondary mt-1">
              <Sparkles className="w-3 h-3 text-evergreen-lime" />
              <span>Next.js 16 + Tailwind v4</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-evergreen-border-subtle/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-evergreen-text-muted">
          <p>© 2026 {SITE_CONFIG.name} — Giao diện demo. All rights reserved.</p>
          <p className="text-[11px]">
            Lấy cảm hứng từ ngôn ngữ thiết kế EverGreen Dribbble.
          </p>
        </div>
      </Container>
    </footer>
  );
}
