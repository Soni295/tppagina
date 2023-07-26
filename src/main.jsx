import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import "./App.css";
import { CardProvider } from "./useContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  </React.StrictMode>,
);
