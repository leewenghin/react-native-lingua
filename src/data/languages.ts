import type { Language, LanguageCode } from "@/types/learning";

export const languages: Language[] = [
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flagCode: "es",
    description: "Learn everyday Spanish for travel, food, and friendly conversations.",
    learnerCount: "28.4M learners",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flagCode: "fr",
    description: "Build confidence with French greetings, café talk, and getting around town.",
    learnerCount: "19.4M learners",
  },
  {
    code: "ja",
    name: "Japanese",
    nativeName: "日本語",
    flagCode: "jp",
    description: "Start with polite Japanese greetings and simple phrases for daily life.",
    learnerCount: "12.7M learners",
  },
  {
    code: "ko",
    name: "Korean",
    nativeName: "한국어",
    flagCode: "kr",
    description: "Learn Korean basics for K-culture, travel, and everyday conversations.",
    learnerCount: "9.3M learners",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flagCode: "de",
    description: "Master German greetings, directions, and phrases for work and travel.",
    learnerCount: "8.1M learners",
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flagCode: "cn",
    description: "Begin with Mandarin greetings and practical phrases for daily life.",
    learnerCount: "7.4M learners",
  },
];

export function getLanguageByCode(code: LanguageCode): Language | undefined {
  return languages.find((language) => language.code === code);
}
