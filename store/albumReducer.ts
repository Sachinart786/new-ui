// import { createSlice } from "@reduxjs/toolkit";

// const initialState = () => {
//   return {
//     data: [],
//   };
// };

// export const customerAlbumSlice = createSlice({
//   name: "album",
//   initialState: {
//     create: initialState(),
//   },
//   reducers: {
//     handleData: (state, action) => {
//       state.create.data = action.payload;
//     },
//     handleClear: (state, action) => {
//       state.create = initialState();
//     },
//   },
// });

// export const { handleData, handleClear } = customerAlbumSlice.actions;
// export default customerAlbumSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Directly define the initial state
const initialState = {
  data: {},
};

export const customerAlbumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    handleData: (state, action) => {
      state.data = action.payload;
    },
    handleClear: (state) => {
      state.data = {};
    },
  },
});

export const { handleData, handleClear } = customerAlbumSlice.actions;
export default customerAlbumSlice.reducer;
