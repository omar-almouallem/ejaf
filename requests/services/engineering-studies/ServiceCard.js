import { api } from "@/utils/axios";

export const getEngineeringStudiesServiceCard= async () => {
  const { data } = await api.get("/types/engineeringStudiesServiceCard");
  return data.contents.slice().reverse();
};
