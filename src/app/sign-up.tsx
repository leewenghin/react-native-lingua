import { useAuth, useSignUp } from "@clerk/expo";
import { Redirect } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthScreenLayout } from "@/components/auth/auth-screen-layout";
import { AuthTextField } from "@/components/auth/auth-text-field";
import {
  getFieldError,
  getFirstGlobalError,
  navigateToHome,
} from "@/lib/auth";
import { colors } from "@/theme";

export default function SignUpScreen() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signUp, errors, fetchStatus } = useSignUp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [verificationError, setVerificationError] = useState<string | null>(
    null,
  );
  const [isVerifying, setIsVerifying] = useState(false);

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  const trimmedEmail = email.trim();
  const isSubmitting = fetchStatus === "fetching";

  const handleSignUp = async () => {
    setFormError(null);

    if (!trimmedEmail) {
      setFormError("Enter your email address.");
      return;
    }

    if (!password) {
      setFormError("Enter a password.");
      return;
    }

    const { error } = await signUp.password({
      emailAddress: trimmedEmail,
      password,
    });

    if (error) {
      setFormError(
        getFieldError(errors, "emailAddress") ??
          getFieldError(errors, "password") ??
          getFirstGlobalError(errors) ??
          "Unable to create your account. Please try again.",
      );
      return;
    }

    const { error: sendError } = await signUp.verifications.sendEmailCode();

    if (sendError) {
      setFormError(
        getFirstGlobalError(errors) ??
          "Unable to send verification code. Please try again.",
      );
      return;
    }

    setVerificationError(null);
    setShowVerification(true);
  };

  const handleVerifyCode = async (code: string): Promise<boolean> => {
    setVerificationError(null);
    setIsVerifying(true);

    const { error } = await signUp.verifications.verifyEmailCode({ code });

    if (error) {
      setVerificationError(
        getFieldError(errors, "code") ??
          getFirstGlobalError(errors) ??
          "Invalid verification code. Please try again.",
      );
      setIsVerifying(false);
      return false;
    }

    if (signUp.status === "complete") {
      const { error: finalizeError } = await signUp.finalize();

      if (finalizeError) {
        setVerificationError(
          getFirstGlobalError(errors) ??
            "Unable to complete sign up. Please try again.",
        );
        setIsVerifying(false);
        return false;
      }

      setShowVerification(false);
      navigateToHome();
      setIsVerifying(false);
      return true;
    }

    setIsVerifying(false);
    return false;
  };

  const handleCloseVerification = () => {
    setShowVerification(false);
    setVerificationError(null);
    setIsVerifying(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <AuthScreenLayout
        title="Create your account"
        subtitle="Start your language journey today ✨"
        primaryButtonLabel="Sign Up"
        footerText="Already have an account?"
        footerLinkText="Log in"
        footerHref="/sign-in"
        showVerification={showVerification}
        isSubmitting={isSubmitting}
        onPrimaryPress={handleSignUp}
        onCloseVerification={handleCloseVerification}
        onVerifyCode={handleVerifyCode}
        verificationError={verificationError}
        isVerifying={isVerifying}
      >
        <AuthTextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="alex@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <AuthTextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
        />
        {formError ? (
          <View className="-mt-2">
            <Text className="body-text--small text-red-500">{formError}</Text>
          </View>
        ) : null}
        <View nativeID="clerk-captcha" />
      </AuthScreenLayout>
    </SafeAreaView>
  );
}
