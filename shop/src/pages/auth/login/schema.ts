import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters long"),
  })
  .required();

export type LoginType = yup.InferType<typeof loginSchema>;
