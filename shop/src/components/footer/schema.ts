import * as yup from "yup";

export const getNewsLetterSchema = yup
  .object({
    email: yup.string().required("Email is required").email("Invalid email"),
  })
  .required();

export type GetNewsLetterType = yup.InferType<typeof getNewsLetterSchema>;
