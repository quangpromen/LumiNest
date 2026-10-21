import React from "react";
import { MapPin, Navigation, Compass, Sparkles, Info, ShieldCheck } from "lucide-react";
import { Property } from "@/types/property";

interface PropertyLocationProps {
  property: Property;
}

const REGIONAL_HIGHLIGHTS: Record<
  string,
  { primary: string; secondary: string; transit: string }
> = {
  "Hà Nội": {
    primary: "Tâm điểm kết nối Hồ Tây & Đại lộ xanh huyết mạch thủ đô",
    secondary: "15 phút tới trung tâm văn hóa Hoàn Kiếm & khu Ngoại Giao Đoàn",
    transit: "25 phút di chuyển thông suốt tới Cảng hàng không Quốc tế Nội Bài",
  },
  "TP. Hồ Chí Minh": {
    primary: "Vị thế đắc địa ven sông Sài Gòn & bán đảo sinh thái Thủ Thiêm",
    secondary: "10 phút di chuyển tới trung tâm thương mại Quận 1 qua Cầu Ba Son",
    transit: "20 phút tiếp cận Cảng hàng không Quốc tế Tân Sơn Nhất",
  },
  "Đà Nẵng": {
    primary: "Thế đất tựa sơn nghinh hải độc tôn bên bờ vịnh biển nguyên sơ",
    secondary: "10 phút kết nối Bán đảo Sơn Trà & bờ biển Mỹ Khê",
    transit: "15 phút tới Sân bay Quốc tế Đà Nẵng, 25 phút tới Phố cổ Hội An",
  },
  "TP. Phú Quốc": {
    primary: "Dải cát trắng Bãi Trường đón trọn ánh hoàng hôn ngọc bích",
    secondary: "12 phút tới Cảng hàng không Quốc tế Phú Quốc",
    transit: "Thuận tiện di chuyển tới trung tâm Dương Đông & cáp treo An Thới",
  },
};

export function PropertyLocation({ property }: PropertyLocationProps) {
  const highlights =
    REGIONAL_HIGHLIGHTS[property.location.city] || {
      primary: "Nằm trong quần thể sinh thái biệt lập với hạ tầng đồng bộ",
      secondary: "Kết nối thuận tiện tới các tuyến đường vành đai và trung tâm",
      transit: "Dễ dàng tiếp cận các tiện ích y tế, giáo dục quốc tế trong bán kính 5km",
    };

  return (
    <section className="mb-10 sm:mb-14" aria-labelledby="location-heading">
      <div className="space-y-6">
        {/* Section Heading */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5 text-evergreen-lime" />
            <span>Vị trí chiến lược</span>
          </div>
          <h2
            id="location-heading"
            className="text-xl sm:text-2xl font-bold text-evergreen-text-primary tracking-tight"
          >
            Vị trí Khu vực & Liên kết Giao thông
          </h2>
        </div>

        {/* Address & Context Banner */}
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-evergreen-border-subtle shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-evergreen-border-subtle/80">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-2xl bg-evergreen-subtle flex items-center justify-center text-evergreen-forest shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-evergreen-forest" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-evergreen-text-muted font-semibold block">
                  Địa chỉ dự án (Dữ liệu minh hoạ)
                </span>
                <span className="text-base sm:text-lg font-bold text-evergreen-text-primary tracking-tight">
                  {property.location.address}
                </span>
                <span className="block text-xs sm:text-sm text-evergreen-text-secondary mt-0.5">
                  {property.location.district}, {property.location.city}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                Khu vực quy hoạch chuẩn
              </span>
            </div>
          </div>

          {/* Regional Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-start gap-2.5">
              <Navigation className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
              <span className="text-xs text-evergreen-text-secondary leading-relaxed">
                {highlights.primary}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-evergreen-lime shrink-0 mt-0.5" />
              <span className="text-xs text-evergreen-text-secondary leading-relaxed">
                {highlights.secondary}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="text-xs text-evergreen-text-secondary leading-relaxed">
                {highlights.transit}
              </span>
            </div>
          </div>
        </div>

        {/* Stylized Architectural Schematic Vector Map Card */}
        <div className="relative rounded-3xl overflow-hidden border border-evergreen-border-subtle bg-[#F3F4EE] shadow-sm">
          {/* Stylized SVG Map Artwork */}
          <div className="relative w-full h-64 sm:h-80 flex items-center justify-center overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 400"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern
                  id="schematic-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#D1D5C8"
                    strokeWidth="0.75"
                  />
                </pattern>
                <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C6EB28" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#223826" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* Grid Background */}
              <rect width="800" height="400" fill="url(#schematic-grid)" />

              {/* Curving River / Ecological Water Corridor */}
              <path
                d="M -50 200 C 150 160, 250 320, 450 220 C 600 140, 720 280, 850 210"
                fill="none"
                stroke="url(#riverGrad)"
                strokeWidth="48"
                strokeLinecap="round"
              />

              {/* Organic Topography Contours */}
              <circle
                cx="400"
                cy="200"
                r="160"
                fill="none"
                stroke="#223826"
                strokeWidth="1"
                strokeDasharray="6 6"
                opacity="0.25"
              />
              <circle
                cx="400"
                cy="200"
                r="100"
                fill="none"
                stroke="#223826"
                strokeWidth="1.25"
                strokeDasharray="4 4"
                opacity="0.35"
              />
              <circle
                cx="400"
                cy="200"
                r="40"
                fill="#C6EB28"
                fillOpacity="0.2"
              />

              {/* Arterial Road Lines */}
              <line
                x1="120"
                y1="380"
                x2="680"
                y2="50"
                stroke="#B5D920"
                strokeWidth="2.5"
                opacity="0.4"
              />
              <line
                x1="80"
                y1="100"
                x2="720"
                y2="330"
                stroke="#5C6258"
                strokeWidth="1.5"
                opacity="0.3"
              />
            </svg>

            {/* Central Landmark Schematic Marker */}
            <div className="relative z-10 flex flex-col items-center animate-in zoom-in-95 duration-500">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-14 h-14 rounded-full bg-evergreen-lime/40 animate-ping" />
                <div className="relative w-12 h-12 rounded-full bg-evergreen-forest text-evergreen-lime flex items-center justify-center shadow-xl border-2 border-white">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>

              <div className="mt-3 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-evergreen-border-subtle text-center">
                <span className="block text-xs font-bold text-evergreen-text-primary">
                  {property.title}
                </span>
                <span className="text-[11px] text-evergreen-text-secondary font-medium">
                  {property.location.district}, {property.location.city}
                </span>
              </div>
            </div>
          </div>

          {/* Map Footer Note */}
          <div className="px-5 py-3.5 bg-white border-t border-evergreen-border-subtle flex items-start gap-2.5 text-xs text-evergreen-text-secondary">
            <Info className="w-4 h-4 text-evergreen-forest shrink-0 mt-0.5" />
            <span>
              <strong>Sơ đồ minh hoạ phân vùng:</strong> Bản đồ thể hiện định vị quy hoạch
              sinh thái chung của dự án theo phong cách bản vẽ kiến trúc. Không tích hợp
              Google Maps API hay gắn cờ số nhà chính xác theo quy định bảo mật của dự án.
              {property.location.coordinates && (
                <span className="ml-1 text-evergreen-forest font-medium">
                  (Tọa độ phân vùng tham khảo: {property.location.coordinates.lat.toFixed(4)}° B,{" "}
                  {property.location.coordinates.lng.toFixed(4)}° Đ)
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
