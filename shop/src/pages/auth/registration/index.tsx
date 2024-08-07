import { FormProvider, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { AuthForm } from "@/components/auth-form";
import { routes } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useToast } from "@/hooks/useToast";
import { selectorIsLoggedIn, userThunks } from "@/store/slices/user";

import S from "../styled";

import { registrationSchema, RegistrationType } from "./schema";

export const RegistrationPage = () => {
  const isLoggedIn = useAppSelector(selectorIsLoggedIn);

  const methods = useForm<RegistrationType>({
    resolver: yupResolver(registrationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const toast = useToast();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const submitCallback = async (data: RegistrationType) => {
    await dispatch(
      userThunks.registerUser({
        email: data.email,
        password: data.password,
      }),
    ).unwrap();

    toast.success("Registration successful");
    methods.reset();
    navigate(routes.login);
  };

  if (isLoggedIn) {
    return <Navigate to={routes.home} />;
  }

  return (
    <S.Wrapper>
      <S.Title>Registration</S.Title>
      <FormProvider {...methods}>
        <AuthForm
          formType={"registration"}
          submitButtonText={"Register"}
          linkText={"You have an account already?"}
          link={routes.login}
          submitCallback={submitCallback}
        />
      </FormProvider>
    </S.Wrapper>
  );
};
