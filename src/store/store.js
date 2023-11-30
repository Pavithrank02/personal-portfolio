// store.js

import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../components/features/formDataSlice';
import dataReducer from '../components/features/dataSlice';

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    data: dataReducer,
  },
});

export default store;
