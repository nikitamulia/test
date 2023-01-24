import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticles} from './operations';
import { Article } from "../types/types";



interface ArticlesState {
    list: Article[];
    article: Article | null;
    loading: boolean;
    error:  string | null | undefined ;
    filter: string;
}
  
const initialState: ArticlesState = {
    list: [],
    article: null,
    loading: false,
    error: null,
    filter: "",
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    },
})
export default articlesSlice.reducer;
export const { setFilter } = articlesSlice.actions;




