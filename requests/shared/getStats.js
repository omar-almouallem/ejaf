import { api } from "@/utils/axios";

export const getStats = async () => {
  const { data } = await api.get("/types/stats");
  return data.contents[0];
};
