import { createSlice } from "@reduxjs/toolkit";
import { axiosWithoutToken } from "../../utils/axiosInstance";
import { config } from "../../utils/EndPoints";

const initialState = {
  isLoading: false,
  success: null,
  error: null,
};

const contactUsSlice = createSlice({
  name: "contactUsSlice",
  initialState,
  reducers: { 

    ContactUsStart: (state) => {
      state.isLoading = true;
      state.success = null;
      state.error = null;
    },
    ContactUsSuccess: (state, action) => {
      state.isLoading = false;
      state.success = action.payload;
      state.error = null;
    },
    ContactUsFailure: (state, action) => {
      state.isLoading = false;
      state.success = null;
      state.error = action.payload;
    },
  },
});

export const { ContactUsStart, ContactUsSuccess, ContactUsFailure } = contactUsSlice.actions;

// Thunk for submitting the contact form
export const submitContactForm = (formData) => async (dispatch) => {
  dispatch(ContactUsStart());
  try {
    const response = await axiosWithoutToken.post(config.endPoints.CONTACT_US.SUBMIT, formData);

    if (response && response.status === 200) {
      dispatch(ContactUsSuccess(response.data));
      console.log("🚀 ~ submitContactForm ~ response:", response);
      return response.data;
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || "Submission failed.";
    dispatch(ContactUsFailure(errorMessage));
    return { error: errorMessage };
  }
};

export default contactUsSlice.reducer;