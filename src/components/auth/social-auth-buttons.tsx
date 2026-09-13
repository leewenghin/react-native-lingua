import type { ReactNode } from "react";
import { Pressable, Text, View } from "react-native";
import { SymbolView } from "expo-symbols";

import { colors } from "@/theme";

function GoogleIcon() {
  return (
    <View className="h-5 w-5 items-center justify-center">
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 16,
          color: "#4285F4",
        }}
      >
        G
      </Text>
    </View>
  );
}

function FacebookIcon() {
  return (
    <View
      className="h-5 w-5 items-center justify-center rounded-full"
      style={{ backgroundColor: "#1877F2" }}
    >
      <Text
        style={{
          fontFamily: "Poppins-Bold",
          fontSize: 13,
          color: "#FFFFFF",
        }}
      >
        f
      </Text>
    </View>
  );
}

function AppleIcon() {
  if (process.env.EXPO_OS === "ios") {
    return (
      <SymbolView
        name="apple.logo"
        tintColor={colors.textPrimary}
        resizeMode="scaleAspectFit"
        style={{ width: 18, height: 18 }}
      />
    );
  }

  return (
    <Text
      style={{
        fontFamily: "Poppins-Bold",
        fontSize: 16,
        color: colors.textPrimary,
        lineHeight: 18,
      }}
    >
      A
    </Text>
  );
}

type SocialAuthButtonsProps = {
  onPress?: () => void;
};

function SocialButton({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-center rounded-2xl border border-border bg-white py-4"
      style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
    >
      <View className="absolute left-5">{icon}</View>
      <Text
        className="text-[15px] text-text-primary"
        style={{ fontFamily: "Poppins-Medium" }}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export function SocialAuthButtons({ onPress }: SocialAuthButtonsProps) {
  return (
    <View className="gap-3">
      <View className="my-1 flex-row items-center gap-3">
        <View className="h-px flex-1 bg-border" />
        <Text className="body-text--small">or continue with</Text>
        <View className="h-px flex-1 bg-border" />
      </View>

      <SocialButton
        label="Continue with Google"
        icon={<GoogleIcon />}
        onPress={onPress}
      />
      <SocialButton
        label="Continue with Facebook"
        icon={<FacebookIcon />}
        onPress={onPress}
      />
      <SocialButton
        label="Continue with Apple"
        icon={<AppleIcon />}
        onPress={onPress}
      />
    </View>
  );
}
