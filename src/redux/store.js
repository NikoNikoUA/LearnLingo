import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { teachersReducer } from "./teachers/teachersSlice";
// import { filterReducer } from "./filter/filterSlice";
import { persistedFavTeachersReducer } from "./teachers/favTeachersSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// const filterPersistConfig = {
//   key: "filter",
//   storage,
//   whitelist: ["filter"],
// };

// const persistedFilterReducer = persistReducer(
//   filterPersistConfig,
//   filterReducer
// );

const rootReducer = combineReducers({
  teachers: teachersReducer,
  // filter: persistedFilterReducer,
  favTeachers: persistedFavTeachersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
