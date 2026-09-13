import { useMemo } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ContinueLearningCard } from "@/components/home/continue-learning-card";
import { DailyGoalCard } from "@/components/home/daily-goal-card";
import { HomeHeader } from "@/components/home/home-header";
import { TodaysPlanSection } from "@/components/home/todays-plan-section";
import { getHomeScreenData } from "@/lib/home-data";
import { useLanguageStore } from "@/store/language-store";
import { colors } from "@/theme";

export default function HomeScreen() {
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguageCode,
  );

  const homeData = useMemo(() => {
    if (!selectedLanguageCode) {
      return null;
    }

    return getHomeScreenData(selectedLanguageCode);
  }, [selectedLanguageCode]);

  if (!homeData) {
    return null;
  }

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <ScrollView
        className="flex-1 bg-background"
        contentContainerClassName="px-6 pb-8 pt-2"
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader
          language={homeData.language}
          greetingWord={homeData.greetingWord}
          streak={homeData.streak}
        />

        <View className="mt-6 gap-5">
          <DailyGoalCard
            current={homeData.dailyGoal.current}
            target={homeData.dailyGoal.target}
          />

          <ContinueLearningCard
            language={homeData.language}
            unit={homeData.activeUnit}
            lesson={homeData.continueLesson}
            levelLabel={homeData.levelLabel}
          />

          <TodaysPlanSection items={homeData.todaysPlan} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
