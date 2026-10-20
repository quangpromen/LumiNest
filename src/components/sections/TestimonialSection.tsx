"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { mockTestimonials } from "@/data/testimonials";

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mockTestimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === mockTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentItem = mockTestimonials[currentIndex];

  return (
    <section className="py-16 sm:py-24">
      <Container variant="wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Triết lý không gian</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.15]">
              Cảm hứng về không gian sống
            </h2>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-evergreen-border-subtle hover:bg-evergreen-subtle flex items-center justify-center text-evergreen-text-primary transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
              aria-label="Trích dẫn trước"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-evergreen-dark hover:bg-black text-white flex items-center justify-center transition-all duration-200 active:scale-95 shadow-xs cursor-pointer"
              aria-label="Trích dẫn kế tiếp"
            >
              <ArrowRight className="w-4 h-4 text-evergreen-lime" />
            </button>
          </div>
        </div>

        {/* Large Split Testimonial Card */}
        <div className="rounded-3xl bg-evergreen-subtle p-6 sm:p-10 lg:p-14 border border-evergreen-border-subtle grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 Cols) — Architecture Photo */}
          <div className="lg:col-span-5 relative w-full h-[280px] sm:h-[380px] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src={currentItem.image}
              alt={currentItem.source}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column (7 Cols) — Quote & Source */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white border border-evergreen-border-subtle flex items-center justify-center shadow-xs">
              <Quote className="w-6 h-6 text-evergreen-forest fill-evergreen-forest/15" />
            </div>

            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-medium text-evergreen-text-primary tracking-tight leading-relaxed">
              &ldquo;{currentItem.quote}&rdquo;
            </blockquote>

            <div className="pt-4 border-t border-evergreen-border-subtle/80 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-evergreen-text-primary">
                  {currentItem.source}
                </p>
                <p className="text-xs text-evergreen-text-muted mt-0.5">
                  {currentItem.sourceRole}
                </p>
              </div>

              {/* Slide Counter */}
              <div className="text-xs font-semibold text-evergreen-text-secondary bg-white px-3 py-1 rounded-full border border-evergreen-border-subtle">
                0{currentIndex + 1} / 0{mockTestimonials.length}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
