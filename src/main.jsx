import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./context/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <div className="max-w-screen-xl mx-auto" data-theme="light">
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>
);
