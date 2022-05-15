import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";
import AppRoutes from "./AppRoutes";

import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = (props) => {
  return <AppRoutes {...props}></AppRoutes>;
};

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App user={user}></App>);
});
