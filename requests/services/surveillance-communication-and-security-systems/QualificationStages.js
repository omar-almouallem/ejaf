import { api } from "@/utils/axios";

export const getSurveillanceCommunicationAndSecuritySystemsQualificationStages= async () => {
  const { data } = await api.get("/types/surveillanceCommunicationAndSecuritySystemsQualificationStages");
  return data.contents[0]
};
