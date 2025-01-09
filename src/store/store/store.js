import { configureStore } from "@reduxjs/toolkit";

import LoginSlice from "../loginSlice/subAdminLoginSlice";
const store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export default store;
