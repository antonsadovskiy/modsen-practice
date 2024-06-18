import S from "../styled";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, LoginType } from "@/types/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useState } from "react";
import { CustomButton } from "@/components/custom-button";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/constants/routes";
import OpenedEyeSVG from "@/assets/svg/opened-eye.svg";
import ClosedEyeSVG from "@/assets/svg/closed-eye.svg";
import { useAppDispatch } from "@/store/hooks";
import { appActions } from "@/store/slices/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginType> = useCallback(
    async (data) => {
      const auth = getAuth();
      setIsLoading(true);
      try {
        const userData = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password,
        );
        dispatch(appActions.setIsLoggedIn());
        dispatch(
          appActions.setUser({
            email: userData.user.email,
            id: userData.user.uid,
          }),
        );
        navigate(routes.home);
        reset();
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
        <S.Title>Login</S.Title>
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
          </S.Inputs>
          <S.Link>
            <Link
              to={routes.registration}
            >{`You don't have an account yet?`}</Link>
          </S.Link>
        </S.InputsWithLink>
        <S.ButtonContainer>
          <CustomButton isLoading={isLoading} fullWidth type={"submit"}>
            Login
          </CustomButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
