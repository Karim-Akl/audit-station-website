import { Search } from 'lucide-react';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '@/lib/actions/actions';

export const getBlogs = createAsyncThunk(
  'blogs/getBlogs',
  async ({ page, search }: { page: number; search: string }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/public/blogs?page=${page}&search=${search}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const initialState = {
  blogs: {
    data: [
      {
        id: 1,
        title: '',
        created_at: '',
        image: '',
        description: '',
        author: {
          id: null,
          name: '',
          image: '',
          description: '',
        },
      },
    ],
    meta: {
      current_page: 1,
      from: 1,
      last_page: 1,
      total: 1,
    },
  },
};

const blogsSlice = createSlice({
  name: 'blogsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlogs.fulfilled, (state, action) => {
      state.blogs = action.payload;
    });
  },
});

export default blogsSlice.reducer;
