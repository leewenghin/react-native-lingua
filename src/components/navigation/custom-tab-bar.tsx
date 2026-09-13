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
  className,
}: {
  icon: TabIconName;
  androidIcon: string;
  color: string;
  size?: number;
  className?: string;
}) {
  if (process.env.EXPO_OS === "ios") {
    return (
      <SymbolView
        name={icon}
        tintColor={color}
        resizeMode="scaleAspectFit"
        className={size === 22 ? "h-[22px] w-[22px]" : "h-5 w-5"}
      />
    );
  }

  return (
    <Text className={className} style={{ color, fontSize: size, lineHeight: size }}>
      {androidIcon}
    </Text>
  );
}

type CustomTabBarProps = {
  state: {
    index: number;
    routes: { key: string; name: string }[];
  };
  navigation: {
    emit: (event: {
      type: "tabPress";
      target: string;
      canPreventDefault: true;
    }) => { defaultPrevented: boolean };
    navigate: (name: string) => void;
  };
};

export function CustomTabBar({ state, navigation }: CustomTabBarProps) {
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
          className="absolute top-2 h-12 w-12 rounded-full bg-lingua-purple"
          style={indicatorStyle}
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
                <View className="h-12 w-12 items-center justify-center">
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
                    className="font-poppins-regular text-text-secondary"
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
