import { api } from "@/utils/axios";

export const getPrivacyPolicyCard = async () => {
  const { data } = await api.get("/types/privacyPolicyCard");
  return data.contents.slice().reverse();
};
