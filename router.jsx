import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Contact from "./src/pages/home/Contact";
import ErrorPage from "./src/components/ErrorPage";
import Home from "./src/pages/home/Home";
import About from "./src/pages/home/About";
import Layout from "./src/pages/home/Layout";
import DashboardLayout from "./src/pages/dashboard/DashboardLayout";
import Profile from "./src/pages/profile/Profile";
import Dashboard from "./src/pages/dashboard/Dashboard";
import AdminMui from "./src/pages/admin/AdminMui";
import Register from "./src/pages/authPages/Register";
import Login from "./src/pages/authPages/Login";
import ResetPassword from "./src/pages/authPages/ResetPassword";
import CreateProduct from "./src/pages/dashboard/product/CreateProduct";
import SingleProduct from "./src/pages/dashboard/product/SingleProduct";
import UpdateProduct from "./src/pages/dashboard/product/UpdateProduct";
import ForgotPasswordForm from "./src/pages/authPages/ForgotPassword";

// Define routes for the app
export const router = createBrowserRouter([
  // Dashboard Routes
  {
    path: "/dashboard", // Fixed the trailing slash here
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Dashboard /> },
      { path: "profile", element: <Profile /> },
      { path: "createProduct", element: <CreateProduct /> },
      { path: "singleProduct/:id", element: <SingleProduct /> },
      { path: "updateProduct/:id", element: <UpdateProduct /> },
    ]
  },

  // Public Routes (Home, About, Contact)
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> }, // Removed the extra slash here
      { path: "contact", element: <Contact /> },
    ]
  },

  // Admin Routes
  {
    path: "/admin", // Fixed the trailing slash here as well
    element: <AdminMui />,
    children: [
      { path: "", element: <AdminMui /> },
    ]
  },

  // Authentication Routes
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/resetPassword", element: <ResetPassword /> },
  { path: "/ForgotPassword", element: <ForgotPasswordForm /> },

  // Catch-all route for undefined paths (404 error page)
  {
    path: "*", // This will catch all unmatched routes
    element: <ErrorPage />, // Display error page for 404
  },
]);
