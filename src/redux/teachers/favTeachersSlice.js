import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const favTeachersSlice = createSlice({
  name: "favTeachers",
  initialState: {
    favorites: [],
  },

  reducers: {
    addFavTeacher(state, action) {
      state.favorites.push(action.payload);
    },
    removeFavTeacher(state, action) {
      const { id } = action.payload;
      const filteredFavorites = state.favorites.filter(
        (teacher) => teacher.id !== id
      );
      state.favorites = filteredFavorites;
    },
  },
});

const persistConfig = {
  key: "favTeachers",
  storage,
  whitelist: ["favorites"],
};

export const persistedFavTeachersReducer = persistReducer(
  persistConfig,
  favTeachersSlice.reducer
);

export const { removeFavTeacher, addFavTeacher } = favTeachersSlice.actions;
