import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Favourite } from '@/types';

interface FavouritesState {
  items: Favourite[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: FavouritesState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchFavourites = createAsyncThunk('favourites/fetchFavourites', async () => {
  const response = await axios.get('http://localhost:3001/favourites');
  return response.data;
});

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavourites.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFavourites.fulfilled, (state, action: PayloadAction<Favourite[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFavourites.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default favouritesSlice.reducer;