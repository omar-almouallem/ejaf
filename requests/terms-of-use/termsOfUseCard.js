import { api } from "@/utils/axios";

export const getTermsOfUseCard = async () => {
  const { data } = await api.get("/types/termsOfUseCard");
  return data.contents.slice().reverse();
};
