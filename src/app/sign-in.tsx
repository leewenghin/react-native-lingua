import { useAuth, useSignIn } from "@clerk/expo";
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

export default function SignInScreen() {
  const { isLoaded, isSignedIn } = useAuth();
  const { signIn, errors, fetchStatus } = useSignIn();

  const [email, setEmail] = useState("");
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
    return <Redirect href="/" />;
  }

  const trimmedEmail = email.trim();
  const isSubmitting = fetchStatus === "fetching";

  const handleSignIn = async () => {
    setFormError(null);

    if (!trimmedEmail) {
      setFormError("Enter your email address.");
      return;
    }

    const { error } = await signIn.emailCode.sendCode({
      emailAddress: trimmedEmail,
    });

    if (error) {
      setFormError(
        getFieldError(errors, "identifier") ??
          getFieldError(errors, "emailAddress") ??
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

    const { error } = await signIn.emailCode.verifyCode({ code });

    if (error) {
      setVerificationError(
        getFieldError(errors, "code") ??
          getFirstGlobalError(errors) ??
          "Invalid verification code. Please try again.",
      );
      setIsVerifying(false);
      return false;
    }

    if (signIn.status === "complete") {
      const { error: finalizeError } = await signIn.finalize();

      if (finalizeError) {
        setVerificationError(
          getFirstGlobalError(errors) ??
            "Unable to complete sign in. Please try again.",
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
        title="Welcome back"
        subtitle="Sign in to continue your language journey ✨"
        primaryButtonLabel="Sign In"
        footerText="Don't have an account?"
        footerLinkText="Sign up"
        footerHref="/sign-up"
        showVerification={showVerification}
        isSubmitting={isSubmitting}
        onPrimaryPress={handleSignIn}
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
        {formError ? (
          <View className="-mt-2">
            <Text className="body-text--small text-red-500">{formError}</Text>
          </View>
        ) : null}
      </AuthScreenLayout>
    </SafeAreaView>
  );
}
