import { api } from "@/utils/axios";

export const getInsight = async () => {
  const { data } = await api.get("/types/insight");
  return data.contents[0];
};
