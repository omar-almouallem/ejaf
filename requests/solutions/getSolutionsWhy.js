import { api } from "@/utils/axios";

export const getSolutionsWhy = async () => {
  const { data } = await api.get("/types/solutionsWhy");
  return data.contents;
};
