"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  X,
  RotateCcw,
  SlidersHorizontal,
  Building2,
  Banknote,
  MapPin,
  BedDouble,
  Maximize2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterState {
  keyword: string;
  propertyType: string;
  location: string;
  priceRange: string;
  areaRange: string;
  bedrooms: string;
}

interface PropertyMobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onReset: () => void;
  matchingCount: number;
}

const emptySubscribe = () => () => {};

export function PropertyMobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  matchingCount,
}: PropertyMobileFilterDrawerProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !isMounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Bộ lọc bất động sản"
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-md bg-[#FBFBF8] p-5 sm:p-6 shadow-2xl flex flex-col justify-between border-l border-evergreen-border-subtle animate-in slide-in-from-right duration-300 z-[1000] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-evergreen-border-subtle shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-full bg-evergreen-dark text-evergreen-lime flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </span>
            <div className="flex flex-col">
              <h2 className="text-base font-semibold text-evergreen-text-primary tracking-tight">
                Bộ lọc tìm kiếm
              </h2>
              <span className="text-[11px] text-evergreen-text-secondary">
                {matchingCount} kết quả phù hợp
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onReset}
              className="text-xs text-evergreen-text-secondary hover:text-evergreen-dark flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-evergreen-subtle transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Đặt lại</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng bộ lọc"
              className="p-2 rounded-full bg-white border border-evergreen-border-subtle text-evergreen-text-primary hover:bg-evergreen-subtle transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Filters Content */}
        <div className="py-5 overflow-y-auto space-y-5 flex-1 pr-1">
          {/* 1. Loại hình BĐS */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-evergreen-text-primary flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Loại hình bất động sản</span>
            </label>
            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange("propertyType", e.target.value)}
              className="w-full p-3 rounded-2xl bg-white border border-evergreen-border-subtle text-xs sm:text-sm font-medium text-evergreen-text-primary focus:outline-none focus:ring-2 focus:ring-evergreen-dark"
            >
              <option value="all">Tất cả loại hình</option>
              <option value="biet-thu">Biệt thự sinh thái</option>
              <option value="can-ho">Căn hộ cao cấp</option>
              <option value="penthouse">Sky Villa & Penthouse</option>
              <option value="nha-pho">Nhà phố thương mại</option>
              <option value="dinh-thu">Dinh thự ven sông/biển</option>
            </select>
          </div>

          {/* 2. Khu vực */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-evergreen-text-primary flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Khu vực / Tỉnh thành</span>
            </label>
            <select
              value={filters.location}
              onChange={(e) => onFilterChange("location", e.target.value)}
              className="w-full p-3 rounded-2xl bg-white border border-evergreen-border-subtle text-xs sm:text-sm font-medium text-evergreen-text-primary focus:outline-none focus:ring-2 focus:ring-evergreen-dark"
            >
              <option value="all">Tất cả khu vực</option>
              <option value="ha-noi">Hà Nội (Tây Hồ, Ciputra, Nam Từ Liêm)</option>
              <option value="tp-hcm">TP. Hồ Chí Minh (Thủ Thiêm, Thảo Điền, Q7)</option>
              <option value="da-nang">Đà Nẵng (Sơn Trà, Hải Châu)</option>
              <option value="phu-quoc">TP. Phú Quốc (Bãi Trường, Dương Tơ)</option>
              <option value="vung-ven">Vùng ven & Nghỉ dưỡng (Đà Lạt, Hội An, Cam Ranh, Vĩnh Phúc)</option>
            </select>
          </div>

          {/* 3. Khoảng giá VNĐ */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-evergreen-text-primary flex items-center gap-1.5">
              <Banknote className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Mức giá (VNĐ)</span>
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => onFilterChange("priceRange", e.target.value)}
              className="w-full p-3 rounded-2xl bg-white border border-evergreen-border-subtle text-xs sm:text-sm font-medium text-evergreen-text-primary focus:outline-none focus:ring-2 focus:ring-evergreen-dark"
            >
              <option value="all">Tất cả mức giá</option>
              <option value="under-5b">Dưới 5 Tỷ VNĐ</option>
              <option value="5b-10b">5 - 10 Tỷ VNĐ</option>
              <option value="10b-20b">10 - 20 Tỷ VNĐ</option>
              <option value="above-20b">Trên 20 Tỷ VNĐ</option>
            </select>
          </div>

          {/* 4. Diện tích m² */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-evergreen-text-primary flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Diện tích sử dụng (m²)</span>
            </label>
            <select
              value={filters.areaRange}
              onChange={(e) => onFilterChange("areaRange", e.target.value)}
              className="w-full p-3 rounded-2xl bg-white border border-evergreen-border-subtle text-xs sm:text-sm font-medium text-evergreen-text-primary focus:outline-none focus:ring-2 focus:ring-evergreen-dark"
            >
              <option value="all">Tất cả diện tích</option>
              <option value="under-150">Dưới 150 m²</option>
              <option value="150-250">150 - 250 m²</option>
              <option value="250-400">250 - 400 m²</option>
              <option value="above-400">Trên 400 m²</option>
            </select>
          </div>

          {/* 5. Số phòng ngủ */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-evergreen-text-primary flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Số phòng ngủ</span>
            </label>
            <div className="grid grid-cols-5 gap-2">
              {[
                { val: "all", label: "Tất cả" },
                { val: "1", label: "1+" },
                { val: "2", label: "2+" },
                { val: "3", label: "3+" },
                { val: "4", label: "4+" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  type="button"
                  onClick={() => onFilterChange("bedrooms", opt.val)}
                  className={cn(
                    "py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer",
                    filters.bedrooms === opt.val
                      ? "bg-evergreen-dark text-white border-evergreen-dark shadow-xs"
                      : "bg-white border-evergreen-border-subtle text-evergreen-text-secondary hover:border-evergreen-border-strong"
                  )}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="pt-4 border-t border-evergreen-border-subtle shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-full bg-evergreen-dark hover:bg-black text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <Check className="w-4 h-4 text-evergreen-lime" />
            <span>Xem {matchingCount} bất động sản</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
