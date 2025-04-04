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
import contactUsSlice from "./contactSlice/contactUsSlice";
import themeReducer from "./themeSlice";
import authReducer from "./loginSlice/authSlice";
import restaurantSlice from "./restaurant/restaurantSlice";
import reservationSlice from "./reservationSlice/reservationSlice";

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
    auth:authReducer,
    contactUs: contactUsSlice, // Reducer for handling contact form state
    theme: persistedThemeReducer, // Persisted theme reducer
    restaurant:restaurantSlice,
    reservation:reservationSlice,
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
