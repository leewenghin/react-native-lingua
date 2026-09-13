import type { ReactNode } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors } from "@/theme";

type TabPlaceholderScreenProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function TabPlaceholderScreen({
  title,
  description,
  children,
}: TabPlaceholderScreenProps) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 bg-background px-6">
        <View className="flex-1 items-center justify-center">
          <Text className="heading--h2">{title}</Text>
          {description ? (
            <Text className="body-text--medium mt-2 text-center text-text-secondary">
              {description}
            </Text>
          ) : null}
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
