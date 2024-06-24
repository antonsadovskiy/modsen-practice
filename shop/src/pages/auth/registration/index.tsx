import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { CustomButton } from "@/components/custom-button";
import { routes } from "@/constants/routes";
import { useAppDispatch } from "@/store/hooks";
import { userThunks } from "@/store/slices/user";
import { registrationSchema, RegistrationType } from "@/types/schemas";

import S from "../styled";

export const RegistrationPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegistrationType>({
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

        reset();
        navigate(routes.login);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, navigate, reset],
  );

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Registration</S.Title>
        <S.InputsWithLink>
          <S.Inputs>
            <Controller
              name={"email"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <S.FormInput
                  placeholder={"Email"}
                  {...field}
                  error={errors.email ? errors.email.message : ""}
                />
              )}
            />
            <Controller
              name={"password"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <S.FormInput
                  endIcon={
                    showPassword ? (
                      <S.OpenedEye height={20} width={20} />
                    ) : (
                      <S.ClosedEye height={20} width={20} />
                    )
                  }
                  onIconClick={() => setShowPassword(!showPassword)}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Password"}
                  {...field}
                  error={errors.password ? errors.password.message : ""}
                />
              )}
            />
            <Controller
              name={"confirmPassword"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <S.FormInput
                  endIcon={
                    showConfirmPassword ? (
                      <S.OpenedEye height={20} width={20} />
                    ) : (
                      <S.ClosedEye height={20} width={20} />
                    )
                  }
                  onIconClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={"Confirm password"}
                  {...field}
                  error={
                    errors.confirmPassword ? errors.confirmPassword.message : ""
                  }
                />
              )}
            />
          </S.Inputs>
          <S.Link>
            <Link to={routes.login}>You already have an account?</Link>
          </S.Link>
        </S.InputsWithLink>
        <S.ButtonContainer>
          <CustomButton isLoading={isLoading} fullWidth type={"submit"}>
            Register
          </CustomButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
