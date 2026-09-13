import { useAuth } from "@clerk/expo";
import { Image, Pressable, Text, View } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

function SpeechBubble({
  label,
  backgroundColor,
  textColor,
  className,
}: {
  label: string;
  backgroundColor: string;
  textColor: string;
  className?: string;
}) {
  return (
    <View
      className={`absolute rounded-2xl px-4 py-2 ${className ?? ""}`}
      style={{ backgroundColor }}
    >
      <Text
        className="body-text--medium"
        style={{ color: textColor, fontFamily: "Poppins-SemiBold" }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function OnboardingScreen() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/index" />;
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View className="flex-1 bg-background px-6">
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image
            source={images.mascotLogo}
            className="h-8 w-8"
            resizeMode="contain"
          />
          <Text
            className="text-[20px] text-text-primary"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            lingua
          </Text>
        </View>

        <View className="mt-8">
          <Text className="heading--h1">Your AI language</Text>
          <Text className="heading--h1 text-lingua-purple">teacher.</Text>
          <Text className="body-text--medium mt-3 text-text-secondary">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="relative h-[340px] w-full items-center justify-center">
            <SpeechBubble
              label="Hello!"
              backgroundColor="#E3EEFF"
              textColor={colors.textPrimary}
              className="left-2 top-6"
            />
            <SpeechBubble
              label="¡Hola!"
              backgroundColor="#E8E0FF"
              textColor={colors.linguaPurple}
              className="right-0 top-2"
            />
            <SpeechBubble
              label="你好!"
              backgroundColor="#FFE5D9"
              textColor="#E53935"
              className="right-4 top-[42%]"
            />
            <Image
              source={images.mascotWelcome}
              className="h-[300px] w-full"
              resizeMode="contain"
            />
          </View>
        </View>

        <Pressable
          onPress={() => router.push("/sign-up")}
          className="mb-6 flex-row items-center rounded-full bg-lingua-purple px-6 py-[18px]"
          style={({ pressed }) => ({ opacity: pressed ? 0.92 : 1 })}
        >
          <View className="flex-1" />
          <Text
            className="text-[16px] text-white"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Get Started
          </Text>
          <View className="flex-1 items-end">
            <Text
              className="text-[18px] text-white"
              style={{ fontFamily: "Poppins-Bold" }}
            >
              ›
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
