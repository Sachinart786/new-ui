import api from "./axisApiService";

export const getAlbums = async (page: number, itemsPerPage: number) => {
  try {
    const res = await api.get(
      `/api/v1/albums?page=${page}&limit=${itemsPerPage}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

export const viewAlbum = async (id: string) => {
  try {
    const res = await api.get(`/api/v1/albums/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const searchAlbum = async (name: string) => {
  try {
    const res = await api.get(`/api/v1/albums/search/${name}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
