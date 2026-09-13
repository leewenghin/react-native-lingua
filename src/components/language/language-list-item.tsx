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
      className="mb-3 flex-row items-center rounded-2xl px-4 py-3"
      style={({ pressed }) => ({
        backgroundColor: isSelected ? "#F3EEFF" : colors.background,
        borderWidth: isSelected ? 1.5 : 1,
        borderColor: isSelected ? colors.linguaPurple : colors.border,
        opacity: pressed ? 0.92 : 1,
      })}
    >
      <Image
        source={{ uri: getFlagUrl(language.flagCode, 80) }}
        className="h-10 w-10 rounded-full"
        resizeMode="cover"
      />

      <View className="ml-3 flex-1">
        <Text
          className="text-[16px] text-text-primary"
          style={{ fontFamily: "Poppins-SemiBold" }}
        >
          {language.name}
        </Text>
        <Text className="body-text--small mt-0.5 text-text-secondary">
          {language.learnerCount}
        </Text>
      </View>

      {isSelected ? (
        <View
          className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple"
        >
          {process.env.EXPO_OS === "ios" ? (
            <SymbolView
              name="checkmark"
              tintColor={colors.background}
              resizeMode="scaleAspectFit"
              style={{ width: 14, height: 14 }}
            />
          ) : (
            <Text
              className="text-[14px] text-white"
              style={{ fontFamily: "Poppins-Bold", lineHeight: 16 }}
            >
              ✓
            </Text>
          )}
        </View>
      ) : (
        process.env.EXPO_OS === "ios" ? (
          <SymbolView
            name="chevron.right"
            tintColor={colors.textSecondary}
            resizeMode="scaleAspectFit"
            style={{ width: 14, height: 14 }}
          />
        ) : (
          <Text
            className="text-[20px] text-text-secondary"
            style={{ fontFamily: "Poppins-Regular", lineHeight: 20 }}
          >
            ›
          </Text>
        )
      )}
    </Pressable>
  );
}
