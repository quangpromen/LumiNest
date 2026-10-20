import React from "react";
import { cn } from "@/lib/utils";

export type ContainerVariant = "wide" | "content" | "narrow" | "full";

const containerVariants: Record<ContainerVariant, string> = {
  wide: "w-full max-w-[1920px] mx-auto px-3.5 sm:px-5 md:px-6 lg:px-8 xl:px-10",
  content: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  narrow: "w-full max-w-4xl mx-auto px-4 sm:px-6",
  full: "w-full px-0",
};

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  variant?: ContainerVariant;
  children: React.ReactNode;
}

export function Container({
  as: Component = "div",
  variant = "content",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(containerVariants[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
