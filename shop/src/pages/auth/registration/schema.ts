import * as yup from "yup";

export const registrationSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: yup
      .string()
      .required("Field is required")
      .min(6, "Password must be at least 6 characters long")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export type RegistrationType = yup.InferType<typeof registrationSchema>;
