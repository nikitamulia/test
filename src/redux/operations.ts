import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://api.spaceflightnewsapi.net";

export const fetchArticles = createAsyncThunk(
  "articles/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await axios.get("/v3/articles?_limit=100");
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
    
});  
export const getArticle = createAsyncThunk(
  "article/getArticle",
  async (id: number, thunkAPI) => {
    try {
      await axios.get(`/v3/articles/${id}`);
      return id;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

console.log(getArticle(1))
