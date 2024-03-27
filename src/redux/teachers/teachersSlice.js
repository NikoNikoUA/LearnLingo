import { createSlice } from "@reduxjs/toolkit";
import { fetchTeachers } from "./operations";

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
        state.page = state.page + 1;
      })
      .addCase(fetchTeachers.rejected, onHandlingRejected);
  },
});

export const teachersReducer = teachersSlice.reducer;
