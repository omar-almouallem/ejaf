import { api } from "@/utils/axios";

export const getFooterContact = async () => {
  const { data } = await api.get("/types/footerContact");
  return data.contents[0];
};
