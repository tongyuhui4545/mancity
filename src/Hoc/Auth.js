import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../firebase";

const AuthGuard = (Component) => {
  class AuthHoc extends React.Component {
    authCheck = () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        return <Component {...this.props} />;
        console.log("we have a user!");
      } else {
        return <Navigate to="/"></Navigate>;
        console.log("we have no user!");
      }
    };
    render() {
      return this.authCheck();
    }
  }
  return AuthHoc;
};

export default AuthGuard;
