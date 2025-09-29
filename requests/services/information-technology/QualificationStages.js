import { api } from "@/utils/axios";

export const getInformationTechnologyQualificationStages= async () => {
  const { data } = await api.get("/types/informationTechnologyQualificationStages");
  return data.contents[0]
};
