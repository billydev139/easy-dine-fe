import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import LoginSlice from "../loginSlice/subAdminLoginSlice";
import themeReducer from "../themeSlice";

// Persist configuration for themeSlice
const themePersistConfig = {
  key: "theme",
  storage,
};

// Persisted reducer for themeSlice
const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

// Configure store
const store = configureStore({
  reducer: {
    login: LoginSlice,
    theme: persistedThemeReducer,
  },
});

// Persistor
export const persistor = persistStore(store);

export default store;
