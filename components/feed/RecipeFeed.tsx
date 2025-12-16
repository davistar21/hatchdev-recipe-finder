"use client";

import React from "react";
import Link from "next/link";
import { FeedHeader } from "./FeedHeader";
import { SearchBar } from "./SearchBar";
import { CategoryFilter } from "./CategoryFilter";
import { RecipeCard } from "./RecipeCard";
import { BottomNav } from "./BottomNav";
import { MOCK_RECIPES } from "@/lib/mockData";
import { Leaf } from "lucide-react";

export function RecipeFeed() {
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
          {MOCK_RECIPES.map((recipe) => (
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

          <div className="h-8"></div>
        </div>

        <BottomNav />
      </div>
    </div>
  );
}
