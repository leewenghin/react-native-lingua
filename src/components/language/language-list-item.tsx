import { SymbolView } from "expo-symbols";
import { Image, Pressable, Text, View } from "react-native";

import { getFlagUrl } from "@/lib/flags";
import { colors } from "@/theme";
import type { Language } from "@/types/learning";

type LanguageListItemProps = {
  language: Language;
  isSelected: boolean;
  onPress: () => void;
};

export function LanguageListItem({
  language,
  isSelected,
  onPress,
}: LanguageListItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`mb-3 flex-row items-center rounded-2xl border px-4 py-3 ${
        isSelected
          ? "border-[1.5px] border-lingua-purple bg-language-selected"
          : "border-border bg-background"
      }`}
      style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
    >
      <Image
        source={{ uri: getFlagUrl(language.flagCode, 80) }}
        className="h-10 w-10 rounded-full"
        resizeMode="cover"
      />

      <View className="ml-3 flex-1">
        <Text className="text-[16px] font-poppins-semibold text-text-primary">
          {language.name}
        </Text>
        <Text className="body-text--small mt-0.5 text-text-secondary">
          {language.learnerCount}
        </Text>
      </View>

      {isSelected ? (
        <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
          {process.env.EXPO_OS === "ios" ? (
            <SymbolView
              name="checkmark"
              tintColor={colors.background}
              resizeMode="scaleAspectFit"
              className="h-3.5 w-3.5"
            />
          ) : (
            <Text className="text-[14px] leading-4 font-poppins-bold text-white">
              ✓
            </Text>
          )}
        </View>
      ) : process.env.EXPO_OS === "ios" ? (
        <SymbolView
          name="chevron.right"
          tintColor={colors.textSecondary}
          resizeMode="scaleAspectFit"
          className="h-3.5 w-3.5"
        />
      ) : (
        <Text className="text-[20px] leading-5 font-poppins-regular text-text-secondary">
          ›
        </Text>
      )}
    </Pressable>
  );
}
