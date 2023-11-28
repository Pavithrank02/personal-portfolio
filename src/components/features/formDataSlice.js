// formDataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const submitFormData = createAsyncThunk('formData/submit', async (formData) => {
  const response = await axios.post('http://localhost:5000/submit-form', formData);
  console.log(response)
  return response.data;
});

const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitFormData.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(submitFormData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const selectFormDataStatus = (state) => state.formData.status;
export default formDataSlice.reducer;
