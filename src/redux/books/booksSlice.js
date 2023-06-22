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

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const res = await axios.post(`${BaseAPI}${token}/books`, JSON.parse(book));
  return JSON.parse(res.config.data);
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const res = await axios.delete(`${BaseAPI}${token}/books/${id}`);
  console.log(res);
  return id;
});
const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.loading = true;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.loading = false;
      state.books = Object.values(action.payload).flat();
    },
    [getBooks.rejected]: (state) => {
      state.loading = false;
    },
    [addBook.pending]: (state) => {
      state.loading = true;
    },
    [addBook.fulfilled]: (state, action) => {
      state.loading = false;
      state.books.push(action.payload);
    },
    [addBook.rejected]: (state) => {
      state.loading = false;
    },
    [removeBook.pending]: (state) => {
      state.loading = true;
    },
    [removeBook.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
    [removeBook.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default booksSlice.reducer;
