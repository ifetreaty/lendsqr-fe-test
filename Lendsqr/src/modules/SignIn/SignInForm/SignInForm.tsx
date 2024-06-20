import { useState } from "react";
import "./SignInForm.scss";
import { SignInSchema } from "../../../constants/validationConstants";
import { useFormik } from "formik";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (email === "test@example.com" && password === "Password12*") {
      toast.success("Login successful");
      navigate("/app/users");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="sign-in-form">
      <h3>Welcome!</h3>
      <p>Enter details to login.</p>
      <form onSubmit={formik.handleSubmit}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.email && formik.touched.email ? "error" : ""
            }
          />
          {formik.errors.email && formik.touched.email && (
            <span className="error-message">{formik.errors.email}</span>
          )}
        </div>
        <div className="input-group password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.password && formik.touched.password ? "error" : ""
            }
          />
          <span
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </span>
          {formik.errors.password && formik.touched.password && (
            <span className="error-message">{formik.errors.password}</span>
          )}
        </div>
        <p className="forgot-password">FORGOT PASSWORD?</p>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    </div>
  );
}
