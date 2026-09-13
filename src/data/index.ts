export { getLanguageByCode, languages } from "@/data/languages";
export { getFlagUrl } from "@/lib/flags";
export {
  getLessonById,
  getLessonCountByLanguage,
  getLessonsByLanguage,
  getLessonsByUnit,
  lessons,
} from "@/data/lessons";
export { getUnitById, getUnitsByLanguage, units } from "@/data/units";

export type {
  Activity,
  ActivityType,
  AiTeacherPrompt,
  FlagCode,
  Language,
  LanguageCode,
  Lesson,
  LessonGoal,
  LessonImageKey,
  PhraseItem,
  Unit,
  VocabularyItem,
} from "@/types/learning";
