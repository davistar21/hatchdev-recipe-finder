import { create } from "zustand";

interface SearchState {
  query: string;
  filters: {
    category: string | null;
    tags: string[];
  };
  results: Recipe[];
  setQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  searchRecipes: () => Promise<void>; // Skeleton
}

export const useSearchStore = create<SearchState>((set) => ({
  query: "",
  filters: {
    category: null,
    tags: [],
  },
  results: [],
  setQuery: (query) => set({ query }),
  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),
  searchRecipes: async () => {
    /* To be implemented by Mayor-king */
  },
}));
