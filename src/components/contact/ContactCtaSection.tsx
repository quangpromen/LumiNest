import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export function ContactCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[380px] sm:min-h-[440px] border border-evergreen-border-subtle bg-evergreen-dark shadow-xl flex items-center justify-center p-6 sm:p-12 text-center">
          {/* Background Penthouse / Modern Villa photo */}
          <Image
            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=80"
            alt="Sky Villa cao cấp trên tầng không nhìn ra toàn cảnh thành phố"
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
              <span>Tiếp tục trải nghiệm</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
              Khám phá bộ sưu tập bất động sản sinh thái.
            </h2>

            <p className="text-xs sm:text-base text-white/85 mt-4 leading-relaxed max-w-xl">
              Hàng loạt dự án biệt thự sân vườn, căn hộ ngập tràn ánh sáng và dinh thự ven sông độc bản đang chờ đón bạn khám phá.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/bat-dong-san"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shadow-xl transition-all duration-200 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Xem danh mục bất động sản</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
