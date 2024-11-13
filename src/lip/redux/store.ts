import { configureStore } from '@reduxjs/toolkit';
import aboutUsSlice from '../../components/home/aboutUs/aboutUsSlice/aboutUsSlice';
import blogsSlice from '../../app/[locale]/(website)/blogs/blogsSlice/blogsSlice'
import ourTeamSlice from '../../components/ourTeam/ourTeamSlice/ourTeamSlice'

export const store = configureStore({
  reducer: {
    aboutUs: aboutUsSlice,
    blogs: blogsSlice,
    ourTeam: ourTeamSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
