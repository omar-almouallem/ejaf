import { api } from "@/utils/axios";

export const getHomeHero = async () => {
  const { data } = await api.get("/types/homeHero");
  return data.contents[0];
};
