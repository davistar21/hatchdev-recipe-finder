"use client";

import React from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { LandingNav } from "./LandingNav";
import { LandingHero } from "./LandingHero";
import { LandingFeatures } from "./LandingFeatures";
import { LandingFooter } from "./LandingFooter";

export function LandingPage() {
  return (
    <MainLayout>
      <LandingNav />
      <LandingHero />
      <LandingFeatures />
      <LandingFooter />
    </MainLayout>
  );
}
