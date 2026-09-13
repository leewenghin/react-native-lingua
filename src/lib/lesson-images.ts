import type { ImageSourcePropType } from "react-native";

import { images } from "@/constants/images";
import type { LessonImageKey } from "@/types/learning";

const lessonImages: Record<LessonImageKey, ImageSourcePropType> = {
  palace: images.palace,
  treasure: images.treasure,
  greetings: images.mascotWelcome,
  food: images.palace,
  travel: images.palace,
  culture: images.mascotWelcome,
};

export function getLessonImage(imageKey: LessonImageKey) {
  return lessonImages[imageKey];
}
