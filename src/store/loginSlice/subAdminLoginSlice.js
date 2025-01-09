import { createSlice } from "@reduxjs/toolkit";
import axios from "../../components/auth/authenticateAPi/authenticateApi";
import { SUB_ADMIN_LOGIN } from "../../utils/baseUrl";

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    LoginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    LoginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
      localStorage.setItem(
        "accessToken",
        action?.payload?.data.results.token.access.token
      );
    },
    LoginFailure: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = action.payload;
    },
    LogoutReducer: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
      localStorage.clear();
    },
  },
});

export const { LoginStart, LoginSuccess, LoginFailure, LogoutReducer } =
  LoginSlice.actions;

export const LogInUserHandler = (userData) => async (dispatch) => {
  dispatch(LoginStart());
  try {
    const response = await axios.post(SUB_ADMIN_LOGIN, userData);
    if (response) {
      await dispatch(LoginSuccess(response));
      console.log("🚀 ~ LogInUserHandler ~ response:", response);
      return response?.data;
    } else {
      return response;
    }
  } catch (error) {
    dispatch(LoginFailure(error));
    return error;
  }
};

export default LoginSlice.reducer;
