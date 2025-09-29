import { api } from "@/utils/axios";

export const getHeroTechnologicalDataProtectionStudy= async () => {
  const { data } = await api.get("/types/heroTechnologicalDataProtectionStudy");
  return data.contents[0]
};
