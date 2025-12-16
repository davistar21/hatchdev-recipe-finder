"use client";

import React from "react";
import { BottomNav } from "@/components/feed/BottomNav";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function MainLayout({ children, className = "" }: MainLayoutProps) {
  const pathname = usePathname();
  let strippedPath = pathname.split("/")[1];

  const hiddenRoutes = ["login", "signup", "welcome", "recipes", "landing"];
  const shouldShowBottomNav = !hiddenRoutes.some((route) =>
    strippedPath.startsWith(route)
  );

  return (
    <div
      className={`min-h-screen bg-background text-foreground font-display overflow-x-hidden md:p-4 ${className}`}
    >
      {children}
      <AnimatePresence mode="wait">
        {shouldShowBottomNav && <BottomNav />}
      </AnimatePresence>
    </div>
  );
}
