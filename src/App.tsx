import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/auth/auth";
import AuthLoginPage from "./pages/auth/login/page";
import AppLayout from "./layouts/app/app";
import Services from "./pages/services/page";
import Profile from "./pages/profile/page";
import ServiceScratch from "./pages/services/scratch/page";
import ScratchPlatform from "./pages/services/scratch/platform/page";

const router = createBrowserRouter([
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <AuthLoginPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "services/scratch",
        element: <ServiceScratch />,
      },
      {
        path: "services/scratch/:platformId",
        element: <ScratchPlatform />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
