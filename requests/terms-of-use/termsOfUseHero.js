import { api } from "@/utils/axios";

export const getTermsOfUseHero = async () => {
  const { data } = await api.get("/types/heroTermsOfUse");
  return data.contents[0];
};
