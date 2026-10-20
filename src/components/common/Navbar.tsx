"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Leaf } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { MobileNavigation } from "@/components/common/MobileNavigation";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 pointer-events-none">
      <Container variant="wide">
        <div
          className={cn(
            "w-full pointer-events-auto transition-all duration-300 rounded-full relative flex items-center justify-between px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3",
            isScrolled
              ? "bg-white/95 backdrop-blur-xl border border-evergreen-border-strong shadow-[0_12px_36px_-8px_rgba(18,21,18,0.12)]"
              : "bg-white/85 backdrop-blur-md border border-evergreen-border-subtle/90 shadow-[0_8px_30px_-6px_rgba(18,21,18,0.07)]"
          )}
        >
          {/* Brand Logo - Left Aligned */}
          <div className="flex items-center shrink-0 z-10">
            <Link
              href="/"
              className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark rounded-full px-1"
              aria-label={`${SITE_CONFIG.name} — Trang chủ`}
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-evergreen-dark text-evergreen-lime flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-sm">
                <Leaf className="w-4 h-4 text-evergreen-lime fill-evergreen-lime/20" />
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-base sm:text-lg tracking-tight text-evergreen-text-primary">
                  {SITE_CONFIG.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] text-evergreen-text-secondary -mt-1 font-medium tracking-wide">
                  Eco-Luxury Living
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Center Navigation Pills - Perfectly Centered */}
          <nav
            className="hidden md:flex items-center p-1 rounded-full bg-evergreen-subtle/80 border border-evergreen-border-subtle/60 absolute left-1/2 -translate-x-1/2"
            aria-label="Menu chính"
          >
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark",
                    isActive
                      ? "bg-evergreen-dark text-white shadow-xs"
                      : "text-evergreen-text-secondary hover:text-evergreen-text-primary hover:bg-white/80"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA & Mobile Navigation - Right Aligned */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-10">
            {/* CTA Button: Tư vấn ngay */}
            <Link
              href="/lien-he"
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark"
            >
              <span>Tư vấn ngay</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
            </Link>

            {/* Mobile Navigation Drawer Trigger */}
            <MobileNavigation />
          </div>
        </div>
      </Container>
    </header>
  );
}
