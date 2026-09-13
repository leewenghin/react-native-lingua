import { LinearGradient } from "expo-linear-gradient";
import { Image, Pressable, Text, View } from "react-native";

import { getLessonImage } from "@/lib/lesson-images";
import type { Language, Lesson, Unit } from "@/types/learning";
import { colors } from "@/theme";

type ContinueLearningCardProps = {
  language: Language;
  unit: Unit;
  lesson: Lesson;
  levelLabel: string;
};

export function ContinueLearningCard({
  language,
  unit,
  lesson,
  levelLabel,
}: ContinueLearningCardProps) {
  return (
    <LinearGradient
      colors={[colors.linguaPurple, colors.linguaBlue]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      className="overflow-hidden rounded-[28px]"
    >
      <View className="min-h-[188px] flex-row overflow-hidden px-5 py-5">
        <View className="z-10 flex-1 justify-between pr-3">
          <View>
            <Text className="text-[14px] font-poppins-medium text-white/90">
              Continue learning
            </Text>
            <Text className="mt-1 text-[30px] leading-9 font-poppins-bold text-white">
              {language.name}
            </Text>
            <Text className="mt-1 text-[14px] font-poppins-medium text-white/90">
              {levelLabel} • Unit {unit.number}
            </Text>
          </View>

          <Pressable
            className="mt-5 self-start rounded-full bg-white px-6 py-3"
            style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
          >
            <Text className="text-[15px] font-poppins-bold text-lingua-purple">
              Continue
            </Text>
          </Pressable>
        </View>

        <View className="absolute bottom-0 right-0 top-2 w-[150px] items-end justify-end">
          <Image
            source={getLessonImage(lesson.imageKey)}
            className="h-[150px] w-[150px]"
            resizeMode="contain"
          />
        </View>
      </View>
    </LinearGradient>
  );
}
