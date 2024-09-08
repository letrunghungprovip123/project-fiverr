import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authSlice from "./authSlice";
import nguoiDungSlice from "./nguoiDungSlice";
import skillSlice from "./skillSlice";
import congViecSlice from "./congViecSlice"
export const store = configureStore({
  reducer: {
    user: userReducer,
    authSlice,
    nguoiDungSlice,
    skillSlice,
    congViecSlice
  },
});

export default store;
