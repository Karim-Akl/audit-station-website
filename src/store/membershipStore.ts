import { create } from "zustand";
import { IMembership } from "@/lib/types/memberships";

type Store = {
  selectedMembership: IMembership | null;

  addMembership: (membership: IMembership) => void;
  resetValues: () => void;
};

export const membershipStore = create<Store>()((set) => ({
  selectedMembership: null,
  addMembership: (membership) =>
    set(() => {
      return {
        selectedMembership: membership,
      };
    }),
  resetValues: () => {
    set({ selectedMembership: null });
  },
}));
