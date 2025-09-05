import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {},
});

export default booksSlice.reducer;
