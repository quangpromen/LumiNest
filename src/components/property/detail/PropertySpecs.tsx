import React from "react";
import {
  BedDouble,
  Bath,
  Maximize2,
  Compass,
  Building,
  Building2,
  ShieldCheck,
  Banknote,
  Layers,
  Calculator,
} from "lucide-react";
import { Property, PropertyType } from "@/types/property";
import { formatCurrencyVND, formatArea } from "@/lib/formatters";

interface PropertySpecsProps {
  property: Property;
}

const TYPE_CONFIG: Record<PropertyType, string> = {
  "biet-thu": "Biệt thự sinh thái",
  "can-ho": "Căn hộ cao cấp",
  penthouse: "Sky Villa & Penthouse",
  "nha-pho": "Nhà phố thương mại",
  "dinh-thu": "Dinh thự ven sông/biển",
};

export function PropertySpecs({ property }: PropertySpecsProps) {
  const typeLabel = TYPE_CONFIG[property.propertyType] || "BĐS Sinh thái";

  // Build list of valid specs only
  const specItems = [
    {
      label: "Loại hình bất động sản",
      value: typeLabel,
      icon: Building2,
      highlight: false,
    },
    {
      label: "Mức giá niêm yết",
      value: formatCurrencyVND(property.price),
      icon: Banknote,
      highlight: true,
    },
    {
      label: "Diện tích sử dụng",
      value: formatArea(property.specs.usableArea),
      icon: Maximize2,
      highlight: false,
    },
    ...(property.specs.landArea
      ? [
          {
            label: "Diện tích khuôn viên đất",
            value: formatArea(property.specs.landArea),
            icon: Layers,
            highlight: false,
          },
        ]
      : []),
    {
      label: "Số phòng ngủ",
      value: `${property.specs.bedrooms} phòng ngủ`,
      icon: BedDouble,
      highlight: false,
    },
    {
      label: "Số phòng tắm",
      value: `${property.specs.bathrooms} phòng WC`,
      icon: Bath,
      highlight: false,
    },
    ...(property.specs.floors !== undefined && property.specs.floors > 0
      ? [
          {
            label: "Số tầng cao",
            value: `${property.specs.floors} tầng`,
            icon: Building,
            highlight: false,
          },
        ]
      : []),
    ...(property.specs.direction
      ? [
          {
            label: "Hướng nhà phong thuỷ",
            value: property.specs.direction,
            icon: Compass,
            highlight: false,
          },
        ]
      : []),
    ...(property.specs.legal
      ? [
          {
            label: "Tình trạng pháp lý",
            value: property.specs.legal,
            icon: ShieldCheck,
            highlight: false,
          },
        ]
      : []),
    ...(property.pricePerSquareMeter
      ? [
          {
            label: "Đơn giá ước tính / m²",
            value: property.pricePerSquareMeter,
            icon: Calculator,
            highlight: false,
          },
        ]
      : []),
  ];

  return (
    <section className="mb-10 sm:mb-12" aria-labelledby="specs-heading">
      <div className="flex items-center justify-between mb-5">
        <h2
          id="specs-heading"
          className="text-lg sm:text-xl font-bold text-evergreen-text-primary tracking-tight"
        >
          Thông số tổng quan & Quy chuẩn
        </h2>
        <span className="text-xs text-evergreen-text-muted font-medium">
          Dữ liệu định danh: #{property.id}
        </span>
      </div>

      {/* Grid of Specs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {specItems.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label + idx}
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                item.highlight
                  ? "bg-emerald-50/60 border-emerald-200/80 shadow-xs"
                  : "bg-white border-evergreen-border-subtle hover:border-evergreen-border-strong hover:shadow-xs"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                    item.highlight
                      ? "bg-emerald-600 text-white"
                      : "bg-evergreen-subtle text-evergreen-forest"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-medium text-evergreen-text-secondary truncate">
                  {item.label}
                </span>
              </div>

              <div
                className={`text-sm sm:text-base font-bold tracking-tight truncate ${
                  item.highlight
                    ? "text-emerald-900"
                    : "text-evergreen-text-primary"
                }`}
                title={item.value}
              >
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
