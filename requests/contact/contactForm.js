import { api } from "@/utils/axios";

export const contactForm = async (formData) => {
  const response = await api.post("/types/contact", formData);
  return response.data;
};
