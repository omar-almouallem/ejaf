import { api } from "@/utils/axios";

export const getHeroInformationTechnology= async () => {
  const { data } = await api.get("/types/heroInformationTechnology");
  return data.contents[0]
};
