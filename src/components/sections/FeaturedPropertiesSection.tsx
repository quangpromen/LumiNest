import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Info } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PropertyCard } from "@/components/common/PropertyCard";
import { mockProperties } from "@/data/properties";

export function FeaturedPropertiesSection() {
  const featuredList = mockProperties.slice(0, 6);

  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Bộ sưu tập chọn lọc</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Tuyển tập bất động sản sinh thái hàng đầu
            </h2>
            <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-3 leading-relaxed max-w-2xl">
              Mỗi danh mục mang đến những giá trị độc bản, chất lượng hoàn thiện vượt bậc và vị thế đắt giá tại các tâm điểm thịnh vượng.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/bat-dong-san"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-evergreen-dark hover:bg-black text-white font-medium text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95"
            >
              <span>Xem tất cả dự án ({mockProperties.length})</span>
              <ArrowUpRight className="w-4 h-4 text-evergreen-lime" />
            </Link>
          </div>
        </div>

        {/* Demo Disclaimer notice */}
        <div className="mb-8 px-4 py-3 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs flex items-center gap-2.5 text-xs text-evergreen-text-secondary">
          <Info className="w-4 h-4 text-evergreen-forest shrink-0" />
          <span>
            <strong>Lưu ý giao diện:</strong> Toàn bộ 6 dự án dưới đây là dữ liệu giả lập cho bản demo LumiNest Việt Nam, phục vụ kiểm thử bố cục thẻ BĐS cao cấp.
          </span>
        </div>

        {/* Grid of 6 Properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredList.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Container>
    </section>
  );
}
