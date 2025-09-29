import { api } from "@/utils/axios";

export const getInformationTechnologyServiceCard= async () => {
  const { data } = await api.get("/types/informationTechnologyServiceCard");
  return data.contents.slice().reverse();
};
