import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithToken from "../../utils/axiosInstance";

const initialState = {
    menus: null,
    singleMenu: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  };

  // Define the asynchronous thunk for adding a new /reservations
export const createNewMenu = createAsyncThunk(
    "/menus/createNewMenu",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axiosWithToken.post("/menus/", data);
        return response.data; // Assuming response.data contains the added /reservations info
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

   const menuSlice = createSlice({
        name: "menu",
        initialState,
        reducers:{},
        extraReducers:(builder) => {
            builder
            .addCase(createNewMenu.pending, (state) => {
              state.isLoading = true;
              state.isSuccess = false;
              state.errorMessage = "";
            })
            .addCase(createNewMenu.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.restaurant = action.payload;
            })
            .addCase(createNewMenu.rejected, (state, action) => {
              state.isLoading = false;
              state.isSuccess = false;
              state.errorMessage = action.payload.message;
            })
        }
    })
    
    export default menuSlice.reducer;