import React from "react";
import { Trees, Building2, FileCheck2, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";

const BRAND_VALUES = [
  {
    icon: Trees,
    title: "Không gian xanh",
    description: "Đề cao luồng sáng tự nhiên, thảm thực vật sinh thái và giải pháp kiến trúc bền vững.",
  },
  {
    icon: Building2,
    title: "Bộ sưu tập chọn lọc",
    description: "Khám phá đa dạng phong cách từ biệt thự ven hồ, sky villa đến dinh thự nghỉ dưỡng ven biển.",
  },
  {
    icon: FileCheck2,
    title: "Thông tin trực quan",
    description: "Mức giá niêm yết chuẩn VNĐ, thông số diện tích m² và bản đồ phân bổ tọa độ rõ ràng.",
  },
  {
    icon: Compass,
    title: "Khám phá thuận tiện",
    description: "Hệ thống lọc thông minh theo loại hình, khu vực và ngân sách với trải nghiệm mượt mà.",
  },
];

export function BrandValueSection() {
  return (
    <section className="py-6 sm:py-10">
      <Container variant="wide">
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-evergreen-border-subtle shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-evergreen-border-subtle/80 gap-6 sm:gap-0">
            {BRAND_VALUES.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col gap-3 ${
                    index === 0
                      ? "sm:pr-8"
                      : index === 3
                      ? "sm:pl-8"
                      : "sm:px-8"
                  } ${index !== 0 ? "pt-6 sm:pt-0" : ""}`}
                >
                  <div className="w-11 h-11 rounded-2xl bg-evergreen-subtle flex items-center justify-center text-evergreen-forest shrink-0">
                    <Icon className="w-5 h-5 text-evergreen-forest" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-evergreen-text-primary tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
