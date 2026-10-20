import React from "react";
import Image from "next/image";
import { Sparkles, Clock, ShieldCheck } from "lucide-react";

export function ContactInfoColumn() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      {/* Intro Narrative */}
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-evergreen-text-primary tracking-tight leading-snug">
          Lắng nghe & đồng hành cùng mong muốn của bạn.
        </h2>
        <p className="text-xs sm:text-sm text-evergreen-text-secondary mt-3 leading-relaxed">
          Đội ngũ tư vấn kiến trúc và không gian sống tại LumiNest luôn sẵn sàng lắng nghe mọi băn khoăn về loại hình, diện tích, hướng nắng gió và phong cách sinh thái bạn đang tìm kiếm.
        </p>
      </div>

      {/* Inquiry Workflow Steps */}
      <div className="rounded-3xl bg-white p-6 sm:p-7 border border-evergreen-border-subtle shadow-xs space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-evergreen-text-primary block">
          Quy trình tiếp nhận yêu cầu
        </span>

        <div className="space-y-3.5">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-evergreen-subtle text-evergreen-forest text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                Tiếp nhận & Phân loại nhu cầu
              </h4>
              <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                Ghi nhận thông tin về loại hình bất động sản, vị trí ưu tiên và ngân sách dự kiến của gia chủ.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-evergreen-subtle text-evergreen-forest text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                Đề xuất hồ sơ không gian tương thích
              </h4>
              <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                Lựa chọn danh mục biệt thự hoặc căn hộ có ngôn ngữ thiết kế và công năng phù hợp nhất.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-evergreen-subtle text-evergreen-forest text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-evergreen-text-primary">
                Trao đổi chi tiết & Lên lịch khảo sát
              </h4>
              <p className="text-xs text-evergreen-text-secondary mt-0.5 leading-relaxed">
                Cung cấp bản vẽ mặt bằng, thông số kỹ thuật và sắp xếp lịch trình trải nghiệm thực tế.
              </p>
            </div>
          </div>
        </div>

        {/* Response Commitment */}
        <div className="pt-3 border-t border-evergreen-border-subtle flex items-center gap-2 text-xs text-evergreen-forest font-medium">
          <Clock className="w-4 h-4 text-evergreen-lime-hover shrink-0" />
          <span>Thời gian phản hồi dự kiến: Trong vòng 24 giờ làm việc.</span>
        </div>
      </div>

      {/* Brand Aesthetic Card with Architecture Image */}
      <div className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[300px] border border-evergreen-border-subtle bg-evergreen-dark p-6 sm:p-7 flex flex-col justify-between shadow-card">
        <Image
          src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1000&q=80"
          alt="Không gian trò chuyện kiến trúc tràn ngập ánh sáng"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <span className="backdrop-blur-md bg-white/20 border border-white/25 text-white rounded-full px-3 py-1 text-[11px] font-medium">
            Tư vấn chuẩn mực
          </span>
          <Sparkles className="w-4 h-4 text-evergreen-lime" />
        </div>

        <div className="relative z-10 text-white">
          <p className="text-xs sm:text-sm font-light italic leading-relaxed text-white/95">
            “Mỗi ngôi nhà là một bản hòa ca giữa con người và thiên nhiên. Chúng tôi luôn sẵn lòng cùng bạn viết tiếp chương mới.”
          </p>
          <span className="text-[11px] text-evergreen-lime font-medium block mt-2">
            LumiNest Editorial Architecture
          </span>
        </div>
      </div>

      {/* Transparent Demo Notice Card */}
      <div className="rounded-2xl p-4 sm:p-5 bg-evergreen-subtle/80 border border-evergreen-border-subtle flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-evergreen-forest shrink-0 mt-0.5" />
        <div className="text-xs text-evergreen-text-secondary leading-relaxed">
          <p className="font-semibold text-evergreen-text-primary mb-0.5">
            Thông báo trải nghiệm giao diện Demo
          </p>
          <p>
            Website LumiNest hiện đang được phát triển ở giai đoạn Frontend Demo. Các kênh liên lạc chính thức (Hotline tổng đài và địa chỉ văn phòng thực địa) sẽ được cập nhật khi dự án bước vào giai đoạn vận hành thương mại.
          </p>
        </div>
      </div>
    </div>
  );
}
