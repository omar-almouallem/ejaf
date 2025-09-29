import { api } from "@/utils/axios";

export const getSafetyAndAutomationAndFireSuppressionSystemsQualificationStages= async () => {
  const { data } = await api.get("/types/safetyAndAutomationAndFireSuppressionSystemsQualificationStages");
  return data.contents[0]
};
