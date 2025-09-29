import { api } from "@/utils/axios";

export const getInsightFeaturedCaseStudies = async () => {
  const { data } = await api.get("/types/insightFeaturedCaseStudie");
  return data;
};
