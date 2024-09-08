import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { congViecService } from "../service/congViec.service";

export const getValueJobApi = createAsyncThunk(
  "congViec/getValueJobApi",
  async (_, thunkAPI) => {
    const response = await congViecService.layMenuLoaiCongViec();
    return response.data.content
  }
);

const initialState = {
    listJobApi: []
};

const congViecSlice = createSlice({
  name: "CongViec",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getValueJobApi.fulfilled,(state,action) => {
        state.listJobApi = action.payload
    })

  }
});

export const {} = congViecSlice.actions;

export default congViecSlice.reducer;
