import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email Address is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .max(60, "Password cannot exceed 60 characters")
    .test(
      "uppercase",
      "Password must include at least one uppercase letter",
      (value) => !!value && /[A-Z]/.test(value)
    )
    .test(
      "lowercase",
      "Password must include at least one lowercase letter",
      (value) => !!value && /[a-z]/.test(value)
    )
    .test(
      "specialCharacters",
      "Password must include at least one special character",
      (value) => !!value && /[!@#$%^&*()\-=_+[\]{}|\\;:'",.<>/?]/.test(value)
    )
    .test(
      "number",
      "Password must include at least one number",
      (value) => !!value && /\d/.test(value)
    )
    .test(
      "9jaPay",
      "Password must not include 'lensqr'",
      (value) => !!value && !/9jaPay/i.test(value)
    )
    .required("Password is required"),
});
