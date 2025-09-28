import { configureStore } from "@reduxjs/toolkit";
import booksReducer, { fetchBooks } from "../reducer/BookSlice";
import categoryReducer, { fetchCategory } from "../reducer/CategorySlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
  },
});

store.dispatch(fetchBooks());
store.dispatch(fetchCategory());
