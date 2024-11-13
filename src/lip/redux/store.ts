import { configureStore } from '@reduxjs/toolkit';
import aboutUsSlice from '../../components/home/aboutUs/aboutUsSlice/aboutUsSlice';
import blogsSlice from '../../app/[locale]/(website)/blogs/blogsSlice/blogsSlice'

export const store = configureStore({
  reducer: {
    aboutUs: aboutUsSlice,
    blogs: blogsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
