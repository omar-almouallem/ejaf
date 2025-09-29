import { api } from "@/utils/axios";

export const getSafetyAndAutomationAndFireSuppressionSystemsServiceCard= async () => {
  const { data } = await api.get("/types/safetyAndAutomationAndFireSuppressionSystemsServiceCard");
  return data.contents.slice().reverse();
};
