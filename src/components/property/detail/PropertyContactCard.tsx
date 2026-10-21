"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Sparkles,
  ShieldCheck,
  FileText,
  Copy,
  Check,
  Info,
  Clock,
  ArrowRight,
} from "lucide-react";
import { Property, PropertyType } from "@/types/property";
import { formatCurrencyVND, formatArea } from "@/lib/formatters";

interface PropertyContactCardProps {
  property: Property;
  className?: string;
}

const TYPE_CONFIG: Record<PropertyType, string> = {
  "biet-thu": "Biệt thự sinh thái",
  "can-ho": "Căn hộ cao cấp",
  penthouse: "Sky Villa & Penthouse",
  "nha-pho": "Nhà phố thương mại",
  "dinh-thu": "Dinh thự ven sông/biển",
};

export function PropertyContactCard({ property, className = "" }: PropertyContactCardProps) {
  const [copied, setCopied] = useState(false);

  const contactUrl = `/lien-he?property=${encodeURIComponent(
    property.title
  )}&slug=${property.slug}&type=${property.propertyType}`;

  const handleCopyCode = async () => {
    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(
          `Mã tài sản: ${property.id} — ${property.title} (${property.location.city})`
        );
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  return (
    <div
      className={`rounded-3xl bg-white border border-evergreen-border-subtle p-6 sm:p-7 shadow-[0_15px_40px_-15px_rgba(18,21,18,0.08)] flex flex-col gap-6 ${className}`}
    >
      {/* Card Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
          <span>Tư vấn độc quyền</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-evergreen-text-primary tracking-tight">
          Quan tâm đến bất động sản này?
        </h3>
        <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-2 leading-relaxed">
          Đội ngũ chuyên viên tư vấn LumiNest sẵn sàng cung cấp trọn bộ hồ sơ kiến
          trúc, sơ đồ mặt bằng và chính sách hỗ trợ chi tiết nhất.
        </p>
      </div>

      {/* Property Snippet Box */}
      <div className="p-4 rounded-2xl bg-evergreen-subtle/80 border border-evergreen-border-subtle flex items-center gap-3.5">
        <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0">
          <Image
            src={property.featuredImage}
            alt={property.title}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] uppercase font-bold text-evergreen-text-muted tracking-wider block">
            {TYPE_CONFIG[property.propertyType]}
          </span>
          <span className="text-sm font-bold text-evergreen-text-primary truncate block">
            {property.title}
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-sm font-extrabold text-emerald-800 tracking-tight">
              {formatCurrencyVND(property.price)}
            </span>
            <span className="text-evergreen-border-strong text-xs">•</span>
            <span className="text-xs text-evergreen-text-secondary">
              {formatArea(property.specs.usableArea)}
            </span>
          </div>
        </div>
      </div>

      {/* Trust Points */}
      <div className="space-y-2.5 text-xs text-evergreen-text-secondary border-y border-evergreen-border-subtle/80 py-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Hồ sơ minh bạch: {property.specs.legal}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-evergreen-forest shrink-0" />
          <span>Phản hồi qua email trong vòng 2 giờ làm việc</span>
        </div>
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-evergreen-forest shrink-0" />
          <span>Bản vẽ kỹ thuật & phối cảnh 3D độ phân giải cao</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        {/* Main CTA */}
        <Link
          href={contactUrl}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-bold text-sm tracking-tight transition-all duration-200 active:scale-95 shadow-md shadow-evergreen-lime/20"
        >
          <Calendar className="w-4 h-4 stroke-[2.2]" />
          <span>Liên hệ tư vấn ngay</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Copy Asset ID */}
        <button
          type="button"
          onClick={handleCopyCode}
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-xs font-medium transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Đã sao chép mã tài sản!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-evergreen-forest" />
              <span>Sao chép mã tài sản (#{property.id})</span>
            </>
          )}
        </button>
      </div>

      {/* Demo Notice */}
      <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[11px] leading-relaxed flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
        <span>
          <strong>Lưu ý:</strong> Nút liên hệ sẽ chuyển hướng tới trang tiếp nhận
          thông tin kèm dữ liệu tham chiếu về bất động sản này.
        </span>
      </div>
    </div>
  );
}
