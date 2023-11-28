// client/src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../components/features/formDataSlice'

const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
});

export default store;
