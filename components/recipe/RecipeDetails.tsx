"use client";

import React from "react";
import { RecipeHero } from "./RecipeHero";
import { ChefCard } from "./ChefCard";
import { RecipeActionBar } from "./RecipeActionBar";
import { IngredientList } from "./IngredientList";
import { InstructionList } from "./InstructionList";
import { ReviewTeaser } from "./ReviewTeaser";
import { CookingModeBar } from "./CookingModeBar";

export function RecipeDetails() {
  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen pb-28">
        <RecipeHero />

        {/* Main Content Container (Overlapping) */}
        <div className="relative px-5 -mt-6 z-10 flex flex-col gap-6">
          <ChefCard />
          <RecipeActionBar />
          <IngredientList />
          <hr className="border-border" />
          <InstructionList />
          <hr className="border-border" />
          <ReviewTeaser />
        </div>

        <CookingModeBar />
      </div>
    </div>
  );
}
