import { api } from "@/utils/axios";

export const getServices = async () => {
  const { data } = await api.get("/types/services");
  return data.contents;
};
