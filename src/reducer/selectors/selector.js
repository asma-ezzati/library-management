import { createSelector } from "@reduxjs/toolkit";
import { selectAll } from "../BookSlice";
import { selectAllCat } from "../CategorySlice";

export const selectBooksWithGenre = createSelector(
  [selectAll, selectAllCat],
  (books, categories) =>
    books.map((book) => {
      const cat = categories.find((c) => c.id === book.genre);
      return {
        ...book,
        genreName: cat ? cat.genre : "نامشخص",
      };
    })
);
