import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Compass, Shield, Leaf } from "lucide-react";
import { Container } from "@/components/common/Container";

export function BentoFeatureSection() {
  return (
    <section className="py-16 sm:py-24 overflow-hidden">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Giá trị không gian độc bản</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Ngôi nhà nguyên bản có thể khiến bạn nhận ra những điều còn thiếu.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-evergreen-border-subtle shadow-xs text-xs font-medium text-evergreen-text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-evergreen-lime animate-pulse shrink-0" />
              <span>Mỗi bất động sản sở hữu vị trí đắc địa và kiến trúc bền vững</span>
            </div>
          </div>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 1: 50% Width (Col 1 to 6) — Large Architectural Canvas */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] border border-evergreen-border-subtle bg-evergreen-dark group shadow-sm flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Biệt thự kính đá hiện đại hai tầng hòa mình vào mảng xanh"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

            {/* Top pill badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-3.5 py-1 text-xs font-medium">
                Kiến trúc sinh thái đương đại
              </span>
              <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center">
                <Compass className="w-4 h-4 text-evergreen-lime" />
              </span>
            </div>

            {/* Bottom Floating Cluster & Title */}
            <div className="relative z-10 pt-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Tận hưởng không gian sống mở
                </h3>
                <p className="text-xs sm:text-sm text-white/80 mt-1 max-w-sm">
                  Kính cách nhiệt trần-sàn tối ưu hóa góc nhìn toàn cảnh ra sân vườn nhiệt đới.
                </p>
              </div>

              {/* Clustered architectural thumbnails badge */}
              <div className="backdrop-blur-md bg-black/50 border border-white/25 rounded-2xl p-2.5 flex items-center gap-2 shrink-0">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=120&q=80"
                      alt="Thumbnail 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=120&q=80"
                      alt="Thumbnail 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="w-7 h-7 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=120&q=80"
                      alt="Thumbnail 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-white/90 pr-1">
                  3 góc nhìn
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 25% Width (Col 7 to 9) — Warm Minimalist Editorial Card */}
          <div className="lg:col-span-3 bg-evergreen-subtle rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-evergreen-border-subtle/80 shadow-xs min-h-[380px] sm:min-h-[460px] group transition-colors hover:border-evergreen-border-strong">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white border border-evergreen-border-subtle flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                <Leaf className="w-5 h-5 text-evergreen-forest" />
              </div>

              <span className="text-[10px] uppercase font-bold tracking-wider text-evergreen-text-muted">
                Công năng thông minh
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold text-evergreen-text-primary tracking-tight mt-2 leading-snug">
                Những điều lớn lao khởi đầu từ không gian tinh gọn.
              </h3>
              <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-3 leading-relaxed">
                Tối ưu hóa từng centimet với thiết kế thông minh, giải phóng diện tích để đón trọn luồng sinh khí và ánh sáng tự nhiên.
              </p>
            </div>

            <div className="pt-6 border-t border-evergreen-border-subtle/80">
              <Link
                href="/bat-dong-san"
                className="inline-flex items-center gap-2 text-xs font-semibold text-evergreen-dark hover:text-evergreen-forest px-4 py-2.5 rounded-full bg-white border border-evergreen-border-subtle hover:bg-evergreen-bg transition-colors shadow-xs active:scale-95"
              >
                <span>Xem chi tiết</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: 25% Width (Col 10 to 12) — Featured Hill Villa Showcase */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] border border-evergreen-border-subtle bg-evergreen-dark group shadow-sm flex flex-col justify-between p-6 sm:p-8">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
              alt="Biệt thự đồi sinh thái ngắm hoàng hôn"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Top Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-3 py-1 text-xs font-medium">
                Biệt thự đồi sinh thái
              </span>
              <span className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-evergreen-lime flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </span>
            </div>

            {/* Bottom Pricing & CTA */}
            <div className="relative z-10 pt-16">
              <span className="text-[10px] uppercase font-bold tracking-wider text-evergreen-lime">
                Giá khởi điểm từ
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5">
                6.5 Tỷ VNĐ
              </p>
              <p className="text-xs text-white/80 mt-1 line-clamp-1">
                Khuôn viên xanh biệt lập & tầm nhìn khoáng đạt.
              </p>

              <Link
                href="/bat-dong-san"
                className="mt-4 w-full py-3 px-4 rounded-full bg-evergreen-dark hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 border border-white/20 transition-all duration-200 active:scale-95 shadow-md"
              >
                <span>Khám phá dự án</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-evergreen-lime" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
