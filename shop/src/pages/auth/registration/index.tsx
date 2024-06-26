import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/form";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/store/hooks";
import { userThunks } from "@/store/slices/user";
import { registrationSchema, RegistrationType } from "@/types/schemas";

import S from "../styled";

export const RegistrationPage = () => {
  const methods = useForm<RegistrationType>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<RegistrationType> = useCallback(
    async (data) => {
      setIsLoading(true);

      try {
        await dispatch(
          userThunks.registerUser({
            email: data.email,
            password: data.password,
          }),
        ).unwrap();

        methods.reset();
        navigate(routes.login);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, navigate, methods],
  );

  return (
    <S.Wrapper>
      <S.Title>Registration</S.Title>
      <FormProvider {...methods}>
        <Form
          formType={"registration"}
          isLoading={isLoading}
          submitButtonText={"Register"}
          linkText={"You have an account already?"}
          link={routes.login}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </S.Wrapper>
  );
};
