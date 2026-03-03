import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes.jsx";
import { ThemeProvider } from "./Theme/ThemeProvider.jsx";
import SmoothScrollProvider from "./SmoothScrollProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SmoothScrollProvider>
        <RouterProvider router={router} />
      </SmoothScrollProvider>
    </ThemeProvider>
  </StrictMode>,
);
