import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const categoryAdapter = createEntityAdapter({});
const initialState = categoryAdapter.getInitialState({
  status: "idle",
});

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    try {
      const response = await axios.get(" http://localhost:9000/category");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addCategory = createAsyncThunk(
  "category/addCategory",
  async (initialCat) => {
    try {
      const response = await axios.post(
        " http://localhost:9000/category",
        initialCat
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/deleteCategory",
  async (initialcatId) => {
    try {
      const response = await axios.delete(
        `http://localhost:9000/category/${initialcatId}`
      );
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const CategorySlice = createSlice({
  name: "category",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.fulfilled, (state, action) => {
        categoryAdapter.setAll(state, action.payload);
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        categoryAdapter.addOne(state, action.payload);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        categoryAdapter.removeOne(state, action.payload);
      });
  },
});

export default CategorySlice.reducer;

export const {
  selectAll: selectAllCat,
  selectById: selectByCatIds,
  selectIds: selectCatIds,
} = categoryAdapter.getSelectors((state) => state.category);
