import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthScreenLayout } from "@/components/auth/auth-screen-layout";
import { AuthTextField } from "@/components/auth/auth-text-field";
import { colors } from "@/theme";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const openVerification = () => setShowVerification(true);

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
        onPrimaryPress={openVerification}
        onCloseVerification={() => setShowVerification(false)}
        onSocialPress={openVerification}
      >
        <AuthTextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="alex@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </AuthScreenLayout>
    </SafeAreaView>
  );
}
