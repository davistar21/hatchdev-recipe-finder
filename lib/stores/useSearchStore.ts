import { create } from "zustand";
// import axios from "../api/axios";
import { MOCK_RECIPES } from "@/lib/mockData";
import { PAGINATED_RECIPES } from "@/lib/mockData";

const ITEMS_PER_PAGE = 6

interface SearchState {
  query: string;
  filters: {
    category: string | null;
    tags: string[];
  };
  results: Recipe[];
  isLoading: boolean;

  // Paginated search
  page: number;
  hasMore: boolean;

  // Actions
  setQuery: (query: string) => void;
  setCategory: (category: string | null) => void;
  searchRecipes: (isNewSearch?: boolean) => Promise<void>; // Skeleton
}

export const useSearchStore = create<SearchState>((set, get) => ({
  query: "",
  filters: {
    category: "All",
    tags: [],
  },
  // results: [],
  results: [],
  isLoading: false,

  page:1,
  hasMore: true,

  setQuery: (query) => set({ query }),
  setCategory: (category) =>
    set((state) => ({
      filters: { ...state.filters, category },
    })),

  searchRecipes: async (isNewSearch = true) => {
    /* To be implemented by Mayor-king */
    set({isLoading: true}); 

    setTimeout(() => {
      const {query, filters, page} = get()
      // let filtered = MOCK_RECIPES

      const allMatches = PAGINATED_RECIPES.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(query.toLowerCase())

        return matchesSearch
      })

      const targetPage = isNewSearch ? 1 : page + 1;

      const endIndex = targetPage * ITEMS_PER_PAGE;

      const currentResults = allMatches.slice(0, endIndex);

      const hasMore = currentResults.length < allMatches.length;

      set({
        results: currentResults,
        page: targetPage,
        hasMore: hasMore,
        isLoading:  false,
      })
    }, 800)
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
