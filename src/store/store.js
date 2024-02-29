// store.js

import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../components/features/formDataSlice';
import dataReducer from '../components/features/dataSlice';
import themeReducer from '../components/features/themeSlice';

const store = configureStore({
  reducer: {
    formData: formDataReducer,
    data: dataReducer,
    theme: themeReducer,
  },

});

export default store;
