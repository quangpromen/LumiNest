"use client";

import React from "react";
import {
  Search,
  X,
  RotateCcw,
  SlidersHorizontal,
  Building2,
  Banknote,
  MapPin,
  BedDouble,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { FilterState } from "./PropertyMobileFilterDrawer";
import { cn } from "@/lib/utils";

interface PropertyFilterBarProps {
  filters: FilterState;
  onFilterChange: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  onReset: () => void;
  onOpenMobileDrawer: () => void;
  totalResults: number;
}

const PROPERTY_TYPE_OPTIONS = [
  { value: "all", label: "Tất cả loại hình" },
  { value: "biet-thu", label: "Biệt thự sinh thái" },
  { value: "can-ho", label: "Căn hộ cao cấp" },
  { value: "penthouse", label: "Sky Villa & Penthouse" },
  { value: "nha-pho", label: "Nhà phố thương mại" },
  { value: "dinh-thu", label: "Dinh thự ven sông/biển" },
];

const PRICE_RANGE_OPTIONS = [
  { value: "all", label: "Tất cả mức giá" },
  { value: "under-5b", label: "Dưới 5 Tỷ VNĐ" },
  { value: "5b-10b", label: "5 - 10 Tỷ VNĐ" },
  { value: "10b-20b", label: "10 - 20 Tỷ VNĐ" },
  { value: "above-20b", label: "Trên 20 Tỷ VNĐ" },
];

const LOCATION_OPTIONS = [
  { value: "all", label: "Tất cả khu vực" },
  { value: "ha-noi", label: "Hà Nội" },
  { value: "tp-hcm", label: "TP. Hồ Chí Minh" },
  { value: "da-nang", label: "Đà Nẵng" },
  { value: "phu-quoc", label: "TP. Phú Quốc" },
  { value: "vung-ven", label: "Vùng ven & Nghỉ dưỡng" },
];

const AREA_OPTIONS = [
  { value: "all", label: "Tất cả diện tích" },
  { value: "under-150", label: "Dưới 150 m²" },
  { value: "150-250", label: "150 - 250 m²" },
  { value: "250-400", label: "250 - 400 m²" },
  { value: "above-400", label: "Trên 400 m²" },
];

const BEDROOM_OPTIONS = [
  { value: "all", label: "Bất kỳ số phòng" },
  { value: "1", label: "1+ Phòng ngủ" },
  { value: "2", label: "2+ Phòng ngủ" },
  { value: "3", label: "3+ Phòng ngủ" },
  { value: "4", label: "4+ Phòng ngủ" },
];

const POPULAR_PILLS = [
  { label: "Biệt thự sinh thái", key: "propertyType" as const, value: "biet-thu" },
  { label: "Căn hộ cao cấp", key: "propertyType" as const, value: "can-ho" },
  { label: "Hà Nội", key: "location" as const, value: "ha-noi" },
  { label: "TP. Hồ Chí Minh", key: "location" as const, value: "tp-hcm" },
  { label: "Dưới 10 Tỷ", key: "priceRange" as const, value: "5b-10b" },
  { label: "Dinh thự ven sông", key: "propertyType" as const, value: "dinh-thu" },
];

export function PropertyFilterBar({
  filters,
  onFilterChange,
  onReset,
  onOpenMobileDrawer,
  totalResults,
}: PropertyFilterBarProps) {
  // Compute active filters count
  const activeCount = [
    filters.keyword ? 1 : 0,
    filters.propertyType !== "all" ? 1 : 0,
    filters.location !== "all" ? 1 : 0,
    filters.priceRange !== "all" ? 1 : 0,
    filters.areaRange !== "all" ? 1 : 0,
    filters.bedrooms !== "all" ? 1 : 0,
  ].reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="w-full bg-white rounded-3xl p-5 sm:p-6 lg:p-7 border border-evergreen-border-subtle shadow-[0_15px_40px_-10px_rgba(18,21,18,0.07)] transition-all">
      {/* Top Bar: Keyword Search + Quick Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-evergreen-border-subtle/80">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-evergreen-forest absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={filters.keyword}
            onChange={(e) => onFilterChange("keyword", e.target.value)}
            placeholder="Tìm theo tên dự án, đường, quận huyện, tiện ích..."
            className="w-full pl-11 pr-10 py-3 rounded-full bg-evergreen-subtle/70 hover:bg-evergreen-subtle text-xs sm:text-sm font-medium text-evergreen-text-primary placeholder:text-evergreen-text-muted focus:outline-none focus:ring-2 focus:ring-evergreen-dark focus:bg-white transition-all border border-evergreen-border-subtle/60"
          />
          {filters.keyword && (
            <button
              type="button"
              onClick={() => onFilterChange("keyword", "")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
              aria-label="Xóa từ khóa tìm kiếm"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Action Controls: Mobile Drawer Trigger & Reset Button */}
        <div className="flex items-center gap-2.5 shrink-0 justify-between lg:justify-end">
          {/* Mobile Filter Button (visible on md and below) */}
          <button
            type="button"
            onClick={onOpenMobileDrawer}
            className="lg:hidden flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-evergreen-subtle hover:bg-[#E6E8DF] text-evergreen-text-primary text-xs sm:text-sm font-semibold transition-all border border-evergreen-border-subtle cursor-pointer active:scale-95"
          >
            <SlidersHorizontal className="w-4 h-4 text-evergreen-forest" />
            <span>Bộ lọc nâng cao</span>
            {activeCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-evergreen-dark text-evergreen-lime text-[11px] font-bold flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>

          {/* Reset Filters Button */}
          {activeCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-medium text-evergreen-text-secondary hover:text-evergreen-dark hover:bg-evergreen-subtle transition-colors cursor-pointer"
              aria-label="Đặt lại tất cả bộ lọc"
            >
              <RotateCcw className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Đặt lại ({activeCount})</span>
            </button>
          )}

          <div className="hidden lg:flex items-center gap-1.5 text-xs text-evergreen-text-secondary px-3 py-2 rounded-full bg-evergreen-subtle/60 border border-evergreen-border-subtle/50">
            <Sparkles className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>{totalResults} dự án khả dụng</span>
          </div>
        </div>
      </div>

      {/* Desktop Filter Dropdowns (hidden on mobile, visible lg+) */}
      <div className="hidden lg:grid grid-cols-5 gap-3.5 pt-5 items-center">
        {/* 1. Loại hình BĐS */}
        <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-2xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/80 hover:border-evergreen-border-strong transition-colors">
          <label
            htmlFor="filter-property-type"
            className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-evergreen-text-secondary tracking-wider"
          >
            <Building2 className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Loại hình BĐS</span>
          </label>
          <select
            id="filter-property-type"
            value={filters.propertyType}
            onChange={(e) => onFilterChange("propertyType", e.target.value)}
            className="bg-transparent text-xs font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
          >
            {PROPERTY_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Khu vực */}
        <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-2xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/80 hover:border-evergreen-border-strong transition-colors">
          <label
            htmlFor="filter-location"
            className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-evergreen-text-secondary tracking-wider"
          >
            <MapPin className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Khu vực</span>
          </label>
          <select
            id="filter-location"
            value={filters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
            className="bg-transparent text-xs font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
          >
            {LOCATION_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Khoảng giá VNĐ */}
        <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-2xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/80 hover:border-evergreen-border-strong transition-colors">
          <label
            htmlFor="filter-price-range"
            className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-evergreen-text-secondary tracking-wider"
          >
            <Banknote className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Mức giá (VNĐ)</span>
          </label>
          <select
            id="filter-price-range"
            value={filters.priceRange}
            onChange={(e) => onFilterChange("priceRange", e.target.value)}
            className="bg-transparent text-xs font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
          >
            {PRICE_RANGE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Diện tích m² */}
        <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-2xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/80 hover:border-evergreen-border-strong transition-colors">
          <label
            htmlFor="filter-area-range"
            className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-evergreen-text-secondary tracking-wider"
          >
            <Maximize2 className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Diện tích (m²)</span>
          </label>
          <select
            id="filter-area-range"
            value={filters.areaRange}
            onChange={(e) => onFilterChange("areaRange", e.target.value)}
            className="bg-transparent text-xs font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
          >
            {AREA_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* 5. Số phòng ngủ */}
        <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-2xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/80 hover:border-evergreen-border-strong transition-colors">
          <label
            htmlFor="filter-bedrooms"
            className="flex items-center gap-1.5 text-[10px] uppercase font-semibold text-evergreen-text-secondary tracking-wider"
          >
            <BedDouble className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Số phòng ngủ</span>
          </label>
          <select
            id="filter-bedrooms"
            value={filters.bedrooms}
            onChange={(e) => onFilterChange("bedrooms", e.target.value)}
            className="bg-transparent text-xs font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
          >
            {BEDROOM_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Filter Pills Row */}
      <div className="mt-4 pt-4 border-t border-evergreen-border-subtle/60 flex items-center flex-wrap gap-2">
        <span className="text-xs text-evergreen-text-muted font-medium mr-1 flex items-center gap-1">
          <SlidersHorizontal className="w-3 h-3 text-evergreen-forest" />
          <span>Gợi ý lọc:</span>
        </span>
        {POPULAR_PILLS.map((pill) => {
          const isActive = filters[pill.key] === pill.value;
          return (
            <button
              key={`${pill.key}-${pill.value}`}
              type="button"
              onClick={() => {
                if (isActive) {
                  onFilterChange(pill.key, "all");
                } else {
                  onFilterChange(pill.key, pill.value);
                }
              }}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95",
                isActive
                  ? "bg-evergreen-dark text-white shadow-xs"
                  : "bg-evergreen-subtle text-evergreen-text-secondary hover:text-evergreen-text-primary hover:bg-[#E6E8DF]"
              )}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      {/* Active Filter Tags Row (if any active filters) */}
      {activeCount > 0 && (
        <div className="mt-3 pt-3 border-t border-dashed border-evergreen-border-subtle/80 flex items-center flex-wrap gap-1.5 text-xs">
          <span className="text-[11px] text-evergreen-text-muted font-medium mr-1">
            Đang áp dụng:
          </span>

          {filters.keyword && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-dark text-white text-[11px] font-medium">
              <span>Từ khóa: &quot;{filters.keyword}&quot;</span>
              <button
                type="button"
                onClick={() => onFilterChange("keyword", "")}
                className="hover:text-evergreen-lime transition-colors cursor-pointer"
                aria-label="Xóa từ khóa"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.propertyType !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-[11px] font-medium">
              <span>
                Loại:{" "}
                {PROPERTY_TYPE_OPTIONS.find((o) => o.value === filters.propertyType)?.label}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange("propertyType", "all")}
                className="text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
                aria-label="Xóa loại hình"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.location !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-[11px] font-medium">
              <span>
                Khu vực:{" "}
                {LOCATION_OPTIONS.find((o) => o.value === filters.location)?.label}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange("location", "all")}
                className="text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
                aria-label="Xóa khu vực"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.priceRange !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-[11px] font-medium">
              <span>
                Giá:{" "}
                {PRICE_RANGE_OPTIONS.find((o) => o.value === filters.priceRange)?.label}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange("priceRange", "all")}
                className="text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
                aria-label="Xóa mức giá"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.areaRange !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-[11px] font-medium">
              <span>
                Diện tích:{" "}
                {AREA_OPTIONS.find((o) => o.value === filters.areaRange)?.label}
              </span>
              <button
                type="button"
                onClick={() => onFilterChange("areaRange", "all")}
                className="text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
                aria-label="Xóa diện tích"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}

          {filters.bedrooms !== "all" && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-[11px] font-medium">
              <span>
                Phòng ngủ: {filters.bedrooms}+ PN
              </span>
              <button
                type="button"
                onClick={() => onFilterChange("bedrooms", "all")}
                className="text-evergreen-text-muted hover:text-evergreen-text-primary transition-colors cursor-pointer"
                aria-label="Xóa phòng ngủ"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
