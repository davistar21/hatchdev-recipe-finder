import { create } from "zustand";
import axios from "@/lib/api/axios";

type InteractionState = {
  checklist: Record<string, boolean>;
  reviews: any[];
  recommendations: any[];
  pricing: any | null;

  toggleIngredient: (id: string) => void;
  loadChecklist: () => void;

  fetchReviews: (recipeId: string) => Promise<void>;
  addReview: (recipeId: string, data: any) => Promise<void>;

  fetchRecommendations: (mood: string) => Promise<void>;
  fetchPricing: (recipeId: string) => Promise<void>;
};

export const useInteractionStore = create<InteractionState>((set, get) => ({
  checklist: {},
  reviews: [],
  recommendations: [],
  pricing: null,

  toggleIngredient: (id) => {
    const updated = {
      ...get().checklist,
      [id]: !get().checklist[id],
    };

    localStorage.setItem("ingredient-checklist", JSON.stringify(updated));
    set({ checklist: updated });
  },

  loadChecklist: () => {
    const saved = localStorage.getItem("ingredient-checklist");
    if (saved) {
      set({ checklist: JSON.parse(saved) });
    }
  },

  fetchReviews: async (recipeId) => {
    const res = await axios.get(`/recipes/${recipeId}/reviews`);
    set({ reviews: res.data });
  },

  addReview: async (recipeId, data) => {
    await axios.post(`/recipes/${recipeId}/reviews`, data);
    await get().fetchReviews(recipeId);
  },

  fetchRecommendations: async (mood: string) => {
    const res = await axios.post(`/ai/recommendations`, { mood });
    set({ recommendations: res.data });
  },

  fetchPricing: async (recipeId) => {
    const res = await axios.get(`/pricing/${recipeId}`);
    set({ pricing: res.data });
  },
}));
