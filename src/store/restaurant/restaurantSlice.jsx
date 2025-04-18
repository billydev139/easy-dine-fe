import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosWithToken from "../../utils/axiosInstance";

const initialState = {
  restaurant: null,
  singleRestaurant: {},
  isLoading: false,
  isSuccess: false,
  errorMessage: "",
};

export const getAllRestaurant = createAsyncThunk(
  "restaurant/getAllRestaurant",
  async ({ page, limit, searchQuery }, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.get("/restaurants/", {
        params: {
          page, // Pagination page
          limit, // Number of items per page
          search: searchQuery, // Optional search query
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const addNewRestaurant = createAsyncThunk(
  "restaurant/addNewRestaurant",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.post("/restaurants/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Define the asynchronous thunk for deleting a restaurant
export const deleteRestaurant = createAsyncThunk(
  "restaurant/deleteRestaurant",
  async (restaurantId, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.delete(`/restaurant/${restaurantId}`);
      return response?.data; // Return the ID of the deleted restaurant to remove it from the state
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Define the asynchronous thunk for updating a restaurant
export const updateRestaurant = createAsyncThunk(
  "restaurant/updateRestaurant",
  async ({ id, body }, { rejectWithValue }) => {
    console.log("🚀 ~ body:", body);
    try {
      const response = await axiosWithToken.put(`/restaurant/${id}`, body);
      return response.data; // Assuming response.data contains the updated vehicle info
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// Define the asynchronous thunk for updating a restaurant
export const getSingleRestaurant = createAsyncThunk(
  "restaurant/getSingleRestaurant",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosWithToken.get(`/restaurant/${id}`);
      return response.data;
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
        .addCase(getAllRestaurant.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errorMessage = "";
        })
        .addCase(getAllRestaurant.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.restaurant = action.payload;
        })
        .addCase(getAllRestaurant.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errorMessage = action.payload.message;
        })
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
        })
        .addCase(deleteRestaurant.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errorMessage = "";
        })
        .addCase(deleteRestaurant.fulfilled, (state) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.errorMessage = "";
          // state.restaurant = state.restaurant.filter(
          //   (restaurant) => restaurant.id !== action.payload
          // );
        })
        .addCase(deleteRestaurant.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errorMessage = action.payload.message;
        })
        .addCase(updateRestaurant.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errorMessage = "";
        })
        .addCase(updateRestaurant.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.errorMessage = "";
          state.singleRestaurant = action.payload;
        })
        .addCase(updateRestaurant.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errorMessage = action.payload.message;
        })
        .addCase(getSingleRestaurant.pending, (state) => {
          state.isLoading = true;
          state.isSuccess = false;
          state.errorMessage = "";
        })
        .addCase(getSingleRestaurant.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.singleRestaurant = action.payload;
        })
        .addCase(getSingleRestaurant.rejected, (state, action) => {
          state.isLoading = false;
          state.isSuccess = false;
          state.errorMessage = action.payload.message;
        });

    }
})

export default restaurantSlice.reducer;