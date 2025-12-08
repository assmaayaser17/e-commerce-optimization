import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "./app/auth/layout";
import Login from "./app/auth/login/page";
import Register from "./app/auth/register/page";


const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//     //   { index: true, element: <HomePage /> },
//     //   { path: "about", element: <AboutPage /> },
      
//       { path: "/healthy/:id", element: <Mealdetails /> },
//       {
//         path: "classes",
//         element: (
//           <ProtectedRoute>
//             <Classes />
//           </ProtectedRoute>
//         ),
//       },
//       { path: "account", element: <AccountModal /> },
//       {
//         path: "settings",
//         element: (
//           <ProtectedRoute>
//             <SettingsPage />
//           </ProtectedRoute>
//         ),
//       },
//       { path: "classes/:primeMoverMuscleId", element: <ExercisesPage /> },
//       { path: "account", element: <AccountModal /> },
//     ],
//   },
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