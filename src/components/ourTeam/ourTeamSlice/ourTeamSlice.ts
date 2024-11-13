import { BASE_URL } from '@/lib/actions/actions';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getOurTeam = createAsyncThunk('ourTeam/getOurTeam', async ({page, search}: {page: number, search: string}) => {
  try {
    const response = await axios.get(`${BASE_URL}/public/our_team?page=${page}&search=${search}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
});

const initialState = {
  ourTeam: {
    data: [
      {
        id: null,
        name: '',
        image: '',
        section: {
          id: null,
          title: '',
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

const ourTeamSlice = createSlice({
  name: 'ourTeam',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getOurTeam.fulfilled, (state, action) => {
        state.ourTeam = action.payload;
      }) 
  },
});

export default ourTeamSlice.reducer;    

