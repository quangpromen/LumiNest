import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { BentoFeatureSection } from "@/components/sections/BentoFeatureSection";
import { BrandValueSection } from "@/components/sections/BrandValueSection";
import { LocationDiscoverySection } from "@/components/sections/LocationDiscoverySection";
import { FeaturedPropertiesSection } from "@/components/sections/FeaturedPropertiesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { PreFooterCtaSection } from "@/components/sections/PreFooterCtaSection";
import { Footer } from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary selection:bg-evergreen-lime selection:text-evergreen-dark">
      {/* 0. Floating Pill Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section with Floating Search Widget */}
        <HeroSection />

        {/* 2. Bento Feature Grid - Giá trị không gian độc bản */}
        <BentoFeatureSection />

        {/* 3. Brand Value - Thanh chỉ số & Giá trị nền tảng */}
        <BrandValueSection />

        {/* 4. Location Discovery - Bản đồ & Tọa độ kết nối */}
        <LocationDiscoverySection />

        {/* 5. Featured Properties - Tuyển tập BĐS sinh thái */}
        <FeaturedPropertiesSection />

        {/* 6. FAQ Accordion with Preview - Câu hỏi thường gặp */}
        <FaqSection />

        {/* 7. Testimonial - Cảm hứng về không gian sống */}
        <TestimonialSection />

        {/* 8. Pre-Footer CTA - Khung ảnh biệt thự đêm kêu gọi hành động */}
        <PreFooterCtaSection />
      </main>

      {/* 9. Editorial Footer */}
      <Footer />
    </div>
  );
}
