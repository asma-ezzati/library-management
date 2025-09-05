import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../reducer/BookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});
