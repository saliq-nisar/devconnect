import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice'
import switchReducer from '../slices/anotherSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    switch: switchReducer

  }
});
