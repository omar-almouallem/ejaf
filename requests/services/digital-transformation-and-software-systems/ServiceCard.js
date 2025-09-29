import { api } from "@/utils/axios";

export const getDigitalTransformationAndSoftwareSystemsServiceCard= async () => {
  const { data } = await api.get("/types/digitalTransformationAndSoftwareSystemsServiceCard");
  return data.contents.slice().reverse();
};
