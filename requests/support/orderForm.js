import { api } from "@/utils/axios";

export const orderForm = async (formData) => {
  const response = await api.post("/types/order", formData);
  return response.data;
};
