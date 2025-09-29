import { api } from "@/utils/axios";

export const getPartners = async () => {
  const { data } = await api.get("/types/partners");
  return data.contents[0];
};
