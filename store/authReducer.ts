import { createSlice } from "@reduxjs/toolkit";

const initialUsers = () => {
  if (typeof window !== "undefined") {
    const item = window?.sessionStorage.getItem("user");
    return item ? JSON.parse(item) : {};
  }
  return {};
};
// save users in local storage

const initialIsAuth = () => {
  if (typeof window !== "undefined") {
    const item = window?.sessionStorage.getItem("isAuth");
    return item ? JSON.parse(item) : false;
  }
  return false;
};

const initialAccess = () => {
  const access = {
    hasUserCreateAccess: false,
    hasUserListWriteAccess: false,
    hasAccessCreateAccess: false,
    hasAccessListWriteAccess: false,
    hasAccessMappingWriteAccess: false,
    hasStatusManagementWriteAccess: false,
  };
  if (typeof window !== "undefined") {
    const item = window?.sessionStorage.getItem("access");
    return item ? JSON.parse(item) : access;
  }
  return access;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: initialUsers(),
    isAuth: initialIsAuth(),
    access: initialAccess()
  },
  reducers: {
    handleRegister: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        window?.sessionStorage.setItem("user", JSON.stringify(state.user));
      }
    },
    handleAccess: (state, action) => {
      state.access = action.payload;
      if (typeof window !== "undefined") {
        window?.sessionStorage.setItem("access", JSON.stringify(state.access));
      }
    },
    
    handleLogin: (state, action) => {
      state.isAuth = action.payload;
      if (typeof window !== "undefined") {
        window?.sessionStorage.setItem("isAuth", JSON.stringify(state.isAuth));
      }
    },
    handleLogout: (state, action) => {
      state.isAuth = action.payload;
      if (typeof window !== "undefined") {
        window?.sessionStorage.removeItem("isAuth");
        window?.sessionStorage.removeItem("user");
      }
    },
  },
});

export const {
  handleRegister,
  handleLogin,
  handleLogout,
  handleAccess,
} = authSlice.actions;
export default authSlice.reducer;
