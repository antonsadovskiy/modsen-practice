import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Form } from "@/components/form";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/store/hooks";
import { userThunks } from "@/store/slices/user";
import { loginSchema, LoginType } from "@/types/schemas";

import S from "../styled";

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
        <Form
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
