import { getLanguageByCode } from "@/data/languages";
import { getLessonsByLanguage, getLessonsByUnit } from "@/data/lessons";
import { getUnitsByLanguage } from "@/data/units";
import type { Language, LanguageCode, Lesson, Unit } from "@/types/learning";

const GREETING_BY_LANGUAGE: Record<LanguageCode, string> = {
  es: "Hola",
  fr: "Bonjour",
  ja: "こんにちは",
  ko: "안녕하세요",
  de: "Hallo",
  zh: "你好",
};

export type TodaysPlanItemType = "lesson" | "ai-conversation" | "new-words";

export type TodaysPlanItem = {
  id: string;
  title: string;
  subtitle: string;
  completed: boolean;
  type: TodaysPlanItemType;
};

export type HomeScreenData = {
  language: Language;
  greetingWord: string;
  activeUnit: Unit;
  continueLesson: Lesson;
  dailyGoal: {
    current: number;
    target: number;
  };
  streak: number;
  levelLabel: string;
  todaysPlan: TodaysPlanItem[];
};

function getLessonPlanSubtitle(lesson: Lesson): string {
  if (lesson.subtitle.toLowerCase().includes("café")) {
    return "At the café";
  }

  return lesson.subtitle;
}

function getNewWordsCount(lessons: Lesson[]): number {
  const totalWords = lessons
    .slice(0, 3)
    .reduce((count, lesson) => count + lesson.vocabulary.length, 0);

  return Math.max(totalWords, 10);
}

function createFallbackUnit(languageCode: LanguageCode, language: Language): Unit {
  return {
    id: `${languageCode}-unit-1`,
    languageCode,
    number: 1,
    title: "Getting Started",
    description: language.description,
    lessonIds: [],
  };
}

function createFallbackLesson(languageCode: LanguageCode, unitId: string): Lesson {
  return {
    id: `${languageCode}-placeholder-lesson`,
    languageCode,
    unitId,
    number: 1,
    title: "Coming Soon",
    subtitle: "Lessons arriving soon",
    description: "Lesson content for this language is on the way.",
    imageKey: "palace",
    estimatedMinutes: 5,
    goals: [],
    vocabulary: [],
    phrases: [],
    activities: [],
    aiTeacher: {
      systemPrompt: "",
      openingLine: "",
      teachingNotes: [],
    },
  };
}

export function getHomeScreenData(languageCode: LanguageCode): HomeScreenData {
  const language = getLanguageByCode(languageCode);

  if (!language) {
    throw new Error(`Unknown language code: ${languageCode}`);
  }

  const units = getUnitsByLanguage(languageCode);
  const lessons = getLessonsByLanguage(languageCode);
  const activeUnit =
    units.find((unit) => unit.number === 2) ??
    units[0] ??
    createFallbackUnit(languageCode, language);
  const unitLessons = getLessonsByUnit(activeUnit.id);
  const continueLesson =
    unitLessons[0] ?? lessons[0] ?? createFallbackLesson(languageCode, activeUnit.id);
  const cafeLesson =
    lessons.find((lesson) => lesson.subtitle.toLowerCase().includes("café")) ??
    continueLesson;
  const completedXp = lessons
    .slice(0, 3)
    .reduce((total, lesson) => total + lesson.estimatedMinutes, 0);
  const dailyTarget = 20;

  return {
    language,
    greetingWord: GREETING_BY_LANGUAGE[languageCode],
    activeUnit,
    continueLesson,
    dailyGoal: {
      current: Math.min(completedXp, dailyTarget - 5) || 15,
      target: dailyTarget,
    },
    streak: 12,
    levelLabel: "A1",
    todaysPlan: [
      {
        id: "lesson",
        title: "Lesson",
        subtitle: getLessonPlanSubtitle(cafeLesson),
        completed: true,
        type: "lesson",
      },
      {
        id: "ai-conversation",
        title: "AI Conversation",
        subtitle: "Talk about your day",
        completed: false,
        type: "ai-conversation",
      },
      {
        id: "new-words",
        title: "New words",
        subtitle: `${getNewWordsCount(lessons)} words`,
        completed: false,
        type: "new-words",
      },
    ],
  };
}
