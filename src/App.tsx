import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app/app";
import AuthLayout from "./layouts/auth/auth";
import AuthLoginPage from "./pages/auth/login/page";
import Profile from "./pages/profile/page";
import Services from "./pages/services/page";
import ServiceScratch from "./pages/services/scratch/page";
import ScratchPlatform from "./pages/services/scratch/platform/page";
import ServiceInspiredPage from "./pages/services/inspired/page";
import GenerateCaptionFromIdea from "./pages/services/inspired/generate-caption-from-ideal/page";

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
        path: "services/inspired",
        element: <ServiceInspiredPage />,
      },
      {
        path: "services/inspired/generate-caption-from-idea",
        element: <GenerateCaptionFromIdea />,
      },
      {
        path: "services/scratch/:platformId",
        element: <ScratchPlatform />,
        loader: async ({ params }) => {
          return params.platformId;
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
