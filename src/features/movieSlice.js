import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    getPopularMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;
