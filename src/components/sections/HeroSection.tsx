import React from "react";
import Image from "next/image";
import { Sparkles, Home, Building2, Trees } from "lucide-react";
import { Container } from "@/components/common/Container";
import { HeroSearchWidget } from "@/components/sections/HeroSearchWidget";

export function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <Container variant="wide">
        {/* Architectural Hero Banner Card */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[32px] xl:rounded-[36px] overflow-hidden min-h-[540px] sm:min-h-[580px] lg:h-[78svh] lg:min-h-[640px] lg:max-h-[860px] shadow-[0_25px_60px_-15px_rgba(18,21,18,0.22)] border border-evergreen-border-subtle/80 bg-evergreen-dark">
          {/* Background Architectural Image */}
          <Image
            src="/images/hero/hero-villa.jpg"
            alt="Biệt thự sinh thái kiến trúc kính cong hòa hợp thiên nhiên - LumiNest"
            fill
            priority
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 96vw, (max-width: 1920px) 95vw, 1920px"
            className="object-cover object-[center_35%] scale-[1.01] transition-transform duration-700 ease-out"
          />

          {/* Cinematic Gradient Overlays */}
          {/* Top gradient for navbar and badges readability */}
          <div className="absolute inset-x-0 top-0 h-48 sm:h-56 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none" />
          
          {/* Bottom gradient for heading & typography contrast */}
          <div className="absolute inset-x-0 bottom-0 h-4/5 sm:h-3/4 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

          {/* Subtle directional vignette for luxury depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />

          {/* Banner Internal Content */}
          <div className="relative z-10 w-full h-full min-h-[540px] sm:min-h-[580px] lg:min-h-0 p-5 sm:p-8 lg:p-12 xl:p-16 flex flex-col justify-between">
            {/* Top Row: Category Pills & Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 sm:pt-2">
              {/* Frosted Glass Badges Group */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-sm transition-colors">
                  <Home className="w-3.5 h-3.5 text-evergreen-lime" />
                  <span>Biệt thự</span>
                </span>
                <span className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-sm transition-colors">
                  <Building2 className="w-3.5 h-3.5 text-evergreen-lime" />
                  <span>Căn hộ cao cấp</span>
                </span>
                <span className="backdrop-blur-md bg-white/20 hover:bg-white/30 border border-white/30 text-white rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-sm transition-colors">
                  <Trees className="w-3.5 h-3.5 text-evergreen-lime" />
                  <span>BĐS Sinh thái</span>
                </span>
              </div>

              {/* Status / Release pill */}
              <div className="hidden sm:inline-flex items-center gap-2 backdrop-blur-md bg-black/40 border border-white/20 text-white/90 rounded-full px-4 py-1.5 text-xs font-medium shadow-xs">
                <span className="w-2 h-2 rounded-full bg-evergreen-lime animate-pulse" />
                <span>Bộ sưu tập kiến trúc 2026</span>
              </div>
            </div>

            {/* Bottom Row: Main Title on Left, Subtitle on Right (Leaves room for overlapping search widget) */}
            <div className="pb-20 sm:pb-24 lg:pb-28 xl:pb-32 pt-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 xl:gap-16">
              {/* Main Heading */}
              <div className="max-w-2xl xl:max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-evergreen-lime text-xs font-medium mb-3 sm:mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kiến trúc sinh thái độc bản</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-[1.08] drop-shadow-md">
                  Kiến tạo tương lai,
                  <br />
                  khởi nguồn từ tổ ấm.
                </h1>
              </div>

              {/* Right Subtitle / Lead Paragraph */}
              <div className="max-w-md xl:max-w-lg lg:pb-2">
                <p className="text-white/85 text-xs sm:text-sm lg:text-base leading-relaxed font-normal drop-shadow-xs border-l-2 border-evergreen-lime/70 pl-4 py-1">
                  Định danh không gian sống độc bản. Nơi thiên nhiên hòa cùng kiến trúc
                  hiện đại, kiến tạo chuẩn mực sống bền vững cho các thế hệ tinh hoa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Property Search Widget overlapping hero bottom */}
        <HeroSearchWidget />
      </Container>
    </section>
  );
}
