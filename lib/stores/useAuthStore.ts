import { create } from "zustand";
import { persist } from "zustand/middleware";
import api from "@/lib/api/axios";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (credentials: { email: string; password: string }) => Promise<void>;
  register: (data: { name: string; email: string; password: string }) => Promise<void>;

  fetchProfile: () => Promise<void>;
  updateProfile: (data: { name: string; bio: string }) => Promise<void>;

  uploadAvatar: (file: File) => Promise<string>;

  logout: () => void;
  setUser: (user: User) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      clearError: () => set({ error: null }),

      login: async (credentials) => {
        set({ isLoading: true, error: null });

        try {
          const res = await api.post<AuthResponse>("/auth/login", credentials);
          const { token, user } = res.data;

          // Axios interceptor reads token from localStorage("token")
          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
          }

          set({ token, user, isLoading: false });
        } catch (err: any) {
          const message =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            "Login failed. Please try again.";

          set({ error: message, isLoading: false });
          throw err;
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null });

        try {
          const res = await api.post<AuthResponse>("/auth/register", data);
          const { token, user } = res.data;

          if (typeof window !== "undefined") {
            localStorage.setItem("token", token);
          }

          set({ token, user, isLoading: false });
        } catch (err: any) {
          const message =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            "Sign up failed. Please try again.";

          set({ error: message, isLoading: false });
          throw err;
        }
      },

      fetchProfile: async () => {
        set({ isLoading: true, error: null });

        try {
          const res = await api.get<User>("/users/me");
          set({ user: res.data, isLoading: false });
        } catch {
          // backend might not be ready yet - don't break UI
          set({ isLoading: false });
        }
      },

      updateProfile: async (data) => {
        set({ isLoading: true, error: null });

        try {
          const res = await api.patch<User>("/users/me", data);
          set({ user: res.data, isLoading: false });
        } catch (err: any) {
          const message =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            "Update failed. Please try again.";

          set({ error: message, isLoading: false });
          throw err;
        }
      },

      uploadAvatar: async (file) => {
        set({ isLoading: true, error: null });

        try {
          const formData = new FormData();
          // backend may expect "image" or "file". If "image" fails, change to "file".
          formData.append("image", file);

          const res = await api.post<{ url: string }>("/upload/images", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          const imageUrl = res.data.url;

          set((state) => ({
            user: state.user ? { ...state.user, avatar: imageUrl } : state.user,
            isLoading: false,
          }));

          return imageUrl;
        } catch (err: any) {
          const message =
            err?.response?.data?.message ||
            err?.response?.data?.error ||
            "Image upload failed. Please try again.";

          set({ error: message, isLoading: false });
          throw err;
        }
      },

      logout: () => {
        if (typeof window !== "undefined") {
          localStorage.removeItem("token");
        }
        set({ user: null, token: null, isLoading: false, error: null });
      },

      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
