import { api } from "@/utils/axios";

export const getInfo = async () => {
  const { data } = await api.get("/types/info");
  return data.contents;
};
