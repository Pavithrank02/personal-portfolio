// dataSlice.js
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    fetchDataSuccess: (state, action) => {
      return action.payload;
    },
  },
});

export const { fetchDataSuccess } = dataSlice.actions;
export default dataSlice.reducer;
