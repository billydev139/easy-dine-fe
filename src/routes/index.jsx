import PropTypes from 'prop-types';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import CustomLoader from '../components/CustomLoader';
import AnimatedCursor from 'react-animated-cursor';
import DashboardWebpage from '../components/settingPopUpPages/dashboard-website/dashboard-webpage';
import RestaurantReservation from '../components/reservations';
import SmallWebsite from '../components/settingPopUpPages/dashboard-website/small-website';
import RestaurantSettings from '../components/settingPopUpPages/restaurantSettings';
// import EditRestaurant from '../components/settingPopUpPages/restaurantSettings/editRestaurant';
import RestaurantEditForm from '../components/settingPopUpPages/restaurantSettings/editRestaurantForm';
import RestaurantAddForm from '../components/settingPopUpPages/restaurantSettings/addRestaurantForm';
import AllUsersProfile from '../components/settingPopUpPages/users/all-users';
import TemplatesPlates from '../components/settingPopUpPages/templates-prints';
import AddProductPage from '../pages/dashboard/menuManagement/add-product-page';
import Accounting from '../components/settingPopUpPages/accounting/accounting';
import IntegrationsPage from '../components/settingPopUpPages/integrations/integrations';
import SubscriptionsPage from '../components/settingPopUpPages/subscriptions';
import InvoiceManagement from '../pages/dashboard/invoiceCustomization';
import ModulesExtensions from '../pages/dashboard/modules-extensions/modules-extensions';
import QRGenerator from '../pages/dashboard/QRgenerator';
import Cashbook from '../pages/dashboard/Cashbook';
import Reports from '../pages/dashboard/Reports';
import Trash from '../pages/dashboard/Trash';
import EmailManagement from '../pages/dashboard/emailManagement';
import MenuCustomization from '../pages/dashboard/menuCustomization';

// Lazy-loaded components
const HomePage = lazy(() => import('../pages/homePage/homePage'));
const AboutUs = lazy(() => import('../pages/aboutUs'));
const ContactUs = lazy(() => import('../pages/contactUs'));
const TermsofServices = lazy(() => import('../pages/terms/terms'));
const Login = lazy(() => import('../pages/login/login'));
const Dashboard = lazy(() => import('../pages/dashboard'));
const Faqs = lazy(() => import('../pages/faqs/faqs'));
const Blogs = lazy(() => import('../pages/blogs/blogs'));
const SupportFAQ = lazy(() => import('../pages/support/Support'));
const Overview = lazy(() => import('../pages/dashboard/advancedStatistics/overview'));
const RestaurantManagement = lazy(() =>
  import('../pages/dashboard/restaurantManagement')
);
const ManageRestaurants = lazy(() =>
  import('../pages/dashboard/restaurantManagement/manageRestaurant/manageRestaurant')
);
const UserManagement = lazy(() => import('../pages/dashboard/userManagement'));
const OrderManagement = lazy(() => import('../pages/dashboard/orderManagement'));
const InventoryManagement = lazy(() => import('../pages/dashboard/inventoryManagement'));
const ManualOrderTool = lazy(() => import('../pages/dashboard/manualOrderTool'));
const EditRestaurant = lazy(() => import('../pages/dashboard/settings/editRestaurant'));
const MenuManagement = lazy(() => import('../pages/dashboard/menuManagement'));
const Features = lazy(() => import('../pages/features/Features'));
const Register = lazy(() => import('../pages/register/Register'));
const Pricing = lazy(() => import('../pages/pricing/Pricing'));

