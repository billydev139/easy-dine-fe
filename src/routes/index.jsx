// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
// Import the ProtectedRoute component


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
  const publicRoutes = [{ path: "/", component: <HomePage /> }];

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
