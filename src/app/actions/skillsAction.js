import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSkills = createAsyncThunk("users/getSkills", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/api/skills");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const addSkill = createAsyncThunk("users/addSkill", async (skill, thunkAPI) => {
  try {
    const { data } = await axios.post(`/api/skills`, skill);
    const skills = JSON.parse(localStorage.getItem("skills")) || [];
    skills.push(skill);
    localStorage.setItem("skills", JSON.stringify(skills));
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export { getSkills, addSkill };
