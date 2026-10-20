import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { ContactHeroSection } from "@/components/contact/ContactHeroSection";
import { ContactInfoColumn } from "@/components/contact/ContactInfoColumn";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFaqSection } from "@/components/contact/ContactFaqSection";
import { ContactCtaSection } from "@/components/contact/ContactCtaSection";

export const metadata: Metadata = {
  title: "Liên Hệ Tư Vấn — LumiNest Real Estate",
  description:
    "Kết nối cùng đội ngũ tư vấn LumiNest để nhận hồ sơ chi tiết và giải pháp không gian sống sinh thái phù hợp với phong cách sống của bạn.",
  openGraph: {
    title: "Liên Hệ Tư Vấn — LumiNest Real Estate",
    description:
      "Mỗi không gian sống đều bắt đầu từ một cuộc trò chuyện. Hãy chia sẻ mong muốn của bạn cùng LumiNest.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary selection:bg-evergreen-lime selection:text-evergreen-dark">
      {/* 0. Floating Pill Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Contact Hero Section (Compact Luxury Header) */}
        <ContactHeroSection />

        {/* 2. Main 2-Column Layout: Left Info & Workflow, Right Interactive Form */}
        <section className="pb-16 sm:pb-24">
          <Container variant="wide">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column (5 Cols) */}
              <div className="lg:col-span-5">
                <ContactInfoColumn />
              </div>

              {/* Right Column (7 Cols) */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Contact FAQ Accordion */}
        <ContactFaqSection />

        {/* 4. Final CTA */}
        <ContactCtaSection />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
