"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const CATEGORIES = [
  { label: "All", active: true },
  { label: "Trending", icon: "🔥" },
  { label: "Healthy", icon: "🥑" },
  { label: "Italian", icon: "🍝" },
  { label: "Fast", icon: "⏱️" },
];

export function CategoryFilter() {
  return (
    <div className="flex gap-3 px-4 pb-4 pt-2 overflow-x-auto no-scrollbar bg-card sticky top-[120px] z-20">
      {CATEGORIES.map((cat, index) => (
        <Button
          key={cat.label}
          variant={cat.active ? "default" : "outline"}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 shadow-sm transition-colors ${
            cat.active
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-background border-border text-foreground hover:bg-muted"
          }`}
        >
          {cat.icon && <span className="text-lg">{cat.icon}</span>}
          <p className="text-sm font-bold leading-normal">{cat.label}</p>
        </Button>
      ))}
    </div>
  );
}
