"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles, Building2, Home, Info, PhoneCall, Leaf } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_ICONS: Record<string, React.ReactNode> = {
  "/": <Home className="w-4 h-4" />,
  "/bat-dong-san": <Building2 className="w-4 h-4" />,
  "/ve-chung-toi": <Info className="w-4 h-4" />,
  "/lien-he": <PhoneCall className="w-4 h-4" />,
};

const emptySubscribe = () => () => {};

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const pathname = usePathname();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Mở menu điều hướng di động"
        className="p-2 sm:p-2.5 rounded-full bg-evergreen-subtle text-evergreen-text-primary hover:bg-[#E6E8DF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark active:scale-95 cursor-pointer"
      >
        <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Render Drawer into document.body to escape any parent backdrop-filter stacking contexts */}
      {isOpen &&
        isMounted &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng di động"
            className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={handleClose}
          >
            {/* Drawer Panel: Full height on mobile */}
            <div
              className="fixed inset-y-0 right-0 w-full max-w-[320px] sm:max-w-sm bg-[#FBFBF8] p-6 shadow-2xl flex flex-col justify-between border-l border-evergreen-border-subtle animate-in slide-in-from-right duration-300 z-[1000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top */}
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-evergreen-border-subtle">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-full bg-evergreen-dark text-evergreen-lime flex items-center justify-center shadow-xs">
                      <Leaf className="w-4 h-4 text-evergreen-lime" />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-base tracking-tight text-evergreen-text-primary">
                        {SITE_CONFIG.name}
                      </span>
                      <span className="text-[10px] text-evergreen-text-secondary -mt-0.5 font-medium">
                        Eco-Luxury Living
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Đóng menu"
                    className="p-2 rounded-full bg-white border border-evergreen-border-subtle text-evergreen-text-primary hover:bg-evergreen-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-evergreen-dark active:scale-95 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2" aria-label="Menu điều hướng di động">
                  {mainNavItems.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname === item.href || pathname.startsWith(`${item.href}/`);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleClose}
                        className={cn(
                          "flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-evergreen-dark text-white shadow-sm"
                            : "bg-white border border-evergreen-border-subtle/70 text-evergreen-text-primary hover:bg-evergreen-subtle"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={cn(
                              "p-1.5 rounded-xl",
                              isActive
                                ? "bg-white/10 text-evergreen-lime"
                                : "bg-evergreen-subtle text-evergreen-text-secondary"
                            )}
                          >
                            {NAV_ICONS[item.href] || <Home className="w-4 h-4" />}
                          </span>
                          <span>{item.title}</span>
                        </div>
                        {isActive ? (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-evergreen-lime text-evergreen-dark font-semibold">
                            Hiện tại
                          </span>
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-evergreen-text-muted" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Drawer Bottom */}
              <div className="flex flex-col gap-3 pt-4 border-t border-evergreen-border-subtle">
                {/* Mobile CTA */}
                <Link
                  href="/lien-he"
                  onClick={handleClose}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-evergreen-lime hover:bg-evergreen-lime-hover text-evergreen-dark font-semibold text-sm shadow-sm transition-all duration-200 active:scale-95"
                >
                  <span>Tư vấn ngay</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </Link>

                {/* Demo Notice */}
                <div className="p-3 rounded-xl bg-white border border-evergreen-border-subtle text-center text-[11px] text-evergreen-text-secondary flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-evergreen-forest shrink-0" />
                  <span>Giao diện demo LumiNest Việt Nam</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
