import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getEducation = createAsyncThunk(
  "users/getEducation",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/api/educations");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export { getEducation };


