import { useUser } from "@clerk/expo";
import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";

import { images } from "@/constants/images";
import { getFlagUrl } from "@/lib/flags";
import type { Language } from "@/types/learning";
import { colors } from "@/theme";

type HomeHeaderProps = {
  language: Language;
  greetingWord: string;
  streak: number;
};

export function HomeHeader({ language, greetingWord, streak }: HomeHeaderProps) {
  const { user } = useUser();
  const firstName =
    user?.firstName ?? user?.username?.split("@")[0] ?? "Learner";

  return (
    <View className="flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <Image
          source={{ uri: getFlagUrl(language.flagCode, 80) }}
          className="h-11 w-11 rounded-full"
          resizeMode="cover"
        />
        <Text className="text-[20px] font-poppins-bold text-text-primary">
          {greetingWord}, {firstName}! 👋
        </Text>
      </View>

      <View className="flex-row items-center gap-3">
        <View className="flex-row items-center gap-1">
          <Image
            source={images.streakFire}
            className="h-5 w-5"
            resizeMode="contain"
          />
          <Text className="text-[15px] font-poppins-bold text-text-primary">
            {streak}
          </Text>
        </View>

        <Pressable
          className="h-10 w-10 items-center justify-center rounded-full bg-surface"
          style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
          hitSlop={8}
        >
          {process.env.EXPO_OS === "ios" ? (
            <SymbolView
              name="bell"
              tintColor={colors.textPrimary}
              resizeMode="scaleAspectFit"
              className="h-[18px] w-[18px]"
            />
          ) : (
            <Text className="text-[16px] text-text-primary">🔔</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}
