import { Image, Text, View } from "react-native";

import { images } from "@/constants/images";

type DailyGoalCardProps = {
  current: number;
  target: number;
};

export function DailyGoalCard({ current, target }: DailyGoalCardProps) {
  const progress = Math.min(current / target, 1);

  return (
    <View className="flex-row items-center overflow-hidden rounded-3xl bg-daily-goal px-5 py-4">
      <View className="flex-1 pr-3">
        <Text className="text-[14px] font-poppins-medium text-text-secondary">
          Daily goal
        </Text>
        <Text className="mt-1 text-[22px] font-poppins-bold text-text-primary">
          {current} / {target} XP
        </Text>
        <View className="mt-3 h-2.5 overflow-hidden rounded-full bg-daily-goal-track">
          <View
            className="h-full rounded-full bg-streak"
            style={{ width: `${progress * 100}%` }}
          />
        </View>
      </View>

      <Image
        source={images.treasure}
        className="h-[88px] w-[88px]"
        resizeMode="contain"
      />
    </View>
  );
}
