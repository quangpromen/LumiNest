import React from "react";
import Link from "next/link";
import { MapPin, ArrowUpRight, Compass, Navigation, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";

export function LocationDiscoverySection() {
  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-evergreen-border-subtle shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Col (Col 1 to 6) — Stylized Light Architectural Map Illustration */}
            <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[440px] rounded-3xl bg-[#F6F7F2] border border-evergreen-border-subtle overflow-hidden flex items-center justify-center p-6">
              {/* Decorative Vector Grid & Map Roads */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-evergreen-border-strong/70"
                >
                  <defs>
                    <pattern
                      id="map-grid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />

                  {/* Stylized River / Water Curve */}
                  <path
                    d="M -20,240 Q 150,180 300,280 T 650,220"
                    fill="none"
                    stroke="#D2E8E4"
                    strokeWidth="28"
                    strokeLinecap="round"
                  />

                  {/* Major Highway Corridors */}
                  <path
                    d="M 60,-20 L 260,500"
                    fill="none"
                    stroke="#E2E5D8"
                    strokeWidth="12"
                  />
                  <path
                    d="M -20,160 L 600,240"
                    fill="none"
                    stroke="#E2E5D8"
                    strokeWidth="10"
                  />
                  <circle
                    cx="260"
                    cy="210"
                    r="85"
                    fill="none"
                    stroke="#C6EB28"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-70 animate-spin"
                    style={{ animationDuration: "30s" }}
                  />
                </svg>
              </div>

              {/* Floating Architectural Landmarks */}
              <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-evergreen-border-subtle shadow-xs text-[11px] font-semibold text-evergreen-text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Hồ Tây · 5 phút</span>
              </div>

              <div className="absolute bottom-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-evergreen-border-subtle shadow-xs text-[11px] font-semibold text-evergreen-text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Thảo Điền · 8 phút</span>
              </div>

              <div className="absolute top-6 right-6 z-10 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-evergreen-border-subtle shadow-xs text-[11px] font-semibold text-evergreen-text-primary flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Sân bay QT · 20 phút</span>
              </div>

              {/* Center Epicenter Pin: "Tổ Ấm Mơ Ước - Tâm Điểm Kết Nối" */}
              <div className="relative z-20 flex flex-col items-center">
                {/* Radar Ripple Waves */}
                <span className="absolute -inset-4 rounded-full bg-evergreen-lime/25 animate-ping duration-1000" />
                <span className="absolute -inset-8 rounded-full bg-evergreen-lime/15 animate-pulse" />

                {/* Main Pin Card */}
                <div className="relative px-4 py-2.5 rounded-full bg-evergreen-dark text-white shadow-xl flex items-center gap-2 border border-white/20">
                  <span className="w-6 h-6 rounded-full bg-evergreen-lime text-evergreen-dark flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 fill-evergreen-dark" />
                  </span>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold tracking-tight text-white">
                      Tổ Ấm Mơ Ước
                    </span>
                    <span className="text-[10px] text-evergreen-lime font-medium -mt-0.5">
                      Tâm điểm kết nối
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Right Notice */}
              <div className="absolute bottom-3 right-3 text-[10px] text-evergreen-text-muted bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded-md">
                Bản đồ vị trí minh họa
              </div>
            </div>

            {/* Right Col (Col 7 to 12) — Strategic Content & CTA */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider w-fit">
                <Navigation className="w-3.5 h-3.5 text-evergreen-lime" />
                <span>Tọa độ đắt giá & Tính kết nối</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
                Khám phá bất động sản với vị trí đắc địa và thanh khoản tối ưu.
              </h2>

              <p className="text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
                Từ những không gian tối giản trong lòng đô thị đến các biệt thự nghỉ dưỡng tách biệt, chúng tôi tuyển chọn những vị trí đón đầu quy hoạch hạ tầng, cận kề công viên sinh thái và các tuyến giao thông huyết mạch.
              </p>

              {/* Quick perks bullet list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-evergreen-text-primary">
                  <span className="w-6 h-6 rounded-full bg-evergreen-subtle text-evergreen-forest flex items-center justify-center shrink-0">
                    <Compass className="w-3.5 h-3.5" />
                  </span>
                  <span>Trọng điểm phát triển hạ tầng</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-evergreen-text-primary">
                  <span className="w-6 h-6 rounded-full bg-evergreen-subtle text-evergreen-forest flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-evergreen-forest" />
                  </span>
                  <span>Liền kề công viên & hồ sinh thái</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/bat-dong-san"
                  className="px-8 py-3.5 rounded-full bg-evergreen-dark hover:bg-black text-white font-medium text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  <span>Khám phá theo khu vực</span>
                  <ArrowUpRight className="w-4 h-4 text-evergreen-lime" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
