import React from "react";
import Image from "next/image";
import { BookOpen, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/common/Container";

export function OurStorySection() {
  return (
    <section className="py-16 sm:py-24 border-t border-evergreen-border-subtle/80">
      <Container variant="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Architectural Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] border border-evergreen-border-subtle shadow-card bg-evergreen-dark">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Không gian phòng khách hiện đại kết nối thiên nhiên qua vách kính lớn"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Caption Tag */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between">
                <span className="backdrop-blur-md bg-white/20 border border-white/25 text-white rounded-full px-4 py-1.5 text-xs font-medium">
                  Không gian sống sinh thái bản địa
                </span>
                <span className="text-evergreen-lime text-xs font-semibold">
                  Ý tưởng LumiNest
                </span>
              </div>
            </div>

            {/* Overlapping Floating Metric Pill */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 lg:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-evergreen-border-subtle max-w-xs items-center gap-3.5 z-20">
              <div className="w-11 h-11 rounded-full bg-evergreen-subtle flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-evergreen-forest" />
              </div>
              <div>
                <p className="text-xs font-bold text-evergreen-text-primary">
                  Chuẩn mực sinh thái
                </p>
                <p className="text-[11px] text-evergreen-text-secondary">
                  Cân bằng tối ưu giữa vi khí hậu và thẩm mỹ kiến trúc
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Narrative & Idea */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/20" />
                <span>Câu chuyện khởi nguyên</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.2]">
                Khơi nguồn từ khát vọng sống giao hòa cùng thiên nhiên.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
              <p>
                Trong nhịp sống đô thị hối hả, ranh giới giữa chốn làm việc và nơi nghỉ ngơi dần bị xóa mờ. Con người ngày càng khao khát tìm về một không gian sống đích thực — nơi sự yên bình được tái lập qua từng luồng gió mát rượi, ánh sáng tự nhiên dịu nhẹ và màu xanh mướt của cỏ cây bản địa.
              </p>
              <p>
                LumiNest ra đời như một ý tưởng thiết kế giao diện và định vị không gian: kết hợp giữa tư duy kiến trúc đương đại tối giản và giải pháp sinh thái bền vững. Chúng tôi không chỉ giới thiệu các dự án bất động sản, mà hướng đến việc khơi gợi cảm xúc sống thăng hoa, tạo lập tổ ấm mang bản sắc riêng cho những gia chủ coi trọng sự tĩnh tại và chất lượng sống dài hạn.
              </p>
            </div>

            {/* Core Idea Checkpoints */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-evergreen-border-subtle">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-evergreen-text-primary font-medium">
                  Tôn vinh ánh sáng tự nhiên & gió đối lưu
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-evergreen-text-primary font-medium">
                  Vật liệu bản địa mộc mạc và thân thiện
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-evergreen-text-primary font-medium">
                  Mặt bằng mở linh hoạt theo phong cách sống
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-evergreen-text-primary font-medium">
                  Trực quan hóa chuẩn mực kiến trúc cao cấp
                </span>
              </div>
            </div>

            {/* Transparent Demo Notice Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-evergreen-subtle/70 border border-evergreen-border-subtle text-[11px] text-evergreen-forest font-medium w-fit">
              <ShieldCheck className="w-4 h-4 shrink-0 text-evergreen-forest" />
              <span>Dự án giao diện mẫu định hướng kiến trúc & trải nghiệm người dùng (Frontend Concept).</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
