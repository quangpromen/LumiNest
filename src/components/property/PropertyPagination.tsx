"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function PropertyPagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PropertyPaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      role="navigation"
      aria-label="Phân trang bất động sản"
      className={cn("flex items-center justify-center gap-1.5 sm:gap-2 my-10", className)}
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Trang trước"
        className={cn(
          "flex items-center gap-1 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer",
          currentPage <= 1
            ? "border-evergreen-border-subtle/60 text-evergreen-text-muted bg-white/50 cursor-not-allowed opacity-50"
            : "border-evergreen-border-subtle bg-white text-evergreen-text-primary hover:bg-evergreen-subtle active:scale-95 shadow-xs"
        )}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Trước</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pages.map((p, idx) => {
          if (p === "...") {
            return (
              <span
                key={`dots-${idx}`}
                className="w-8 sm:w-10 text-center text-xs text-evergreen-text-muted select-none"
              >
                •••
              </span>
            );
          }

          const pageNum = Number(p);
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              type="button"
              onClick={() => onPageChange(pageNum)}
              aria-label={`Trang ${pageNum}`}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "w-9 h-9 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer",
                isActive
                  ? "bg-evergreen-dark text-white shadow-xs scale-105"
                  : "bg-white border border-evergreen-border-subtle text-evergreen-text-secondary hover:text-evergreen-text-primary hover:bg-evergreen-subtle hover:border-evergreen-border-strong active:scale-95"
              )}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Trang kế tiếp"
        className={cn(
          "flex items-center gap-1 px-3.5 sm:px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer",
          currentPage >= totalPages
            ? "border-evergreen-border-subtle/60 text-evergreen-text-muted bg-white/50 cursor-not-allowed opacity-50"
            : "border-evergreen-border-subtle bg-white text-evergreen-text-primary hover:bg-evergreen-subtle active:scale-95 shadow-xs"
        )}
      >
        <span className="hidden sm:inline">Sau</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
