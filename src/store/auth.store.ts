import { create } from "zustand";
import type { User } from "../types/user";

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  isAuthenticated: () => !!get().user,
}));
