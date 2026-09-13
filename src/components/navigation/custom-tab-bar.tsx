import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SymbolView } from "expo-symbols";
import type { SymbolViewProps } from "expo-symbols";
import { useEffect } from "react";
import { Pressable, Text, useWindowDimensions, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { colors } from "@/theme";

const INDICATOR_SIZE = 48;
const INDICATOR_ANIMATION_DURATION = 220;

type TabIconName = SymbolViewProps["name"];

type TabItem = {
  route: string;
  label: string;
  icon: TabIconName;
  androidIcon: string;
};

const TAB_ITEMS: TabItem[] = [
  { route: "index", label: "Home", icon: "house.fill", androidIcon: "⌂" },
  { route: "learn", label: "Learn", icon: "book.fill", androidIcon: "▤" },
  {
    route: "ai-teacher",
    label: "AI Teacher",
    icon: "face.smiling.fill",
    androidIcon: "☺",
  },
  { route: "chat", label: "Chat", icon: "message.fill", androidIcon: "◌" },
  { route: "profile", label: "Profile", icon: "person.fill", androidIcon: "◉" },
];

function TabIcon({
  icon,
  androidIcon,
  color,
  size = 22,
}: {
  icon: TabIconName;
  androidIcon: string;
  color: string;
  size?: number;
}) {
  if (process.env.EXPO_OS === "ios") {
    return (
      <SymbolView
        name={icon}
        tintColor={color}
        resizeMode="scaleAspectFit"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <Text style={{ color, fontSize: size, lineHeight: size }}>{androidIcon}</Text>
  );
}

export function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const tabWidth = width / state.routes.length;
  const indicatorX = useSharedValue(
    state.index * tabWidth + tabWidth / 2 - INDICATOR_SIZE / 2,
  );

  useEffect(() => {
    indicatorX.value = withTiming(
      state.index * tabWidth + tabWidth / 2 - INDICATOR_SIZE / 2,
      {
        duration: INDICATOR_ANIMATION_DURATION,
        easing: Easing.linear,
      },
    );
  }, [indicatorX, state.index, tabWidth]);

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: indicatorX.value }],
  }));

  return (
    <View
      className="border-t border-border bg-background"
      style={{ paddingBottom: Math.max(insets.bottom, 8) }}
    >
      <View className="relative h-16 flex-row items-center">
        <Animated.View
          pointerEvents="none"
          style={[
            indicatorStyle,
            {
              position: "absolute",
              top: 8,
              width: INDICATOR_SIZE,
              height: INDICATOR_SIZE,
              borderRadius: INDICATOR_SIZE / 2,
              backgroundColor: colors.linguaPurple,
            },
          ]}
        />

        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const config =
            TAB_ITEMS.find((item) => item.route === route.name) ?? TAB_ITEMS[index];

          return (
            <Pressable
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={config.label}
              onPress={() => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              }}
              className="flex-1 items-center justify-center"
              style={({ pressed }) => ({ opacity: pressed ? 0.85 : 1 })}
            >
              {isFocused ? (
                <View
                  className="items-center justify-center"
                  style={{ width: INDICATOR_SIZE, height: INDICATOR_SIZE }}
                >
                  <TabIcon
                    icon={config.icon}
                    androidIcon={config.androidIcon}
                    color={colors.background}
                    size={22}
                  />
                </View>
              ) : (
                <View className="items-center justify-center pt-1">
                  <TabIcon
                    icon={config.icon}
                    androidIcon={config.androidIcon}
                    color={colors.textSecondary}
                    size={20}
                  />
                  <Text className="caption mt-1">{config.label}</Text>
                </View>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}
