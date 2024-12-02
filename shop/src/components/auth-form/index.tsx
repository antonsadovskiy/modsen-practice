import { memo } from "react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

import { Button, TextField } from "@mui/material";

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
      formState: { errors },
    } = useFormContext<LoginType & RegistrationType>();

    const toast = useToast();

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
                <TextField
                  {...field}
                  error={!!errors.email}
                  label={"Email"}
                  helperText={errors?.email?.message}
                />
              )}
            />
            <Controller
              name={"password"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  data-cy={"password-input"}
                  {...field}
                  type={"password"}
                  error={!!errors.password}
                  label={"Password"}
                  helperText={errors?.password?.message}
                />
              )}
            />
            {formType === "registration" && (
              <Controller
                name={"confirmPassword"}
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type={"password"}
                    error={!!errors.confirmPassword}
                    label={"Confirm password"}
                    helperText={errors?.confirmPassword?.message}
                  />
                )}
              />
            )}
          </S.Inputs>
          <S.Link>
            <Link data-cy={"auth-link"} to={link}>
              {linkText}
            </Link>
          </S.Link>
        </S.InputsWithLink>
        <S.ButtonContainer>
          <Button variant={"contained"} fullWidth type={"submit"}>
            {submitButtonText}
          </Button>
        </S.ButtonContainer>
      </S.Form>
    );
  },
);

AuthForm.displayName = "AuthForm";

export { AuthForm };
