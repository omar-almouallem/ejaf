import { api } from "@/utils/axios";

export const getBlogs = async () => {
  const { data } = await api.get("/types/blogs?perPage=9");
  return data.contents;
};
