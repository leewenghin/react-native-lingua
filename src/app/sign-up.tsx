import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthScreenLayout } from "@/components/auth/auth-screen-layout";
import { AuthTextField } from "@/components/auth/auth-text-field";
import { colors } from "@/theme";

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showVerification, setShowVerification] = useState(false);

  const openVerification = () => setShowVerification(true);

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
        <AuthTextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
        />
      </AuthScreenLayout>
    </SafeAreaView>
  );
}
