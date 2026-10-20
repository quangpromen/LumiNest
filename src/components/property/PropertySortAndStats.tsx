"use client";

import React from "react";
import { ArrowUpDown } from "lucide-react";

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "area-desc"
  | "area-asc"
  | "rooms-desc";

interface PropertySortAndStatsProps {
  totalCount: number;
  filteredCount: number;
  startIndex: number;
  endIndex: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Mặc định (Nổi bật nhất)" },
  { value: "price-asc", label: "Giá: Thấp đến cao" },
  { value: "price-desc", label: "Giá: Cao đến thấp" },
  { value: "area-desc", label: "Diện tích: Lớn nhất" },
  { value: "area-asc", label: "Diện tích: Nhỏ nhất" },
  { value: "rooms-desc", label: "Số phòng ngủ: Nhiều nhất" },
];

export function PropertySortAndStats({
  totalCount,
  filteredCount,
  startIndex,
  endIndex,
  sort,
  onSortChange,
}: PropertySortAndStatsProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 px-1">
      {/* Results Count Text */}
      <div className="flex items-center gap-2">
        <span className="text-xs sm:text-sm text-evergreen-text-secondary">
          {filteredCount === 0 ? (
            <span>Không tìm thấy dự án nào</span>
          ) : (
            <span>
              Hiển thị{" "}
              <strong className="font-semibold text-evergreen-text-primary">
                {startIndex}–{endIndex}
              </strong>{" "}
              trong tổng số{" "}
              <strong className="font-semibold text-evergreen-text-primary">
                {filteredCount}
              </strong>{" "}
              bất động sản ({totalCount} trong kho dữ liệu)
            </span>
          )}
        </span>
      </div>

      {/* Sort Selector Dropdown */}
      <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
        <label
          htmlFor="sort-select"
          className="text-xs text-evergreen-text-secondary flex items-center gap-1 font-medium whitespace-nowrap"
        >
          <ArrowUpDown className="w-3.5 h-3.5 text-evergreen-forest" />
          <span>Sắp xếp:</span>
        </label>
        <div className="relative">
          <select
            id="sort-select"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="pl-3 pr-8 py-2 rounded-full bg-white border border-evergreen-border-subtle hover:border-evergreen-border-strong text-xs font-semibold text-evergreen-text-primary focus:outline-none focus:ring-2 focus:ring-evergreen-dark cursor-pointer shadow-xs transition-colors appearance-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value} className="text-evergreen-text-primary">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-evergreen-text-muted text-[10px]">
            ▼
          </div>
        </div>
      </div>
    </div>
  );
}
