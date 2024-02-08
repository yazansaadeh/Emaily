import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUser = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("/api/current_user");
  return res.data;
});
export { fetchUser };
