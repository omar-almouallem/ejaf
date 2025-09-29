import { api } from "@/utils/axios";

export const getHeroEngineeringStudies= async () => {
  const { data } = await api.get("/types/heroEngineeringStudies");
  return data.contents[0]
};
