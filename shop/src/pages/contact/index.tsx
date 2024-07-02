import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";

import { CustomButton } from "@/components/custom-button";
import { CustomTextarea } from "@/components/custom-textarea";

import { contactUsSchema, ContactUsType } from "./schema";
import S from "./styled";

export const ContactUsPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactUsType>({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      email: "",
      subject: "",
      lastName: "",
      message: "",
      firstName: "",
    },
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<ContactUsType> = async (data) => {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_CONTACT_US_TEMPLATE_ID,
        {
          recipient: data.email,
          ...data,
        },
      );
      reset();
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <S.Title>Contact Us</S.Title>
        <S.Subtitle>
          Say Hello send us your thoughts about our products or share <br />{" "}
          your ideas with our Team!
        </S.Subtitle>
      </S.TitleContainer>
      <S.FormFields data-cy={"contact-form"} onSubmit={handleSubmit(onSubmit)}>
        <S.Inputs>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.FormInput
                data-cy={"first-name-input"}
                placeholder={"First name"}
                {...field}
                error={errors.firstName ? errors.firstName.message : ""}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.FormInput
                data-cy={"last-name-input"}
                placeholder={"Last name"}
                {...field}
                error={errors.lastName ? errors.lastName.message : ""}
              />
            )}
          />
        </S.Inputs>
        <S.Inputs>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.FormInput
                data-cy={"email-input"}
                placeholder={"Email"}
                {...field}
                error={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <Controller
            name="subject"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <S.FormInput
                data-cy={"subject-input"}
                placeholder={"Subject"}
                {...field}
                error={errors.subject ? errors.subject.message : ""}
              />
            )}
          />
        </S.Inputs>
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomTextarea
              data-cy={"message-input"}
              placeholder={"Message"}
              {...field}
              error={errors.message ? errors.message.message : ""}
            />
          )}
        />
        <S.ButtonContainer>
          <CustomButton isLoading={isSending} type={"submit"}>
            Send
          </CustomButton>
        </S.ButtonContainer>
      </S.FormFields>
    </S.Wrapper>
  );
};
