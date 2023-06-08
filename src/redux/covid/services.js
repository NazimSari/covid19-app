import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCovidAsync = createAsyncThunk(
  "covid/getCovidAsync",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/countries`
    );
    return res.data;
  }
);
