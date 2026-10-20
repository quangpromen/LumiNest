"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Building2,
  Banknote,
  MapPin,
  BedDouble,
  Search,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Options definition
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
  { value: "ha-noi", label: "Hà Nội (Tây Hồ, Ciputra)" },
  { value: "tp-hcm", label: "TP. Hồ Chí Minh (Thủ Thiêm, Thảo Điền)" },
  { value: "da-nang", label: "Đà Nẵng (Sơn Trà, Mỹ Khê)" },
  { value: "phu-quoc", label: "Phú Quốc (Bãi Trường)" },
];

const BEDROOM_OPTIONS = [
  { value: "all", label: "Bất kỳ số phòng" },
  { value: "1", label: "1+ Phòng ngủ" },
  { value: "2", label: "2+ Phòng ngủ" },
  { value: "3", label: "3+ Phòng ngủ" },
  { value: "4", label: "4+ Phòng ngủ" },
];

const QUICK_FILTERS = [
  { id: "hanoi", label: "Hà Nội", type: "location", value: "ha-noi" },
  { id: "hcm", label: "TP. Hồ Chí Minh", type: "location", value: "tp-hcm" },
  { id: "biet-thu", label: "Biệt thự ven sông", type: "propertyType", value: "biet-thu" },
  { id: "can-ho", label: "Căn hộ sinh thái", type: "propertyType", value: "can-ho" },
  { id: "nghi-duong", label: "Nghỉ dưỡng biển", type: "propertyType", value: "dinh-thu" },
];

