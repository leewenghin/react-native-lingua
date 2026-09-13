import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { colors } from "@/theme";

type AuthTextFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

function EyeIcon({ visible }: { visible: boolean }) {
  if (process.env.EXPO_OS === "ios") {
    return (
      <SymbolView
        name={visible ? "eye.slash" : "eye"}
        tintColor={colors.textSecondary}
        resizeMode="scaleAspectFit"
        style={{ width: 20, height: 20 }}
      />
    );
  }

  return (
    <View
      style={{
        width: 20,
        height: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 18,
          height: 11,
          borderRadius: 10,
          borderWidth: 1.5,
          borderColor: colors.textSecondary,
        }}
      />
      <View
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: colors.textSecondary,
        }}
      />
      {visible ? (
        <View
          style={{
            position: "absolute",
            width: 22,
            height: 1.5,
            backgroundColor: colors.textSecondary,
            transform: [{ rotate: "-45deg" }],
          }}
        />
      ) : null}
    </View>
  );
}

export function AuthTextField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
}: AuthTextFieldProps) {
  const [isHidden, setIsHidden] = useState(secureTextEntry);

  return (
    <View className="rounded-2xl border border-border bg-white px-4 py-3">
      <Text className="caption mb-1">{label}</Text>
      <View className="flex-row items-center">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.textSecondary}
          secureTextEntry={isHidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          className="flex-1 text-[16px] text-text-primary"
          style={{ fontFamily: "Poppins-Regular", paddingVertical: 0 }}
        />
        {secureTextEntry ? (
          <Pressable
            onPress={() => setIsHidden((current) => !current)}
            hitSlop={8}
            style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
          >
            <EyeIcon visible={!isHidden} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
