import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import Contribute from "../Pages/Contribute.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from "../Pages/Home.jsx";
import Installation from "../Pages/Installation.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: () => fetch("./public/data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/contribute",
        element: <Contribute />,
      },
    ],
  },
]);
export default router;
