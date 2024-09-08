// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    // define reducers here
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
