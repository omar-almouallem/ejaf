import { api } from "@/utils/axios";

export const getHeroDigitalTransformationAndSoftwareSystems= async () => {
  const { data } = await api.get("/types/heroDigitalTransformationAndSoftwareSystems");
  return data.contents[0]
};
