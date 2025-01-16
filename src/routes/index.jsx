import PropTypes from "prop-types";
import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import CustomLoader from "../components/CustomLoader";

// Lazy-loaded components
const HomePage = lazy(() => import("../pages/homePage/homePage"));
const AboutUs = lazy(() => import("../pages/aboutUs"));
const ContactUs = lazy(() => import("../pages/contactUs"));
const TermsofServices = lazy(() => import("../pages/terms/terms"));
const Login = lazy(() => import("../pages/login/login"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const RestaurantManagement = lazy(() =>
  import("../pages/dashboard/restaurantManagement")
);
const ManageRestaurants = lazy(() =>
  import("../pages/dashboard/restaurantManagement/manageRestaurant/manageRestaurant")
);
const UserManagement = lazy(() => import("../pages/dashboard/userManagement"));
const OrderManagement = lazy(() => import("../pages/dashboard/orderManagement"));
const InventoryManagement = lazy(() =>
  import("../pages/dashboard/inventoryManagement")
);
const ManualOrderTool = lazy(() => import("../pages/dashboard/manualOrderTool"));
const MenuManagement = lazy(() => import("../pages/dashboard/menuManagement"));

// Mock authentication function
const isAuthenticated = () => {
  return localStorage.getItem("accessToken") !== null;
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

const AppRoutes = () => {
  // Public Routes Configuration
  const publicRoutes = [
    { path: "/", component: <HomePage /> },
    { path: "/about-us", component: <AboutUs /> },
    { path: "/contact-us", component: <ContactUs /> },
    { path: "/terms", component: <TermsofServices /> },
    { path: "/login", component: <Login /> },
  ];

  // Protected Routes Configuration
  const protectedRoutes = [
    { path: "/dashboard", component: <Dashboard /> },
    { path: "/user-management", component: <UserManagement /> },
    { path: "/order-management", component: <OrderManagement /> },
    { path: "/inventory-management", component: <InventoryManagement /> },
    { path: "/manual-order", component: <ManualOrderTool /> },
    {
      path: "/restaurant-management/add-restaurant",
      component: <RestaurantManagement />,
    },
    {
      path: "/restaurant-management/list-restaurant",
      component: <ManageRestaurants />,
    },
    { path: "/menu-management", component: <MenuManagement /> },
  ];

  return (
    <Suspense fallback={<CustomLoader />}>
      <Routes>
        {/* Render Public Routes */}
        {publicRoutes.map(({ path, component }, index) => (
          <Route key={index} path={path} element={component} />
        ))}

        {/* Render Protected Routes */}
        {protectedRoutes.map(({ path, component }, index) => (
          <Route
            key={index}
            path={path}
            element={<ProtectedRoute>{component}</ProtectedRoute>}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
