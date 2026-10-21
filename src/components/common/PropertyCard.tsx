"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Maximize2, MapPin, ArrowUpRight, Eye } from "lucide-react";
import { Property, PropertyStatus, PropertyType } from "@/types/property";
import { formatCurrencyVND, formatArea } from "@/lib/formatters";
import { cn } from "@/lib/utils";

export interface PropertyCardProps {
  property: Property;
  className?: string;
  onQuickView?: (property: Property) => void;
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
  "dinh-thu": "Dinh thự ven sông",
};

export function PropertyCard({ property, className, onQuickView }: PropertyCardProps) {
  const statusInfo = STATUS_CONFIG[property.status] || {
    label: "Đang mở bán",
    className: "bg-emerald-600 text-white",
  };
  const typeLabel = TYPE_CONFIG[property.propertyType] || "BĐS Sinh thái";
  const detailUrl = `/bat-dong-san/${property.slug}`;

  return (
    <article
      className={cn(
        "group relative bg-white rounded-3xl border border-evergreen-border-subtle overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_-12px_rgba(18,21,18,0.12)] hover:border-evergreen-border-strong",
        className
      )}
    >
      <div>
        {/* Image Container with 4:3 Ratio linking to detail page */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-evergreen-subtle">
          <Link
            href={detailUrl}
            className="block w-full h-full"
            aria-label={`Xem chi tiết ${property.title}`}
          >
            <Image
              src={property.featuredImage}
              alt={property.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 420px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </Link>

          {/* Subtle gradient vignette at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Top Badges */}
          <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between gap-2 pointer-events-none">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase shadow-xs",
                statusInfo.className
              )}
            >
              {statusInfo.label}
            </span>

            <span className="backdrop-blur-md bg-black/40 border border-white/20 text-white px-3 py-1 rounded-full text-[11px] font-medium shadow-xs">
              {typeLabel}
            </span>
          </div>

          {/* Quick View trigger button if supported */}
          {onQuickView && (
            <div className="absolute top-12 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onQuickView(property);
                }}
                className="px-3 py-1.5 rounded-full bg-white/95 hover:bg-white text-evergreen-text-primary text-[11px] font-semibold shadow-md backdrop-blur-md flex items-center gap-1.5 border border-evergreen-border-subtle hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label={`Xem nhanh thông số ${property.title}`}
              >
                <Eye className="w-3.5 h-3.5 text-evergreen-forest" />
                <span>Xem nhanh</span>
              </button>
            </div>
          )}

          {/* Location pill over bottom of photo */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/15">
            <MapPin className="w-3.5 h-3.5 text-evergreen-lime shrink-0" />
            <span className="truncate max-w-[200px]">
              {property.location.district}, {property.location.city}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col gap-3">
          {/* Specifications row */}
          <div className="flex items-center gap-3.5 text-xs text-evergreen-text-secondary pb-3 border-b border-evergreen-border-subtle/80">
            <div className="flex items-center gap-1.5">
              <BedDouble className="w-4 h-4 text-evergreen-forest" />
              <span>{property.specs.bedrooms} PN</span>
            </div>
            <span className="text-evergreen-border-strong">•</span>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-evergreen-forest" />
              <span>{property.specs.bathrooms} WC</span>
            </div>
            <span className="text-evergreen-border-strong">•</span>
            <div className="flex items-center gap-1.5">
              <Maximize2 className="w-4 h-4 text-evergreen-forest" />
              <span>{formatArea(property.specs.usableArea)}</span>
            </div>
          </div>

          {/* Title linking to detail page */}
          <div>
            <Link
              href={detailUrl}
              className="text-base sm:text-lg font-semibold text-evergreen-text-primary tracking-tight hover:text-evergreen-forest transition-colors line-clamp-1 block cursor-pointer"
            >
              {property.title}
            </Link>
            {property.tagline && (
              <p className="text-xs text-evergreen-text-secondary mt-1 line-clamp-1">
                {property.tagline}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer Price & Action */}
      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-wider text-evergreen-text-muted font-medium">
            Mức giá niêm yết
          </span>
          <span className="text-base sm:text-lg font-bold text-evergreen-text-primary tracking-tight">
            {formatCurrencyVND(property.price)}
          </span>
        </div>

        <Link
          href={detailUrl}
          className="w-10 h-10 rounded-full bg-evergreen-subtle group-hover:bg-evergreen-lime text-evergreen-text-primary group-hover:text-evergreen-dark flex items-center justify-center transition-all duration-300 shadow-xs active:scale-95"
          aria-label={`Xem chi tiết ${property.title}`}
        >
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
