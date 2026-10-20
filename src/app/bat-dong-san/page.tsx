import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { PropertyListingView } from "@/components/property/PropertyListingView";

export const metadata: Metadata = {
  title: "Khám Phá Bất Động Sản Sinh Thái Độc Bản — LumiNest",
  description:
    "Danh sách các dự án biệt thự sinh thái, sky villa, căn hộ cao cấp và dinh thự ven sông hàng đầu tại Việt Nam (Demo LumiNest).",
  openGraph: {
    title: "Khám Phá Bất Động Sản Sinh Thái Độc Bản — LumiNest",
    description:
      "Danh sách các dự án biệt thự sinh thái, sky villa, căn hộ cao cấp và dinh thự ven sông hàng đầu tại Việt Nam.",
    type: "website",
  },
};

function PropertyListingLoadingSkeleton() {
  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24 animate-pulse">
      <Container variant="wide">
        {/* Header Skeleton */}
        <div className="mb-10 space-y-4">
          <div className="h-4 w-32 bg-evergreen-subtle rounded-full" />
          <div className="h-10 sm:h-14 w-3/4 max-w-xl bg-evergreen-subtle rounded-2xl" />
          <div className="h-4 w-1/2 max-w-md bg-evergreen-subtle rounded-full" />
        </div>

        {/* Filter Bar Skeleton */}
        <div className="h-28 w-full bg-white rounded-3xl border border-evergreen-border-subtle p-6 mb-8" />

        {/* Property Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl border border-evergreen-border-subtle overflow-hidden h-[420px]"
            >
              <div className="aspect-[4/3] bg-evergreen-subtle w-full" />
              <div className="p-5 space-y-3">
                <div className="h-4 w-2/3 bg-evergreen-subtle rounded-full" />
                <div className="h-5 w-4/5 bg-evergreen-subtle rounded-full" />
                <div className="h-4 w-1/2 bg-evergreen-subtle rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default function PropertyListingPage() {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary selection:bg-evergreen-lime selection:text-evergreen-dark">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content wrapped in Suspense for useSearchParams */}
      <main>
        <Suspense fallback={<PropertyListingLoadingSkeleton />}>
          <PropertyListingView />
        </Suspense>
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
