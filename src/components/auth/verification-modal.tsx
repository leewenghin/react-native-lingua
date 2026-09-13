import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { colors } from "@/theme";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
  onVerifyCode: (code: string) => boolean | Promise<boolean>;
  error?: string | null;
  isVerifying?: boolean;
};

const CODE_LENGTH = 6;

export function VerificationModal({
  visible,
  onClose,
  onVerifyCode,
  error = null,
  isVerifying = false,
}: VerificationModalProps) {
  const [code, setCode] = useState("");
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!visible) {
      return;
    }

    Keyboard.dismiss();

    const timer = setTimeout(() => inputRef.current?.focus(), 400);
    return () => clearTimeout(timer);
  }, [visible]);

  const resetAndClose = () => {
    inputRef.current?.blur();
    Keyboard.dismiss();
    setCode("");
    onClose();
  };

  const handleChange = (text: string) => {
    if (isVerifying) {
      return;
    }

    const digits = text.replace(/\D/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    if (digits.length === CODE_LENGTH) {
      inputRef.current?.blur();
      Keyboard.dismiss();

      void (async () => {
        const success = await onVerifyCode(digits);

        if (!success) {
          setCode("");
          inputRef.current?.focus();
        }
      })();
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={resetAndClose}
    >
      <KeyboardAvoidingView
        className="flex-1"
        behavior={process.env.EXPO_OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          className="flex-1 bg-overlay"
          onPress={resetAndClose}
        />

        <Pressable
          onPress={() => inputRef.current?.focus()}
          className="rounded-t-3xl bg-background px-6 pb-8 pt-6"
        >
          <View className="mb-2 h-1 w-10 self-center rounded-full bg-border" />

          <Text className="text-[24px] font-poppins-bold text-text-primary">
            Verify your email
          </Text>
          <Text className="body-text--medium mt-2 text-text-secondary">
            We&apos;ve sent a verification code to your email. Enter the 6-digit
            code to continue.
          </Text>
          {error ? (
            <Text className="body-text--small mt-2 text-red-500">{error}</Text>
          ) : null}

          <View className="mt-8 flex-row justify-between gap-2">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index] ?? "";
              const isActive = index === code.length;

              return (
                <View
                  key={index}
                  className={`h-14 flex-1 items-center justify-center rounded-2xl border bg-surface ${
                    isActive ? "border-lingua-purple" : "border-border"
                  }`}
                >
                  <Text className="text-[24px] font-poppins-semibold text-text-primary">
                    {digit}
                  </Text>
                </View>
              );
            })}
          </View>

          {isVerifying ? (
            <View className="mt-6 items-center">
              <ActivityIndicator color={colors.linguaPurple} />
            </View>
          ) : null}

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            caretHidden
            editable={!isVerifying}
            className="absolute h-px w-px opacity-0"
          />
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
