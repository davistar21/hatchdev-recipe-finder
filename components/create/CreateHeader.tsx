"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CreateHeader() {
  return (
    <div className="sticky top-0 z-50 flex items-center bg-background/90 backdrop-blur-md px-4 py-3 justify-between border-b border-border">
      <Link href="/feed">
        <Button
          variant="ghost"
          className="text-muted-foreground text-base font-medium hover:text-foreground hover:bg-transparent transition-colors p-0"
        >
          Cancel
        </Button>
      </Link>
      <h2 className="text-foreground text-lg font-bold leading-tight tracking-tight">
        Create Recipe
      </h2>
      <Button className="bg-primary hover:bg-primary-dark text-black text-sm font-bold px-5 py-2 rounded-full shadow-sm transition-all transform active:scale-95 h-auto">
        Publish
      </Button>
    </div>
  );
}
