import React, { useState } from "react";
import { CircularProgress } from "@mui/material";

import { Redirect } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";

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
      console.log(values);
    },
  });

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
