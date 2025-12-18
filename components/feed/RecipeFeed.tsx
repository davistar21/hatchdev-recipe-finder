"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FeedHeader } from "./FeedHeader";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { RecipeCard } from "./RecipeCard";
// import { MOCK_RECIPES } from "@/lib/mockData";
// import { Leaf } from "lucide-react";
import { useSearchStore } from "@/lib/stores/useSearchStore";
import { Skeleton } from "../ui/skeleton";

export function RecipeFeed() {
    const {results, isLoading, searchRecipes } = useSearchStore();

    useEffect(() => {
        searchRecipes();
    }, [])

  return (
    <div className="bg-background min-h-screen flex justify-center font-display">
      <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen pb-24">
        {/* Status Bar Placeholder */}
        <div className="h-4 w-full bg-card shrink-0"></div>

        <FeedHeader />

        <div className="sticky top-0 z-20 bg-card">
          <SearchBar />
          <CategoryFilter />
        </div>

        {/* Scrollable Feed Content */}
        <div className="flex flex-col px-4 pt-4 gap-6 overflow-y-auto no-scrollbar">

          {isLoading && (
            <div className="flex flex-col gap-6">
              {[1,2,3].map((i) => (
                <Skeleton key={i} className="h-[320px] w-full rounded-3xl" />
              ))}
            </div>
          )}


          {!isLoading && results.map((recipe) => (
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

          {isLoading && results.length === 0 && <div className="text-center text-muted-foreground py-10">No recipes found.</div>}

          <div className="h-8"></div>
        </div>
      </div>
    </div>
  );
}