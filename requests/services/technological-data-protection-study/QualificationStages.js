import { api } from "@/utils/axios";

export const getTechnologicalDataProtectionStudyQualificationStages= async () => {
  const { data } = await api.get("/types/technologicalDataProtectionStudyQualificationStages");
  return data.contents[0]
};
