import { createSlice } from "@reduxjs/toolkit";

import { axiosWithoutToken } from "../../utils/axiosInstance";
import { config } from "../../utils/EndPoints";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    // Action to start the login process
    LoginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    // Action for successful login
    LoginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    // Action for login failure
    LoginFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
    // Action for logging out
    LogoutReducer: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { LoginStart, LoginSuccess, LoginFailure, LogoutReducer } =
  LoginSlice.actions;

// Thunk for logging in the user
export const LogInUserHandler = (userData) => async (dispatch) => {
  dispatch(LoginStart());
  try {
    const response = await axiosWithoutToken.post(config.endPoints.SUB_ADMIN.LOGIN, userData);
    const token = response?.data?.results?.token?.access?.token;

    if (response && token) {
      // Store token in localStorage as a side effect
      localStorage.setItem("accessToken", token);
      dispatch(LoginSuccess(response.data));
      console.log("🚀 ~ LogInUserHandler ~ response:", response);
      return response.data;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Login failed.";
    dispatch(LoginFailure(errorMessage));
    return { error: errorMessage };
  }
};

// Thunk for logging out the user
export const LogOutUserHandler = () => async (dispatch) => {
  // Clear local storage as a side effect
  localStorage.clear();
  dispatch(LogoutReducer());
};

export default LoginSlice.reducer;
