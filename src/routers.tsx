import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./app/auth/layout";
import Login from "./app/auth/login/page";
import Register from "./app/auth/register/page";
import RootLayout from "./app/layout";
import HomePage from "./app/(home-page)/page";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      //   { path: "about", element: <AboutPage /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },

      { path: "register", element: <Register /> },
    ],
  },
  //   { path: "*", element: <NotFound /> },
]);

export default router;
