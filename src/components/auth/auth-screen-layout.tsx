import { Link, router } from "expo-router";
import { SymbolView } from "expo-symbols";
import type { ReactNode } from "react";
import { Image, Keyboard, Pressable, ScrollView, Text, View } from "react-native";

import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { VerificationModal } from "@/components/auth/verification-modal";
import { images } from "@/constants/images";
import { colors } from "@/theme";

type AuthScreenLayoutProps = {
  title: string;
  subtitle: string;
  primaryButtonLabel: string;
  footerText: string;
  footerLinkText: string;
  footerHref: "/sign-in" | "/sign-up";
  showVerification: boolean;
  isSubmitting?: boolean;
  onPrimaryPress: () => void;
  onCloseVerification: () => void;
  onVerifyCode: (code: string) => boolean | Promise<boolean>;
  verificationError?: string | null;
  isVerifying?: boolean;
  children: ReactNode;
};

function BackButton() {
  return (
    <Pressable
      onPress={() => router.back()}
      className="mb-4 h-10 w-10 items-center justify-center"
      style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
      hitSlop={8}
    >
      {process.env.EXPO_OS === "ios" ? (
        <SymbolView
          name="chevron.left"
          tintColor={colors.textPrimary}
          resizeMode="scaleAspectFit"
          style={{ width: 20, height: 20 }}
        />
      ) : (
        <Text
          className="text-[28px] text-text-primary"
          style={{ fontFamily: "Poppins-Regular", lineHeight: 28 }}
        >
          ‹
        </Text>
      )}
    </Pressable>
  );
}

export function AuthScreenLayout({
  title,
  subtitle,
  primaryButtonLabel,
  footerText,
  footerLinkText,
  footerHref,
  showVerification,
  isSubmitting = false,
  onPrimaryPress,
  onCloseVerification,
  onVerifyCode,
  verificationError = null,
  isVerifying = false,
  children,
}: AuthScreenLayoutProps) {
  const openVerification = () => {
    Keyboard.dismiss();
    onPrimaryPress();
  };

  return (
    <>
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="grow px-6 pb-8"
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <BackButton />

        <Text
          className="text-[28px] text-text-primary"
          style={{ fontFamily: "Poppins-Bold" }}
        >
          {title}
        </Text>
        <Text className="body-text--medium mt-2 text-text-secondary">
          {subtitle}
        </Text>

        <View className="my-6 items-center">
          <Image
            source={images.mascotAuth}
            className="h-[140px] w-[140px]"
            resizeMode="contain"
          />
        </View>

        <View className="gap-4">{children}</View>

        <Pressable
          onPress={openVerification}
          disabled={isSubmitting}
          className="mt-6 rounded-full bg-lingua-purple py-[18px]"
          style={({ pressed }) => ({
            opacity: isSubmitting ? 0.7 : pressed ? 0.92 : 1,
          })}
        >
          <Text
            className="text-center text-[16px] text-white"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            {primaryButtonLabel}
          </Text>
        </Pressable>

        <View className="mt-6">
          <SocialAuthButtons disabled={isSubmitting || isVerifying} />
        </View>

        <View className="mt-8 flex-row items-center justify-center">
          <Text className="body-text--medium text-text-secondary">
            {footerText}{" "}
          </Text>
          <Link href={footerHref} asChild>
            <Pressable hitSlop={8}>
              <Text
                className="body-text--medium text-lingua-purple"
                style={{ fontFamily: "Poppins-SemiBold" }}
              >
                {footerLinkText}
              </Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>

      <VerificationModal
        visible={showVerification}
        onClose={onCloseVerification}
        onVerifyCode={onVerifyCode}
        error={verificationError}
        isVerifying={isVerifying}
      />
    </>
  );
}
