import api from "./axisApiService";

export const download = async (id: string) => {
  try {
    const res = await api.get(`/api/v1/download/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
