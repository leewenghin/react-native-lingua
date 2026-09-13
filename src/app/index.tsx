import { Text, View } from "react-native";
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
      </View>
    </SafeAreaView>
  );
}
