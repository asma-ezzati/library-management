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

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {},
});

export default booksSlice.reducer;
