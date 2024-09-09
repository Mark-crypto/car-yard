import React from "react";
import { useFormik } from "formik";

export const Test = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      let errors = {};
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Username</label>
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
