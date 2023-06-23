import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import BaseAPI from '../baseurl';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const token = localStorage.getItem('token');

export const getBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios(`${BaseAPI}${token}/books`);
  return response.data;
});
export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    const res = await axios.post(`${BaseAPI}${token}/books`, JSON.parse(book));
    if (res.status === 201) {
      return thunkAPI.dispatch(getBooks());
    }
    return res.error;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id, thunkAPI) => {
    const res = await axios.delete(`${BaseAPI}${token}/books/${id}`);
    if (res.status === 201) {
      return thunkAPI.dispatch(getBooks());
    }
    console.log(res);
    return res.config.data;
  },
);
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = action.payload;
    },
    [getBooks.rejected]: (state) => {
      state.loading = false;
    },
    [addBook.pending]: (state) => {
      state.loading = true;
    },
    [addBook.fulfilled]: (state) => {
      state.loading = false;
    },
    [addBook.rejected]: (state) => {
      state.loading = false;
    },
    [removeBook.pending]: (state) => {
      state.loading = true;
    },
    [removeBook.fulfilled]: (state) => {
      state.loading = false;
    },
    [removeBook.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default booksSlice.reducer;
