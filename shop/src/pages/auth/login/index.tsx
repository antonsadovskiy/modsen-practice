import { FormProvider, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import { Typography } from "antd";

import { AuthForm } from "@/components/auth-form";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useToast } from "@/hooks/useToast";
import { selectorIsLoggedIn, userThunks } from "@/store/slices/user";

import S from "../styled";

import { loginSchema, LoginType } from "./schema";

export const LoginPage = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  const methods = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "test",
      password: "123",
    },
  });
  const toast = useToast();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const submitCallback = async (data: LoginType) => {
    await dispatch(
      userThunks.loginUser({
        email: data.email,
        password: data.password,
      }),
    ).unwrap();

    toast.success("Login successful");
    navigate(routes.home);
    methods.reset();
  };

  if (isLoggedIn) {
    return <Navigate to={routes.home} />;
  }

  return (
    <S.Wrapper>
      <Typography.Title level={4}>Авторизация</Typography.Title>
      <FormProvider {...methods}>
        <AuthForm
          formType={"login"}
          submitButtonText={"Войти"}
          link={routes.registration}
          linkText={"Еще не зарегистрированы?"}
          submitCallback={submitCallback}
        />
      </FormProvider>
    </S.Wrapper>
  );
};