export function HeroSearchWidget() {
  const router = useRouter();
  // Search filter states
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [location, setLocation] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);

  const handleChipClick = (chip: typeof QUICK_FILTERS[number]) => {
    if (activeChip === chip.id) {
      // Toggle off
      setActiveChip(null);
      if (chip.type === "location") setLocation("all");
      if (chip.type === "propertyType") setPropertyType("all");
    } else {
      setActiveChip(chip.id);
      if (chip.type === "location") setLocation(chip.value);
      if (chip.type === "propertyType") setPropertyType(chip.value);
    }
  };

  const handleReset = () => {
    setPropertyType("all");
    setPriceRange("all");
    setLocation("all");
    setBedrooms("all");
    setActiveChip(null);
    setSubmitNotice(null);
  };

  const hasActiveFilters =
    propertyType !== "all" ||
    priceRange !== "all" ||
    location !== "all" ||
    bedrooms !== "all" ||
    activeChip !== null;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare URL query parameters for Listing page
    const params = new URLSearchParams();
    if (propertyType !== "all") params.set("type", propertyType);
    if (priceRange !== "all") params.set("price", priceRange);
    if (location !== "all") params.set("location", location);
    if (bedrooms !== "all") params.set("rooms", bedrooms);

    const queryString = params.toString();
    const destination = queryString ? `/bat-dong-san?${queryString}` : "/bat-dong-san";

    // Navigate to listing page with query params
    router.push(destination);
  };

  return (
    <div className="w-full lg:w-[86%] xl:w-[80%] max-w-[1280px] mx-auto -mt-12 sm:-mt-16 lg:-mt-20 xl:-mt-24 relative z-20 px-3 sm:px-4 lg:px-0">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 shadow-[0_25px_55px_-12px_rgba(18,21,18,0.14)] border border-evergreen-border-subtle">
        {/* Header row inside widget */}
        <div className="flex items-center justify-between pb-4 border-b border-evergreen-border-subtle/80 mb-5">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 rounded-full bg-evergreen-dark text-evergreen-lime flex items-center justify-center">
              <Search className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-evergreen-text-primary uppercase">
              Tìm kiếm không gian lý tưởng
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-evergreen-text-secondary hover:text-evergreen-dark flex items-center gap-1 transition-colors px-2.5 py-1 rounded-full hover:bg-evergreen-subtle cursor-pointer"
                aria-label="Đặt lại bộ lọc"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Đặt lại</span>
              </button>
            )}
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-evergreen-subtle text-evergreen-text-secondary text-[11px] font-medium border border-evergreen-border-subtle/60">
              <Sparkles className="w-3 h-3 text-evergreen-forest" />
              Dữ liệu demo 2026
            </span>
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-3.5 items-center">
            {/* Field 1: Loại hình */}
            <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/70 hover:border-evergreen-border-strong transition-colors">
              <label
                htmlFor="search-property-type"
                className="flex items-center gap-1.5 text-[11px] font-medium text-evergreen-text-secondary uppercase tracking-wider"
              >
                <Building2 className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Loại hình BĐS</span>
              </label>
              <select
                id="search-property-type"
                value={propertyType}
                onChange={(e) => {
                  setPropertyType(e.target.value);
                  setActiveChip(null);
                }}
                className="bg-transparent text-xs sm:text-sm font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
              >
                {PROPERTY_TYPE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Mức giá VNĐ */}
            <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/70 hover:border-evergreen-border-strong transition-colors">
              <label
                htmlFor="search-price-range"
                className="flex items-center gap-1.5 text-[11px] font-medium text-evergreen-text-secondary uppercase tracking-wider"
              >
                <Banknote className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Mức giá (VNĐ)</span>
              </label>
              <select
                id="search-price-range"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
              >
                {PRICE_RANGE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: Khu vực */}
            <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/70 hover:border-evergreen-border-strong transition-colors">
              <label
                htmlFor="search-location"
                className="flex items-center gap-1.5 text-[11px] font-medium text-evergreen-text-secondary uppercase tracking-wider"
              >
                <MapPin className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Khu vực</span>
              </label>
              <select
                id="search-location"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setActiveChip(null);
                }}
                className="bg-transparent text-xs sm:text-sm font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
              >
                {LOCATION_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 4: Số phòng ngủ */}
            <div className="flex flex-col gap-1.5 p-3 sm:p-3.5 rounded-xl bg-evergreen-subtle/60 border border-evergreen-border-subtle/70 hover:border-evergreen-border-strong transition-colors">
              <label
                htmlFor="search-bedrooms"
                className="flex items-center gap-1.5 text-[11px] font-medium text-evergreen-text-secondary uppercase tracking-wider"
              >
                <BedDouble className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Số phòng ngủ</span>
              </label>
              <select
                id="search-bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-evergreen-text-primary focus:outline-none cursor-pointer"
              >
                {BEDROOM_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Button & Quick Chips row */}
          <div className="mt-5 pt-4 border-t border-evergreen-border-subtle/70 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* Quick Filter Chips */}
            <div className="flex items-center flex-wrap gap-2 text-xs">
              <span className="text-evergreen-text-muted font-medium flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Lọc nhanh:</span>
              </span>
              {QUICK_FILTERS.map((chip) => {
                const isActive = activeChip === chip.id;
                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className={cn(
                      "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark",
                      isActive
                        ? "bg-evergreen-dark text-white shadow-xs"
                        : "bg-evergreen-subtle text-evergreen-text-secondary hover:text-evergreen-text-primary hover:bg-[#E6E8DF]"
                    )}
                  >
                    {chip.label}
                  </button>
                );
              })}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full lg:w-auto px-8 py-3.5 rounded-full bg-evergreen-dark hover:bg-black text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4 text-evergreen-lime" />
              <span>Tìm kiếm dự án</span>
            </button>
          </div>
        </form>

        {/* Feedback / Notice message */}
        {submitNotice && (
          <div className="mt-3.5 p-3 rounded-xl bg-evergreen-subtle border border-evergreen-border-subtle text-xs text-evergreen-text-primary flex items-start gap-2 animate-in fade-in duration-150">
            <CheckCircle2 className="w-4 h-4 text-evergreen-status-sale shrink-0 mt-0.5" />
            <span>{submitNotice}</span>
          </div>
        )}
      </div>
    </div>
  );
}
