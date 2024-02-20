import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const sendEmails = createAsyncThunk("api/surveys", async (values) => {
  const res = await axios.post("/api/surveys", values);
  return res.data;
});
export { sendEmails };
