import React from "react";
import Image from "next/image";
import { Sparkles, SunMedium, Wind, Trees } from "lucide-react";
import { Container } from "@/components/common/Container";

export function LivingPhilosophySection() {
  return (
    <section className="py-16 sm:py-24 border-t border-evergreen-border-subtle/80">
      <Container variant="wide">
        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Artistic Headline & 3 Sensorial Elements (Col 1 to 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/20" />
                <span>Triết lý kiến trúc</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-4xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.2]">
                Nơi ranh giới giữa ngôi nhà và thiên nhiên được xóa nhòa.
              </h2>

              <p className="text-sm sm:text-base text-evergreen-text-secondary mt-4 leading-relaxed">
                Chúng tôi tin rằng kiến trúc đích thực không áp đặt con người lên cảnh quan, mà khiêm nhường trở thành chiếc cầu nối hài hòa. Một không gian sống tuyệt vời là nơi bạn có thể chạm vào tự nhiên ngay trong từng khoảnh khắc thường nhật.
              </p>
            </div>

            {/* 3 Sensorial Touchpoints */}
            <div className="space-y-4 pt-4 border-t border-evergreen-border-subtle">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-evergreen-subtle flex items-center justify-center shrink-0">
                  <SunMedium className="w-5 h-5 text-evergreen-forest" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                    Ánh sáng tự nhiên
                  </h4>
                  <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                    Đón nhận luồng sáng mềm mại theo từng thời khắc trong ngày, giúp không gian luôn ấm cúng và tràn đầy năng lượng tích cực.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-evergreen-subtle flex items-center justify-center shrink-0">
                  <Wind className="w-5 h-5 text-evergreen-forest" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                    Khí tươi & Đối lưu
                  </h4>
                  <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                    Hành lang gió tự nhiên giải nhiệt thụ động, thanh lọc tâm trí và giữ cho tinh thần luôn được tái tạo sau ngày làm việc.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-evergreen-subtle flex items-center justify-center shrink-0">
                  <Trees className="w-5 h-5 text-evergreen-forest" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                    Mảng xanh đa tầng
                  </h4>
                  <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                    Sân vườn, mặt nước và tán cây bản địa hòa vào từng góc nhìn từ phòng khách đến phòng ngủ, đem thiên nhiên vào cuộc sống.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large Architecture Image with Floating Quote Card (Col 6 to 12) */}
          <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[560px] rounded-3xl sm:rounded-[36px] overflow-hidden border border-evergreen-border-subtle shadow-lg bg-evergreen-dark flex flex-col justify-end p-6 sm:p-10">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=80"
              alt="Biệt thự sân trong biophilic với hồ nước và cây xanh phản chiếu ánh hoàng hôn"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            {/* Floating Architectural Quote */}
            <div className="relative z-10 bg-black/40 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 max-w-xl text-white">
              <span className="text-evergreen-lime text-2xl font-serif leading-none block mb-2 select-none">
                “
              </span>
              <p className="text-xs sm:text-sm md:text-base font-light italic leading-relaxed text-white/95">
                Một không gian sống đích thực không chỉ bảo bọc ta khỏi mưa nắng, mà còn đánh thức từng giác quan, đưa ta về với sự tĩnh tại nguyên bản giữa dòng chảy bộn bề.
              </p>
              <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                <span className="font-medium text-evergreen-lime">
                  Triết lý không gian LumiNest
                </span>
                <span className="text-[11px] text-white/60">
                  Kiến trúc sinh thái 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
