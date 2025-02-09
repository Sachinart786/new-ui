import api from "./axisApiService";

export const Login = async (payload: unknown) => {
  try {
    const res = await api.post("/api/v1/auth/login", payload);
    return res.data;
  } catch (error) {
    return error;
  }
};
