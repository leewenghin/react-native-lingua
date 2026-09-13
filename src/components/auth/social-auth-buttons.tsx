import type { ReactNode } from "react";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SymbolView } from "expo-symbols";
import { useSSO } from "@clerk/expo";

import { navigateToHome } from "@/lib/auth";
import { colors } from "@/theme";

type SocialProvider = "google" | "facebook" | "apple";

const STRATEGY_BY_PROVIDER = {
  google: "oauth_google",
  facebook: "oauth_facebook",
  apple: "oauth_apple",
} as const;

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
  disabled?: boolean;
};

function SocialButton({
  label,
  icon,
  onPress,
  disabled = false,
}: {
  label: string;
  icon: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="flex-row items-center justify-center rounded-2xl border border-border bg-white py-4"
      style={({ pressed }) => ({
        opacity: disabled ? 0.6 : pressed ? 0.92 : 1,
      })}
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

export function SocialAuthButtons({ disabled = false }: SocialAuthButtonsProps) {
  const { startSSOFlow } = useSSO();
  const [activeProvider, setActiveProvider] = useState<SocialProvider | null>(
    null,
  );

  const handleSocialAuth = async (provider: SocialProvider) => {
    setActiveProvider(provider);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: STRATEGY_BY_PROVIDER[provider],
      });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        navigateToHome();
      }
    } catch (error) {
      console.error("Social auth error:", error);
    } finally {
      setActiveProvider(null);
    }
  };

  const isDisabled = disabled || activeProvider !== null;

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
        disabled={isDisabled}
        onPress={() => void handleSocialAuth("google")}
      />
      <SocialButton
        label="Continue with Facebook"
        icon={<FacebookIcon />}
        disabled={isDisabled}
        onPress={() => void handleSocialAuth("facebook")}
      />
      <SocialButton
        label="Continue with Apple"
        icon={<AppleIcon />}
        disabled={isDisabled}
        onPress={() => void handleSocialAuth("apple")}
      />
    </View>
  );
}
