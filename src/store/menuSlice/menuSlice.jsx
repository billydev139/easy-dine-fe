import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithToken from "../../utils/axiosInstance";

const initialState = {
  menus: null,
  singleMenu: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

// Define the asynchronous thunk for adding a new menu
export const createNewMenu = createAsyncThunk(
  "/menus/createNewMenu",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.post("/menus/", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Axios will handle the boundary
        },
      });
      return response.data; // Assuming response.data contains the added menu info
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Define the asynchronous thunk for fetching all menus
export const getAllMenus = createAsyncThunk(
  "/menus/getAllMenus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.get("/menus/");
      return response.data; // Assuming response.data contains the list of menus
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // createNewMenu cases
      .addCase(createNewMenu.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createNewMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleMenu = action.payload;
      })
      .addCase(createNewMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload.message;
      })
      // getAllMenus cases
      .addCase(getAllMenus.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = "";
      })
      .addCase(getAllMenus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menus = action.payload;
      })
      .addCase(getAllMenus.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload.message;
      });
  },
});

export default menuSlice.reducer;