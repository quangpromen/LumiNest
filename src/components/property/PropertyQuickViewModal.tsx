"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  X,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Compass,
  FileCheck2,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Property, PropertyType, PropertyStatus } from "@/types/property";
import { formatCurrencyVND, formatArea } from "@/lib/formatters";
import { cn } from "@/lib/utils";

interface PropertyQuickViewModalProps {
  property: Property | null;
  onClose: () => void;
}

const emptySubscribe = () => () => {};

const STATUS_CONFIG: Record<PropertyStatus, { label: string; className: string }> = {
  "dang-mo-ban": { label: "Đang mở bán", className: "bg-emerald-600 text-white" },
  "sap-ban-giao": { label: "Sắp bàn giao", className: "bg-sky-600 text-white" },
  hot: { label: "Giới hạn (Hot)", className: "bg-amber-600 text-white" },
  "da-ban": { label: "Đã giao dịch", className: "bg-neutral-600 text-white" },
};

const TYPE_CONFIG: Record<PropertyType, string> = {
  "biet-thu": "Biệt thự sinh thái",
  "can-ho": "Căn hộ cao cấp",
  penthouse: "Sky Villa & Penthouse",
  "nha-pho": "Nhà phố thương mại",
  "dinh-thu": "Dinh thự ven sông",
};

