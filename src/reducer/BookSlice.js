import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:9000/books";

const booksAdapter = createEntityAdapter({
  // sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = booksAdapter.getInitialState({
  status: "idle",
});

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
      const response = await axios.put(
        `http://localhost:9000/books/${initialBook.id}`,
        initialBook
      );
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
      const response = await axios.delete(
        `http://localhost:9000/books/${initialBookId}`
      );
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "success";
        booksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(addBooks.fulfilled, (state, action) => {
        booksAdapter.addOne(state, action.payload);
      })
      .addCase(editBook.fulfilled, (state, action) => {
        booksAdapter.updateOne(state, action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        booksAdapter.removeOne(state, action.payload);
      });
  },
});

export default booksSlice.reducer;

export const { selectAll, selectById, selectIds } = booksAdapter.getSelectors(
  (state) => state.books
);
