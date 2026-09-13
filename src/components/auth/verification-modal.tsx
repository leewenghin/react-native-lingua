import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";

import { colors } from "@/theme";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CODE_LENGTH = 6;

export function VerificationModal({ visible, onClose }: VerificationModalProps) {
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
    const digits = text.replace(/\D/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    if (digits.length === CODE_LENGTH) {
      inputRef.current?.blur();
      Keyboard.dismiss();
      setCode("");
      onClose();
      router.replace("/");
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
        style={{ flex: 1 }}
        behavior={process.env.EXPO_OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(13, 19, 43, 0.45)" }}
          onPress={resetAndClose}
        />

        <Pressable
          onPress={() => inputRef.current?.focus()}
          style={{
            backgroundColor: colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 24,
            paddingTop: 24,
            paddingBottom: 32,
          }}
        >
          <View className="mb-2 h-1 w-10 self-center rounded-full bg-border" />

          <Text
            className="text-[24px] text-text-primary"
            style={{ fontFamily: "Poppins-Bold" }}
          >
            Verify your email
          </Text>
          <Text className="body-text--medium mt-2 text-text-secondary">
            We&apos;ve sent a verification code to your email. Enter the 6-digit
            code to continue.
          </Text>

          <View className="mt-8 flex-row justify-between gap-2">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => {
              const digit = code[index] ?? "";
              const isActive = index === code.length;

              return (
                <View
                  key={index}
                  className="h-14 flex-1 items-center justify-center rounded-2xl border bg-surface"
                  style={{
                    borderColor: isActive ? colors.linguaPurple : colors.border,
                  }}
                >
                  <Text
                    className="text-[24px] text-text-primary"
                    style={{ fontFamily: "Poppins-SemiBold" }}
                  >
                    {digit}
                  </Text>
                </View>
              );
            })}
          </View>

          <TextInput
            ref={inputRef}
            value={code}
            onChangeText={handleChange}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            caretHidden
            style={{
              position: "absolute",
              opacity: 0,
              height: 1,
              width: 1,
            }}
          />
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
