import api from "./axisApiService";

export const getProduct = async () => {
  try {
    const res = await api.get("/api/v1/product");
    return res.data;
  } catch (error) {
    return error;
  }
};
