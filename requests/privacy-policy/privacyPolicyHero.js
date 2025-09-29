import { api } from "@/utils/axios";

export const getPrivacyPolicyHero = async () => {
  const { data } = await api.get("/types/heroPrivacyPolicy");
  return data.contents[0];
};
