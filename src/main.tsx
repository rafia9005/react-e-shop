import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// pages
import NotFound from "./pages/404";
import HomePages from "./pages/HomePages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages/>,
  },
  // not found
  {
    path: "*",
    element: <NotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);