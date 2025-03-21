import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithToken from "../../utils/axiosInstance";

const initialState = {
  restaurant: null,
  singleRestaurant: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

// Define the asynchronous thunk for adding a new restaurant
export const addNewRestaurant = createAsyncThunk(
  "restaurant/addNewRestaurant",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.post("/restaurants/", data);
      return response.data; // Assuming response.data contains the added restaurant info
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);


const restaurantSlice = createSlice({
    name: "restaurant",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(addNewRestaurant.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errorMessage = "";
        })
        .addCase(addNewRestaurant.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.restaurant = action.payload;
        })
        .addCase(addNewRestaurant.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errorMessage = action.payload.message;
        });

    }
})

export default restaurantSlice.reducer;