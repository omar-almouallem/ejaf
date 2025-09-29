import { api } from "@/utils/axios";

export const getTechnologicalInfrastructureQualificationStages= async () => {
  const { data } = await api.get("/types/technologicalInfrastructureQualificationStages");
  return data.contents[0]
};
