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
