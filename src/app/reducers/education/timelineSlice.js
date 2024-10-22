import { createSlice } from "@reduxjs/toolkit";
import { getEducation } from "../../actions/educationAction";

const initialState = {
  data: undefined,
  loading: false,
  error: null,
};

const timelineSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEducation.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(getEducation.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        return state;
      })
      .addCase(getEducation.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        return state;
      });
  },
});

export const educationReducer = timelineSlice.reducer;

