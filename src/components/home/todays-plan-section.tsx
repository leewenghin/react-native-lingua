import { Pressable, Text, View } from "react-native";

import { PlanListItem } from "@/components/home/plan-list-item";
import type { TodaysPlanItem } from "@/lib/home-data";

type TodaysPlanSectionProps = {
  items: TodaysPlanItem[];
};

export function TodaysPlanSection({ items }: TodaysPlanSectionProps) {
  return (
    <View>
      <View className="mb-1 flex-row items-center justify-between">
        <Text className="text-[18px] font-poppins-bold text-text-primary">
          Today&apos;s plan
        </Text>
        <Pressable hitSlop={8}>
          <Text className="text-[14px] font-poppins-semibold text-lingua-purple">
            View all
          </Text>
        </Pressable>
      </View>

      <View>
        {items.map((item) => (
          <PlanListItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
