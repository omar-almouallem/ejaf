import { api } from "@/utils/axios";

export const getSolutionsHero = async () => {
  const { data } = await api.get("/types/solutionsHero");
  return data.contents[0];
};
