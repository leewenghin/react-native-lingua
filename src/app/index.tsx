import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 items-center justify-center bg-background px-6">
        <Text className="heading--h1">lingua</Text>
        <Text className="body-text--medium mt-2 text-center">
          Your AI language teacher.
        </Text>
        <Link href="/onboarding" asChild>
          <Pressable
            className="mt-8 rounded-full bg-lingua-purple px-8 py-4"
            style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
          >
            <Text
              className="text-[16px] text-white"
              style={{ fontFamily: "Poppins-Bold" }}
            >
              View Onboarding
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
