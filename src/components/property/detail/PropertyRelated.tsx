import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { Property } from "@/types/property";
import { PropertyCard } from "@/components/common/PropertyCard";
import { mockProperties } from "@/data/properties";

interface PropertyRelatedProps {
  currentProperty: Property;
}

export function PropertyRelated({ currentProperty }: PropertyRelatedProps) {
  // Tìm BĐS tương tự: cùng loại hình hoặc cùng tỉnh thành, loại trừ BĐS đang xem
  const sameType = mockProperties.filter(
    (p) => p.id !== currentProperty.id && p.propertyType === currentProperty.propertyType
  );
  const otherSameCity = mockProperties.filter(
    (p) =>
      p.id !== currentProperty.id &&
      p.propertyType !== currentProperty.propertyType &&
      p.location.city === currentProperty.location.city
  );
  const others = mockProperties.filter(
    (p) =>
      p.id !== currentProperty.id &&
      p.propertyType !== currentProperty.propertyType &&
      p.location.city !== currentProperty.location.city
  );
  const relatedList = [...sameType, ...otherSameCity, ...others].slice(0, 3);

  if (relatedList.length === 0) return null;

  return (
    <section
      className="pt-12 sm:pt-16 border-t border-evergreen-border-subtle"
      aria-labelledby="related-heading"
    >
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
            <span>Đề xuất tương thích</span>
          </div>
          <h2
            id="related-heading"
            className="text-2xl sm:text-3xl font-bold text-evergreen-text-primary tracking-tight"
          >
            Bất động sản tương tự cùng phân khúc
          </h2>
          <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-1 max-w-xl">
            Các không gian sinh thái được tuyển chọn có cùng triết lý kiến trúc hoặc
            nằm tại các tâm điểm thịnh vượng lân cận.
          </p>
        </div>

        <Link
          href="/bat-dong-san"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-text-primary text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 shadow-xs shrink-0"
        >
          <span>Xem tất cả bộ sưu tập</span>
          <ArrowUpRight className="w-4 h-4 text-evergreen-forest" />
        </Link>
      </div>

      {/* Grid of Related Properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {relatedList.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
