import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/fetchUser";
import { handleToken } from "../thunk/handleToken";

const authSlice = createSlice({
  name: "auth",
  initialState: { data: null, credits: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload || false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log("failed");
    });
    builder.addCase(fetchUser.pending, (state, action) => {});
    builder.addCase(handleToken.fulfilled, (state, action) => {
      state.credits = action.payload.credits;
    });
  },
});

export const authReducer = authSlice.reducer;
