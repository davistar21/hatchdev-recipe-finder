"use client";

import React from "react";
import { Utensils } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Utensils className="text-primary-foreground w-4 h-4" />
          </div>
          <span className="font-bold text-lg text-foreground">
            RecipeSocial
          </span>
        </div>
        <p className="text-sm text-muted-foreground/60">
          © 2024 Recipe Social. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
