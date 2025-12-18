"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { RecipeDetails } from "@/components/recipe/RecipeDetails";
import { useRecipeStore } from "@/lib/stores/useRecipeStore";
import { MOCK_RECIPES } from "@/lib/mockData";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecipePage() {
  const params = useParams();
  const id = params.id as string;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setActiveRecipe } = useRecipeStore();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // TODO: Replace with actual API call to /api/recipes/{id}
        // const response = await fetch(`/api/recipes/${id}`);
        // const data = await response.json();

        // For now, use mock data
        const foundRecipe = MOCK_RECIPES.find((r) => r.id === id);

        if (!foundRecipe) {
          setError("Recipe not found");
          setRecipe(null);
          return;
        }

        setRecipe(foundRecipe);
        setActiveRecipe(foundRecipe);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load recipe");
        setRecipe(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [id, setActiveRecipe]);

  if (isLoading) {
    return (
      <div className="bg-background min-h-screen flex justify-center font-display">
        <div className="relative flex h-full w-full max-w-md flex-col bg-background shadow-2xl overflow-hidden min-h-screen pb-28">
          {/* Hero Skeleton */}
          <Skeleton className="w-full h-[420px] rounded-b-3xl" />
          
          {/* Content Skeleton */}
          <div className="relative px-5 -mt-6 z-10 flex flex-col gap-6">
            <Skeleton className="w-full h-20 rounded-2xl" />
            <Skeleton className="w-full h-32 rounded-xl" />
            <Skeleton className="w-full h-40 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="bg-background min-h-screen flex items-center justify-center font-display">
        <div className="text-center px-4">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            {error || "Recipe not found"}
          </h1>
          <p className="text-muted-foreground mb-6">
            {error
              ? "There was an error loading this recipe."
              : "The recipe you're looking for doesn't exist."}
          </p>
          <a
            href="/feed"
            className="inline-block px-6 py-2 bg-primary text-black font-bold rounded-xl hover:bg-primary/80 transition-colors"
          >
            Back to Feed
          </a>
        </div>
      </div>
    );
  }

  return <RecipeDetails recipe={recipe} />;
}
