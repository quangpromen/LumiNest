"use client";

import React from "react";
import { SearchX, RotateCcw, Building2, Home, Trees, Sparkles } from "lucide-react";

interface PropertyEmptyStateProps {
  onReset: () => void;
  onSelectCategory?: (type: string) => void;
}

export function PropertyEmptyState({ onReset, onSelectCategory }: PropertyEmptyStateProps) {
  return (
    <div className="w-full py-16 sm:py-20 px-4 flex flex-col items-center justify-center text-center bg-white rounded-3xl border border-evergreen-border-subtle shadow-sm my-6">
      {/* Icon Badge */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-evergreen-subtle flex items-center justify-center text-evergreen-forest mb-5 shadow-xs">
        <SearchX className="w-8 h-8 sm:w-10 sm:h-10 text-evergreen-forest stroke-[1.5]" />
      </div>

      {/* Heading & Subtitle */}
      <h3 className="text-xl sm:text-2xl font-semibold text-evergreen-text-primary tracking-tight">
        Không tìm thấy bất động sản phù hợp
      </h3>
      <p className="text-xs sm:text-sm text-evergreen-text-secondary max-w-md mt-2 leading-relaxed">
        Rất tiếc, hiện chưa có bất động sản nào thỏa mãn đồng thời tất cả tiêu chí bạn đã chọn.
        Hãy thử nới lỏng mức giá, khu vực hoặc đặt lại các bộ lọc.
      </p>

      {/* Reset Button */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-evergreen-dark hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-evergreen-lime" />
          <span>Đặt lại tất cả bộ lọc</span>
        </button>
      </div>

      {/* Suggested Quick Filter Categories */}
      {onSelectCategory && (
        <div className="mt-10 pt-6 border-t border-evergreen-border-subtle/80 flex flex-col items-center gap-3 w-full max-w-lg">
          <span className="text-xs text-evergreen-text-muted font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-evergreen-forest" />
            <span>Hoặc khám phá danh mục nổi bật:</span>
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => onSelectCategory("biet-thu")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-evergreen-subtle hover:bg-[#E6E8DF] text-xs text-evergreen-text-primary font-medium transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Biệt thự sinh thái</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("can-ho")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-evergreen-subtle hover:bg-[#E6E8DF] text-xs text-evergreen-text-primary font-medium transition-colors cursor-pointer"
            >
              <Building2 className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Căn hộ cao cấp</span>
            </button>
            <button
              type="button"
              onClick={() => onSelectCategory("dinh-thu")}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-evergreen-subtle hover:bg-[#E6E8DF] text-xs text-evergreen-text-primary font-medium transition-colors cursor-pointer"
            >
              <Trees className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Dinh thự ven sông/biển</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
