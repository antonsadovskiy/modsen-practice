import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

import { CustomButton } from "@/components/custom-button";
import { LoginType, RegistrationType } from "@/types/schemas";

import S from "./styled";

type FormPropsType = {
  formType: "login" | "registration";
  isLoading: boolean;
  submitButtonText: string;
  linkText: string;
  link: string;
  onSubmit: (data: LoginType | RegistrationType) => void;
};

export const Form = ({
  formType,
  submitButtonText,
  isLoading,
  linkText,
  onSubmit,
  link,
}: FormPropsType) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useFormContext<LoginType & RegistrationType>();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                  placeholder={"Confirm password"}
                  {...field}
                  error={
                    errors.confirmPassword ? errors.confirmPassword.message : ""
                  }
                />
              )}
            />
          )}
        </S.Inputs>
        <S.Link>
          <Link to={link}>{linkText}</Link>
        </S.Link>
      </S.InputsWithLink>
      <S.ButtonContainer>
        <CustomButton isLoading={isLoading} fullWidth type={"submit"}>
          {submitButtonText}
        </CustomButton>
      </S.ButtonContainer>
    </S.Form>
  );
};
