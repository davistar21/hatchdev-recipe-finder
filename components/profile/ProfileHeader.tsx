"use client";

import React from "react";
import { Settings, Check, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="flex flex-col gap-6 pt-6 px-4">
      {/* Top Bar included here or in page layout, but design shows it with settings */}

      {/* Avatar and Info */}
      <div className="flex w-full flex-col gap-4 items-center">
        <div className="flex gap-4 flex-col items-center">
          <div className="relative">
            <div className="rounded-full h-28 w-28 border-4 border-primary shadow-sm overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfdOd0IJ_KscmBzMr-XAOIyFlB5oUfBw3gH9HKrscNLdlSZUcJdteDKZYNhYwc98DJsk_Ex9MfehWUotp8egqR6LvzEUkUYBEleCBxRUYtMRKe04P5_SK3SsWTvftNGiCXtIAXDauKnSiSrNIhubTMnO4VsBLg1_D8_pkz790yV_GUt13AtpAAYWnbdYcL6_wZfQ41m7R3yrMnjLAtByr594KKjEl3Kct8S1uhLnnZXudJzkXn5--qZeRwqtR_MWD6e00XPILy4aI"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            {/* Verification Badge */}
            <div className="absolute bottom-1 right-1 bg-primary text-background rounded-full p-1 border-2 border-background flex items-center justify-center">
              <Check
                className="w-3 h-3 md:w-4 md:h-4 text-white font-bold"
                strokeWidth={4}
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-foreground text-2xl font-bold leading-tight tracking-tight text-center">
              Julia Childish
            </h1>
            <p className="text-muted-foreground text-sm font-medium leading-normal text-center max-w-[280px]">
              Home cook obsessed with sourdough and spicy noodles. 🍜🍞
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
