import { createSlice } from "@reduxjs/toolkit";
import { getSkills } from "../../actions/skillsAction";
import { addSkill } from "../../actions/skillsAction";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const skillsSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSkills.pending, (state) => {
        state.loading = true;
        return state;
      })
      .addCase(getSkills.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
        return state;
      })
      .addCase(getSkills.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
        return state;
      })
      .addCase(addSkill.fulfilled, (state, { payload }) => {
        state.data = payload;
        return state;
      });
  },
});

export const skillsReducer = skillsSlice.reducer;

