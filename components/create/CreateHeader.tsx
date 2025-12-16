"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CreateHeader() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-background/90 backdrop-blur-md px-4 py-3 justify-between border-b border-border">
      <Link href="/feed">
        <button className="text-muted-foreground text-base font-medium hover:text-foreground transition-colors">
          Cancel
        </button>
      </Link>
      <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight">
        Create Recipe
      </h2>
      <button className="bg-primary hover:bg-primary-dark text-black text-sm font-bold px-5 py-2 rounded-full shadow-sm transition-all transform active:scale-95">
        Publish
      </button>
    </div>
  );
}
