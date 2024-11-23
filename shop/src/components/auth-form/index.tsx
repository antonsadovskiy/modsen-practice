import { memo, useState } from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, Typography } from "antd";

import { useToast } from "@/hooks/useToast";
import { LoginType } from "@/pages/auth/login/schema";
import { RegistrationType } from "@/pages/auth/registration/schema";

import S from "./styled";

type FormPropsType = {
  formType: "login" | "registration";
  submitButtonText: string;
  linkText: string;
  link: string;
  submitCallback: (data: LoginType | RegistrationType) => Promise<void>;
};

const AuthForm = memo(
  ({
    formType,
    submitButtonText,
    linkText,
    link,
    submitCallback,
  }: FormPropsType) => {
    const {
      reset,
      handleSubmit,
      control,
      formState: { errors, isSubmitting },
    } = useFormContext<LoginType & RegistrationType>();

    const toast = useToast();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit: SubmitHandler<LoginType | RegistrationType> = async (
      data,
    ) => {
      try {
        await submitCallback(data);

        reset();
      } catch (e) {
        toast.error("Failed to submit form, please try again later.");
      }
    };

    return (
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputsWithLink>
          <S.Inputs>
            <Controller
              name={"email"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <S.FormInput
                  data-cy={"email-input"}
                  placeholder={"Почта"}
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
                  data-cy={"password-input"}
                  endIcon={
                    showPassword ? (
                      <S.OpenedEye height={20} width={20} />
                    ) : (
                      <S.ClosedEye height={20} width={20} />
                    )
                  }
                  onIconClick={() => setShowPassword(!showPassword)}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Пароль"}
                  {...field}
                  error={errors.password ? errors.password.message : ""}
                />
              )}
            />
            {formType === "registration" && (
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
                    placeholder={"Повторите пароль"}
                    {...field}
                    error={
                      errors.confirmPassword
                        ? errors.confirmPassword.message
                        : ""
                    }
                  />
                )}
              />
            )}
          </S.Inputs>
          <S.Link>
            <Link data-cy={"auth-link"} to={link}>
              <Typography.Text>{linkText}</Typography.Text>
            </Link>
          </S.Link>
        </S.InputsWithLink>
        <S.ButtonContainer>
          <Button
            style={{ width: "100%" }}
            loading={isSubmitting}
            htmlType={"submit"}
          >
            {submitButtonText}
          </Button>
        </S.ButtonContainer>
      </S.Form>
    );
  },
);

AuthForm.displayName = "AuthForm";

export { AuthForm };
