import React from "react";
import ReactDOM from "react-dom/client";
import "./Resources/css/app.css";
import AppRoutes from "./AppRoutes";
import createRoot from "react-dom/client";

import app from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = (props) => {
  return <AppRoutes {...props}></AppRoutes>;
};

const auth = getAuth();
const root = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(root);

onAuthStateChanged(auth, (user) => {
  ReactRoot.render(<App user={user} />);
});
