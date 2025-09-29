import { api } from "@/utils/axios";

export const getSteps = async () => {
  const response = await api.get(`/types/steps?sortBy=-createdAt`);
  return response.data.contents;
};
