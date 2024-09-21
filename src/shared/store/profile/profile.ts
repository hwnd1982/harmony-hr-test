import { StateCreator } from "zustand";
import { AppMiddleware, AppStore } from "../../../app/store/store";

export type Profile = {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: Date;
  updatedAt: Date;
};

export function isProfile(value: unknown): value is Profile {
  return (
    !!value &&
    typeof value === "object" &&
    Object.hasOwn(value, "id") &&
    Object.hasOwn(value, "email") &&
    Object.hasOwn(value, "password") &&
    Object.hasOwn(value, "name") &&
    Object.hasOwn(value, "role") &&
    Object.hasOwn(value, "avatar") &&
    Object.hasOwn(value, "creationAt") &&
    Object.hasOwn(value, "updatedAt")
  );
}

export type ProfileState = Profile | null;

export interface ProfileSlice {
  profile: ProfileState;
  setProfile: (profile: Profile | null) => void;
}

export const createProfileSlice: StateCreator<AppStore, AppMiddleware, [], ProfileSlice> = set => ({
  profile: null,

  setProfile: profile => {
    set({ profile });
  },
});
