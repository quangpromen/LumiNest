import React from "react";
import {
  Waves,
  Trees,
  Sun,
  Cpu,
  Car,
  Anchor,
  Dumbbell,
  Wine,
  Plane,
  Eye,
  ArrowUpDown,
  Building,
  CheckCircle2,
  Sparkles,
  Bath,
  Tv,
  HeartPulse,
} from "lucide-react";
import { Property } from "@/types/property";

interface PropertyAmenitiesProps {
  property: Property;
}

/**
 * Hàm phân giải icon tương thích dựa trên nội dung tiện ích thực tế
 */
function getAmenityIcon(name: string) {
  const lower = name.toLowerCase();

  if (lower.includes("bể bơi") || lower.includes("hồ bơi")) {
    return Waves;
  }
  if (lower.includes("vườn") || lower.includes("biophilic") || lower.includes("rừng") || lower.includes("công viên")) {
    return Trees;
  }
  if (lower.includes("năng lượng mặt trời") || lower.includes("điện")) {
    return Sun;
  }
  if (lower.includes("smart home") || lower.includes("thông minh")) {
    return Cpu;
  }
  if (lower.includes("thang máy")) {
    return ArrowUpDown;
  }
  if (lower.includes("hầm đậu xe") || lower.includes("đỗ xe") || lower.includes("bãi đỗ")) {
    return Car;
  }
  if (lower.includes("du thuyền") || lower.includes("bến")) {
    return Anchor;
  }
  if (lower.includes("rượu") || lower.includes("hầm rượu")) {
    return Wine;
  }
  if (lower.includes("gym") || lower.includes("sauna") || lower.includes("thể thao")) {
    return Dumbbell;
  }
  if (lower.includes("trực thăng") || lower.includes("sân đỗ trực thăng")) {
    return Plane;
  }
  if (lower.includes("ngắm") || lower.includes("view") || lower.includes("sân thượng") || lower.includes("tầm nhìn")) {
    return Eye;
  }
  if (lower.includes("kinh doanh") || lower.includes("shophouse") || lower.includes("boutique")) {
    return Building;
  }
  if (lower.includes("khoáng nóng") || lower.includes("onsen") || lower.includes("sục")) {
    return Bath;
  }
  if (lower.includes("chiếu phim") || lower.includes("phim")) {
    return Tv;
  }
  if (lower.includes("wellness") || lower.includes("yoga") || lower.includes("thiền")) {
    return HeartPulse;
  }

  return CheckCircle2;
}

export function PropertyAmenities({ property }: PropertyAmenitiesProps) {
  const amenities = property.amenities || [];

  if (amenities.length === 0) return null;

  return (
    <section className="mb-10 sm:mb-14" aria-labelledby="amenities-heading">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
            <span>Đặc quyền sống</span>
          </div>
          <h2
            id="amenities-heading"
            className="text-xl sm:text-2xl font-bold text-evergreen-text-primary tracking-tight"
          >
            Hệ sinh thái Tiện ích Đặc quyền
          </h2>
        </div>

        <span className="text-xs text-evergreen-text-secondary font-medium hidden sm:inline">
          {amenities.length} tiện ích tiêu biểu
        </span>
      </div>

      {/* Grid of Amenities from mock data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5 sm:gap-4">
        {amenities.map((item, idx) => {
          const Icon = getAmenityIcon(item);

          return (
            <div
              key={item + idx}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-evergreen-border-subtle hover:border-evergreen-border-strong hover:shadow-xs flex items-center gap-3.5 transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-xl bg-evergreen-subtle group-hover:bg-evergreen-lime group-hover:text-evergreen-dark text-evergreen-forest flex items-center justify-center shrink-0 transition-colors duration-200">
                <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              </div>

              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-semibold text-evergreen-text-primary tracking-tight">
                  {item}
                </span>
                <span className="text-xs text-evergreen-text-secondary mt-0.5">
                  Đặc quyền riêng cho cư dân dự án
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
