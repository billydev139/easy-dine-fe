import Axios from "axios";
import { config } from "./EndPoints";
import Swal from "sweetalert2";


// Create an Axios instance with default settings
const axiosWithToken = Axios.create({
  baseURL: config.baseUrl,
});

// Add a request interceptor to dynamically set the token
axiosWithToken.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Function to set up interceptors and handle session expiration
export const setupAxiosInterceptors = (navigate) => {
  axiosWithToken.interceptors.response.use(
    (response) => {
      // Pass through successful responses
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        const errorMessage = error.response.data?.message || "Session expired";
        if (errorMessage === "Please authenticate") {
          // Clear the token and other session data
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken"); // Optional if using refresh tokens

          // Redirect to the login page
          navigate("/login", { replace: true });

          // Show the session timeout alert
          Swal.fire({
            html: `
              <div class="flex flex-col items-center text-center">
                <h2 class="text-headingSecondaryColor text-xl font-semibold mb-4 mt-4">
                  Your session has timed out!
                </h2>
                <p class="text-white text-sm mb-6">
                  For your security, your session has expired. Please log in again to continue.
                </p>
              </div>
            `,
            background: "#0F0A33", // Dark background for the modal
            showCancelButton: true,
            cancelButtonText: "Logout",
            confirmButtonText: "Extend Session",
            buttonsStyling: false,
            customClass: {
              popup: "rounded-lg p-6 max-w-lg bg-primaryBlack shadow-lg",
              cancelButton:
                "px-6 py-2 m-1 border border-white text-white rounded-md hover:bg-secondaryBlue hover:text-white transition-colors duration-300",
              confirmButton:
                "px-6 py-2 m-1 text-white bg-primaryBlue rounded-md hover:bg-secondaryBlue transition-colors duration-300",
            },
            cancelButtonColor: "#e74c3c", // Red color for logout
            onClose: () => {
              // Log out or handle session timeout further
              console.log("Session timed out. User logged out.");
            },
          });
        }
      }
      // Return rejected promise for error handling
      return Promise.reject(error);
    }
  );
};



// Create an Axios instance without a token
export const axiosWithoutToken = Axios.create({
  baseURL: config.baseUrl,
});

export default axiosWithToken;
