"use client";

import React from "react";
import { RecipeHero } from "./RecipeHero";
import { ChefCard } from "./ChefCard";
import { RecipeActionBar } from "./RecipeActionBar";
import { IngredientList } from "./IngredientList";
import { InstructionList } from "./InstructionList";
import { ReviewTeaser } from "./ReviewTeaser";
import { CookingModeBar } from "./CookingModeBar";

interface RecipeDetailsProps {
  recipe: Recipe;
}

export function RecipeDetails({ recipe }: RecipeDetailsProps) {



  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen pb-28">
        <RecipeHero recipe={recipe} />

        {/* Main Content Container (Overlapping) */}
        <div className="relative px-5 -mt-6 z-10 flex flex-col gap-6">
          <ChefCard chef={recipe.chef} />
          <RecipeActionBar
            rating={recipe.rating}
            reviewsCount={recipe.reviewsCount}
          />
          <IngredientList
            ingredients={recipe.ingredients}
            servings={recipe.servings}
          />
          <hr className="border-border" />
          <InstructionList instructions={recipe.instructions} />
          <hr className="border-border" />
          <ReviewTeaser
            reviews={recipe.reviews}
            totalReviews={recipe.reviewsCount}
          />
        </div>

        <CookingModeBar />
      </div>
    </div>
  );
}
