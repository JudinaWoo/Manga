import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fillMovies: (_state, action) => action.payload,
    emptyMovies: (_state) => [],
  },
});

export const { fillMovies, emptyMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
