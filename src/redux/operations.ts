import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../types/types";


axios.defaults.baseURL = "https://api.spaceflightnewsapi.net";

export const fetchArticles = createAsyncThunk(
  "articles/fetchAll",
  async (_, thunkAPI) => {
  try {
    const response = await axios.get<Article[]>("/v3/articles?_limit=100");
    return response.data;
  } catch (e: any) {
    return thunkAPI.rejectWithValue(e.message);
  }
    
});  

export const getArticle = createAsyncThunk(
  "article/getArticle",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<Article>(`/v3/articles/${id}`);
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
});


