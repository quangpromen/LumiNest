"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  Sparkles,
} from "lucide-react";
import { Property } from "@/types/property";
import { cn } from "@/lib/utils";

interface PropertyImageGalleryProps {
  property: Property;
}

export function PropertyImageGallery({ property }: PropertyImageGalleryProps) {
  // Deduplicate images and guarantee at least 1 image
  const allImages = React.useMemo(() => {
    const rawList = [property.featuredImage, ...(property.gallery || [])];
    const unique = Array.from(new Set(rawList.filter(Boolean)));
    return unique.length > 0
      ? unique
      : [
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        ];
  }, [property.featuredImage, property.gallery]);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open lightbox at specific index
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  }, [allImages.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  }, [allImages.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrev();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goToNext, goToPrev]);

  // Layout decision based on number of images
  const primaryImage = allImages[0];
  const secondaryImages = allImages.slice(1, 5); // up to 4 secondary thumbnails

  return (
    <section className="mb-10 sm:mb-14" aria-label="Thư viện ảnh bất động sản">
      {/* Gallery Layout */}
      {allImages.length === 1 ? (
        /* Single Image Layout */
        <div
          onClick={() => openLightbox(0)}
          className="group relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl sm:rounded-[32px] overflow-hidden bg-evergreen-subtle border border-evergreen-border-subtle cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
        >
          <Image
            src={primaryImage}
            alt={`${property.title} — Ảnh kiến trúc`}
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity" />

          {/* Action pill */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-evergreen-text-primary text-xs sm:text-sm font-semibold shadow-md border border-white/20 group-hover:bg-white group-hover:scale-105 transition-all">
            <Maximize2 className="w-4 h-4 text-evergreen-forest" />
            <span>Phóng to toàn màn hình</span>
          </div>
        </div>
      ) : allImages.length === 2 ? (
        /* Two Images Layout: 60/40 Split */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 h-[380px] sm:h-[460px] lg:h-[520px]">
          <div
            onClick={() => openLightbox(0)}
            className="group relative md:col-span-7 h-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-evergreen-subtle border border-evergreen-border-subtle cursor-pointer shadow-sm hover:shadow-lg transition-all"
          >
            <Image
              src={allImages[0]}
              alt={`${property.title} — Ảnh chính`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
          </div>

          <div
            onClick={() => openLightbox(1)}
            className="group relative md:col-span-5 h-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-evergreen-subtle border border-evergreen-border-subtle cursor-pointer shadow-sm hover:shadow-lg transition-all"
          >
            <Image
              src={allImages[1]}
              alt={`${property.title} — Góc phối cảnh`}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

            <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
              <Camera className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Xem 2 hình ảnh</span>
            </div>
          </div>
        </div>
      ) : (
        /* Multi-Image Mosaic: Main Left + 2-Row Grid Right */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 h-auto md:h-[460px] lg:h-[540px]">
          {/* Main Large Image (7 Cols on Desktop) */}
          <div
            onClick={() => openLightbox(0)}
            className="group relative md:col-span-7 aspect-[4/3] md:aspect-auto h-full rounded-3xl sm:rounded-[32px] overflow-hidden bg-evergreen-subtle border border-evergreen-border-subtle cursor-pointer shadow-sm hover:shadow-xl transition-all"
          >
            <Image
              src={primaryImage}
              alt={`${property.title} — Phối cảnh tổng thể`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

            {/* Click to expand pill */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
              <span>Ảnh kiến trúc chính</span>
            </div>
          </div>

          {/* Secondary Images (5 Cols on Desktop) */}
          <div className="md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-3 sm:gap-4 h-full">
            {secondaryImages.slice(0, 2).map((img, idx) => {
              const actualIdx = idx + 1;
              const isLastVisible = idx === 1;

              return (
                <div
                  key={img + actualIdx}
                  onClick={() => openLightbox(actualIdx)}
                  className="group relative h-40 sm:h-52 md:h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-evergreen-subtle border border-evergreen-border-subtle cursor-pointer shadow-xs hover:shadow-md transition-all"
                >
                  <Image
                    src={img}
                    alt={`${property.title} — Phối cảnh chi tiết ${actualIdx}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 40vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* On the last visible image, show "Xem tất cả X ảnh" badge */}
                  {isLastVisible && (
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-10 flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/80 hover:bg-black text-white text-xs font-semibold border border-white/25 shadow-lg backdrop-blur-md group-hover:scale-105 transition-transform">
                      <Camera className="w-3.5 h-3.5 text-evergreen-lime" />
                      <span>Xem tất cả {allImages.length} ảnh</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Bộ sưu tập ảnh chi tiết: ${property.title}`}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between gap-4 z-20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-evergreen-lime tracking-wider">
                {currentIndex + 1} / {allImages.length}
              </span>
              <span className="text-sm font-medium text-neutral-300 truncate max-w-[200px] sm:max-w-md hidden xs:inline">
                {property.title}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Đóng thư viện ảnh (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Display Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-3 sm:my-6 overflow-hidden select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-2 sm:left-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              aria-label="Xem ảnh trước đó (Mũi tên trái)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Active High-Res Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[75vh] flex items-center justify-center">
              <Image
                src={allImages[currentIndex]}
                alt={`${property.title} — Ảnh ${currentIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain animate-in zoom-in-95 duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-2 sm:right-6 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
              aria-label="Xem ảnh kế tiếp (Mũi tên phải)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Lightbox Footer & Thumbnail Strip */}
          <div
            className="z-20 flex flex-col items-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 overflow-x-auto max-w-full py-2 px-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
              {allImages.map((img, i) => (
                <button
                  key={img + i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer",
                    currentIndex === i
                      ? "border-evergreen-lime scale-105 shadow-md shadow-evergreen-lime/20"
                      : "border-transparent opacity-50 hover:opacity-100"
                  )}
                  aria-label={`Chuyển tới ảnh ${i + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <span className="text-[11px] text-neutral-400 hidden sm:inline">
              Nhấn phím ESC để đóng • Dùng mũi tên Trái/Phải để chuyển ảnh
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
