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

export const createMenuItemsBulk = createAsyncThunk(
  "/menus/createMenuItemsBulk",
  async ({ restaurantId, menuItems }, { rejectWithValue }) => {
    try {
      // Transform the menu items to match your backend schema
      const transformedItems = menuItems.map(item => ({
        productName: item.name,
        price: item.price,
        category: item.availableFor[0] || 'Breakfast', // Take first category if available
        description: item.description || 'No description provided',
        preparationTime: item.preparationTime || 15,
        inStock: item.inStock !== false, // Default to true unless explicitly false
        ingredients: item.ingredients || [],
        image: item.image || '',
        tags: item.tags || [],
        quantity: item.quantity || 1 // From your quantity state
      }));

      const response = await axiosWithToken.post("/menus/bulk", {
        restaurantId,
        menuItems: transformedItems
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
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
      })
      // createMenuItemsBulk cases
       .addCase(createMenuItemsBulk.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.errorMessage = "";
      })
      .addCase(createMenuItemsBulk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Update the singleMenu if it's the same restaurant's menu
        if (state.singleMenu?.restaurantId === action.payload.restaurantId) {
          state.singleMenu = action.payload;
        }
        // Or update the menus array if needed
      })
      .addCase(createMenuItemsBulk.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = action.payload?.message || 'Failed to add menu items';
      });
  },
});

export default menuSlice.reducer;