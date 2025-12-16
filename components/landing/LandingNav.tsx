"use client";

import React from "react";
import Link from "next/link";
import { Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
            <Utensils className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            RecipeSocial
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="ghost"
            className="hidden sm:flex text-sm font-semibold text-muted-foreground hover:text-primary transition-colors bg-transparent hover:bg-transparent"
          >
            <Link href="/login">Log In</Link>
          </Button>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 h-auto"
          >
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
