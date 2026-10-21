"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowLeft,
  Share2,
  Check,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Property, PropertyStatus, PropertyType } from "@/types/property";
import { formatCurrencyVND } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface PropertyBreadcrumbHeaderProps {
  property: Property;
}

const STATUS_CONFIG: Record<PropertyStatus, { label: string; className: string }> = {
  "dang-mo-ban": {
    label: "Đang mở bán",
    className: "bg-emerald-600 text-white",
  },
  "sap-ban-giao": {
    label: "Sắp bàn giao",
    className: "bg-sky-600 text-white",
  },
  hot: {
    label: "Giới hạn (Hot)",
    className: "bg-amber-600 text-white",
  },
  "da-ban": {
    label: "Đã giao dịch",
    className: "bg-neutral-600 text-white",
  },
};

const TYPE_CONFIG: Record<PropertyType, string> = {
  "biet-thu": "Biệt thự sinh thái",
  "can-ho": "Căn hộ cao cấp",
  penthouse: "Sky Villa & Penthouse",
  "nha-pho": "Nhà phố thương mại",
  "dinh-thu": "Dinh thự ven sông/biển",
};

export function PropertyBreadcrumbHeader({ property }: PropertyBreadcrumbHeaderProps) {
  const [copied, setCopied] = useState(false);

  const statusInfo = STATUS_CONFIG[property.status] || {
    label: "Đang mở bán",
    className: "bg-emerald-600 text-white",
  };
  const typeLabel = TYPE_CONFIG[property.propertyType] || "BĐS Sinh thái";

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
      }
    } catch {
      // Fallback
    }
  };

  return (
    <header className="mb-6 sm:mb-8">
      {/* Top Bar: Breadcrumb + Action Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-evergreen-border-subtle/80">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Đường dẫn trang"
          className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-evergreen-text-secondary"
        >
          <Link
            href="/"
            className="hover:text-evergreen-forest transition-colors font-medium hover:underline underline-offset-4"
          >
            Trang chủ
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-evergreen-border-strong shrink-0" />
          <Link
            href="/bat-dong-san"
            className="hover:text-evergreen-forest transition-colors font-medium hover:underline underline-offset-4"
          >
            Bất động sản
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-evergreen-border-strong shrink-0" />
          <span
            className="text-evergreen-text-primary font-semibold truncate max-w-[220px] sm:max-w-xs md:max-w-md"
            title={property.title}
          >
            {property.title}
          </span>
        </nav>

        {/* Action Buttons: Back + Share */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/bat-dong-san"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 shadow-xs"
            aria-label="Quay lại danh sách bất động sản"
          >
            <ArrowLeft className="w-4 h-4 text-evergreen-forest shrink-0" />
            <span className="hidden xs:inline">Quay lại danh sách</span>
            <span className="xs:hidden">Quay lại</span>
          </Link>

          <button
            type="button"
            onClick={handleShare}
            className={cn(
              "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95 shadow-xs cursor-pointer",
              copied
                ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                : "bg-white hover:bg-evergreen-subtle border-evergreen-border-subtle text-evergreen-text-primary"
            )}
            aria-label="Sao chép liên kết chia sẻ bất động sản"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Đã sao chép liên kết!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 text-evergreen-forest shrink-0" />
                <span>Chia sẻ</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Title & Header Body */}
      <div className="pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          {/* Badges Row */}
          <div className="flex items-center flex-wrap gap-2">
            <span
              className={cn(
                "px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-xs",
                statusInfo.className
              )}
            >
              {statusInfo.label}
            </span>

            <span className="px-3.5 py-1 rounded-full text-xs font-medium bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest shadow-xs">
              {typeLabel}
            </span>

            {property.specs.legal && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{property.specs.legal}</span>
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 border border-amber-200 text-amber-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Dữ liệu minh hoạ</span>
            </span>
          </div>

          {/* Heading 1 Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-evergreen-text-primary tracking-tight leading-[1.15]">
            {property.title}
          </h1>

          {/* Tagline if available */}
          {property.tagline && (
            <p className="text-sm sm:text-base text-evergreen-text-secondary leading-relaxed">
              {property.tagline}
            </p>
          )}

          {/* Address Line */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-evergreen-text-secondary pt-1">
            <MapPin className="w-4 h-4 text-evergreen-lime shrink-0 drop-shadow-xs" />
            <span className="font-medium text-evergreen-text-primary">
              {property.location.address}
            </span>
            <span className="text-evergreen-border-strong">•</span>
            <span>
              {property.location.district}, {property.location.city}
            </span>
          </div>
        </div>

        {/* Pricing Card Header Callout (Desktop) */}
        <div className="lg:text-right shrink-0 p-4 sm:p-5 rounded-3xl bg-white border border-evergreen-border-subtle shadow-sm flex flex-col justify-center">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-evergreen-text-muted">
            Mức giá niêm yết
          </span>
          <div className="flex items-baseline lg:justify-end gap-2 mt-1">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-evergreen-text-primary tracking-tight">
              {formatCurrencyVND(property.price)}
            </span>
          </div>
          {property.pricePerSquareMeter && (
            <span className="text-xs text-evergreen-forest font-medium mt-1">
              Ước tính: {property.pricePerSquareMeter}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
