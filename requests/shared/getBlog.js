import { api } from "@/utils/axios";

export const getBlog = async (blogId) => {
  const { data } = await api.get(`/types/blogs/${blogId}`);
  return data.content;
};
