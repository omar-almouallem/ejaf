import { api } from "@/utils/axios";

export const getAboutHero = async () => {
  const { data } = await api.get("/types/aboutHero");
  return data.contents[0];
};
