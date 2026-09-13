import { useEffect, useState } from "react";

import { useLanguageStore } from "@/store/language-store";

export function useLanguageStoreHydration() {
  const [hasHydrated, setHasHydrated] = useState(
    () => useLanguageStore.persist.hasHydrated(),
  );

  useEffect(() => {
    if (hasHydrated) {
      return;
    }

    return useLanguageStore.persist.onFinishHydration(() => {
      setHasHydrated(true);
    });
  }, [hasHydrated]);

  return hasHydrated;
}