export function PropertyQuickViewModal({ property, onClose }: PropertyQuickViewModalProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (property) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [property]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!property || !isMounted) return null;

  const statusInfo = STATUS_CONFIG[property.status] || {
    label: "Đang mở bán",
    className: "bg-emerald-600 text-white",
  };
  const typeLabel = TYPE_CONFIG[property.propertyType] || "BĐS Sinh thái";
  const galleryImages = property.gallery?.length ? property.gallery : [property.featuredImage];
  const currentDisplayImage = selectedImage || property.featuredImage;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Xem nhanh thông số: ${property.title}`}
      className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl sm:rounded-[32px] shadow-2xl border border-evergreen-border-subtle flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng bảng xem nhanh"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-evergreen-text-primary shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 border border-evergreen-border-subtle/80 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-evergreen-dark rounded-t-3xl sm:rounded-t-[32px]">
          <Image
            src={currentDisplayImage}
            alt={property.title}
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            className="object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Badges on image */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 pointer-events-none">
            <span
              className={cn(
                "px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm",
                statusInfo.className
              )}
            >
              {statusInfo.label}
            </span>
            <span className="backdrop-blur-md bg-black/50 border border-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
              {typeLabel}
            </span>
          </div>

          {/* Title and location inside image bottom */}
          <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 text-white pointer-events-none">
            <div className="flex items-center gap-1.5 text-xs text-evergreen-lime font-medium mb-1">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>
                {property.location.address}, {property.location.district}, {property.location.city}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              {property.title}
            </h2>
          </div>
        </div>

        {/* Gallery Thumbnails (if > 1 image) */}
        {galleryImages.length > 1 && (
          <div className="px-5 sm:px-6 py-3 bg-[#FBFBF8] border-b border-evergreen-border-subtle flex items-center gap-2 overflow-x-auto">
            {galleryImages.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={cn(
                  "relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer",
                  currentDisplayImage === img
                    ? "border-evergreen-dark ring-2 ring-evergreen-lime/80 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                )}
                aria-label={`Xem ảnh ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`${property.title} - ảnh ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 sm:p-7 md:p-8 flex flex-col gap-6">
          {/* Price & Highlight Specs Ribbon */}
          <div className="p-4 sm:p-5 rounded-2xl bg-evergreen-subtle/70 border border-evergreen-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-evergreen-text-secondary font-medium">
                Mức giá niêm yết
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl sm:text-3xl font-bold text-evergreen-text-primary tracking-tight">
                  {formatCurrencyVND(property.price)}
                </span>
                {property.pricePerSquareMeter && (
                  <span className="text-xs sm:text-sm text-evergreen-text-secondary font-medium">
                    (~{property.pricePerSquareMeter})
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 border-t sm:border-t-0 sm:border-l border-evergreen-border-subtle pt-3 sm:pt-0 sm:pl-6 text-sm text-evergreen-text-primary font-semibold">
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-evergreen-forest" />
                <span>{property.specs.bedrooms} PN</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-4 h-4 text-evergreen-forest" />
                <span>{property.specs.bathrooms} WC</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize2 className="w-4 h-4 text-evergreen-forest" />
                <span>{formatArea(property.specs.usableArea)}</span>
              </div>
            </div>
          </div>

          {/* Tagline */}
          {property.tagline && (
            <p className="text-sm sm:text-base text-evergreen-text-secondary italic border-l-2 border-evergreen-lime pl-3.5 py-0.5">
              &ldquo;{property.tagline}&rdquo;
            </p>
          )}

          {/* Detailed Specs Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-semibold text-evergreen-text-secondary mb-3">
              Thông số kiến trúc & Pháp lý
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-white border border-evergreen-border-subtle">
                <span className="text-[11px] text-evergreen-text-muted flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5 text-evergreen-forest" /> Diện tích đất
                </span>
                <p className="text-sm font-semibold text-evergreen-text-primary mt-1">
                  {property.specs.landArea ? formatArea(property.specs.landArea) : "Theo mặt bằng"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-evergreen-border-subtle">
                <span className="text-[11px] text-evergreen-text-muted flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-evergreen-forest" /> Hướng ban công
                </span>
                <p className="text-sm font-semibold text-evergreen-text-primary mt-1">
                  {property.specs.direction || "Đông Nam"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-evergreen-border-subtle">
                <span className="text-[11px] text-evergreen-text-muted flex items-center gap-1">
                  <FileCheck2 className="w-3.5 h-3.5 text-evergreen-forest" /> Pháp lý
                </span>
                <p className="text-sm font-semibold text-evergreen-text-primary mt-1 truncate">
                  {property.specs.legal}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-evergreen-border-subtle">
                <span className="text-[11px] text-evergreen-text-muted flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-evergreen-forest" /> Số tầng
                </span>
                <p className="text-sm font-semibold text-evergreen-text-primary mt-1">
                  {property.specs.floors ? `${property.specs.floors} Tầng` : "1 Căn"}
                </p>
              </div>
            </div>
          </div>

          {/* Amenities & Highlights */}
          {property.amenities?.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-evergreen-text-secondary mb-3">
                Tiện ích & Điểm nhấn sinh thái
              </h3>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-evergreen-subtle/90 border border-evergreen-border-subtle text-xs font-medium text-evergreen-text-primary"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Phase 6 Notice Banner */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Giai đoạn sau (Phase 6):</strong> Trang chi tiết độc lập{" "}
              <code className="px-1.5 py-0.5 rounded bg-amber-100 font-mono text-[11px]">
                /bat-dong-san/[slug]
              </code>{" "}
              sẽ được bổ sung sơ đồ mặt bằng tương tác, bảng phân tích tỷ suất đầu tư và thư viện 360° VR.
              Tại Phase 4 này, bảng thông số xem nhanh đảm bảo không phát sinh liên kết 404.
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-evergreen-border-subtle">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-evergreen-subtle hover:bg-[#E6E8DF] text-evergreen-text-primary text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Đóng cửa sổ
            </button>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2.5">
              <a
                href={`/bat-dong-san/${property.slug}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-evergreen-dark hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs"
              >
                <span>Xem chi tiết đầy đủ</span>
                <Sparkles className="w-4 h-4 text-evergreen-lime" />
              </a>

              <a
                href="/lien-he"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-xs"
              >
                <Calendar className="w-4 h-4 stroke-[2.2]" />
                <span>Liên hệ tư vấn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