const isAuthenticated = () => {
  return localStorage.getItem('accessToken') !== null;
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to='/login' />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

const AppRoutes = () => {
  const location = useLocation();
  const [cursorVisible, setCursorVisible] = useState(false); // Default hidden

  // Routes definition
  const protectedRoutes = [
    { path: '/dashboard', component: <Dashboard /> },
    { path: '/small-website', component: <SmallWebsite /> },
    { path: '/restaurant-reservation', component: <RestaurantReservation /> },
    { path: '/dashboard/webpage', component: <DashboardWebpage /> },
    { path: '/user-management', component: <UserManagement /> },
    { path: '/order-management', component: <OrderManagement /> },
    { path: '/inventory-management', component: <InventoryManagement /> },
    { path: '/manual-order', component: <ManualOrderTool /> },
    { path: '/restaurant-settings', component: <RestaurantSettings /> },
    { path: '/dashboard/restaurant-edit-form', component: <RestaurantEditForm /> },
    { path: '/dashboard/restaurant-add-form', component: <RestaurantAddForm /> },
    { path: '/dashboard/accounting', component: <Accounting /> },
    { path: '/dashboard/integration', component: <IntegrationsPage /> },
    { path: '/dashboard/subscriptions', component: <SubscriptionsPage /> },
    { path: '/invoice-management', component: <InvoiceManagement /> },
    { path: '/modules-extensions', component: <ModulesExtensions /> },
    { path: '/qr-generator', component: <QRGenerator /> },
    { path: '/menu-customization', component: <MenuCustomization /> },
    { path: '/cashbook', component: <Cashbook /> },
    { path: '/reports', component: <Reports /> },
    { path: '/email-management', component: <EmailManagement /> },
    { path: '/trash', component: <Trash /> },
    {
      path: '/add-restaurant',
      component: <RestaurantManagement />,
    },
    {
      path: '/advanced-statistics/overview',
      component: <Overview />,
    },
    {
      path: '/advanced-statistics/revenue-reports',
      component: <Overview />,
    },
    {
      path: '/edit-restaurant',
      component: <EditRestaurant />,
    },
    {
      path: '/restaurant-management/list-restaurant',
      component: <ManageRestaurants />,
    },
    { path: '/menu-management', component: <MenuManagement /> },
    { path: '/dashboard/user-profiles', component: <AllUsersProfile /> },
    { path: '/dashboard/templates-print', component: <TemplatesPlates /> },
    { path: '/add-product-page', component: <AddProductPage /> },
  ];

  const publicRoutes = [
    { path: '/', component: <HomePage /> },
    { path: '/about-us', component: <AboutUs /> },
    { path: '/contact-us', component: <ContactUs /> },
    { path: '/terms-and-conditions', component: <TermsofServices /> },
    { path: '/pricing', component: <Pricing /> },
    { path: '/features', component: <Features /> },
    { path: '/faqs', component: <Faqs /> },
    { path: '/blogs', component: <Blogs /> },
    { path: '/support', component: <SupportFAQ /> },
  ];
  const authRoutes = [
    // ...protectedRoutes,
    { path: '/login', component: <Login /> },
    { path: '/register', component: <Register /> },
  ];
  const updateCursorVisibility = () => {
    const isPublicRoute = publicRoutes.some(route => route.path === location.pathname);
    const isAuthRoute = authRoutes.some(route => route.path === location.pathname);
    const isProtectedRoute = protectedRoutes.some(
      route => route.path === location.pathname
    );

    // Set cursor visibility based on route type
    if (isPublicRoute || isAuthRoute) {
      setCursorVisible(true);
    } else if (isProtectedRoute) {
      setCursorVisible(false);
    } else {
      setCursorVisible(false); // Fallback, ideally shouldn't hit this due to defined routes
    }
  };

  useEffect(() => {
    updateCursorVisibility(); // Check on mount and when the location changes
  }, [location]); // Depend on the location

  return (
    <>
      {cursorVisible && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{ backgroundColor: 'white' }}
          outerStyle={{ border: '3px solid white' }}
        />
      )}
      <Suspense fallback={<CustomLoader />}>
        <Routes>
          {authRoutes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={component} />
          ))}
          {publicRoutes.map(({ path, component }, index) => (
            <Route key={index} path={path} element={component} />
          ))}
          {protectedRoutes.map(({ path, component }, index) => (
            <Route
              key={index}
              path={path}
              element={<ProtectedRoute>{component}</ProtectedRoute>}
            />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
