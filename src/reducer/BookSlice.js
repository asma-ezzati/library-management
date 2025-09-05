import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:9000/books";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addBooks = createAsyncThunk(
  "books/addBooks",
  async (initialBook) => {
    try {
      const response = await axios.post(url, initialBook);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editBook = createAsyncThunk(
  "books/editBooks",
  async (initialBook) => {
    try {
      const response = await axios.put(`url/${initialBook.id}`, initialBook);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBooks",
  async (initialBookId) => {
    try {
      const response = await axios.delete(`url/${initialBookId}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {},
});

export default booksSlice.reducer;
