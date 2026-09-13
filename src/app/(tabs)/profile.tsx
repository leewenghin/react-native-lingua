import { useClerk } from "@clerk/expo";
import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { TabPlaceholderScreen } from "@/components/navigation/tab-placeholder-screen";
import { getLanguageByCode } from "@/data/languages";
import { getFlagUrl } from "@/lib/flags";
import { useLanguageStore } from "@/store/language-store";

export default function ProfileScreen() {
  const { signOut } = useClerk();
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );
  const clearSelectedLanguage = useLanguageStore(
    (state) => state.clearSelectedLanguage,
  );
  const selectedLanguage = selectedLanguageCode
    ? getLanguageByCode(selectedLanguageCode)
    : undefined;

  return (
    <TabPlaceholderScreen
      title="Profile"
      description="Your account settings will appear here."
    >
      {selectedLanguage ? (
        <View
          className="mt-6 w-full flex-row items-center rounded-2xl border border-border bg-surface px-4 py-3"
        >
          <Image
            source={{ uri: getFlagUrl(selectedLanguage.flagCode, 80) }}
            className="h-10 w-10 rounded-full"
            resizeMode="cover"
          />
          <View className="ml-3">
            <Text
              className="text-[14px] text-text-secondary"
              style={{ fontFamily: "Poppins-Medium" }}
            >
              Learning
            </Text>
            <Text
              className="text-[16px] text-text-primary"
              style={{ fontFamily: "Poppins-SemiBold" }}
            >
              {selectedLanguage.name}
            </Text>
          </View>
        </View>
      ) : null}

      <Pressable
        onPress={() => router.push("/choose-language")}
        className="mt-6 w-full rounded-full bg-lingua-purple px-8 py-4"
        style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
      >
        <Text
          className="text-center text-[16px] text-white"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          Change Language
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          clearSelectedLanguage();
          router.replace("/choose-language");
        }}
        className="mt-4 w-full rounded-full border border-border bg-white px-8 py-4"
        style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
      >
        <Text
          className="text-center text-[16px] text-text-primary"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          Clear Language Storage
        </Text>
      </Pressable>

      <Pressable
        onPress={() => signOut()}
        className="mt-4 w-full rounded-full border border-border bg-white px-8 py-4"
        style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
      >
        <Text
          className="text-center text-[16px] text-text-primary"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          Sign Out
        </Text>
      </Pressable>
    </TabPlaceholderScreen>
  );
}
