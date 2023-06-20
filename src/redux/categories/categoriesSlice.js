import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  loading: false,
  status: null,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    statusChecker: (state, action) => {
      state.loading = action.payload;
      state.status = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
