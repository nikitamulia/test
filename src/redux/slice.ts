import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticles, getArticle} from './operations';
import { Article } from "../types/types";



interface ArticlesState {
    list: Article[];
    article: Article | null;
    loading: boolean;
    error:  string | null ;
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
            .addCase(fetchArticles.fulfilled, (state, action: PayloadAction<any>) => {
                state.list = action.payload;
                state.loading = false;
            })
            .addCase(fetchArticles.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getArticle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getArticle.fulfilled, (state, action: PayloadAction<any>) => {
                state.article = action.payload;
                state.loading = false;
            })
            .addCase(getArticle.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
})
export default articlesSlice.reducer;
export const { setFilter } = articlesSlice.actions;




