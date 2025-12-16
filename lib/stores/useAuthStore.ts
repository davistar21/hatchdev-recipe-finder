import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (credentials: { email: string }) => Promise<void>; // Skeleton only
  register: (data: { name: string; email: string }) => Promise<void>; // Skeleton only
  logout: () => void;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      login: async () => {
        /* To be implemented by Ibraheem */
      },
      register: async () => {
        /* To be implemented by Ibraheem */
      },
      logout: () => set({ user: null, token: null }),
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
