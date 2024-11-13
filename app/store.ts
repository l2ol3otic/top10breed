import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { BreedSelectedState } from "./interface";

const BreedSelectedStore = persist(
    (set) => ({
        state: {} as BreedSelectedState,
        set: (data: BreedSelectedState) => set({ state: data }),
        reset: () => set({ state: {} }),
        empty: () => set({ state: {} }),
    }),
    {
        name: 'BreedSelectedState',
    }
)

export const useBreedSelectedStore = create(BreedSelectedStore)
  
