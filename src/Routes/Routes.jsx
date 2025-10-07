import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import Apps from "../Pages/Apps.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import Home from "../Pages/Home.jsx";
import Installation from "../Pages/Installation.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
