import { createSlice } from '@reduxjs/toolkit';

const switchSlice = createSlice({
  name: 'switch',
  initialState: {
    value: false
  },
  reducers: {
    change: state => {
      state.value = !state.value;
    }
  }
});

// Export actions
export const { change } = switchSlice.actions;

// Export reducer
export default switchSlice.reducer;
