import React from "react";
import Link from "next/link";
import { Compass, SlidersHorizontal, MessageSquareText, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";

interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
  actionHref: string;
}

const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Khám phá không gian sống",
    subtitle: "Trực quan hóa đa góc nhìn",
    description:
      "Tiếp cận danh mục bất động sản chọn lọc qua hình ảnh kiến trúc thực tế, bản vẽ công năng chi tiết và thông số quy hoạch minh bạch theo văn phong chuẩn mực của Việt Nam.",
    icon: <Compass className="w-5 h-5 text-evergreen-forest" />,
    actionText: "Xem bộ sưu tập",
    actionHref: "/bat-dong-san",
  },
  {
    step: "02",
    title: "Tìm kiếm bất động sản phù hợp",
    subtitle: "Bộ lọc thông minh đa tiêu chí",
    description:
      "Tùy biến tìm kiếm nhanh chóng theo loại hình (biệt thự, căn hộ, sky villa), khu vực địa lý (Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc), diện tích m² và khoảng ngân sách đầu tư.",
    icon: <SlidersHorizontal className="w-5 h-5 text-evergreen-forest" />,
    actionText: "Thử bộ lọc tìm kiếm",
    actionHref: "/bat-dong-san",
  },
  {
    step: "03",
    title: "Kết nối và tìm hiểu thêm",
    subtitle: "Tư vấn minh bạch & Chu đáo",
    description:
      "Gửi yêu cầu trao đổi trực tiếp, nhận hồ sơ giới thiệu không gian và sẵn sàng chuẩn bị cho các buổi khảo sát thực địa một cách bảo mật, chuyên nghiệp.",
    icon: <MessageSquareText className="w-5 h-5 text-evergreen-forest" />,
    actionText: "Gửi yêu cầu tư vấn",
    actionHref: "/lien-he",
  },
];

export function OurApproachSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-evergreen-border-subtle/80">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/20" />
              <span>Hành trình trải nghiệm</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Cách LumiNest đồng hành cùng bạn.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
              Ba bước tinh gọn giúp bạn dễ dàng tiếp cận, chọn lọc và khám phá những không gian sống xanh độc bản phù hợp với phong cách sống của riêng mình.
            </p>
          </div>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {APPROACH_STEPS.map((item) => (
            <div
              key={item.step}
              className="group relative rounded-3xl p-6 sm:p-8 bg-[#FBFBF8] border border-evergreen-border-subtle hover:border-evergreen-border-strong transition-all duration-300 hover:shadow-card flex flex-col justify-between"
            >
              {/* Card Top: Step number & Icon */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-evergreen-border-subtle mb-6">
                  <span className="text-3xl sm:text-4xl font-semibold text-evergreen-dark/30 group-hover:text-evergreen-forest transition-colors font-mono">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-evergreen-border-subtle flex items-center justify-center shadow-2xs group-hover:bg-evergreen-lime transition-colors">
                    {item.icon}
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-wider text-evergreen-text-muted block mb-1.5">
                  {item.subtitle}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold text-evergreen-text-primary tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Action Link */}
              <div className="pt-6 mt-6 border-t border-evergreen-border-subtle/70">
                <Link
                  href={item.actionHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-evergreen-text-primary group-hover:text-evergreen-forest hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-sm"
                >
                  <span>{item.actionText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
