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

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginType> = useCallback(
    (data) => {
      console.log(data);
      dispatch(appActions.setIsLoggedIn());
      navigate(routes.home);
      reset();
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
          <CustomButton fullWidth type={"submit"}>
            Login
          </CustomButton>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};
