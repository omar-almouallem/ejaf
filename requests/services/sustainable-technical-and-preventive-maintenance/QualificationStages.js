import { api } from "@/utils/axios";

export const getSustainableTechnicalAndPreventiveMaintenanceQualificationStages= async () => {
  const { data } = await api.get("/types/sustainableTechnicalAndPreventiveMaintenanceQualificationStages");
  return data.contents[0]
};
