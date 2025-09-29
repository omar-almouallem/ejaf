import { api } from "@/utils/axios";

export const getDigitalTransformationAndSoftwareSystemsQualificationStages= async () => {
  const { data } = await api.get("/types/digitalTransformationAndSoftwareSystemsQualificationStages");
  return data.contents[0]
};
