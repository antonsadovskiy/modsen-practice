import * as yup from "yup";

export const loginSchema = yup
  .object({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(3, "Password must be at least 3 characters long"),
  })
  .required();

export type LoginType = yup.InferType<typeof loginSchema>;
