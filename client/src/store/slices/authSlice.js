import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunk/fetchUser";

const authSlice = createSlice({
  name: "auth",
  initialState: { data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.data = action.payload || false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {});
    builder.addCase(fetchUser.pending, (state, action) => {});
  },
});

export const authReducer = authSlice.reducer;
