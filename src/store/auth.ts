import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { cookieStorage } from "zustand-cookie-storage";
import type { User } from "@/types";

type State = {
  user: User | null;
  accessToken: string;
};

type Actions = {
  setAccessToken: (accessToken: string) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const useAuthStore = create<State & Actions>()(
  persist(
    (set) => ({
      user: null,
      accessToken: "",
      setAccessToken: (accessToken) => set({ accessToken }),
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => cookieStorage),
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
      }),
    }
  )
);

export default useAuthStore;
