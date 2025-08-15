import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { User } from "@/types";

type State = {
  user: User | null;
  accessToken: string;
};

type Action = {
  setAccessToken: (accessToken: string) => void;
  setUser: (user: User) => void;
  clearUser: () => void;
};

const useAuthStore = create<State & Action>()(
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
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
