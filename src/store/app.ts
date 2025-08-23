import { create } from "zustand";

type AppState = {
  theme: "dark" | "light";
  setTheme: (t: AppState["theme"]) => void;
  user: { id: string; email: string } | null;
  setUser: (u: AppState["user"]) => void;
  logout: () => void;
};

export const useApp = create<AppState>((set) => ({
  theme: "dark",
  setTheme: (theme) => set({ theme }),
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
