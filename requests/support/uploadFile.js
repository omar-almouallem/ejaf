import { api } from "@/utils/axios";

export const uploadFile = async (file, setSubmitStatus) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await api.post("/files", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setSubmitStatus({
        type: "info",
        message: `Uploading file... ${percent}%`,
        progress: percent,
      });
    },
  });
  return response.data.path;
};
