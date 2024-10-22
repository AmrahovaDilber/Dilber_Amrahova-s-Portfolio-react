import { configureStore } from "@reduxjs/toolkit";
import { educationReducer } from './reducers/education/timelineSlice';
import { skillsReducer } from './reducers/skills/skillSlice';

export const store = configureStore({
  reducer: {
    educationReducer,
    skillsReducer,
  },
});

