
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";
import TermsofServices from "../pages/terms/terms";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard";
import RestaurantManagement from "../pages/dashboard/restaurantManagement";
import ManageRestaurants from "../pages/dashboard/restaurantManagement/manageRestaurant/manageRestaurant";
import UserManagement from "../pages/dashboard/userManagement";
import OrderManagement from "../pages/dashboard/orderManagement";
import InventoryManagement from "../pages/dashboard/inventoryManagement";


const AppRoutes = () => {
  // Check if the user is authenticated

  // Define protected routes in an array
  //   const protectedRoutes = [
  //     { path: "/user-home", component: <UserHome /> },
  //     { path: "/saved-jobs", component: <SavedJobs /> },
  //     { path: "/profile", component: <UserProfile /> },
  //     { path: "/my-applications", component: <MyApplications /> },
  //     { path: "/application-details", component: <ApplicationDetails /> },
  //     { path: "/my-companies", component: <MyCompanies /> },
  //   ];

  // Define public routes in an array
  const publicRoutes = [
    { path: "/", component: <HomePage /> },
    { path: "/about-us", component: <AboutUs /> },
    {path:'/contact-us',component:<ContactUs/>},
    {path:'/terms',component:<TermsofServices/>},
    {path:'/login',component:<Login/>},
    {path:'/dashboard',component:<Dashboard/>},
    {path:'/user-management',component:<UserManagement/>},
    {path:'/order-management',component:<OrderManagement/>},
    {path:'/inventory-management',component:<InventoryManagement/>},

    {path:'/restaurant-management',component:<RestaurantManagement/>},
    {path:'/restaurant-management/manage-restaurant',component:<ManageRestaurants/>},


  ];

  return (
    <Router>
      <Routes>
        {/* Map over public routes */}
        {publicRoutes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}

        {/* Map over protected routes */}
        {/* {protectedRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <ProtectedRoute >
                {component}
              </ProtectedRoute>
            }
          />
        ))} */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
