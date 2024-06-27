import { FormProvider, useForm } from "react-hook-form";
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

  const submitCallback = async (data: LoginType) => {
    await dispatch(
      userThunks.loginUser({
        email: data.email,
        password: data.password,
      }),
    ).unwrap();

    navigate(routes.home);
    methods.reset();
  };

  return (
    <S.Wrapper>
      <S.Title>Login</S.Title>
      <FormProvider {...methods}>
        <AuthForm
          formType={"login"}
          submitButtonText={"Login"}
          link={routes.registration}
          linkText={"You don't have an account yet?"}
          submitCallback={submitCallback}
        />
      </FormProvider>
    </S.Wrapper>
  );
};
