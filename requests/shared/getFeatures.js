import { api } from "@/utils/axios";

export const getFeatures = async () => {
  const { data } = await api.get("/types/features");
  return data.contents;
};
