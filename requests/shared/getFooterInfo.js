import { api } from "@/utils/axios";

export const getFooterInfo = async () => {
  const { data } = await api.get("/types/footerInfo");
  return data.contents[0];
};
