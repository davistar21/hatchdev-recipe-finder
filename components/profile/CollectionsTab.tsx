"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { RecipeCard } from "@/components/feed/RecipeCard";
import { MOCK_RECIPES } from "@/lib/mockData";
import { Skeleton } from "../ui/skeleton";

export function CollectionsTab() {
  const [loading, setLoading] = useState(true)
  // Simulate fetching saved recipes (e.g., first 2 items)
  const savedRecipes = MOCK_RECIPES.slice(0, 2);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {[1, 2].map((i) => (
          <Skeleton key={i} className="h-[320px] w-full rounded-2xl" />
        ))}
      </div>
    )
  }

  if (savedRecipes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-muted rounded-full p-4 mb-4">
          <span className="text-4xl">🔖</span>
        </div>
        <h3 className="text-lg font-bold">No collections yet</h3>
        <p className="text-muted-foreground text-sm max-w-[200px] mt-2">
          Save your favorite recipes to find them easily later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 pb-24">
      {savedRecipes.map((recipe) => (
        <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
          <RecipeCard
            title={recipe.title}
            image={recipe.image}
            author={recipe.chef}
            rating={recipe.rating}
            reviews={recipe.reviewsCount}
            time={recipe.time}
            calories={recipe.calories}
          />
        </Link>
      ))}
    </div>
  );
}