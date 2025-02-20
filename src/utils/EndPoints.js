const config = {
    // baseUrl: 'https://api.easydine.ch',
    baseUrl: 'http://localhost:7070',
    imageUrl: `https://api.easydine.ch/uploads`,
    endPoints: {
      SUB_ADMIN: {
        LOGIN: "/auth/login",

      },
      CONTACT_US: {
        SUBMIT: "/contact/contact",

      },
    },
  };
  
  export { config };
  