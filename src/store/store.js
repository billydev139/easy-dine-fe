import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import LoginSlice from "./loginSlice/subAdminLoginSlice";
import ContacSlice from "./contactSlice/contactUsSlice";
import themeReducer from "./themeSlice";

// Persist configuration for themeSlice
const themePersistConfig = {
  key: "theme", // Key used to store theme state in localStorage
  storage,
};

// Persisted reducer for themeSlice
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

// Configure store
const store = configureStore({
  reducer: {
    login: LoginSlice, // Reducer for handling login state
    contactUs: ContacSlice, // Reducer for handling contact form state
    theme: persistedThemeReducer, // Persisted theme reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these redux-persist action types to prevent serializability warnings
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});

// Persistor for persisting store
export const persistor = persistStore(store);

export default store;
