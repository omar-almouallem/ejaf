import { api } from "@/utils/axios";

export const getSustainableTechnicalAndPreventiveMaintenanceServiceCard= async () => {
  const { data } = await api.get("/types/sustainableTechnicalAndPreventiveMaintenanceServiceCard");
  return data.contents.slice().reverse();
};
