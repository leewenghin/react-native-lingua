import { useAuth, useClerk } from "@clerk/expo";
import { Redirect, router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signOut } = useClerk();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="heading--h1">lingua</Text>
        <Text className="body-text--medium mt-2 text-center">
          Your AI language teacher.
        </Text>
        <Pressable
          onPress={() => router.push("/choose-language")}
          className="mt-8 rounded-full bg-lingua-purple px-8 py-4"
          style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
        >
          <Text
            className="text-[16px] text-white"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Choose Language
          </Text>
        </Pressable>
        <Pressable
          onPress={() => signOut()}
          className="mt-4 rounded-full border border-border bg-white px-8 py-4"
          style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
        >
          <Text
            className="text-[16px] text-text-primary"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Sign Out
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
