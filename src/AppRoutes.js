import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign_in" element={<SignIn />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
