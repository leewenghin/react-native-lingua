import type { FlagCode } from "@/types/learning";

const FLAGCDN_BASE_URL = "https://flagcdn.com";

export function getFlagUrl(flagCode: FlagCode, width = 40): string {
  return `${FLAGCDN_BASE_URL}/w${width}/${flagCode}.png`;
}
