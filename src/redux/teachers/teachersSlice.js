import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers, fetchAllTeachers } from "./operations";

const onHandlingPending = (state) => {
  state.isLoading = true;
};

const onHandlingRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState: {
    teachers: [],
    allTeachers: [],
    page: 1,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeachers.pending, onHandlingPending)
      .addCase(fetchTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.teachers = [...state.teachers, ...action.payload];
        state.allTeachers = [...state.allTeachers, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(fetchTeachers.rejected, onHandlingRejected)
      .addCase(fetchAllTeachers.pending, onHandlingPending)
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allTeachers = action.payload;
      })
      .addCase(fetchAllTeachers.rejected, onHandlingRejected);
  },
});

export const teachersReducer = teachersSlice.reducer;
