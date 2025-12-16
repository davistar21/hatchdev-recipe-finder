import { create } from "zustand";

interface RecipeStore {
  recipes: Recipe[];
  activeRecipe: Recipe | null;
  isLoading: boolean;
  error: string | null;
  fetchRecipes: () => Promise<void>; // Skeleton
  fetchRecipeById: (id: string) => Promise<void>; // Skeleton
  createRecipe: (data: Partial<Recipe>) => Promise<void>; // Skeleton
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  activeRecipe: null,
  isLoading: false,
  error: null,
  fetchRecipes: async () => {
    /* To be implemented by Tomilade */
     set({ isLoading: true, error: null });

    try {
      const response = await fetch("");
      const data = await response.json();

      set({ recipes: data, isLoading: false });
    } catch (error) {
      set({ error: "Failed to fetch recipes", isLoading: false });
    }
  },
  fetchRecipeById: async () => {
    /* To be implemented by Tomilade */
  },
  createRecipe: async (newRecipe) => {
    /* To be implemented by Tomilade */
        set({ isLoading: true, error: null });

    try {
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRecipe),
      });

      const createdRecipe = await response.json();

      set((state) => ({
        recipes: [...state.recipes, createdRecipe],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: "Failed to create recipe", isLoading: false });
    }

  },
}));
