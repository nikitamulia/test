import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import articles from './slice';

const store = configureStore({
    reducer: articles,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;