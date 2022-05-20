import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import AuthGuard from "./Hoc/Auth";
import Dashboard from "./Components/Admin/Dashboard";

const AppRoutes = ({ user }) => {
  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route
          path="/dashboard"
          exact
          element={AuthGuard(<Dashboard user={user} />)}
        ></Route>
        <Route path="/sign_in" exact element={<SignIn />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
