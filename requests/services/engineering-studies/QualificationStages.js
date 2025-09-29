import { api } from "@/utils/axios";

export const getEngineeringStudiesQualificationStages= async () => {
  const { data } = await api.get("/types/engineeringStudiesQualificationStages");
  return data.contents[0]
};
