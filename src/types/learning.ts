export type LanguageCode = "es" | "fr" | "ja" | "ko" | "de" | "zh";

/** ISO 3166-1 alpha-2 codes from https://flagcdn.com/en/codes.json */
export type FlagCode = "es" | "fr" | "jp" | "kr" | "de" | "cn";

export type ActivityType =
  | "repeat_phrase"
  | "translate"
  | "listen_and_respond"
  | "vocabulary_match"
  | "fill_in_blank";

export type LessonImageKey =
  | "palace"
  | "treasure"
  | "greetings"
  | "food"
  | "travel"
  | "culture";

export type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
  /** ISO code from https://flagcdn.com/en/codes.json */
  flagCode: FlagCode;
  description: string;
  learnerCount: string;
};

export type Unit = {
  id: string;
  languageCode: LanguageCode;
  number: number;
  title: string;
  description: string;
  lessonIds: string[];
};

export type LessonGoal = {
  id: string;
  description: string;
};

export type VocabularyItem = {
  id: string;
  term: string;
  translation: string;
  pronunciation?: string;
};

export type PhraseItem = {
  id: string;
  phrase: string;
  translation: string;
  context?: string;
};

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  prompt: string;
  targetAnswer?: string;
  hints?: string[];
};

export type AiTeacherPrompt = {
  systemPrompt: string;
  openingLine: string;
  teachingNotes: string[];
};

export type Lesson = {
  id: string;
  languageCode: LanguageCode;
  unitId: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  imageKey: LessonImageKey;
  estimatedMinutes: number;
  goals: LessonGoal[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  activities: Activity[];
  aiTeacher: AiTeacherPrompt;
};
