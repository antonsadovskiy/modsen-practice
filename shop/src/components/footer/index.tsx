import { useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";

import ArrowRightSVG from "@/assets/svg/arrow-right.svg";
import { CircleLoader } from "@/components/circle-loader";
import {
  getNewsLetterSchema,
  GetNewsLetterType,
} from "@/components/footer/schema";
import { socialMedias } from "@/constants/socials";

import { footerLinks } from "./config";
import S from "./styled";

export const Footer = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<GetNewsLetterType>({
    resolver: yupResolver(getNewsLetterSchema),
    defaultValues: { email: "" },
    mode: "onSubmit",
  });

  const submitHandler: SubmitHandler<GetNewsLetterType> = async (data) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_GET_NEWS_LETTER_TEMPLATE_ID,
        {
          recipient: data.email,
        },
      );

      reset();
    } catch (e) {
      console.error(e);
    }
  };

  const onLinkClickHandler = (link: string) => {
    navigate(link);
  };
  const onBlurHandler = () => {
    clearErrors();
  };

  useEffect(() => emailjs.init(process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY), []);

  return (
    <S.Wrapper>
      <S.LinksAndInputContainer>
        <S.Links>
          {footerLinks.map((item, index) => (
            <S.FooterLink
              onClick={() => item.link && onLinkClickHandler(item.link)}
              $isClickable={!!item.link}
              key={index}
            >
              {item.label}
            </S.FooterLink>
          ))}
        </S.Links>
        <S.Form onSubmit={handleSubmit(submitHandler)}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true, onBlur: onBlurHandler }}
            render={({ field }) => (
              <S.FooterInput
                {...field}
                placeholder={"Give an email, get the news letter."}
                disabled={isSubmitting}
                iconButtonType={"submit"}
                endIcon={isSubmitting ? <CircleLoader /> : <ArrowRightSVG />}
                error={errors.email ? errors.email.message : ""}
              />
            )}
          />
        </S.Form>
      </S.LinksAndInputContainer>
      <S.CopyrightAndSocials>
        <S.Copyright>
          <span>© 2023 Shelly. </span>
          <S.Slim>Terms of use </S.Slim>
          <span>and </span>
          <S.Slim>privacy policy.</S.Slim>
        </S.Copyright>
        <S.Socials>
          {socialMedias.map((item, index) => (
            <S.SocialMediaIconButton
              target={"_blank"}
              href={item.link}
              key={index}
            >
              {<item.icon />}
            </S.SocialMediaIconButton>
          ))}
        </S.Socials>
      </S.CopyrightAndSocials>
    </S.Wrapper>
  );
};
