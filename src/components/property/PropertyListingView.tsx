"use client";

import React, { useState, useMemo, useRef, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Home,
  Sparkles,
  Building2,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { mockProperties } from "@/data/properties";
import { Property } from "@/types/property";
import { Container } from "@/components/common/Container";
import { PropertyCard } from "@/components/common/PropertyCard";
import { PropertyFilterBar } from "@/components/property/PropertyFilterBar";
import {
  PropertyMobileFilterDrawer,
  FilterState,
} from "@/components/property/PropertyMobileFilterDrawer";
import {
  PropertySortAndStats,
  SortOption,
} from "@/components/property/PropertySortAndStats";
import { PropertyEmptyState } from "@/components/property/PropertyEmptyState";
import { PropertyPagination } from "@/components/property/PropertyPagination";
import { PropertyQuickViewModal } from "@/components/property/PropertyQuickViewModal";

const ITEMS_PER_PAGE = 8;

const INITIAL_FILTERS: FilterState = {
  keyword: "",
  propertyType: "all",
  location: "all",
  priceRange: "all",
  areaRange: "all",
  bedrooms: "all",
};

export function PropertyListingView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const gridTopRef = useRef<HTMLDivElement>(null);

  // Initialize filters from URL query parameters (supporting HeroSearchWidget parameters)
  const [filters, setFilters] = useState<FilterState>(() => {
    return {
      keyword: searchParams.get("q") || "",
      propertyType: searchParams.get("type") || "all",
      location: searchParams.get("location") || "all",
      priceRange: searchParams.get("price") || "all",
      areaRange: searchParams.get("area") || "all",
      bedrooms: searchParams.get("rooms") || "all",
    };
  });

  const [sort, setSort] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "featured"
  );

  const [currentPage, setCurrentPage] = useState<number>(() => {
    const p = parseInt(searchParams.get("page") || "1", 10);
    return isNaN(p) || p < 1 ? 1 : p;
  });

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Update URL search parameters when filters, sort, or page changes
  const updateUrlParams = useCallback(
    (newFilters: FilterState, newSort: SortOption, newPage: number) => {
      const params = new URLSearchParams();

      if (newFilters.keyword.trim()) params.set("q", newFilters.keyword.trim());
      if (newFilters.propertyType !== "all") params.set("type", newFilters.propertyType);
      if (newFilters.location !== "all") params.set("location", newFilters.location);
      if (newFilters.priceRange !== "all") params.set("price", newFilters.priceRange);
      if (newFilters.areaRange !== "all") params.set("area", newFilters.areaRange);
      if (newFilters.bedrooms !== "all") params.set("rooms", newFilters.bedrooms);
      if (newSort !== "featured") params.set("sort", newSort);
      if (newPage > 1) params.set("page", String(newPage));

      const query = params.toString();
      const path = query ? `/bat-dong-san?${query}` : "/bat-dong-san";
      router.replace(path, { scroll: false });
    },
    [router]
  );

  // Handle single filter change
  const handleFilterChange = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setFilters((prev) => {
        const next = { ...prev, [key]: value };
        setCurrentPage(1);
        updateUrlParams(next, sort, 1);
        return next;
      });
    },
    [sort, updateUrlParams]
  );

  // Handle filter reset
  const handleResetFilters = useCallback(() => {
    setFilters(INITIAL_FILTERS);
    setCurrentPage(1);
    updateUrlParams(INITIAL_FILTERS, sort, 1);
  }, [sort, updateUrlParams]);

  // Handle sort change
  const handleSortChange = useCallback(
    (newSort: SortOption) => {
      setSort(newSort);
      setCurrentPage(1);
      updateUrlParams(filters, newSort, 1);
    },
    [filters, updateUrlParams]
  );

  // Handle page change
  const handlePageChange = useCallback(
    (newPage: number) => {
      setCurrentPage(newPage);
      updateUrlParams(filters, sort, newPage);

      // Smooth scroll to top of property grid
      if (gridTopRef.current) {
        const yOffset = -90;
        const y = gridTopRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [filters, sort, updateUrlParams]
  );

  // Filter properties based on current filter states
  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // 1. Keyword search (title, tagline, address, district, city, amenities)
      if (filters.keyword.trim()) {
        const q = filters.keyword.toLowerCase().trim();
        const matchesTitle = property.title.toLowerCase().includes(q);
        const matchesTagline = property.tagline?.toLowerCase().includes(q) ?? false;
        const matchesAddress = property.location.address.toLowerCase().includes(q);
        const matchesDistrict = property.location.district.toLowerCase().includes(q);
        const matchesCity = property.location.city.toLowerCase().includes(q);
        const matchesAmenities = property.amenities.some((a) =>
          a.toLowerCase().includes(q)
        );

        if (
          !matchesTitle &&
          !matchesTagline &&
          !matchesAddress &&
          !matchesDistrict &&
          !matchesCity &&
          !matchesAmenities
        ) {
          return false;
        }
      }

      // 2. Property type
      if (filters.propertyType !== "all") {
        if (property.propertyType !== filters.propertyType) {
          return false;
        }
      }

      // 3. Location / Region
      if (filters.location !== "all") {
        const cityLower = property.location.city.toLowerCase();
        const distLower = property.location.district.toLowerCase();

        switch (filters.location) {
          case "ha-noi":
            if (!cityLower.includes("hà nội")) return false;
            break;
          case "tp-hcm":
            if (
              !cityLower.includes("hồ chí minh") &&
              !cityLower.includes("thủ đức") &&
              !distLower.includes("thủ đức")
            ) {
              return false;
            }
            break;
          case "da-nang":
            if (!cityLower.includes("đà nẵng")) return false;
            break;
          case "phu-quoc":
            if (
              !cityLower.includes("phú quốc") &&
              !distLower.includes("phú quốc") &&
              !cityLower.includes("kiên giang")
            ) {
              return false;
            }
            break;
          case "vung-ven":
            if (
              cityLower.includes("hà nội") ||
              cityLower.includes("hồ chí minh") ||
              cityLower.includes("đà nẵng") ||
              cityLower.includes("phú quốc")
            ) {
              return false;
            }
            break;
          default:
            break;
        }
      }

      // 4. Price range
      if (filters.priceRange !== "all") {
        switch (filters.priceRange) {
          case "under-5b":
            if (property.price >= 5_000_000_000) return false;
            break;
          case "5b-10b":
            if (property.price < 5_000_000_000 || property.price > 10_000_000_000)
              return false;
            break;
          case "10b-20b":
            if (property.price < 10_000_000_000 || property.price > 20_000_000_000)
              return false;
            break;
          case "above-20b":
            if (property.price <= 20_000_000_000) return false;
            break;
          default:
            break;
        }
      }

      // 5. Area range
      if (filters.areaRange !== "all") {
        const area = property.specs.usableArea;
        switch (filters.areaRange) {
          case "under-150":
            if (area >= 150) return false;
            break;
          case "150-250":
            if (area < 150 || area > 250) return false;
            break;
          case "250-400":
            if (area < 250 || area > 400) return false;
            break;
          case "above-400":
            if (area <= 400) return false;
            break;
          default:
            break;
        }
      }

      // 6. Bedrooms
      if (filters.bedrooms !== "all") {
        const requiredRooms = parseInt(filters.bedrooms, 10);
        if (property.specs.bedrooms < requiredRooms) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Sort properties
  const sortedProperties = useMemo(() => {
    const list = [...filteredProperties];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "area-desc":
        return list.sort((a, b) => b.specs.usableArea - a.specs.usableArea);
      case "area-asc":
        return list.sort((a, b) => a.specs.usableArea - b.specs.usableArea);
      case "rooms-desc":
        return list.sort((a, b) => b.specs.bedrooms - a.specs.bedrooms);
      case "featured":
      default:
        return list.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return 0;
        });
    }
  }, [filteredProperties, sort]);

  // Compute pagination
  const totalPages = Math.ceil(sortedProperties.length / ITEMS_PER_PAGE);
  const adjustedCurrentPage = Math.min(currentPage, Math.max(1, totalPages));

  const paginatedProperties = useMemo(() => {
    const start = (adjustedCurrentPage - 1) * ITEMS_PER_PAGE;
    return sortedProperties.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProperties, adjustedCurrentPage]);

  const startIndex = sortedProperties.length === 0 ? 0 : (adjustedCurrentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = Math.min(adjustedCurrentPage * ITEMS_PER_PAGE, sortedProperties.length);

  return (
    <div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
      <Container variant="wide">
        {/* Luxury Editorial Page Header */}
        <header className="mb-8 sm:mb-12">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Đường dẫn trang"
            className="flex items-center gap-2 text-xs text-evergreen-text-secondary mb-4 sm:mb-6"
          >
            <Link
              href="/"
              className="flex items-center gap-1 hover:text-evergreen-forest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-md px-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-evergreen-border-strong shrink-0" />
            <span className="font-semibold text-evergreen-text-primary px-1">
              Bất động sản
            </span>
          </nav>

          {/* Heading and Luxury Editorial Subtitle */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-evergreen-border-subtle/80">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-evergreen-subtle border border-evergreen-border-subtle text-evergreen-forest text-xs font-semibold uppercase tracking-wider mb-3.5">
                <Sparkles className="w-3.5 h-3.5 text-evergreen-lime" />
                <span>Bộ sưu tập độc bản 2026</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-evergreen-text-primary tracking-tight leading-[1.12]">
                Khám phá bất động sản
              </h1>
              <p className="text-xs sm:text-sm lg:text-base text-evergreen-text-secondary mt-3.5 leading-relaxed max-w-2xl">
                Tuyển tập kiệt tác kiến trúc xanh, biệt thự ven sông và sky villa sinh thái
                được tuyển chọn khắt khe tại các tâm điểm thịnh vượng Việt Nam.
              </p>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="flex items-center flex-wrap gap-2.5 sm:gap-3 text-xs text-evergreen-text-secondary">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <Building2 className="w-4 h-4 text-evergreen-forest" />
                <span className="font-semibold text-evergreen-text-primary">
                  {mockProperties.length}
                </span>
                <span>Kiệt tác chọn lọc</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <Compass className="w-4 h-4 text-evergreen-forest" />
                <span>4 Vùng trọng điểm</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl bg-white border border-evergreen-border-subtle shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Pháp lý chuẩn</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filter Bar Component */}
        <section className="mb-6 sm:mb-8" aria-label="Bộ lọc tìm kiếm">
          <PropertyFilterBar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
            onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
            totalResults={filteredProperties.length}
          />
        </section>

        {/* Anchor for smooth scroll on pagination */}
        <div ref={gridTopRef} />

        {/* Sort and Stats Row */}
        <section aria-label="Sắp xếp và thống kê kết quả" className="mb-6">
          <PropertySortAndStats
            totalCount={mockProperties.length}
            filteredCount={filteredProperties.length}
            startIndex={startIndex}
            endIndex={endIndex}
            sort={sort}
            onSortChange={handleSortChange}
          />
        </section>

        {/* Property Grid or Empty State */}
        {filteredProperties.length === 0 ? (
          <PropertyEmptyState
            onReset={handleResetFilters}
            onSelectCategory={(cat) => handleFilterChange("propertyType", cat)}
          />
        ) : (
          <section aria-label="Danh sách bất động sản">
            {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop, 4 col wide screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-7 lg:gap-8">
              {paginatedProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onQuickView={(p) => setSelectedProperty(p)}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            <PropertyPagination
              currentPage={adjustedCurrentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        )}
      </Container>

      {/* Mobile Touch Filter Drawer */}
      <PropertyMobileFilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        matchingCount={filteredProperties.length}
      />

      {/* Property Quick View Modal (Gracefully previews details without 404) */}
      <PropertyQuickViewModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
}
