import { BASE_URL } from '@/lib/constants/constants';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAboutUs = createAsyncThunk('aboutUs/getAboutUs', async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/public/about_us`);
    return response.data.data;
  } catch (error: any) {
    console.error(error);
    return error;
  }
});

const initialState = {
  aboutUs: {
    id: null,
    title: '',
    description: '',
    youtube_link: '',
    image: '',
    items: [],
  },
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAboutUs.fulfilled, (state, action) => {
      state.aboutUs = action.payload;
    });
  },
});

export default aboutUsSlice.reducer;
