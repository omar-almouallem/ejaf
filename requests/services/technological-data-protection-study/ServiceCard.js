import { api } from "@/utils/axios";

export const getTechnologicalDataProtectionStudyServiceCard= async () => {
  const { data } = await api.get("/types/technologicalDataProtectionStudyServiceCard");
  return data.contents.slice().reverse();
};
