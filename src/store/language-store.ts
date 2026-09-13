import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { LanguageCode } from "@/types/learning";

type LanguageState = {
  selectedLanguageCode: LanguageCode | null;
  setSelectedLanguage: (code: LanguageCode) => void;
  clearSelectedLanguage: () => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguageCode: null,
      setSelectedLanguage: (code) => set({ selectedLanguageCode: code }),
      clearSelectedLanguage: () => set({ selectedLanguageCode: null }),
    }),
    {
      name: "jotwize-language",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        selectedLanguageCode: state.selectedLanguageCode,
      }),
    },
  ),
);
