import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { skillService } from "../service/skill.service";

export const getAllSkillApi = createAsyncThunk(
  "skill/getAllSkillApi",
  async (_, thunkAPI) => {
    const reponse = await skillService
      .getAllSkill()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    return "hung123";
  }
);

const initialState = {
  listSkill: [],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSkillApi.fulfilled, (state, action) => {
      state.listSkill = action.payload;
    });
  },
});

export const {} = skillSlice.actions;

export default skillSlice.reducer;
