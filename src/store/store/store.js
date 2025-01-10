import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "../loginSlice/subAdminLoginSlice";
import themeReducer from "../themeSlice";
const store = configureStore({
  reducer: {
    login: LoginSlice,
    theme: themeReducer,

  },
});

export default store;
