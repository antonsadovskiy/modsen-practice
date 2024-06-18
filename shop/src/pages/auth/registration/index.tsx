import S from "../styled";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { registrationSchema, RegistrationType } from "@/types/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { CustomButton } from "@/components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import OpenedEyeSVG from "@/assets/svg/opened-eye.svg";
import ClosedEyeSVG from "@/assets/svg/closed-eye.svg";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit: SubmitHandler<RegistrationType> = useCallback(
    async (data) => {
      const auth = getAuth();
      setIsLoading(true);

      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        reset();
        navigate(routes.login);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    },
    [navigate, reset],
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
                      <OpenedEyeSVG height={20} width={20} />
                    ) : (
                      <ClosedEyeSVG height={20} width={20} />
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
                      <OpenedEyeSVG height={20} width={20} />
                    ) : (
                      <ClosedEyeSVG height={20} width={20} />
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
