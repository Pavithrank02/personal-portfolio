// formDataSlice.js

import { createSlice } from '@reduxjs/toolkit';

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    data: {},
    projects: [],
  },
  reducers: {
    submitFormData: (state, action) => {
      state.data = action.payload.formData;
      state.projects = action.payload.projects;
    },
  },
});

export const { submitFormData } = formDataSlice.actions;
export const selectFormData = (state) => state.formData.data;
export const selectFormProjects = (state) => state.formData.projects;

export default formDataSlice.reducer;
