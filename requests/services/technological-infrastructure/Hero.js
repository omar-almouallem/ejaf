import { api } from "@/utils/axios";

export const getHeroTechnologicalInfrastructure= async () => {
  const { data } = await api.get("/types/heroTechnologicalInfrastructure");
  return data.contents[0]
};
