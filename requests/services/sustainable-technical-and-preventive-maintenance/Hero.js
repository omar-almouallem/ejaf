import { api } from "@/utils/axios";

export const getHeroSustainableTechnicalAndPreventiveMaintenance= async () => {
  const { data } = await api.get("/types/heroSustainableTechnicalAndPreventiveMaintenance");
  return data.contents[0]
};
