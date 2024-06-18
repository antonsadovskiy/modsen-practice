import * as yup from "yup";

export const contactUsSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required").email("Invalid email"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  })
  .required();
export type ContactUsType = yup.InferType<typeof contactUsSchema>;

export const loginSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
  })
  .required();
export type LoginType = yup.InferType<typeof loginSchema>;

export const registrationSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Field is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();
export type RegistrationType = yup.InferType<typeof registrationSchema>;
