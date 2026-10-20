import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { OurStorySection } from "@/components/about/OurStorySection";
import { CoreValuesSection } from "@/components/about/CoreValuesSection";
import { LivingPhilosophySection } from "@/components/about/LivingPhilosophySection";
import { OurApproachSection } from "@/components/about/OurApproachSection";
import { AboutCtaSection } from "@/components/about/AboutCtaSection";

export const metadata: Metadata = {
  title: "Về Chúng Tôi — LumiNest Real Estate",
  description:
    "LumiNest kết nối con người với những không gian sống hiện đại, hài hòa cùng thiên nhiên và mang giá trị bền vững qua thời gian.",
  openGraph: {
    title: "Về Chúng Tôi — LumiNest Real Estate",
    description:
      "Khám phá câu chuyện khởi nguồn, bốn trụ cột giá trị và triết lý kiến trúc sinh thái độc bản tại LumiNest.",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary selection:bg-evergreen-lime selection:text-evergreen-dark">
      {/* 0. Floating Pill Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section (Luxury Editorial with Breadcrumb) */}
        <AboutHeroSection />

        {/* 2. Our Story Section (Architecture Left, Brand Concept Right) */}
        <OurStorySection />

        {/* 3. Core Values Section (Bento Grid 4 Cards) */}
        <CoreValuesSection />

        {/* 4. Living Philosophy Section (Architectural Editorial & Sensorial Elements) */}
        <LivingPhilosophySection />

        {/* 5. Our Approach Section (3-Step Discovery Journey) */}
        <OurApproachSection />

        {/* 6. About Call-to-Action Section */}
        <AboutCtaSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
