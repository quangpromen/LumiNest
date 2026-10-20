"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

interface ContactFaqItem {
  id: string;
  question: string;
  answer: string;
}

const CONTACT_FAQS: ContactFaqItem[] = [
  {
    id: "faq-c1",
    question: "Tôi có thể đặt lịch xem thực tế dự án qua website không?",
    answer:
      "Website LumiNest hiện là nền tảng giao diện trưng bày và trực quan hóa các dự án bất động sản sinh thái mẫu. Trong giai đoạn vận hành thương mại chính thức, khách hàng có thể gửi yêu cầu đặt lịch khảo sát thực địa trực tiếp với đội ngũ tư vấn kiến trúc của dự án.",
  },
  {
    id: "faq-c2",
    question: "Thông tin giá bán và thông số kỹ thuật trên website được định dạng như thế nào?",
    answer:
      "Tất cả mức giá hiển thị (đơn vị VNĐ, Tỷ VNĐ) và thông số kỹ thuật (diện tích sàn m², số phòng ngủ, hướng nhà, tình trạng pháp lý sổ hồng) đều được xây dựng dựa trên chuẩn mực thực tế của thị trường bất động sản Việt Nam, nhằm mang lại trải nghiệm tra cứu minh bạch và trực quan nhất.",
  },
  {
    id: "faq-c3",
    question: "Làm thế nào để lọc tìm bất động sản theo tiêu chí riêng của tôi?",
    answer:
      "Bạn có thể truy cập trang 'Bất động sản' trên thanh điều hướng để sử dụng bộ lọc đa tiêu chí theo loại hình (Biệt thự, Căn hộ, Sky Villa, Dinh thự), khu vực địa phương (Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc), khoảng ngân sách và diện tích sàn sử dụng.",
  },
  {
    id: "faq-c4",
    question: "Thông tin tôi nhập vào biểu mẫu liên hệ có được bảo mật không?",
    answer:
      "Phiên bản hiện tại là giao diện Frontend thuần túy, phục vụ trải nghiệm người dùng mẫu. Hệ thống hoàn toàn không thu thập, không lưu trữ thông tin cá nhân vào bất kỳ cơ sở dữ liệu nào cũng như không chia sẻ cho bên thứ ba.",
  },
];

export function ContactFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-c1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 border-t border-evergreen-border-subtle/80 bg-white">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-evergreen-lime fill-evergreen-lime/20" />
              <span>Giải đáp thắc mắc</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Câu hỏi thường gặp về LumiNest.
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
              Các thông tin hỗ trợ giúp bạn nhanh chóng hiểu rõ cách vận hành của nền tảng và phương thức tra cứu dự án hiệu quả.
            </p>
          </div>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {CONTACT_FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-[#FBFBF8] border-evergreen-border-strong shadow-xs"
                    : "bg-white border-evergreen-border-subtle hover:border-evergreen-border-strong/70"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-2xl"
                >
                  <span className="text-sm sm:text-base font-semibold text-evergreen-text-primary tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-full bg-evergreen-subtle flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 bg-evergreen-lime text-evergreen-dark" : "text-evergreen-text-secondary"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 pt-1 text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed border-t border-evergreen-border-subtle/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
