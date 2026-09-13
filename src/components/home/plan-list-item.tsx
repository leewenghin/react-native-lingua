import { SymbolView } from "expo-symbols";
import type { SymbolViewProps } from "expo-symbols";
import { Text, View } from "react-native";

import type { TodaysPlanItem } from "@/lib/home-data";
import { colors } from "@/theme";

type PlanIconName = SymbolViewProps["name"];

const PLAN_ICON_CONFIG: Record<
  TodaysPlanItem["type"],
  {
    icon: PlanIconName;
    containerClassName: string;
    tintColor: string;
    androidIconClassName: string;
  }
> = {
  lesson: {
    icon: "book.fill",
    containerClassName: "bg-plan-purple-surface",
    tintColor: colors.linguaPurple,
    androidIconClassName: "text-[18px] text-lingua-purple",
  },
  "ai-conversation": {
    icon: "headphones",
    containerClassName: "bg-plan-purple-surface",
    tintColor: colors.linguaPurple,
    androidIconClassName: "text-[18px] text-lingua-purple",
  },
  "new-words": {
    icon: "character.bubble.fill",
    containerClassName: "bg-plan-words-surface",
    tintColor: "#FF6B6B",
    androidIconClassName: "text-[18px] text-words-accent",
  },
};

type PlanListItemProps = {
  item: TodaysPlanItem;
};

function PlanStatus({ completed }: { completed: boolean }) {
  if (completed) {
    return (
      <View className="h-7 w-7 items-center justify-center rounded-full bg-lingua-purple">
        {process.env.EXPO_OS === "ios" ? (
          <SymbolView
            name="checkmark"
            tintColor={colors.background}
            resizeMode="scaleAspectFit"
            className="h-3.5 w-3.5"
          />
        ) : (
          <Text className="text-[12px] text-white">✓</Text>
        )}
      </View>
    );
  }

  return <View className="h-7 w-7 rounded-full border-2 border-border" />;
}

export function PlanListItem({ item }: PlanListItemProps) {
  const iconConfig = PLAN_ICON_CONFIG[item.type];

  return (
    <View className="flex-row items-center py-3">
      <View
        className={`h-11 w-11 items-center justify-center rounded-2xl ${iconConfig.containerClassName}`}
      >
        {process.env.EXPO_OS === "ios" ? (
          <SymbolView
            name={iconConfig.icon}
            tintColor={iconConfig.tintColor}
            resizeMode="scaleAspectFit"
            className="h-5 w-5"
          />
        ) : (
          <Text className={iconConfig.androidIconClassName}>●</Text>
        )}
      </View>

      <View className="ml-3 flex-1">
        <Text className="text-[16px] font-poppins-semibold text-text-primary">
          {item.title}
        </Text>
        <Text className="body-text--small mt-0.5 text-text-secondary">
          {item.subtitle}
        </Text>
      </View>

      <PlanStatus completed={item.completed} />
    </View>
  );
}
