import type { Unit } from "@/types/learning";

export const units: Unit[] = [
  {
    id: "es-unit-1",
    languageCode: "es",
    number: 1,
    title: "First Hello",
    description: "Greet people, introduce yourself, and start simple conversations.",
    lessonIds: ["es-u1-l1", "es-u1-l2", "es-u1-l3"],
  },
  {
    id: "es-unit-2",
    languageCode: "es",
    number: 2,
    title: "Out and About",
    description: "Handle cafés, directions, and polite goodbyes in Spanish.",
    lessonIds: ["es-u2-l1", "es-u2-l2", "es-u2-l3"],
  },
  {
    id: "fr-unit-1",
    languageCode: "fr",
    number: 1,
    title: "Bonjour Basics",
    description: "Learn warm French greetings and simple introductions.",
    lessonIds: ["fr-u1-l1", "fr-u1-l2", "fr-u1-l3"],
  },
  {
    id: "fr-unit-2",
    languageCode: "fr",
    number: 2,
    title: "Paris Essentials",
    description: "Order at a café, ask for help, and wrap up conversations politely.",
    lessonIds: ["fr-u2-l1", "fr-u2-l2", "fr-u2-l3"],
  },
  {
    id: "ja-unit-1",
    languageCode: "ja",
    number: 1,
    title: "Polite Beginnings",
    description: "Start with respectful Japanese greetings and introductions.",
    lessonIds: ["ja-u1-l1", "ja-u1-l2", "ja-u1-l3"],
  },
  {
    id: "ja-unit-2",
    languageCode: "ja",
    number: 2,
    title: "Daily Courtesies",
    description: "Use everyday phrases for shops, meals, and saying goodbye.",
    lessonIds: ["ja-u2-l1", "ja-u2-l2", "ja-u2-l3"],
  },
];

export function getUnitsByLanguage(languageCode: Unit["languageCode"]): Unit[] {
  return units
    .filter((unit) => unit.languageCode === languageCode)
    .sort((a, b) => a.number - b.number);
}

export function getUnitById(unitId: string): Unit | undefined {
  return units.find((unit) => unit.id === unitId);
}
