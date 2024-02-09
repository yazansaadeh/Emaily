import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const handleToken = createAsyncThunk("api/stripe", async (token) => {
  const res = await axios.post("/api/stripe", { token: token.id });
  return res.data;
});
export { handleToken };
