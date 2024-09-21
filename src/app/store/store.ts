import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createProfileSlice, ProfileSlice } from "@/shared";

export type AppMiddleware = [["zustand/devtools", never]];
export interface AppStore extends ProfileSlice {}
export const useAppStore = create<AppStore>()(
  persist(
    (set, get, ...args) => ({
      ...createProfileSlice(set, get, ...args),
    }),
    {
      name: "app-harmony-hr-store",
      partialize: state => ({
        profile: state.profile,
      }),
    }
  )
);
