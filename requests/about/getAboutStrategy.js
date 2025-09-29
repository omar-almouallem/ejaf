import { api } from "@/utils/axios";

export const getAboutStrategy = async () => {
  const { data } = await api.get("/types/aboutStrategy");
  return data.contents[0];
};
