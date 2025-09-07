import { configureStore } from "@reduxjs/toolkit";
import booksReducer, { fetchBooks } from "../reducer/BookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

store.dispatch(fetchBooks());
