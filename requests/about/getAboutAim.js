import { api } from "@/utils/axios";

export const getAboutAim = async () => {
  const { data } = await api.get("/types/aboutAim");
  return data.contents[0];
};
