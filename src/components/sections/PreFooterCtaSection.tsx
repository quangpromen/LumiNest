import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export function PreFooterCtaSection() {
  return (
    <section className="py-12 sm:py-20">
      <Container variant="wide">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[420px] sm:min-h-[480px] border border-evergreen-border-subtle bg-evergreen-dark shadow-xl flex items-center justify-center p-6 sm:p-12 text-center">
          {/* Background Dusk Architecture Villa */}
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
            alt="Biệt thự kính hoàng hôn ấm áp hòa cùng thiên nhiên"
            fill
            sizes="100vw"
            className="object-cover object-center scale-[1.02]"
          />

          {/* Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/45 pointer-events-none" />

          {/* Central Immersive Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-evergreen-lime text-xs font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Khởi đầu hành trình mới</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
              Sẵn sàng hiện thực hóa tổ ấm mơ ước của bạn?
            </h2>

            <p className="text-xs sm:text-base text-white/85 mt-4 leading-relaxed max-w-xl">
              Khám phá bộ sưu tập không gian sống xanh với kiến trúc sinh thái độc bản được giới thiệu qua bản demo LumiNest.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/bat-dong-san"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-evergreen-lime text-evergreen-dark font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Khám phá bất động sản</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
              <Link
                href="/lien-he"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white border border-white/20 font-medium text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <span>Liên hệ tư vấn</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
