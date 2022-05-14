import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
