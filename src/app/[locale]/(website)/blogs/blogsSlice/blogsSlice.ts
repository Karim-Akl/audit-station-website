import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  try {
    const response = await axios.get('/api/public/blogs');
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

const initialState = {
  blogs: {
    data: [
        {
          id: 1,
          title: "",
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
        "current_page": 1,
        "from": 1,
        "last_page": 1,
        "total": 1
      }
  }
};

const blogsSlice = createSlice({
    name: 'blogsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })
    }
})

export default blogsSlice.reducer
