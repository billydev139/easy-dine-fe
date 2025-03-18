
const config = {
  
    baseUrl: import.meta.env.VITE_BASE_URL,
    imageUrl: import.meta.env.VITE_IMAGE_URL,
    endPoints: {
      SUB_ADMIN: {
        LOGIN: "/auth/login",
        SIGNUP:"/auth/register",
        SOCIAL_LOGIN:"auth/google"
      },
      CONTACT_US: {
        SUBMIT: "/contact/contact",

      },
    },
  };
  export { config };
  