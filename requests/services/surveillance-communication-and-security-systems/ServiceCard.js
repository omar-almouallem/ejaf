import { api } from "@/utils/axios";

export const getSurveillanceCommunicationAndSecuritySystemsServiceCard= async () => {
  const { data } = await api.get("/types/surveillanceCommunicationAndSecuritySystemsServiceCard");
  return data.contents.slice().reverse();
};
