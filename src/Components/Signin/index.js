import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useFormik } from "formik";
import * as Yup from "yup";
import { showToastSuccess, showToastError } from "../Utils/tools";

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("The email is invalid")
        .required("The email is required"),
      password: Yup.string().required("The Password is required"),
    }),
    onSubmit: (values) => {
      //go to server with field values
      setLoading(true);
      submitForm(values);
    },
  });

  const submitForm = (values) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        //show success toast
        showToastSuccess("you are logged in!");
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        //show toasts
        showToastError(error.message);
      });
  };

  return (
    <div className="container">
      <div className="signin_wrapper" style={{ margin: "100px" }}>
        <form onSubmit={formik.handleSubmit}>
          <h2>Please LogIn</h2>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error_label">{formik.errors.email}</div>
          ) : null}
          <input
            placeholder="Enger Your Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error_label">{formik.errors.password}</div>
          ) : null}
          {loading ? (
            <CircularProgress
              color="secondary"
              className="progress"
            ></CircularProgress>
          ) : (
            <button type="submit">Log In</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
