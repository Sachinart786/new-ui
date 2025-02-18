import api from "./axisApiService";

export const getProduct = async (page: number, itemsPerPage: number) => {
  try {
    const res = await api.get(
      `/api/v1/products?page=${page}&limit=${itemsPerPage}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
