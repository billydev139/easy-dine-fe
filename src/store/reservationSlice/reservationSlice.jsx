import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithToken from "../../utils/axiosInstance";

const initialState = {
    reservation: null,
    singleReservation: {},
    isLoading: false,
    isSuccess: false,
    errorMessage: "",
  };

  // Define the asynchronous thunk for adding a new /reservations
export const addNewReservation = createAsyncThunk(
    "/reservations/addNewReservation",
    async (data, { rejectWithValue }) => {
      try {
        const response = await axiosWithToken.post("/reservations/", data);
        return response.data; // Assuming response.data contains the added /reservations info
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );
  

  
  const reservationSlice = createSlice({
      name: "reservation",
      initialState,
      reducers:{},
      extraReducers:(builder) => {
          builder
          .addCase(addNewReservation.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.errorMessage = "";
          })
          .addCase(addNewReservation.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.restaurant = action.payload;
          })
          .addCase(addNewReservation.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload.message;
          })
      }
  })
  
  export default reservationSlice.reducer;
