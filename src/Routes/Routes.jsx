import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Rootlayouts/RootLayout";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);