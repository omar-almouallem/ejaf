import { api } from "@/utils/axios";

export const getInsightHero = async () => {
  const { data } = await api.get("/types/insightHeroSection");
  return data.contents[0];
};
