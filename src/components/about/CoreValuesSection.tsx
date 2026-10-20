import React from "react";
import { Compass, Leaf, Sparkles, Building2, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";

interface ValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
  colSpan: string;
  theme: "white" | "dark" | "subtle";
}

const CORE_VALUES: ValueItem[] = [
  {
    id: "value-1",
    title: "Kiến trúc tinh tế & Vị nhân sinh",
    subtitle: "Refined Architecture",
    description:
      "Từng tỉ lệ hình khối, khoảng lùi đón sáng và hành lang thông gió được tính toán kỹ lưỡng nhằm tôn vinh sự thư thái của con người, xóa bỏ cảm giác bức bí ngột ngạt của những khối bê tông vô cảm.",
    icon: <Compass className="w-6 h-6 text-evergreen-lime" />,
    tag: "Chuẩn mực thẩm mỹ",
    colSpan: "lg:col-span-7",
    theme: "dark",
  },
  {
    id: "value-2",
    title: "Không gian sống sinh thái bền vững",
    subtitle: "Sustainable Ecosystem",
    description:
      "Định hướng sử dụng vật liệu thân thiện, thảm thực vật bản địa lọc bụi tự nhiên cùng hệ thống cách nhiệt giúp giảm tiêu hao năng lượng và bảo vệ môi trường dài lâu.",
    icon: <Leaf className="w-6 h-6 text-evergreen-forest" />,
    tag: "Sinh thái bản địa",
    colSpan: "lg:col-span-5",
    theme: "white",
  },
  {
    id: "value-3",
    title: "Trải nghiệm cá nhân hóa đỉnh cao",
    subtitle: "Personalized Living",
    description:
      "Tôn trọng tối đa tính riêng tư và phong cách sống độc bản. Mỗi căn hộ và biệt thự được thiết kế như một tác phẩm may đo riêng, thích ứng linh hoạt theo nhu cầu của từng thế hệ gia đình.",
    icon: <Sparkles className="w-6 h-6 text-evergreen-forest" />,
    tag: "Đặc quyền độc bản",
    colSpan: "lg:col-span-5",
    theme: "white",
  },
  {
    id: "value-4",
    title: "Kết nối giá trị trường tồn qua thế hệ",
    subtitle: "Enduring Legacy",
    description:
      "Không chỉ là tài sản gia tăng giá trị theo thời gian, mỗi công trình tại LumiNest còn là một di sản tinh thần — nơi lưu giữ những khoảnh khắc ấm áp và gắn kết sâu sắc giữa các thế hệ thành viên.",
    icon: <Building2 className="w-6 h-6 text-evergreen-forest" />,
    tag: "Di sản truyền đời",
    colSpan: "lg:col-span-7",
    theme: "subtle",
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-16 sm:py-24 bg-evergreen-subtle/40 border-t border-evergreen-border-subtle/80">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/20" />
              <span>Giá trị cốt lõi</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Bốn trụ cột định hình phong cách LumiNest.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
              Mỗi không gian được tuyển chọn và giới thiệu là kết tinh của tư duy kiến trúc nghiêm cẩn, sự đồng điệu cùng cảnh quan thiên nhiên và tôn trọng cảm xúc con người.
            </p>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {CORE_VALUES.map((item) => {
            const isDark = item.theme === "dark";
            const isSubtle = item.theme === "subtle";

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col justify-between ${item.colSpan} ${
                  isDark
                    ? "bg-evergreen-dark text-white border border-evergreen-dark/80 shadow-md"
                    : isSubtle
                    ? "bg-[#F3F4EE] text-evergreen-text-primary border border-evergreen-border-strong/60"
                    : "bg-white text-evergreen-text-primary border border-evergreen-border-subtle shadow-xs"
                }`}
              >
                {/* Card Top: Tag + Icon */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                      isDark
                        ? "bg-white/10 text-evergreen-lime border border-white/20"
                        : "bg-evergreen-subtle text-evergreen-forest border border-evergreen-border-subtle"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                      isDark ? "bg-white/10" : "bg-evergreen-subtle"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Card Content */}
                <div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider block mb-1.5 ${
                      isDark ? "text-white/60" : "text-evergreen-text-muted"
                    }`}
                  >
                    {item.subtitle}
                  </span>

                  <h3
                    className={`text-xl sm:text-2xl font-semibold tracking-tight mb-3 leading-snug ${
                      isDark ? "text-white" : "text-evergreen-text-primary"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? "text-white/80" : "text-evergreen-text-secondary"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom Accent Line */}
                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between ${
                    isDark ? "border-white/15" : "border-evergreen-border-subtle"
                  }`}
                >
                  <span
                    className={`text-[11px] font-medium ${
                      isDark ? "text-evergreen-lime" : "text-evergreen-forest"
                    }`}
                  >
                    Cam kết chuẩn mực LumiNest
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 ${
                      isDark
                        ? "bg-evergreen-lime text-evergreen-dark"
                        : "bg-evergreen-dark text-white"
                    }`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
