
const config = {
    baseUrl: 'https://api.easydine.ch',
    // baseUrl: 'http://localhost:7070',
    imageUrl: `https://api.easydine.ch/uploads`,
    // eslint-disable-next-line no-undef
    // baseurl: import.meta.env.VITE_BASE_URL,
    // imageUrl: import.meta.env.VITE_IMAGE_URL,
    endPoints: {
      SUB_ADMIN: {
        LOGIN: "/auth/login",
        SIGNUP:"/auth/register",
      },
      CONTACT_US: {
        SUBMIT: "/contact/contact",

      },
    },
  };
  export { config };
  