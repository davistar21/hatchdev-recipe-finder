import { create } from "zustand";
// import axios from "../api/axios";
import { MOCK_RECIPES } from "@/lib/mockData";

interface SearchState {
  query: string;
  filters: {
    category: string | null;
    tags: string[];
  };
  results: Recipe[];
  isLoading: boolean;

  // Actions
  setQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  searchRecipes: () => Promise<void>; // Skeleton
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  filters: {
    category: null,
    tags: [],
  },
  // results: [],
  results: MOCK_RECIPES,
  isLoading: false,

  setQuery: (query) => set({ query }),
  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),

  searchRecipes: async () => {
    /* To be implemented by Mayor-king */
    set({isLoading: true}); 

    setTimeout(() => {
      const {query, filters} = get()
      let filtered = MOCK_RECIPES;

      if (query) {
        filtered = filtered.filter(recipe => 
          recipe.title.toLowerCase().includes(query.toLowerCase())
        )
      }

      if (filters.category && filters.category !== "All") {}

      set({results: filtered, isLoading: false});
    }, 500)
    // const {query, filters} = get();

    // set({isLoading: true});

    // try {
    //   // 3. Prepare the URL parameters
    //   // Result: /search/recipes?q=pasta&category=dinner&tags=easy,quick
    //   const params = new URLSearchParams();
    //   if (query) params.append("q", query);
    //   if (filters.category) params.append("category", filters.category);
    //   filters.tags.forEach(tag => params.append("tags", tag));

    //   // 4. Make the API call
    //   const response = await axios.get(`/search/recipes?${params.toString()}`)

    //   set({results: response.data, isLoading: false});

    // } catch (error) {
    //   console.error("Error failed:", error);

    //   set({results: [], isLoading: false})
    // }


  },
}));
