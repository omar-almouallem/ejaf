import { api } from "@/utils/axios";

export const getHeroSafetyAndAutomationAndFireSuppressionSystems= async () => {
  const { data } = await api.get("/types/heroSafetyAndAutomationAndFireSuppressionSystems");
  return data.contents[0]
};
