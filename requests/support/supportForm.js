import { api } from "@/utils/axios";

export const supportForm = async (formData) => {
  const response = await api.post("/types/support", formData);
  return response.data;
};
