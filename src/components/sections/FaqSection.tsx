"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { mockFaqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Hỗ trợ & Đồng hành</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Câu hỏi thường gặp
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed">
              Những thông tin cơ bản về định hướng tuyển chọn, thủ tục pháp lý minh bạch và phương thức tương tác với không gian demo LumiNest.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Left Image Card, Right Accordion List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Decorative Architecture Card (Col 1 to 5) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] border border-evergreen-border-subtle bg-evergreen-dark p-6 sm:p-8 flex flex-col justify-between">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
              alt="Không gian nội thất phòng khách tràn ngập ánh sáng"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="backdrop-blur-md bg-white/20 border border-white/30 text-white rounded-full px-3.5 py-1 text-xs font-medium">
                Tư vấn tận tâm
              </span>
              <Sparkles className="w-4 h-4 text-evergreen-lime" />
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Minh bạch trong từng thông tin
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-2 leading-relaxed">
                Đem đến cho gia chủ sự an tâm khi tìm kiếm một nơi an cư đúng nghĩa, hòa hợp giữa thiên nhiên và kiến trúc bền vững.
              </p>
            </div>
          </div>

          {/* Right Accordion List (Col 6 to 12) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {mockFaqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={cn(
                    "rounded-2xl border transition-all duration-200 overflow-hidden bg-white",
                    isOpen
                      ? "border-evergreen-border-strong shadow-xs"
                      : "border-evergreen-border-subtle/80 hover:border-evergreen-border-strong/60"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 rounded-full bg-evergreen-subtle text-evergreen-forest text-xs font-bold flex items-center justify-center shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-evergreen-text-primary tracking-tight">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={cn(
                        "w-8 h-8 rounded-full bg-evergreen-subtle flex items-center justify-center text-evergreen-text-secondary shrink-0 transition-transform duration-300",
                        isOpen ? "rotate-180 bg-evergreen-dark text-white" : ""
                      )}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-evergreen-text-secondary leading-relaxed border-t border-evergreen-border-subtle/50 animate-in fade-in-50 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
