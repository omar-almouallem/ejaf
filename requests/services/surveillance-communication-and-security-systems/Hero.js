import { api } from "@/utils/axios";

export const getHeroSurveillanceCommunicationAndSecuritySystems = async () => {
  const { data } = await api.get(
    "/types/heroSurveillanceCommunicationAndSecuritySystems"
  );
  return data.contents[0];
};
