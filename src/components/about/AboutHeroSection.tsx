import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Leaf, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";

export function AboutHeroSection() {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16">
      <Container variant="wide">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Đường dẫn trang" className="mb-6 sm:mb-8">
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
              Về chúng tôi
            </li>
          </ol>
        </nav>

        {/* Editorial Top Headline Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Leaf className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/30" />
              <span>Triết lý kiến trúc & Không gian sống</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.12]">
              Không chỉ là nơi ở.{" "}
              <span className="text-evergreen-forest block sm:inline">
                Đó là nơi cuộc sống thăng hoa.
              </span>
            </h1>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
              LumiNest kết nối con người với những không gian sống hiện đại, hài hòa cùng thiên nhiên và mang giá trị bền vững qua thời gian.
            </p>
          </div>
        </div>

        {/* Full-Width Luxury Editorial Banner */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[600px] border border-evergreen-border-subtle shadow-xl bg-evergreen-dark flex flex-col justify-between p-6 sm:p-10 lg:p-12">
          {/* Architectural Background Image */}
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
            alt="Kiến trúc biệt thự sinh thái hiện đại chan hòa ánh sáng và cây xanh"
            fill
            priority
            sizes="(max-width: 1920px) 100vw, 1920px"
            className="object-cover object-center scale-[1.01]"
          />

          {/* Cinematic Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Floating Glass Badges */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 text-evergreen-lime" />
              <span>Biophilic & Eco-Luxury Concept</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white/90 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Tuyển tập kiến trúc bản địa Việt Nam</span>
            </div>
          </div>

          {/* Bottom Editorial Content & Key Pillars */}
          <div className="relative z-10 pt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/20">
              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15">
                <span className="text-evergreen-lime text-xs font-bold uppercase tracking-wider block mb-1">
                  01. Hòa nhịp thiên nhiên
                </span>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  Thiết kế mở giải phóng tầm nhìn, đón nhận luồng gió đối lưu và thảm thực vật nhiệt đới.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15">
                <span className="text-evergreen-lime text-xs font-bold uppercase tracking-wider block mb-1">
                  02. Thẩm mỹ tinh giản
                </span>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  Ngôn ngữ hình khối khúc chiết, vật liệu tự nhiên mộc mạc tôn vinh vẻ đẹp chân phương.
                </p>
              </div>

              <div className="bg-black/30 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15">
                <span className="text-evergreen-lime text-xs font-bold uppercase tracking-wider block mb-1">
                  03. Giá trị trường tồn
                </span>
                <p className="text-white text-xs sm:text-sm leading-relaxed">
                  Mỗi công trình được định vị như một di sản an cư bền vững trao truyền qua nhiều thế hệ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
