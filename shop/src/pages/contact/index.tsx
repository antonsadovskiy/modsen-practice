import {
  ButtonContainer,
  FormFields,
  FormInput,
  Inputs,
  Subtitle,
  Title,
  TitleContainer,
  Wrapper,
} from "@/pages/contact/styled";
import { useCallback, useState } from "react";
import { CustomButton } from "@/components/custom-button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactUsSchema, ContactUsType } from "@/types/schemas";
import { CustomTextarea } from "@/components/custom-textarea";
import emailjs from "@emailjs/browser";

export const ContactUsPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactUsType>({
    resolver: yupResolver(contactUsSchema),
  });

  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<ContactUsType> = useCallback(async (data) => {
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
    } catch (e) {
      console.error(e);
    } finally {
      setIsSending(false);
    }
  }, []);

  return (
    <Wrapper>
      <TitleContainer>
        <Title>Contact Us</Title>
        <Subtitle>
          Say Hello send us your thoughts about our products or share <br />{" "}
          your ideas with our Team!
        </Subtitle>
      </TitleContainer>
      <FormFields onSubmit={handleSubmit(onSubmit)}>
        <Inputs>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
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
              <FormInput
                placeholder={"Last name"}
                {...field}
                error={errors.lastName ? errors.lastName.message : ""}
              />
            )}
          />
        </Inputs>
        <Inputs>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <FormInput
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
              <FormInput
                placeholder={"Subject"}
                {...field}
                error={errors.subject ? errors.subject.message : ""}
              />
            )}
          />
        </Inputs>
        <Controller
          name="message"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <CustomTextarea
              placeholder={"Message"}
              {...field}
              error={errors.message ? errors.message.message : ""}
            />
          )}
        />
        <ButtonContainer>
          <CustomButton isLoading={isSending} type={"submit"}>
            Send
          </CustomButton>
        </ButtonContainer>
      </FormFields>
    </Wrapper>
  );
};
