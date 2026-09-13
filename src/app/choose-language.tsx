import { router } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { LanguageListItem } from "@/components/language/language-list-item";
import { images } from "@/constants/images";
import { languages } from "@/data/languages";
import { useLanguageStore } from "@/store/language-store";
import { colors } from "@/theme";
import type { LanguageCode } from "@/types/learning";

function BackButton() {
  return (
    <Pressable
      onPress={() => router.back()}
      className="h-10 w-10 items-center justify-center"
      style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
      hitSlop={8}
    >
      {process.env.EXPO_OS === "ios" ? (
        <SymbolView
          name="chevron.left"
          tintColor={colors.textPrimary}
          resizeMode="scaleAspectFit"
          className="h-5 w-5"
        />
      ) : (
        <Text className="text-[28px] leading-7 font-poppins-regular text-text-primary">
          ‹
        </Text>
      )}
    </Pressable>
  );
}

export default function ChooseLanguageScreen() {
  const storedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const setSelectedLanguage = useLanguageStore(
    (state) => state.setSelectedLanguage,
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [draftCode, setDraftCode] = useState<LanguageCode | null>(null);
  const selectedCode = draftCode ?? storedLanguageCode ?? "es";

  const filteredLanguages = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return languages;
    }

    return languages.filter(
      (language) =>
        language.name.toLowerCase().includes(query) ||
        language.nativeName.toLowerCase().includes(query),
    );
  }, [searchQuery]);

  const handleContinue = () => {
    setSelectedLanguage(selectedCode);
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 bg-background">
        <View className="px-6 pt-2">
          <View className="relative flex-row items-center justify-center">
            <View className="absolute left-0">
              <BackButton />
            </View>
            <Text className="text-[18px] font-poppins-bold text-text-primary">
              Choose a language
            </Text>
          </View>

          <View className="mt-5 flex-row items-center rounded-full bg-surface px-4 py-3">
            {process.env.EXPO_OS === "ios" ? (
              <SymbolView
                name="magnifyingglass"
                tintColor={colors.textSecondary}
                resizeMode="scaleAspectFit"
                className="h-[18px] w-[18px]"
              />
            ) : (
              <Text className="text-[16px] font-poppins-regular text-text-secondary">
                ⌕
              </Text>
            )}
            <TextInput
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholder="Search languages"
              placeholderTextColor={colors.textSecondary}
              className="ml-3 flex-1 py-0 text-[14px] font-poppins-regular text-text-primary"
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
            />
          </View>

          <Text className="mt-6 text-[16px] font-poppins-bold text-text-primary">
            Popular
          </Text>
        </View>

        <ScrollView
          className="flex-1"
          contentContainerClassName="grow px-6 pb-4 pt-4"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {filteredLanguages.map((language) => (
            <LanguageListItem
              key={language.code}
              language={language}
              isSelected={selectedCode === language.code}
              onPress={() => setDraftCode(language.code)}
            />
          ))}
        </ScrollView>

        <View className="relative">
          <View className="relative z-10 px-6">
            <Pressable
              onPress={handleContinue}
              className="w-full rounded-full bg-lingua-purple py-[18px]"
              style={({ pressed }) => ({
                opacity: pressed ? 0.92 : 1,
                elevation: 2,
              })}
            >
              <Text className="text-center text-[16px] font-poppins-bold text-white">
                Continue
              </Text>
            </Pressable>
          </View>

          <View
            className="mt-4 h-[148px] w-full overflow-hidden"
            pointerEvents="none"
          >
            <Image
              source={images.earth}
              className="h-40 w-full"
              style={{
                transform: [{ scaleX: 2.05 }, { scaleY: 1.65 }],
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
