import { create } from "zustand";

interface RecipeStore {
  recipes: Recipe[];
  activeRecipe: Recipe | null;
  isLoading: boolean;
  error: string | null;
  fetchRecipes: () => Promise<void>; // Skeleton
  fetchRecipeById: (id: string) => Promise<void>; // Skeleton
  createRecipe: (data: Partial<Recipe>) => Promise<void>; // Skeleton
  setActiveRecipe: (recipe: Recipe) => void;
  updateRecipe: (recipe: Recipe) => void;
  deleteRecipe: (id: string) => Promise<void>;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
  recipes: [],
  activeRecipe: null,
  isLoading: false,
  error: null,
  
  setActiveRecipe: (recipe) => {
    set({ activeRecipe: recipe });
  },

  updateRecipe: (recipe) => {
    set({ activeRecipe: recipe });
  },

  deleteRecipe: async (id) => {
    /* To be implemented by Tomilade */
    set({ isLoading: true, error: null });

    try {
      const response = await fetch(`/api/recipes/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          activeRecipe: state.activeRecipe?.id === id ? null : state.activeRecipe,
          isLoading: false,
        }));
      }
    } catch (error) {
      set({ error: "Failed to delete recipe", isLoading: false });
    }
  },

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
  fetchRecipeById: async (id) => {
    /* To be implemented by Tomilade */
    set({isLoading: true, error: null});
     
    try {
      const response = await fetch(`api/user/${id}`)
      const data = await response.json();

      set({recipes: data, isLoading: false});
    } catch (error) {
      set({error: "Failed to fetch recipes", isLoading: false});
    }
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
