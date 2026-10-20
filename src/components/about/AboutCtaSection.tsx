import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Building2 } from "lucide-react";
import { Container } from "@/components/common/Container";

export function AboutCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[420px] sm:min-h-[480px] border border-evergreen-border-subtle bg-evergreen-dark shadow-xl flex items-center justify-center p-6 sm:p-12 text-center">
          {/* Background Night/Dusk Villa Photo */}
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=80"
            alt="Biệt thự kính hiện đại rực sáng trong màn đêm hòa cùng thiên nhiên tĩnh lặng"
            fill
            sizes="100vw"
            className="object-cover object-center scale-[1.01]"
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40 pointer-events-none" />

          {/* Central Call to Action Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-evergreen-lime text-xs font-medium mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Khởi đầu hành trình tìm kiếm</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
              Không gian sống lý tưởng đang chờ bạn khám phá.
            </h2>

            <p className="text-xs sm:text-base text-white/85 mt-4 leading-relaxed max-w-xl">
              Bước vào bộ sưu tập bất động sản sinh thái độc bản tại LumiNest và chọn cho mình nơi an trú xứng tầm với giá trị cuộc sống.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/bat-dong-san"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xl transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Khám phá bất động sản</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
              <Link
                href="/lien-he"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/20 font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Building2 className="w-4 h-4" />
                <span>Liên hệ tư vấn</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
