import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().required("Fill the email").min(5, "Need a longer email"),
  password: yup.string().required("Fill the password").min(8).max(12),
});
export function EmpLoginForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <br />
      <h2>Welcome to Employee Login Form</h2>
      <br />
      <input
        value={formik.values.email}
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="email"
      />
      <br />

      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <br />
      <input
        value={formik.values.password}
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
