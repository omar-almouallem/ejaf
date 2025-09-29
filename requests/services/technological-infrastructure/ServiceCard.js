import { api } from "@/utils/axios";

export const getTechnologicalInfrastructureServiceCard= async () => {
  const { data } = await api.get("/types/technologicalInfrastructureServiceCard");
  return data.contents.slice().reverse();
};
