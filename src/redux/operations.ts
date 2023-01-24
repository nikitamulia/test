
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types/types";


axios.defaults.baseURL = "https://api.spaceflightnewsapi.net";

export const fetchArticles = createAsyncThunk<
Article[],
undefined,
{ rejectValue: string }
>("articles/fetchAll",
async (_, thunkAPI) => {
try {
  const response = await axios.get("/v3/articles?_limit=100");
  return response.data;
} catch (error: any) {
  return thunkAPI.rejectWithValue(error.message);
}
  
});  



