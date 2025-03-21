import { createSlice } from "@reduxjs/toolkit";
import { axiosWithoutToken } from "../../utils/axiosInstance";
import { config } from "../../utils/EndPoints";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    AuthStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    AuthSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = null;
    },
    AuthFailure: (state, action) => {
      state.isLoading = false;
      state.user = null;
      state.error = action.payload;
    },
    LogoutReducer: (state) => {
      state.isLoading = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { AuthStart, AuthSuccess, AuthFailure, LogoutReducer } = authSlice.actions;

// Thunk for logging in the user
export const LogInUserHandler = (userData) => async (dispatch) => {
  dispatch(AuthStart());
  try {
    const response = await axiosWithoutToken.post(config.endPoints.SUB_ADMIN.LOGIN, userData);
    const token = response?.data?.results?.token?.access?.token;

    if (response && token) {
      localStorage.setItem("accessToken", token);
      dispatch(AuthSuccess(response.data));
      console.log("🚀 ~ LogInUserHandler ~ response:", response);
      return response.data;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Login failed.";
    dispatch(AuthFailure(errorMessage));
    return { error: errorMessage };
  }
};

// Thunk for registering the user
export const RegisterUserHandler = (userData) => async (dispatch) => {
  dispatch(AuthStart());
  try {
    const response = await axiosWithoutToken.post(config.endPoints.SUB_ADMIN.SIGNUP, userData);
    const token = response?.data?.results?.token?.access?.token;

    if (response && token) {
      localStorage.setItem("accessToken", token);
      dispatch(AuthSuccess(response.data));
      console.log("🚀 ~ RegisterUserHandler ~ response:", response);
      return response.data;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Registration failed.";
    dispatch(AuthFailure(errorMessage));
    return { error: errorMessage };
  }
};

// Thunk for logging out the user
export const LogOutUserHandler = () => async (dispatch) => {
  localStorage.clear();
  dispatch(LogoutReducer());
};

// Thunk for social media login
export const SocialLoginHandler = (idToken) => async (dispatch) => {
  dispatch(AuthStart());
  try {
    const response = await axiosWithoutToken.post(config.endPoints.SUB_ADMIN.SOCIAL_LOGIN, { idToken });
    const token = response?.data?.results?.token?.access?.token;

    if (response && token) {
      localStorage.setItem("accessToken", token);
      dispatch(AuthSuccess(response.data));
      console.log("🚀 ~ SocialLoginHandler ~ response:", response);
      return response.data;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Social login failed.";
    dispatch(AuthFailure(errorMessage));
    return { error: errorMessage };
  }
};


export default authSlice.reducer;