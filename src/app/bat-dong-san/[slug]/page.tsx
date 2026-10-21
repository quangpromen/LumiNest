import React, { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Container } from "@/components/common/Container";
import { mockProperties } from "@/data/properties";
import { PropertyBreadcrumbHeader } from "@/components/property/detail/PropertyBreadcrumbHeader";
import { PropertyImageGallery } from "@/components/property/detail/PropertyImageGallery";
import { PropertySpecs } from "@/components/property/detail/PropertySpecs";
import { PropertyDescription } from "@/components/property/detail/PropertyDescription";
import { PropertyAmenities } from "@/components/property/detail/PropertyAmenities";
import { PropertyLocation } from "@/components/property/detail/PropertyLocation";
import { PropertyContactCard } from "@/components/property/detail/PropertyContactCard";
import { PropertyRelated } from "@/components/property/detail/PropertyRelated";

interface PropertyDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Tạo danh sách static params để pre-render toàn bộ 16 bất động sản
 */
export async function generateStaticParams() {
  return mockProperties.map((prop) => ({
    slug: prop.slug,
  }));
}

/**
 * Tạo dynamic metadata chuẩn SEO cho từng bất động sản
 */
export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = mockProperties.find((prop) => prop.slug === slug);

  if (!property) {
    return {
      title: "Bất Động Sản Không Tồn Tại — LumiNest Real Estate",
      description: "Không tìm thấy thông tin bất động sản tương ứng trong hệ thống.",
    };
  }

  const title = `${property.title} — LumiNest Real Estate`;
  const description =
    property.tagline ||
    `Khám phá chi tiết ${property.title} tại ${property.location.district}, ${property.location.city}. Bất động sản sinh thái độc bản chuẩn sống thượng lưu.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: property.featuredImage,
          alt: property.title,
        },
      ],
      type: "website",
    },
  };
}

function PropertyDetailLoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-48 bg-evergreen-subtle rounded-full" />
        <div className="h-10 sm:h-12 w-3/4 max-w-xl bg-evergreen-subtle rounded-2xl" />
        <div className="h-4 w-1/3 max-w-sm bg-evergreen-subtle rounded-full" />
      </div>

      {/* Gallery Skeleton */}
      <div className="w-full h-80 sm:h-96 bg-evergreen-subtle rounded-3xl" />

      {/* 2-Column Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-white rounded-2xl border border-evergreen-border-subtle" />
            ))}
          </div>
          <div className="h-48 bg-white rounded-3xl border border-evergreen-border-subtle" />
        </div>
        <div className="lg:col-span-4">
          <div className="h-96 bg-white rounded-3xl border border-evergreen-border-subtle" />
        </div>
      </div>
    </div>
  );
}

async function PropertyDetailContent({ params }: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = mockProperties.find((prop) => prop.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      {/* A. Breadcrumb & Page Header */}
      <PropertyBreadcrumbHeader property={property} />

      {/* B. Premium Image Gallery & Lightbox */}
      <PropertyImageGallery property={property} />

      {/* 2-Column Content Grid: Main Specs & Editorial Left + Sticky Contact Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
        {/* Left Column (8 cols on xl, 7 cols on lg) */}
        <div className="lg:col-span-7 xl:col-span-8">
          {/* C. Property Overview / Key Specs */}
          <PropertySpecs property={property} />

          {/* D. Property Description / Editorial Luxury */}
          <PropertyDescription property={property} />

          {/* E. Amenities Section */}
          <PropertyAmenities property={property} />

          {/* F. Location Section */}
          <PropertyLocation property={property} />
        </div>

        {/* Right Column (4 cols on xl, 5 cols on lg) - Sticky Contact Card */}
        <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28">
          <PropertyContactCard property={property} />
        </div>
      </div>

      {/* H. Related Properties (3-4 similar items) */}
      <PropertyRelated currentProperty={property} />
    </>
  );
}

export default function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  return (
    <div className="min-h-screen bg-evergreen-bg text-evergreen-text-primary selection:bg-evergreen-lime selection:text-evergreen-dark">
      {/* 0. Floating Pill Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
        <Container variant="wide">
          <Suspense fallback={<PropertyDetailLoadingSkeleton />}>
            <PropertyDetailContent params={params} />
          </Suspense>
        </Container>
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
