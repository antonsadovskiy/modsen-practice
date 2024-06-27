import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { AuthForm } from "@/components/auth-form";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/hooks";
import { userThunks } from "@/store/slices/user";

import S from "../styled";

import { loginSchema, LoginType } from "./schema";

export const LoginPage = () => {
  const methods = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginType> = useCallback(
    async (data) => {
      setIsLoading(true);

      try {
        await dispatch(
          userThunks.loginUser({
            email: data.email,
            password: data.password,
          }),
        ).unwrap();

        navigate(routes.home);
        methods.reset();
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
      <S.Title>Login</S.Title>
      <FormProvider {...methods}>
        <AuthForm
          formType={"login"}
          submitButtonText={"Login"}
          isLoading={isLoading}
          link={routes.registration}
          linkText={"You don't have an account yet?"}
          onSubmit={onSubmit}
        />
      </FormProvider>
    </S.Wrapper>
  );
};
